"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Direction = "up" | "left" | "right" | "none";

export default function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const from: gsap.TweenVars = { opacity: 0 };
    if (direction === "up") from.y = 32;
    if (direction === "left") from.x = -32;
    if (direction === "right") from.x = 32;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        from,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [direction, delay]);

  const Comp = Tag as React.ElementType;
  return (
    <Comp ref={ref} className={className}>
      {children}
    </Comp>
  );
}
