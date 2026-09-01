/**
 * Persistent marker so it is never ambiguous which copy of the site is on
 * screen. Deliberately small and parked in a corner rather than in the layout
 * flow, so it cannot shift anything it sits over.
 */
export default function LabBadge() {
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 z-[60] bg-accent px-2.5 py-1 font-label text-[10px] uppercase tracking-[0.2em] text-cream">
      Lab
    </div>
  );
}
