export type GalleryPhoto = {
  /** 900x600 grid thumbnail. */
  src: string;
  /** 2400px-wide source for the lightbox. See the note below on sizing. */
  full: string;
  /** Intrinsic size of `full`, so the lightbox can reserve the right box
   *  before the file arrives and cap the photo at its natural size. */
  width: number;
  height: number;
  alt: string;
};

/**
 * Race-season photo gallery for the Team page.
 *
 * Sources are full-resolution camera files (mostly 7008x4672, ~229MB in all)
 * kept outside the repo. Two derivatives are committed per photo: a 900x600
 * grid thumbnail at ~79KB, and a 2400px-wide lightbox copy at ~507KB (27MB
 * for the set).
 *
 * The lightbox copies are NOT the camera originals. 229MB of 7008px JPEGs in
 * the repo would be ~9x its current size and a ~4MB download per photo viewed,
 * for pixels no display can show: 2400px is already 1:1 on a 1200px-wide
 * presentation at 2x DPR, which is larger than the lightbox ever renders. The
 * originals stay in the Photos folder outside the repo if a bigger derivative
 * is ever wanted. One
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
  {
    src: "/gallery/55408481427.jpg",
    full: "/gallery/full/55408481427.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55409535472.jpg",
    full: "/gallery/full/55409535472.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55409537227.jpg",
    full: "/gallery/full/55409537227.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55409538472.jpg",
    full: "/gallery/full/55409538472.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55409566358.jpg",
    full: "/gallery/full/55409566358.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55409621009.jpg",
    full: "/gallery/full/55409621009.jpg",
    width: 2400,
    height: 1350,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55410507571.jpg",
    full: "/gallery/full/55410507571.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55410625928.jpg",
    full: "/gallery/full/55410625928.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55410680794.jpg",
    full: "/gallery/full/55410680794.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55410682824.jpg",
    full: "/gallery/full/55410682824.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55410892020.jpg",
    full: "/gallery/full/55410892020.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55412270257.jpg",
    full: "/gallery/full/55412270257.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55412270552.jpg",
    full: "/gallery/full/55412270552.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55412273487.jpg",
    full: "/gallery/full/55412273487.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55413357708.jpg",
    full: "/gallery/full/55413357708.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55413361468.jpg",
    full: "/gallery/full/55413361468.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55413361893.jpg",
    full: "/gallery/full/55413361893.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55413361903.jpg",
    full: "/gallery/full/55413361903.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55413417024.jpg",
    full: "/gallery/full/55413417024.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55413417584.jpg",
    full: "/gallery/full/55413417584.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55413418149.jpg",
    full: "/gallery/full/55413418149.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55413418799.jpg",
    full: "/gallery/full/55413418799.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55413419874.jpg",
    full: "/gallery/full/55413419874.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55413625535.jpg",
    full: "/gallery/full/55413625535.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55423848112.jpg",
    full: "/gallery/full/55423848112.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55423848117.jpg",
    full: "/gallery/full/55423848117.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55423991242.jpg",
    full: "/gallery/full/55423991242.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55423992602.jpg",
    full: "/gallery/full/55423992602.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55424944668.jpg",
    full: "/gallery/full/55424944668.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55424946523.jpg",
    full: "/gallery/full/55424946523.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55424992334.jpg",
    full: "/gallery/full/55424992334.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55424993254.jpg",
    full: "/gallery/full/55424993254.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55424993369.jpg",
    full: "/gallery/full/55424993369.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55425216145.jpg",
    full: "/gallery/full/55425216145.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55425216150.jpg",
    full: "/gallery/full/55425216150.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55426327282.jpg",
    full: "/gallery/full/55426327282.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55427301991.jpg",
    full: "/gallery/full/55427301991.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55427302331.jpg",
    full: "/gallery/full/55427302331.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55427418428.jpg",
    full: "/gallery/full/55427418428.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55427420973.jpg",
    full: "/gallery/full/55427420973.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55427422553.jpg",
    full: "/gallery/full/55427422553.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55427463619.jpg",
    full: "/gallery/full/55427463619.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55427465944.jpg",
    full: "/gallery/full/55427465944.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55427466049.jpg",
    full: "/gallery/full/55427466049.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55429885151.jpg",
    full: "/gallery/full/55429885151.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55429889806.jpg",
    full: "/gallery/full/55429889806.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55429890136.jpg",
    full: "/gallery/full/55429890136.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55442465837.jpg",
    full: "/gallery/full/55442465837.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55442474672.jpg",
    full: "/gallery/full/55442474672.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55442556057.jpg",
    full: "/gallery/full/55442556057.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55443441571.jpg",
    full: "/gallery/full/55443441571.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55443610674.jpg",
    full: "/gallery/full/55443610674.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55443646023.jpg",
    full: "/gallery/full/55443646023.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55443825550.jpg",
    full: "/gallery/full/55443825550.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
  {
    src: "/gallery/55443917560.jpg",
    full: "/gallery/full/55443917560.jpg",
    width: 2400,
    height: 1600,
    alt: GENERIC_ALT,
  },
];
