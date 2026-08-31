/**
 * PLACEHOLDER. The real `car-top.svg` (top-down car, nose right, two layers:
 * solid `currentColor` body + hairline `--paper` detail) has not been supplied.
 *
 * Per the brief this is a plain rectangle at the same `viewBox="0 0 300 120"`,
 * in the same component slot, at the same size, with the same `currentColor`
 * behaviour — so dropping in the real asset is a one-file swap with no layout
 * change. Do not elaborate this into a drawn car.
 */
export default function CarTop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 120"
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect x="0" y="0" width="300" height="120" fill="currentColor" />
    </svg>
  );
}
