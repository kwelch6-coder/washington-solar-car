"use client";

import Image from "next/image";
import { useCallback, useId, useMemo, useRef, useState, useSyncExternalStore } from "react";
import GalleryLightbox from "./GalleryLightbox";
import type { GalleryPhoto } from "@/lib/gallery";

/** Shown before expanding: two full rows of four on desktop. */
const COLLAPSED = 8;

/** The hydration snapshot never changes, so there is nothing to subscribe to. */
const subscribeNoop = () => () => {};

function shuffled<T>(items: T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [open, setOpen] = useState(false);
  const [viewing, setViewing] = useState<number | null>(null);
  const gridId = useId();

  // One ref per thumbnail: the overlay returns focus to the photo you were
  // looking at when it closed, and asks which thumbnails are on screen so its
  // arrow keys never land on one the collapsed grid is hiding.
  const thumbs = useRef<(HTMLButtonElement | null)[]>([]);

  /** True only if the thumbnail is generating boxes — false when display:none. */
  const onScreen = useCallback(
    (i: number) => Boolean(thumbs.current[i]?.getClientRects().length),
    []
  );

  /** The exact URL the grid rendered for a photo, cache and all. */
  const poster = useCallback(
    (i: number) => thumbs.current[i]?.querySelector("img")?.currentSrc || undefined,
    []
  );

  const closeViewer = useCallback(() => {
    setViewing((current) => {
      // Scroll has already been restored by this point, so preventScroll is
      // belt and braces: focus must not move the page the reader is back on.
      const target = current === null ? null : thumbs.current[current];
      target?.focus({ preventScroll: true });
      return null;
    });
  }, []);

  /**
   * Natural order on the server and through hydration, so the client's first
   * render matches the markup it was sent — shuffling during SSR would produce
   * two different orders and React would throw a hydration mismatch.
   * `useSyncExternalStore` is false until hydration finishes, then true, which
   * swaps in the shuffled order on the render straight after.
   *
   * Deliberately not a setState inside an effect: that is what this repo's
   * react-hooks/set-state-in-effect rule forbids, and it would cause a second
   * cascading render for no benefit. The memo keeps one shuffle stable across
   * re-renders, so toggling the button does not reshuffle the grid.
   *
   * Reordering cannot shift the layout: every cell is a fixed 3:2 box, so the
   * grid's geometry is identical whichever photo lands where. Only the image
   * inside each box changes.
   */
  const hydrated = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );
  const shuffledOrder = useMemo(() => shuffled(photos), [photos]);
  const order = hydrated ? shuffledOrder : photos;

  return (
    <div>
      <ul id={gridId} className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {order.map((photo, i) => {
          const beyondFold = i >= COLLAPSED;
          /* Collapsed shows 8 — two rows of four on desktop and four rows of
             two on phone. At tablet three columns would leave 8 as a ragged
             2-and-a-bit rows, so the last two are held back there, giving two
             full rows of three instead. */
          const tabletOnlyHidden = i >= 6 && i < COLLAPSED;
          return (
            <li
              key={photo.src}
              className={[
                !open && beyondFold ? "hidden" : "",
                !open && tabletOnlyHidden ? "sm:max-lg:hidden" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <button
                type="button"
                ref={(el) => {
                  thumbs.current[i] = el;
                }}
                onClick={() => setViewing(i)}
                aria-label={`View larger: ${photo.alt}`}
                className="group relative block aspect-[3/2] w-full cursor-zoom-in overflow-hidden bg-ink/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </button>
            </li>
          );
        })}
      </ul>

      {photos.length > COLLAPSED && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={gridId}
            className="inline-block bg-ink text-cream font-label uppercase tracking-[0.14em] text-sm px-7 py-3 hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink transition-colors"
          >
            {open ? "Show fewer" : `Show all ${photos.length} photos`}
          </button>
        </div>
      )}

      {viewing !== null && (
        <GalleryLightbox
          photos={order}
          index={viewing}
          onIndex={setViewing}
          onClose={closeViewer}
          canStepTo={onScreen}
          poster={poster}
        />
      )}
    </div>
  );
}
