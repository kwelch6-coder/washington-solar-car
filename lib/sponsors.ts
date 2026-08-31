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
 *
 * Every url below was checked by resolving the domain and confirming the site
 * belongs to that company — none were inferred from the company name. Where a
 * domain could not be confirmed, the field stays empty and the logo renders
 * unlinked, which is the intended fallback rather than a defect.
 */
export const sponsors: Sponsor[] = [
  // VERIFY: altair.com 307-redirects to a Siemens corporate page — Altair was
  // acquired by Siemens and no longer runs an independent site. The domain is
  // right; where it lands may not be what the team wants. Clear the url to
  // unlink it.
  {
    name: "Altair",
    logo: "/sponsors/altair.png",
    url: "https://www.altair.com",
    scale: 1.02,
  },
  // Stacked mark: object-contain fits it by height, which shrinks the wordmark
  // well below everything else. Needs the largest correction on the wall.
  {
    name: "Amprius",
    logo: "/sponsors/amprius.png",
    url: "https://amprius.com",
    scale: 1.2,
  },
  // VERIFY: ansys.com 301-redirects to ansys.synopsys.com — Synopsys completed
  // its acquisition of Ansys in July 2025. Same call as Altair above.
  {
    name: "Ansys",
    logo: "/sponsors/ansys.png",
    url: "https://www.ansys.com",
    scale: 0.86,
  },
  {
    name: "Boeing",
    logo: "/sponsors/boeing.png",
    url: "https://www.boeing.com",
    scale: 1.05,
  },
  {
    name: "Celsius",
    logo: "/sponsors/celsius.png",
    url: "https://www.celsius.com",
    scale: 1.02,
  },
  {
    name: "Kenesto",
    logo: "/sponsors/kenesto.png",
    url: "https://kenesto.com",
    scale: 0.98,
  },
  // Widest mark at 6.7:1, so it is width-limited and reads heavy at 1.
  // Corporate root serves Japanese; there is an English section but linking it
  // would be a deep link.
  {
    name: "Mitsuba",
    logo: "/sponsors/mitsuba.png",
    url: "https://www.mitsuba.co.jp",
    scale: 0.92,
  },
];
