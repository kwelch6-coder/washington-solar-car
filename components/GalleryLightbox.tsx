"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { GalleryPhoto } from "@/lib/gallery";

/** Open/close transition. Kept short so it never feels like a wait. */
const DURATION = 220;

/** How long the full file may take before we admit it is loading. */
const SPINNER_DELAY = 400;

/**
 * Locks the page behind the overlay.
 *
 * `overflow: hidden` on <body> is the usual answer and it does not hold on iOS
 * Safari — the page still rubber-bands and, worse, scrolls under the overlay.
 * Fixing the body does hold, but it drops the scroll offset to zero, so the
 * offset is captured first and put back on release. Without that the page
 * jumps to the top on close, which is a worse bug than not locking at all.
 *
 * Fixing the body also removes the document scrollbar, and the layout beneath
 * slides over by its width. The gap is measured and given back as padding so
 * nothing moves.
 */
function lockScroll(): () => void {
  const { body } = document;
  const y = window.scrollY;
  const scrollbar = window.innerWidth - document.documentElement.clientWidth;

  const previous = {
    position: body.style.position,
    top: body.style.top,
    left: body.style.left,
    width: body.style.width,
    paddingRight: body.style.paddingRight,
  };

  body.style.position = "fixed";
  body.style.top = `-${y}px`;
  body.style.left = "0";
  body.style.width = "100%";
  if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

  return () => {
    body.style.position = previous.position;
    body.style.top = previous.top;
    body.style.left = previous.left;
    body.style.width = previous.width;
    body.style.paddingRight = previous.paddingRight;

    // Instant, not smooth. The site sets `scroll-behavior: smooth` on <html>,
    // which turns this into a half-second glide back up the page — the same
    // class of bug as losing the position, just slower. Suspended for the one
    // call and put straight back.
    const root = document.documentElement;
    const behaviour = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, y);
    root.style.scrollBehavior = behaviour;
  };
}

export default function GalleryLightbox({
  photos,
  index,
  onIndex,
  onClose,
  canStepTo,
  poster,
}: {
  photos: GalleryPhoto[];
  index: number;
  onIndex: (next: number) => void;
  onClose: () => void;
  /**
   * Whether a photo is currently rendered in the grid. Arrow keys skip the
   * ones the collapsed grid is hiding, so closing always returns focus to a
   * thumbnail that actually exists to be focused.
   */
  canStepTo: (i: number) => boolean;
  /**
   * The URL the grid is already showing for a photo. next/image rewrites its
   * sources to /_next/image?..., so pointing the placeholder at the plain file
   * path would start a second download of the same picture and defeat the
   * point of having one. Reading it back off the rendered thumbnail gets the
   * exact bytes sitting in cache.
   */
  poster: (i: number) => string | undefined;
}) {
  const photo = photos[index];
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Drives the enter transition, and on the way out keeps the overlay mounted
  // long enough for the exit to play.
  const [shown, setShown] = useState(false);
  // Both are keyed by the file rather than being booleans that an effect has
  // to reset when the photo changes — stepping to the next photo makes them
  // stale by definition, with no second render and no setState in an effect.
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const [slowSrc, setSlowSrc] = useState<string | null>(null);
  const loaded = loadedSrc === photo.full;
  const slow = slowSrc === photo.full;

  const dismiss = useCallback(() => {
    setShown(false);
    window.setTimeout(onClose, DURATION);
  }, [onClose]);

  // Enter on the frame after mount, so the browser has a start state to
  // transition from rather than painting the end state immediately.
  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => lockScroll(), []);

  // Only admit to loading if the file is actually taking a moment.
  useEffect(() => {
    const src = photo.full;
    const id = window.setTimeout(() => setSlowSrc(src), SPINNER_DELAY);
    return () => window.clearTimeout(id);
  }, [photo.full]);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  const step = useCallback(
    (direction: number) => {
      const n = photos.length;
      for (let hop = 1; hop <= n; hop++) {
        const next = (index + direction * hop + n * hop) % n;
        if (canStepTo(next)) {
          onIndex(next);
          return;
        }
      }
    },
    [photos.length, index, canStepTo, onIndex]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        dismiss();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
        return;
      }
      if (e.key !== "Tab") return;

      // Focus trap. Tab must not reach the page behind the overlay, so the
      // focusable elements inside the dialog are cycled by hand.
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !dialogRef.current?.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [dismiss, step]);

  /**
   * Portalled to <body> rather than rendered in place. `position: fixed` is
   * resolved against the nearest ancestor carrying a transform, and the
   * gallery sits inside a GSAP reveal wrapper that leaves one behind — in
   * place, the overlay anchored to that wrapper and rendered as a 1088x439
   * box 3146px down the page instead of covering the viewport. Moving it to
   * <body> puts the viewport back as its containing block.
   */
  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      // A fixed layer over the viewport, deliberately NOT the Fullscreen API:
      // the browser chrome stays where the reader left it.
      className={[
        "fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10",
        "bg-ink/95 transition-opacity ease-out",
        shown ? "opacity-100" : "opacity-0",
      ].join(" ")}
      style={{ transitionDuration: `${DURATION}ms` }}
      // Only a click on the backdrop itself closes. Clicks that land on the
      // photo or the close button have their own target and fall through.
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={dismiss}
        aria-label="Close photo viewer"
        /* 44px minimum box on touch, well clear of the photo's corner. */
        className="absolute right-3 top-3 sm:right-5 sm:top-5 grid h-12 w-12 place-items-center text-cream/80 hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream transition-colors"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        >
          <path d="M5 5l14 14M19 5L5 19" />
        </svg>
      </button>

      {/* The box is sized from the photo's own dimensions rather than left to
          the image to establish once it loads: an <img> with width/height
          attributes but `width:auto; height:auto` measures 0x0 in Chrome until
          the file's header arrives, which collapsed this wrapper and left the
          thumbnail underlay with nothing to fill. Doing the fit arithmetic
          here reserves the right box on the first frame.

          The three terms are the whole sizing contract: never wider than the
          photo's natural size, never wider than the viewport less its margin,
          and never taller than the viewport less its margin. aspect-ratio
          supplies the height, so nothing is ever cropped or distorted. */}
      <div
        className={[
          "relative transition ease-out",
          // Reduced motion gets the cross-fade without the scale. The
          // motion-reduce utility is emitted after the base one, so it wins
          // inside the media query.
          shown ? "scale-100 opacity-100" : "scale-95 opacity-0",
          "motion-reduce:scale-100",
        ].join(" ")}
        style={{
          transitionDuration: `${DURATION}ms`,
          aspectRatio: `${photo.width} / ${photo.height}`,
          width: `min(${photo.width}px, calc(100vw - 3rem), calc((100dvh - 6rem) * ${(
            photo.width / photo.height
          ).toFixed(4)}))`,
        }}
      >
        {/* The thumbnail is already in cache from the grid, so it paints on the
            first frame and the overlay is never an empty black rectangle. It
            sits underneath at the same box and is covered as the full file
            fades in over it. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster(index) ?? photo.src}
          alt=""
          aria-hidden="true"
          /* object-cover, not contain: the thumbnails are all 3:2 while one
             photo's full file is 16:9, so a placeholder that fits rather than
             fills would leave bars that vanish on swap. */
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* The full file, served as itself rather than through the image
            optimiser, so what arrives is the 2400px source and not a resize of
            it. It fades in over the thumbnail rather than replacing it. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={photo.full}
          src={photo.full}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          onLoad={() => setLoadedSrc(photo.full)}
          className={[
            "absolute inset-0 h-full w-full object-contain",
            "transition-opacity duration-200 ease-out",
            loaded ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {slow && !loaded && (
          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <span
              aria-hidden="true"
              className="h-7 w-7 animate-spin rounded-full border-2 border-cream/25 border-t-cream/80 motion-reduce:hidden"
            />
            <span className="hidden font-label text-xs uppercase tracking-[0.2em] text-cream/70 motion-reduce:block">
              Loading
            </span>
            <span className="sr-only" role="status">
              Loading full-size photo
            </span>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
