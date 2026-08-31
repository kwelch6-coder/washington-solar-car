"use client";

import { useState } from "react";
import type { TimelineEntry } from "@/lib/data";

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const [active, setActive] = useState(0);
  const current = entries[active];

  return (
    <div>
      <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-4">
        <span className="font-label font-light text-xs uppercase tracking-widest text-ink/40 shrink-0">
          Start
        </span>
        {entries.map((entry, i) => (
          <div key={entry.year} className="flex items-center gap-2 sm:gap-4 shrink-0">
            <span className="text-ink/30">&mdash;</span>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`font-display text-xl sm:text-2xl tracking-wide px-3 py-1 border-2 transition-colors ${
                active === i
                  ? "bg-accent border-accent text-cream"
                  : "border-transparent text-ink/50 hover:text-ink"
              }`}
            >
              {entry.year}
            </button>
          </div>
        ))}
        <span className="text-ink/30">&mdash;</span>
        <span className="font-label font-light text-xs uppercase tracking-widest text-ink/40 shrink-0">
          Now
        </span>
      </div>

      <div key={current.year} className="mt-8 text-center max-w-2xl mx-auto">
        <h3 className="font-display text-3xl sm:text-4xl uppercase text-accent">
          {current.title}
        </h3>
        <p className="mt-3 text-lg text-ink/80">{current.description}</p>
      </div>
    </div>
  );
}
