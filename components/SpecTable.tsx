import type { SpecGroup } from "@/lib/data";

/**
 * The full published specification. A definition list rather than a table:
 * these are label/value pairs, not a grid of comparable rows, and the semantics
 * survive the two-column-to-one-column collapse on narrow screens.
 */
export default function SpecTable({ groups }: { groups: SpecGroup[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
      {groups.map((g) => (
        <section key={g.group}>
          <h3 className="font-display text-xl sm:text-2xl uppercase text-accent border-b-2 border-ink pb-2 mb-1">
            {g.group}
          </h3>
          <dl>
            {g.rows.map((row) => (
              <div
                key={row.label}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink/15 py-2.5"
              >
                <dt className="font-label font-light text-xs uppercase tracking-widest text-ink/60">
                  {row.label}
                </dt>
                <dd className="text-ink text-right tabular-nums">{row.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
