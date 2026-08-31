"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import HeroCarousel from "./HeroCarousel";
import type { HeroSlide } from "@/lib/data";
import { claimIntro, useIsomorphicLayoutEffect } from "@/lib/intro";
import { TEAM_NAME, UNIVERSITY } from "@/lib/site";

export default function Hero({ slides }: { slides: HeroSlide[] }) {
  const textRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Same answer Nav captured this render. False on in-site navigation back to
  // the home page, so the hero simply renders in its final state.
  const [playIntro] = useState(claimIntro);

  // Beats two and three of the load-in, offset behind the nav bar. Nothing is
  // given pointer-events-none, so links stay clickable while it plays.
  useIsomorphicLayoutEffect(() => {
    if (!playIntro) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.fromTo(
        textRef.current?.children ?? [],
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.06 },
        0.13
      ).fromTo(
        carouselRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.28
      );
    });
    return () => ctx.revert();
  }, [playIntro]);

  return (
    <section id="site-hero" className="relative overflow-hidden bg-ink">
      {/* Title size is one fluid clamp rather than breakpoint steps — the old
          6vw tablet step collapsed the title between 640px and 1024px. The
          overhang that breaks the type across the carousel gradient is derived
          from that same value, so it stays ~40% of the line box at every width
          instead of needing per-breakpoint tuning. Carousel copy is bottom
          aligned, so the overhang never reaches it. */}
      <div
        ref={textRef}
        style={
          {
            "--hero-title": "clamp(3rem, 10.3vw - 0.4rem, 13rem)",
          } as React.CSSProperties
        }
        className="relative z-20 px-5 sm:px-8 pt-12 sm:pt-16 pb-0 text-center mb-[calc(var(--hero-title)*-0.34)] max-[470px]:mb-[calc(var(--hero-title)*-0.39)] pointer-events-none"
      >
        <p className="font-label font-light text-xs sm:text-sm uppercase tracking-[0.35em] text-cream/70 mb-2 lg:mb-4">
          {UNIVERSITY}
        </p>
        {/* Measured: this title sets 8.95em wide. The previous name was 7.7em,
            and the old 12vw slope sized against that — reused here it overflowed
            the content box and wrapped at every viewport, killing the one-line
            overhang. 10.3vw holds the same ~92% line fill the old pairing had,
            so the type still runs edge to edge without breaking.

            Against the 3rem floor it wraps to two lines below ~470px. Leading
            opens up just in that range — 0.85 leaves barely 0.12em between
            stacked cap-heights. The looser line box also drops the block's
            bottom edge further below the baseline, so the overhang above
            compensates to keep the same amount of type breaking across the
            gradient. */}
        <h1 className="font-display uppercase leading-[0.85] max-[470px]:leading-[0.95] text-cream text-[length:var(--hero-title)]">
          {TEAM_NAME}
        </h1>
      </div>

      <div ref={carouselRef}>
        <HeroCarousel slides={slides} />
      </div>
    </section>
  );
}
