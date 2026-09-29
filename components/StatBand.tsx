import type { BigNumber } from "@/lib/data";

/**
 * The verified-numbers band. One number per cell, large type, label beneath.
 * Groups are a legibility device only — every figure carries equal authority.
 */
export default function StatBand({
  groups,
}: {
  groups: { group: string; items: BigNumber[] }[];
}) {
  return (
    <div className="space-y-12">
      {groups.map((g) => (
        <div key={g.group}>
          <h3 className="font-label font-light text-xs uppercase tracking-[0.3em] text-accent-light mb-6">
            {g.group}
          </h3>
          {/* Values are set with tabular figures so the columns line up even
              though the strings differ wildly in length (58:41:43 vs 3). */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-cream/15">
            {g.items.map((item) => (
              <div key={item.label} className="bg-ink px-4 py-6">
                <div className="font-display text-3xl sm:text-4xl text-cream tabular-nums leading-none">
                  {item.value}
                </div>
                <div className="mt-2 font-label font-light text-xs uppercase tracking-wider text-cream/60 leading-snug">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
