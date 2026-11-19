// Asset prep for the Team page roster grid. Same convention as
// optimize-photos.mjs: originals stay local and gitignored, the served
// derivatives land in public/ and ARE committed.
//
//   headshots/*.jpg  ->  public/members/<slug>.jpg
//
// The originals average ~2.8MB and run to 11.5MB, so the grid would pull
// ~160MB of images unprocessed. Each is scaled to 600x600 — a ~300px cell at
// 2x — and recompressed, which brings the set under 3MB.
//
// SCALE ONLY, NO CROP. The headshots arrived square and consistently framed
// from a single session, so there is nothing to re-frame: cropping them would
// shift compositions the photographer already settled. A source that is not
// square is reported and skipped rather than trimmed to fit, so a framing
// decision never happens silently here.
//
// One documented exception, LUCA_EXCEPTION below: a landscape race photo that
// cannot enter a square grid without a crop.
import sharp from "sharp";
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "headshots");
const OUT_DIR = path.join(ROOT, "public", "members");

const EDGE = 600;
const QUALITY = 80;

/**
 * The only photo not from the headshot session: 6000x4000, shot outdoors at
 * the race. It needs a crop to become square, so the crop is written down
 * here rather than inferred.
 *
 * Takes the full 4000px frame height and the middle 4000px of its width
 * (left: 1000). His face sits at roughly 49% across the original, which a
 * centred crop lands on at ~48.5% — comfortably within the frame, no
 * horizontal nudge needed. No vertical offset: the full height is already the
 * square's height.
 *
 * This fixes the shape only. It will still read as an outdoor race photo
 * beside 58 studio headshots; lighting and background are not ours to match.
 */
const LUCA_EXCEPTION = {
  file: "Luca Rhys-Jones.jpg",
  expect: { width: 6000, height: 4000 },
  crop: { left: 1000, top: 0, width: 4000, height: 4000 },
};

/** "Albert (Yi) Lu.jpg" -> "albert-lu". Parenthetical dropped, see lib/members.ts. */
export function slugFor(displayName) {
  return displayName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Strips the extension and any "(Nick)"-style parenthetical. */
export function displayNameFor(file) {
  return file
    .replace(/\.jpe?g$/i, "")
    .replace(/\s*\([^)]*\)\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function main() {
  const entries = await readdir(SRC_DIR, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile() && /\.jpe?g$/i.test(e.name))
    .map((e) => e.name)
    .sort();

  if (files.length === 0) {
    console.error(`no photos in ${path.relative(ROOT, SRC_DIR)}`);
    process.exit(1);
  }

  await mkdir(OUT_DIR, { recursive: true });

  let bytesBefore = 0;
  let bytesAfter = 0;
  let scaled = 0;
  let cropped = 0;
  const skipped = [];
  let largest = { name: null, bytes: 0 };

  for (const file of files) {
    const srcPath = path.join(SRC_DIR, file);
    bytesBefore += (await stat(srcPath)).size;

    const meta = await sharp(srcPath).metadata();
    const isLuca = file === LUCA_EXCEPTION.file;

    // Anything non-square that is not the one known exception is a framing
    // question for a human, not a crop for this script to guess at.
    if (meta.width !== meta.height && !isLuca) {
      skipped.push(`${file} (${meta.width}x${meta.height}, not square)`);
      continue;
    }

    let pipeline = sharp(srcPath).rotate();

    if (isLuca) {
      const { expect, crop } = LUCA_EXCEPTION;
      if (meta.width !== expect.width || meta.height !== expect.height) {
        skipped.push(
          `${file} (${meta.width}x${meta.height}, expected ` +
            `${expect.width}x${expect.height} — crop box no longer valid)`
        );
        continue;
      }
      pipeline = pipeline.extract(crop);
      cropped += 1;
    } else {
      scaled += 1;
    }

    // fit "fill" is a pure scale: it cannot crop. Safe because every input
    // reaching here is square (or has just been cropped square), so there is
    // no aspect mismatch for it to distort.
    const outName = `${slugFor(displayNameFor(file))}.jpg`;
    const outPath = path.join(OUT_DIR, outName);
    await pipeline
      .resize(EDGE, EDGE, { fit: "fill" })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(outPath);

    const outBytes = (await stat(outPath)).size;
    bytesAfter += outBytes;
    if (outBytes > largest.bytes) largest = { name: outName, bytes: outBytes };
  }

  const mb = (b) => `${(b / 1048576).toFixed(1)} MB`;
  const kb = (b) => `${(b / 1024).toFixed(0)} KB`;
  const written = scaled + cropped;

  console.log(`\nwrote ${written} images to ${path.relative(ROOT, OUT_DIR)}/`);
  console.log(`  scaled only (no crop): ${scaled}`);
  console.log(`  cropped to square:     ${cropped}` + (cropped ? ` (${LUCA_EXCEPTION.file})` : ""));
  console.log(`\n  before: ${mb(bytesBefore)}`);
  console.log(`  after:  ${mb(bytesAfter)}`);
  console.log(
    `  saved:  ${mb(bytesBefore - bytesAfter)} ` +
      `(${(100 - (bytesAfter / bytesBefore) * 100).toFixed(1)}% smaller)`
  );
  console.log(`  mean:   ${kb(bytesAfter / written)}/file`);
  console.log(`  largest:${kb(largest.bytes)} (${largest.name})`);

  if (skipped.length) {
    console.log(`\nSKIPPED ${skipped.length} — needs a look before it ships:`);
    skipped.forEach((s) => console.log(`  ${s}`));
    process.exitCode = 1;
  }
  console.log("");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
