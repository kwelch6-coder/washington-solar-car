// Six short rays on a 60° step, starting at top dead centre. Drawn from a fixed
// radius so the set shares the SVG centre and can retract inward as one group.
const RAYS = Array.from({ length: 6 }, (_, i) => {
  const angle = (-90 + i * 60) * (Math.PI / 180);
  return {
    x1: 12 + 7.25 * Math.cos(angle),
    y1: 12 + 7.25 * Math.sin(angle),
    x2: 12 + 9.75 * Math.cos(angle),
    y2: 12 + 9.75 * Math.sin(angle),
  };
});

// SVG children need fill-box so `center` means the shape's own centre
// rather than the user-space origin at 0,0.
const ORIGIN = { transformBox: "fill-box", transformOrigin: "center" } as const;

export default function SunIcon({ open }: { open: boolean }) {
  // The sun clears out first, then the X draws in — a short delay on whichever
  // half is arriving keeps the two from crossing over each other mid-swap.
  const easing = "transition-all duration-200 ease-out";

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 overflow-visible"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    >
      <g
        className={`${easing} ${
          open
            ? "opacity-0 rotate-[60deg] scale-[0.35]"
            : "opacity-100 rotate-0 scale-100 delay-[70ms]"
        }`}
        style={ORIGIN}
      >
        {RAYS.map((ray, i) => (
          <line key={i} x1={ray.x1} y1={ray.y1} x2={ray.x2} y2={ray.y2} />
        ))}
      </g>

      <circle
        cx="12"
        cy="12"
        r="4.25"
        className={`${easing} ${
          open
            ? "opacity-0 scale-[0.4]"
            : "opacity-100 scale-100 delay-[70ms]"
        }`}
        style={ORIGIN}
      />

      <g
        className={`${easing} ${
          open
            ? "opacity-100 rotate-0 scale-100 delay-[70ms]"
            : "opacity-0 rotate-45 scale-75"
        }`}
        style={ORIGIN}
      >
        <line x1="6.5" y1="6.5" x2="17.5" y2="17.5" />
        <line x1="17.5" y1="6.5" x2="6.5" y2="17.5" />
      </g>
    </svg>
  );
}
