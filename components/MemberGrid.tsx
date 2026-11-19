import Image from "next/image";
import type { Member } from "@/lib/members";

/**
 * The roster grid: a square photo with the name directly under it, and
 * nothing else. No roles, no subteams, no bios, no cards or borders — the
 * photo and its label sit straight on the page background, so 59 of them read
 * as a list of people rather than 59 things competing to be clicked.
 *
 * The name labels the photo rather than competing with it, which is why it
 * sits under the image in the body face at a regular weight: small, quiet,
 * and off the face. Setting it over the photo would mean a scrim to keep it
 * legible, and a scrim would dim all 59 headshots to caption 47 of them.
 *
 * Column counts climb 2 / 3 / 4 / 5 / 6. Two on a phone is the floor and the
 * ceiling: a third column at 375px leaves faces too small to recognise, which
 * is the only thing this grid is for.
 *
 * A short final row is left short. Stretching the last cells or centring them
 * would make the grid's shape depend on how many people are on the team.
 */
export default function MemberGrid({ members }: { members: Member[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 sm:gap-x-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {members.map((m) => (
        <li key={m.photo}>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={m.photo}
              /* Named photos are labelled with the person. The rest get a
                 neutral fallback — the filename carried no name, and a
                 guess in alt text is still a guess. */
              alt={m.name || "Team member"}
              fill
              /* Every cell is well below the fold — the roster sits under
                 four full sections — so none of the 59 is worth blocking
                 first paint for. */
              loading="lazy"
              sizes="(min-width: 1280px) 190px, (min-width: 1024px) 19vw, (min-width: 768px) 23vw, (min-width: 640px) 31vw, 46vw"
              className="object-cover"
            />
          </div>
          {/* The caption line is rendered whether or not there is a name to
              put in it. An unnamed cell keeps the same height as a named one,
              so the baseline stays level across a row and the bottom of the
              grid doesn't go ragged. The non-breaking space is what holds the
              line open; it is hidden from assistive tech, which should find
              an unlabelled photo here, not a blank line announced as content. */}
          <p
            className="mt-2.5 text-sm font-normal leading-snug text-ink/80"
            aria-hidden={m.name ? undefined : true}
          >
            {m.name || " "}
          </p>
        </li>
      ))}
    </ul>
  );
}
