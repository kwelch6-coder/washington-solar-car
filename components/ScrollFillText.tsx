"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * The dimmed floor. This is body copy carrying real information, so it never
 * drops far enough to stop being readable — if the effect fails to initialise,
 * a reader lands mid-passage, or scroll misbehaves, the words still read.
 */
const DIM = 0.34;

/** Words in the leading ramp, so the fill edge is soft rather than a hard cut. */
const FEATHER = 6;

/**
 * Body copy that fills in word by word as it scrolls up the viewport.
 *
 * Renders at FULL opacity and lets the script dim it on mount — never the
 * reverse. With JS disabled, before hydration, or under reduced-motion, the
 * text is simply legible with no effect at all.
 *
 * Splits on whitespace with the separators kept, so spacing, text selection,
 * in-page search and screen-reader output are all identical to a plain <p>:
 * the spans add no semantics and break no words.
 */
export default function ScrollFillText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  // Whitespace runs are preserved as their own tokens rather than trimmed, so
  // the rendered text is character-identical to the original string.
  const tokens = useMemo(() => children.split(/(\s+)/), [children]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: no dimming, no scroll linkage, nothing to clean up.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words = Array.from(el.querySelectorAll<HTMLElement>("[data-sf-word]"));
    if (!words.length) return;
    const n = words.length;

    for (const w of words) w.style.opacity = String(DIM);

    // One trigger for the whole passage. Word states are derived from its
    // progress — there is no per-word scroll listener.
    let lastHead: number | null = null;
    const apply = (progress: number) => {
      const head = progress * (n + FEATHER);
      // Only touch the words whose value actually changed since last frame.
      let lo = 0;
      let hi = n - 1;
      if (lastHead !== null) {
        lo = Math.max(0, Math.floor(Math.min(head, lastHead) - FEATHER - 1));
        hi = Math.min(n - 1, Math.ceil(Math.max(head, lastHead) + 1));
      }
      for (let i = lo; i <= hi; i++) {
        const t = Math.min(1, Math.max(0, (head - i) / FEATHER));
        words[i].style.opacity = String(DIM + (1 - DIM) * t);
      }
      lastHead = head;
    };

    const trigger = ScrollTrigger.create({
      trigger: el,
      // Fully filled by the time the passage reaches the upper-middle of the
      // viewport, so nobody is reading text that is still dimming ahead of them.
      start: "top 85%",
      end: "top 35%",
      scrub: true,
      onUpdate: (self) => apply(self.progress),
      onRefresh: (self) => apply(self.progress),
    });
    apply(trigger.progress);

    return () => {
      trigger.kill();
      for (const w of words) w.style.opacity = "";
    };
  }, [children]);

  return (
    <p ref={ref} className={className}>
      {tokens.map((token, i) =>
        /^\s+$/.test(token) ? (
          <span key={i}>{token}</span>
        ) : (
          /* Only the opacity moves — no transform, so the words never shift.
             No CSS transition either: `scrub` plus the feather ramp already
             produce the fade, and a per-word transition would lag fast
             scrolling and add compositing work for every word. */
          <span key={i} data-sf-word="">
            {token}
          </span>
        )
      )}
    </p>
  );
}
