import Image from "next/image";
import type { Member } from "@/lib/members";

/**
 * Neutral stand-in for a missing headshot. Deliberately a flat silhouette in a
 * muted palette tone rather than a stock or generated face — an empty slot
 * should read as unfinished, not as a person.
 */
function Silhouette() {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="h-1/2 w-1/2 text-ink/25"
      fill="currentColor"
    >
      <circle cx="32" cy="23" r="11" />
      <path d="M32 38c-11 0-20 7.6-20 17v9h40v-9c0-9.4-9-17-20-17Z" />
    </svg>
  );
}

export default function MemberGrid({ members }: { members: Member[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5">
      {members.map((m, i) => (
        <li key={i}>
          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-ink/10">
            {m.image ? (
              <Image
                src={m.image}
                alt={m.name || "Team member"}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                className="object-cover"
              />
            ) : (
              <Silhouette />
            )}
          </div>
          {/* Blank fields fall back to obviously-placeholder labels rather than
              invented names. */}
          <p
            className={`mt-3 font-display text-lg uppercase leading-tight ${
              m.name ? "text-ink" : "text-ink/40"
            }`}
          >
            {m.name || "Member Name"}
          </p>
          <p
            className={`font-label font-light text-sm ${
              m.role || m.subteam ? "text-ink/70" : "text-ink/40"
            }`}
          >
            {m.subteam || m.role
              ? [m.subteam, m.role].filter(Boolean).join(" · ")
              : "Subteam · Role"}
          </p>
        </li>
      ))}
    </ul>
  );
}
