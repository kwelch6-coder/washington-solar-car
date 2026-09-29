import Link from "next/link";
import Image from "next/image";
import type { Photo } from "@/lib/photos";

export default function TeaserCard({
  href,
  title,
  description,
  photo,
}: {
  href: string;
  title: string;
  description: string;
  photo: Photo;
}) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[4/5] overflow-hidden bg-ink"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ objectPosition: photo.position }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 px-5 py-5 sm:px-6 sm:py-6">
        <h3 className="font-display text-2xl sm:text-3xl uppercase text-cream">
          {title}
        </h3>
        <p className="mt-1 text-cream/75 text-sm">{description}</p>
        <span className="mt-3 inline-block font-label text-accent-light text-sm uppercase tracking-wide group-hover:translate-x-1 transition-transform">
          Explore &rarr;
        </span>
      </div>
    </Link>
  );
}
