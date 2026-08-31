import Image from "next/image";
import type { Photo } from "@/lib/photos";

export default function CarShowcase({
  photo,
  name,
  number,
  tagline,
  render,
  priority,
}: {
  /** Omit when no photo of this car exists yet — a placeholder renders instead
   *  of borrowing a shot of the other car, which would mislabel it. */
  photo?: Photo;
  name: string;
  number?: string;
  tagline?: string;
  /** Reserved for a future react-three-fiber <Canvas> once a CAD export exists. */
  render?: React.ReactNode;
  priority?: boolean;
}) {
  return (
    <div className="relative bg-ink overflow-hidden">
      {number && (
        <span className="absolute left-4 top-4 z-10 font-label text-cream/80 text-sm border border-cream/40 px-2 py-0.5">
          #{number}
        </span>
      )}
      <div className="relative aspect-[3/2]">
        {render ??
          (photo ? (
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
              style={{ objectPosition: photo.position }}
              priority={priority}
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center px-6">
              <p className="border border-dashed border-cream/40 text-cream/60 px-4 py-3 text-sm text-center">
                [{name} photo — add shots to edited_photos/sockeye/ and re-run
                the optimize script]
              </p>
            </div>
          ))}
      </div>
      {(name || tagline) && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink via-ink/70 to-transparent px-5 py-4 sm:px-8 sm:py-6">
          {name && (
            <h3 className="font-display text-3xl sm:text-5xl uppercase text-cream leading-none">
              {name}
            </h3>
          )}
          {tagline && <p className="mt-1 text-cream/70 text-sm sm:text-base">{tagline}</p>}
        </div>
      )}
    </div>
  );
}
