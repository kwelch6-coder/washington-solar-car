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
    <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-12 sm:gap-x-12 sm:gap-y-14 lg:gap-x-14">
      {sponsors.map((sponsor) => {
        const logo = (
          /* Two boxes on purpose. The outer one is the row: every cell is the
             same height, which is what keeps the grid even. The inner one is
             the optical adjustment — its height is a fraction of the row, and
             object-contain sizes the artwork inside it. Because the inner box
             is never wider than the cell and never taller than the row, no
             amount of tuning can push a logo into its neighbour. */
          <div className="flex h-[70px] w-full items-center justify-center sm:h-[82px] lg:h-[93px]">
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
                  // Omitted where the filter would destroy the logo — see
                  // `keepColor` in lib/sponsors.ts.
                  filter: sponsor.keepColor
                    ? undefined
                    : "brightness(0) invert(1)",
                }}
              />
            </div>
          </div>
        );

        return (
          <li
            key={sponsor.name}
            className="flex basis-[calc((100%_-_2rem)/2)] items-center justify-center sm:basis-[calc((100%_-_6rem)/3)] lg:basis-[calc((100%_-_10.5rem)/4)]"
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
