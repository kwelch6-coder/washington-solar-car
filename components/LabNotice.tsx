/**
 * One plain-language line at the top of every lab page.
 *
 * Club members are sent here for feedback and some will not know what they are
 * looking at. Set on ink so it reads the same whether the page below it opens
 * on cream or, on the lab home, runs straight into the dark hero. Deliberately
 * a quiet note rather than a warning bar — it should inform, not alarm.
 */
export default function LabNotice() {
  return (
    <div className="bg-ink text-cream/80">
      <p className="mx-auto max-w-7xl px-5 sm:px-8 py-2.5 text-center font-label font-light text-xs sm:text-sm">
        This is the lab — an in-progress version where we try out new ideas, not
        the real site.
      </p>
    </div>
  );
}
