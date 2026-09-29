export default function StatStrip({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-cream/15">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`px-5 py-8 text-center sm:border-l border-cream/15 ${
              i === 0 ? "sm:border-l-0" : ""
            }`}
          >
            <div className="font-display text-4xl sm:text-5xl text-accent-light tabular-nums">
              {item.value}
            </div>
            <div className="mt-1 font-label font-light text-xs sm:text-sm uppercase tracking-widest text-cream/70">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
