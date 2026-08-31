export type Sponsor = {
  /** Used for alt text. See the note below on legal names. */
  name: string;
  /** Path under public/. */
  logo: string;
  /** Empty until the links pass. A populated value renders the logo as a
   *  new-tab link; empty renders a plain image. Both paths are built. */
  url: string;
  /**
   * Optical size multiplier, applied on top of `object-fit: contain`.
   *
   * Bounding boxes lie: a 6.7:1 wordmark and a 2.3:1 stacked mark fitted to
   * the same box do not read as the same size, because the wide one is
   * width-limited and thin while the compact one fills the box. These values
   * were tuned by eye against a rendered wall, not calculated. Default 1.
   */
  scale?: number;
};

/**
 * Alphabetical, deliberately. Do not reorder into tiers — the tier structure
 * is not finalized, and any ordering that implies ranking has to be redone.
 * Every logo is treated at equal size.
 *
 * Six supplied files are not here because they cannot take the
 * white-on-transparent treatment. See the report; they need transparent
 * versions re-sourced rather than any workaround.
 *
 * Names are taken from each logo's own wordmark, not from a company registry.
 * They are display names, not verified legal entity names.
 */
export const sponsors: Sponsor[] = [
  { name: "Altair", logo: "/sponsors/altair.png", url: "", scale: 1.02 },
  // Stacked mark: object-contain fits it by height, which shrinks the wordmark
  // well below everything else. Needs the largest correction on the wall.
  { name: "Amprius", logo: "/sponsors/amprius.png", url: "", scale: 1.2 },
  { name: "Ansys", logo: "/sponsors/ansys.png", url: "", scale: 0.86 },
  { name: "Boeing", logo: "/sponsors/boeing.png", url: "", scale: 1.05 },
  { name: "Celsius", logo: "/sponsors/celsius.png", url: "", scale: 1.02 },
  { name: "Kenesto", logo: "/sponsors/kenesto.png", url: "", scale: 0.98 },
  // Widest mark at 6.7:1, so it is width-limited and reads heavy at 1.
  { name: "Mitsuba", logo: "/sponsors/mitsuba.png", url: "", scale: 0.92 },
];
