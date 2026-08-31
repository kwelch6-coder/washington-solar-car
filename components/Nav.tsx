"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SunIcon from "./SunIcon";
import { claimIntro, endIntro, useIsomorphicLayoutEffect } from "@/lib/intro";
import { TEAM_NAME } from "@/lib/site";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/cars", label: "Cars" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

// Ignore sub-pixel scroll jitter so the bar doesn't flicker in and out.
const SCROLL_DELTA = 5;
// How close to the top edge the pointer has to get to summon a hidden bar.
const REVEAL_ZONE = 72;

export default function Nav() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);

  // Captured during render so Hero sees the same answer before any effect runs.
  const [playIntro] = useState(claimIntro);

  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  // Only the home page has a dark hero for the bar to blend into; every other
  // page starts on cream, so the bar stays light there from the first paint.
  const [overHero, setOverHero] = useState(pathname === "/");

  // Reset per-route chrome during render rather than in an effect, so the bar
  // never paints one frame in the previous route's state.
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
    setHidden(false);
    setOverHero(pathname === "/");
  }

  // Page offset at which the sticky bar's bottom edge clears the hero.
  const heroThreshold = useCallback(() => {
    const hero = document.getElementById("site-hero");
    if (!hero) return 0;
    const navHeight = headerRef.current?.offsetHeight ?? 0;
    return Math.max(hero.offsetTop + hero.offsetHeight - navHeight, 0);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setOverHero(y < heroThreshold());

      if (y <= 0) {
        setHidden(false);
      } else if (y > lastY.current + SCROLL_DELTA) {
        setHidden(true);
      } else if (y < lastY.current - SCROLL_DELTA) {
        setHidden(false);
      }
      lastY.current = y;
    };

    const onPointerMove = (e: MouseEvent) => {
      if (e.clientY < REVEAL_ZONE) setHidden(false);
    };

    const onResize = () => setOverHero(window.scrollY < heroThreshold());

    lastY.current = window.scrollY;
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);
    };
  }, [heroThreshold, pathname]);

  // Size the top backdrop to the header's own flow box. Written straight to the
  // DOM rather than through state so it stays out of the render cycle, and
  // re-measured when the mobile menu toggles, since that changes the height.
  useIsomorphicLayoutEffect(() => {
    const apply = () => {
      if (headerRef.current && backdropRef.current) {
        backdropRef.current.style.height = `${headerRef.current.offsetHeight}px`;
      }
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, [open]);

  // First beat of the load-in. Only the bar's contents move — animating the
  // header itself would leave inline transform/opacity that fights the
  // hide-on-scroll classes.
  useIsomorphicLayoutEffect(() => {
    if (!playIntro) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { y: -12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    });
    endIntro();
    return () => ctx.revert();
  }, [playIntro]);

  // An open dropdown must never slide off with the bar behind it.
  const isHidden = hidden && !open;

  // The 2px bottom border is kept but transparent in both states: removing it
  // outright would shrink the bar by 2px on the colour swap and jog the sticky
  // offset. Transparent leaves no seam and no height change.

  return (
    <>
      {/* Fills the header's own flow box at the very top of the document. When
          the bar hides on a small scroll that strip would otherwise show the
          cream page background as a white gap; this makes it read as part of
          the hero. Height is measured to match the header exactly, so at z-0 it
          can never overlap page content, and it scrolls away with the document
          — the light bar further down is untouched. */}
      <div
        ref={backdropRef}
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 z-0 ${
          overHero ? "bg-ink" : "bg-cream"
        }`}
      />
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 border-b-2 border-transparent ${
        overHero
          ? "bg-ink text-cream"
          : "bg-cream/95 backdrop-blur text-ink"
      } ${isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
      style={{
        paddingTop: "env(safe-area-inset-top)",
        // Tailwind v4 compiles `-translate-y-full` to the `translate` property,
        // not `transform` — transitioning `transform` here animated nothing and
        // the bar clipped away instantly. Listed explicitly so the slide/fade
        // runs at 300ms while the hero->cream colour fade keeps its own pace.
        transition:
          "translate 300ms ease-in-out, opacity 300ms ease-in-out, background-color 500ms ease-out, border-color 500ms ease-out",
      }}
    >
      <div
        ref={barRef}
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8"
      >
        <Link href="/" className="flex items-center gap-2" aria-label={`${TEAM_NAME} home`}>
          <Image
            src={overHero ? "/Main-logo-white.png" : "/main-logo-black.png"}
            alt={`${TEAM_NAME} logo`}
            width={160}
            height={44}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 font-label font-light text-sm tracking-[0.12em] uppercase">
          {LINKS.map((link) => {
            const current = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={`transition-colors ${
                  current
                    ? "text-accent"
                    : overHero
                      ? "hover:text-cream/50"
                      : "hover:text-ink/45"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className={`hidden lg:inline-block whitespace-nowrap bg-accent text-cream font-label uppercase tracking-[0.14em] px-5 py-2 text-xs transition-colors ${
            overHero ? "hover:bg-cream hover:text-ink" : "hover:bg-ink"
          }`}
        >
          Join the Team
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden p-3 -mr-1"
        >
          <SunIcon open={open} />
        </button>
      </div>

      {open && (
        <nav
          className={`lg:hidden border-t-2 px-5 py-5 flex flex-col gap-5 font-label font-light text-xl tracking-[0.12em] uppercase ${
            overHero ? "border-cream/20 bg-ink" : "border-ink bg-cream"
          }`}
        >
          {LINKS.map((link) => {
            const current = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={current ? "page" : undefined}
                className={`transition-colors ${
                  current
                    ? "text-accent"
                    : overHero
                      ? "hover:text-cream/50"
                      : "hover:text-ink/45"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          </nav>
        )}
      </header>
    </>
  );
}
