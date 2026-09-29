"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { HeroSlide } from "@/lib/data";
import { photos } from "@/lib/photos";

const SLIDE_DURATION = 3800;
// Longer hold after a manual step so the slide the user chose stays put.
const RESUME_DELAY = 7000;
const SWIPE_THRESHOLD = 40;

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 sm:h-7 sm:w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline
        points={direction === "left" ? "15 5 8 12 15 19" : "9 5 16 12 9 19"}
      />
    </svg>
  );
}

export default function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  // Set whenever the user drives the carousel, so the next auto-advance waits
  // RESUME_DELAY instead of the usual cadence. Cleared once it fires.
  const [manual, setManual] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const count = slides.length;

  const goTo = (i: number, byUser = false) => {
    setIndex(((i % count) + count) % count);
    if (byUser) setManual(true);
  };

  useEffect(() => {
    if (hovering) return;
    const t = setTimeout(
      () => {
        setIndex((i) => (i + 1) % count);
        setManual(false);
      },
      manual ? RESUME_DELAY : SLIDE_DURATION
    );
    return () => clearTimeout(t);
  }, [index, hovering, count, manual]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      goTo(index + (delta < 0 ? 1 : -1), true);
    }
    touchStartX.current = null;
  };

  const arrowClasses =
    "absolute top-1/2 -translate-y-1/2 z-10 grid place-items-center h-12 w-12 sm:h-14 sm:w-14 text-cream/70 hover:text-cream focus-visible:text-cream transition-colors";

  return (
    <div
      className="relative h-[60vh] min-h-[420px] sm:h-[65vh] sm:min-h-[520px] overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, i) => {
        const photo = photos[slide.photo];
        const active = i === index;
        return (
          <div
            key={slide.headline}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              active ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: photo.position }}
            />
            {/* DEPTH — multiply. Painted first so it blends with the photo
                only; the seat band above then covers it where an exact colour
                match is needed. Below that band this deepens the photo's
                own shadows instead of laying grey over it, which is what made
                the old version look muddy. Tinted toward UW purple rather than
                neutral black, so the darkening reads as deliberate and ties the
                hero to the brand. It is not pure black: pure black under
                multiply crushes the top of the photo to nothing.

                Deliberately restrained. The title is large enough to carry
                itself, so this is not protecting legibility — it only has to
                give the top edge of the photo some weight. Peak strength below
                the seat band is well under half, and the whole thing is out by
                36% of the frame. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 mix-blend-multiply"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom," +
                  " color-mix(in srgb, var(--color-ink) 62%, var(--color-accent)) 0%," +
                  " color-mix(in srgb, var(--color-ink) 62%, var(--color-accent)) 12%," +
                  " color-mix(in srgb, color-mix(in srgb, var(--color-ink) 62%, var(--color-accent)) 34%, transparent) 18%," +
                  " color-mix(in srgb, color-mix(in srgb, var(--color-ink) 62%, var(--color-accent)) 14%, transparent) 25%," +
                  " transparent 36%)",
              }}
            />
            {/* Two layers, because the top of this carousel is doing two jobs
                that one gradient cannot do at once.

                SEAT — normal blend. The hero section above is solid --color-ink
                and the title overhangs the join, so the first band here has to
                be exactly that colour or a seam appears through the type. A
                blend mode cannot promise an exact colour match, so this layer
                stays unblended — and it paints AFTER the multiply layer below,
                because multiply applied over this band darkened it to rgb(4,2,3)
                against the section's rgb(23,20,15) and put the seam straight
                back. That band keeps its full strength and its height — it is
                the seam fix, and it is already skinnier than the overhang it
                has to sit behind.

                Everything after it is the part that was pulled back: it now
                drops to just over a third the moment the band ends, and is
                fully transparent by 38% of the frame rather than 62%. The
                stops are still bunched, not evenly spaced — evenly spaced
                stops are what made the original read as a flat grey haze. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom," +
                  " var(--color-ink) 0%," +
                  " var(--color-ink) 12%," +
                  " color-mix(in srgb, var(--color-ink) 36%, transparent) 17%," +
                  " color-mix(in srgb, var(--color-ink) 17%, transparent) 23%," +
                  " color-mix(in srgb, var(--color-ink) 6%, transparent) 29%," +
                  " transparent 38%)",
              }}
            />
            {/* Focused scrim so the text block reads on light or busy photos. */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-16 sm:px-20 pb-16 sm:pb-20">
              {slide.eyebrow && (
                <p className="font-label font-light text-[11px] sm:text-xs uppercase tracking-[0.25em] text-cream/75 mb-3">
                  {slide.eyebrow}
                </p>
              )}
              <h2 className="font-sans font-bold text-cream text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-tight mb-6 max-w-2xl text-balance">
                {slide.headline}
              </h2>
              <Link
                href={slide.ctaHref}
                tabIndex={active ? 0 : -1}
                className="group inline-flex items-center gap-2 font-sans font-medium text-sm sm:text-base text-cream hover:text-accent-light transition-colors"
              >
                {/* Underline lives on the label only. A parent's text-decoration
                    propagates to descendants and can't be switched off by the
                    child, so it has to start below the arrow, not be undone. */}
                <span className="underline decoration-2 decoration-accent-light underline-offset-8">
                  {slide.ctaLabel}
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() => goTo(index - 1, true)}
        aria-label="Previous slide"
        className={`${arrowClasses} left-1 sm:left-3`}
      >
        <Chevron direction="left" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1, true)}
        aria-label="Next slide"
        className={`${arrowClasses} right-1 sm:right-3`}
      >
        <Chevron direction="right" />
      </button>

      <div className="absolute bottom-4 sm:bottom-6 inset-x-0 z-10 flex justify-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.headline}
            type="button"
            onClick={() => goTo(i, true)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-7 bg-accent-light" : "w-2.5 bg-cream/50 hover:bg-cream/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
