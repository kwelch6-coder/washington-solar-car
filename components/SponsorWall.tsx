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
          <div className="relative h-12 w-full sm:h-14 lg:h-16">
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 28vw, 45vw"
              className="object-contain"
              style={{
                filter: "brightness(0) invert(1)",
                transform: sponsor.scale ? `scale(${sponsor.scale})` : undefined,
              }}
            />
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
