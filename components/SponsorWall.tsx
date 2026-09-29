import Image from "next/image";
import { sponsors } from "@/lib/sponsors";
import { external } from "@/lib/site";

/**
 * Sponsor logos as a single unified set.
 *
 * `brightness(0) invert(1)` flattens each logo to solid white while keeping
 * its alpha, so the wall reads as one set instead of a patchwork of brand
 * colors. It is non-destructive — the source files are untouched, and deleting
 * the filter line restores full color.
 *
 * Flex-wrap rather than grid: when the last row is short, `justify-center`
 * centers it. A CSS grid would leave it flush left.
 */
export default function SponsorWall() {
  return (
    /* Row height and column width both live in custom properties, so a
       featured logo can multiply them without restating the breakpoints.

       Both are needed. Growing only the row does nothing for a logo that is
       already as wide as its cell: the STF mark is a 3.4:1 wordmark, so at the
       standard cell width it is width-limited, and a 1.65x taller row moved it
       from 210x61 to 220x64 — a 5% change nobody would notice. The cell has to
       grow with the row for the artwork to actually scale. */
    <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-12 sm:gap-x-12 sm:gap-y-14 lg:gap-x-14 [--wall-row:70px] sm:[--wall-row:82px] lg:[--wall-row:93px] [--wall-col:calc((100%_-_2rem)/2)] sm:[--wall-col:calc((100%_-_6rem)/3)] lg:[--wall-col:calc((100%_-_10.5rem)/4)]">
      {sponsors.map((sponsor) => {
        const logo = (
          /* Two boxes on purpose. The outer one is the row: every cell is the
             same height, which is what keeps the grid even. The inner one is
             the optical adjustment — its height is a fraction of the row, and
             object-contain sizes the artwork inside it. Because the inner box
             is never wider than the cell and never taller than the row, no
             amount of tuning can push a logo into its neighbour.

             The row height is --wall-row times the logo's emphasis, so a
             featured logo grows its own cell and stays in the same flex flow
             rather than needing a row of its own. The vertical gap is 48px+,
             which absorbs the extra height without crowding. */
          <div
            className="flex w-full items-center justify-center"
            style={{ height: `calc(var(--wall-row) * ${sponsor.emphasis ?? 1})` }}
          >
            <div
              className="relative w-full"
              style={{ height: `${(sponsor.scale ?? 1) * 100}%` }}
            >
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 28vw, 45vw"
                className="object-contain"
                style={{
                  // Only "filter" logos get whitened here. "converted" files
                  // are already white and "original" ones must keep their
                  // colours, so neither is filtered — see `treatment`.
                  filter:
                    (sponsor.treatment ?? "filter") === "filter"
                      ? "brightness(0) invert(1)"
                      : undefined,
                }}
              />
            </div>
          </div>
        );

        return (
          <li
            key={sponsor.name}
            className="flex items-center justify-center"
            style={{
              flexBasis: `calc(var(--wall-col) * ${sponsor.emphasis ?? 1})`,
            }}
          >
            {sponsor.url ? (
              <a
                href={sponsor.url}
                {...external}
                aria-label={sponsor.name}
                /* Opacity only. No scale, no movement. */
                className="block w-full opacity-90 transition-opacity hover:opacity-100"
              >
                {logo}
              </a>
            ) : (
              logo
            )}
          </li>
        );
      })}
    </ul>
  );
}
