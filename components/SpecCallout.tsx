import type { SpecCallout } from "@/lib/data";

export default function SpecCallouts({ specs }: { specs: SpecCallout[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ink">
      {specs.map((spec, i) => (
        <div
          key={spec.label}
          className={`px-6 py-8 ${
            i % 2 === 0 ? "bg-cream text-ink" : "bg-accent text-cream"
          }`}
        >
          <div className="font-label font-light text-xs uppercase tracking-widest opacity-70">
            {spec.label}
          </div>
          <div className="font-display text-4xl mt-2 tabular-nums">{spec.value}</div>
          <p className="mt-3 text-sm leading-snug opacity-90">{spec.detail}</p>
        </div>
      ))}
    </div>
  );
}
