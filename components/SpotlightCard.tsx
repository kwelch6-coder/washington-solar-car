"use client";

import { useState } from "react";
import Image from "next/image";
import type { Photo } from "@/lib/photos";

export default function SpotlightCard({
  title,
  description,
  photo,
}: {
  title: string;
  description: string;
  photo: Photo;
}) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      aria-expanded={open}
      className="relative block w-full text-left aspect-[4/5] overflow-hidden bg-ink"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="object-cover grayscale contrast-125"
        style={{ objectPosition: photo.position }}
      />
      <div className="absolute inset-0 bg-accent mix-blend-multiply opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 px-4 py-4 sm:px-5 sm:py-5">
        <h3 className="font-display text-xl sm:text-2xl uppercase text-cream leading-tight">
          {title}
        </h3>
        <p
          className={`mt-2 text-sm text-cream/90 overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            open ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {description}
        </p>
      </div>
    </button>
  );
}
