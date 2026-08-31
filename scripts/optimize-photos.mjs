// One-time asset prep: shrinks the raw race photos (10-29MB each) down to a
// web-sane size so next/image isn't re-deriving every breakpoint from a
// 20MB+ source on every request. Originals in edited_photos/ are untouched.
//
// Photos are keyed to a car by which folder they live in:
//   edited_photos/*.jpg          -> Sakura, the 2026 car  -> public/images/sakura
//   edited_photos/sockeye/*.jpg  -> Sockeye, the 2025 car -> public/images/sockeye
// Drop Sockeye shots into the subfolder and re-run; the sockeye manifest in
// lib/photos.ts picks them up with no other changes needed.
import sharp from "sharp";
import { mkdir, readdir, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "edited_photos");
const IMAGES_DIR = path.join(ROOT, "public", "images");
const SOCKEYE_SUBDIR = "sockeye";
const MAX_WIDTH = 2400;
const QUALITY = 82;

async function optimizeInto(srcDir, outDir, label) {
  let entries;
  try {
    entries = await readdir(srcDir, { withFileTypes: true });
  } catch {
    console.log(`skipped ${label}: ${path.relative(ROOT, srcDir)} not found`);
    return 0;
  }

  const files = entries
    .filter((e) => e.isFile() && /\.jpe?g$/i.test(e.name))
    .map((e) => e.name);

  if (files.length === 0) {
    console.log(`skipped ${label}: no photos in ${path.relative(ROOT, srcDir)}`);
    return 0;
  }

  await mkdir(outDir, { recursive: true });

  for (const file of files) {
    await sharp(path.join(srcDir, file))
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(path.join(outDir, file.toLowerCase()));
    console.log(`  ${label}: ${file}`);
  }

  return files.length;
}

async function main() {
  const sakura = await optimizeInto(
    SRC_DIR,
    path.join(IMAGES_DIR, "sakura"),
    "sakura"
  );
  const sockeye = await optimizeInto(
    path.join(SRC_DIR, SOCKEYE_SUBDIR),
    path.join(IMAGES_DIR, SOCKEYE_SUBDIR),
    "sockeye"
  );

  await mkdir(path.join(ROOT, "public"), { recursive: true });
  await copyFile(
    path.join(ROOT, "main-logo-black.png"),
    path.join(ROOT, "public", "main-logo-black.png")
  );
  await copyFile(
    path.join(ROOT, "Main-logo-white.png"),
    path.join(ROOT, "public", "Main-logo-white.png")
  );

  console.log(
    `done: ${sakura} sakura + ${sockeye} sockeye photos optimized, logos copied`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
