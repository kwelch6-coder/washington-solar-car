export type GalleryPhoto = {
  src: string;
  alt: string;
};

/**
 * Race-season photo gallery for the Team page.
 *
 * Sources are full-resolution camera files (mostly 7008x4672, ~229MB in all)
 * kept outside the repo; these are 900x600 derivatives at ~79KB each. One
 * Flickr duplicate was dropped: photo 55410682824 was supplied twice, as a
 * 400x267 thumbnail and as the original, and only the original is here.
 *
 * ⚠ ALT TEXT IS GENERIC. The filenames are Flickr ids and carry no description,
 * so every photo shares one honest catch-all rather than an invented specific
 * one. Per-photo alt text should replace this — someone who knows the season
 * can say which shot is scrutineering, which is the finish line, and so on.
 * Three of the originals also carry an EXIF copyright of "Cora Kennedy", so
 * photographer credit may be owed before this goes public.
 */
const GENERIC_ALT =
  "The Washington Solar Car team and their car during the 2026 race season";

export const galleryPhotos: GalleryPhoto[] = [
  { src: "/gallery/55408481427.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55409535472.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55409537227.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55409538472.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55409566358.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55409621009.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55410507571.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55410625928.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55410680794.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55410682824.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55410892020.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55412270257.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55412270552.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55412273487.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55413357708.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55413361468.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55413361893.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55413361903.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55413417024.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55413417584.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55413418149.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55413418799.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55413419874.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55413625535.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55423848112.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55423848117.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55423991242.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55423992602.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55424944668.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55424946523.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55424992334.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55424993254.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55424993369.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55425216145.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55425216150.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55426327282.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55427301991.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55427302331.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55427418428.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55427420973.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55427422553.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55427463619.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55427465944.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55427466049.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55429885151.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55429889806.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55429890136.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55442465837.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55442474672.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55442556057.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55443441571.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55443610674.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55443646023.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55443825550.jpg", alt: GENERIC_ALT },
  { src: "/gallery/55443917560.jpg", alt: GENERIC_ALT },
];
