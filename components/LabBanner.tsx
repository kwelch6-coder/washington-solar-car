"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NO_DIFFERENCES, SITE_WIDE, labDifferences } from "@/lib/labDifferences";

/**
 * Full-width banner pinned above everything on the lab deployment.
 *
 * The lab is public and is being handed to club members for feedback, so this
 * is deliberately the loudest element on the page and cannot be dismissed.
 *
 * It is fixed, but the page must still be pushed down rather than sitting
 * underneath it — and the height changes with the breakpoint and again when the
 * differences panel opens. So it measures itself and publishes the height as
 * --lab-banner-h, which body padding and the sticky nav's offset both read.
 * A hardcoded offset would break the moment the panel expanded.
 */
export default function LabBanner() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const publish = () =>
      document.documentElement.style.setProperty(
        "--lab-banner-h",
        `${el.offsetHeight}px`
      );
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    return () => {
      ro.disconnect();
      document.documentElement.style.removeProperty("--lab-banner-h");
    };
  }, []);

  /* Collapse when moving between pages — the panel describes one route. */
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  const routeItems = labDifferences[pathname] ?? [];

  return (
    <div
      ref={ref}
      className="fixed inset-x-0 top-0 z-[100] bg-accent text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 sm:px-8 sm:py-2.5">
        <p className="font-display uppercase leading-tight tracking-wide text-sm sm:text-lg lg:text-xl">
          Lab version &mdash; experimental. Not the real site.
        </p>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="shrink-0 rounded-none border border-white/70 px-2.5 py-1 font-label text-[11px] uppercase tracking-wider sm:text-xs hover:bg-white hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
        >
          {open ? "Hide" : "What's different on this page?"}
        </button>
      </div>

      {open && (
        <div
          id={panelId}
          className="border-t border-white/30 bg-accent"
        >
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-8">
            {/* Route-specific first. When there are none, say so outright —
                an empty panel reads as broken. */}
            {routeItems.length ? (
              <ul className="space-y-1.5">
                {routeItems.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-snug">
                    <span aria-hidden="true">&middot;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm leading-snug">{NO_DIFFERENCES}</p>
            )}

            {/* Differences that are not tied to a route still have to be
                listed somewhere, or a site-wide change goes unmentioned
                simply because the map is keyed by route. */}
            {SITE_WIDE.length > 0 && (
              <>
                <p className="mt-3 mb-1.5 font-label text-[11px] uppercase tracking-wider text-white/70">
                  On every lab page
                </p>
                <ul className="space-y-1.5">
                  {SITE_WIDE.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-snug">
                      <span aria-hidden="true">&middot;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
