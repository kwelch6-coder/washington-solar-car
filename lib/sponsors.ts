export type Sponsor = {
  /** Used for alt text. See the note below on legal names. */
  name: string;
  /** Path under public/. */
  logo: string;
  /** Empty until the links pass. A populated value renders the logo as a
   *  new-tab link; empty renders a plain image. Both paths are built. */
  url: string;
  /**
   * Optical size: the fraction of the row's height this logo may occupy.
   * 0 to 1, default 1. Width is always capped at the cell, so a value here can
   * never push a logo outside its column.
   *
   * Bounding boxes lie — a 6.7:1 wordmark and a 1:1 emblem fitted to the same
   * box do not read as the same size — so these are tuned by eye against a
   * rendered wall, not calculated.
   *
   * Deliberately NOT a CSS transform. `transform: scale()` grows the element
   * box as well as the artwork, which pushed the square Earthlight tile 34px
   * wider than its cell and overlapped its neighbour on phones.
   */
  scale?: number;
  /**
   * How this logo becomes white. Exactly one route, never two.
   *
   *  "filter"    Default. The original has a transparent background, so the
   *              CSS filter whitens it at render time; the file is untouched.
   *  "converted" Points at a pre-converted white PNG. Already white, so it
   *              must NOT also be filtered.
   *  "original"  Cannot be whitened without losing part of the logo, so it
   *              keeps its own colours. Needs a one-colour version from the
   *              sponsor.
   *
   * Three states rather than a boolean: "already white" and "must stay
   * coloured" both mean "no CSS filter" but are not the same thing to
   * maintain.
   */
  treatment?: "filter" | "converted" | "original";
};

/**
 * Alphabetical, deliberately. Do not reorder into tiers — the tier structure
 * is not finalized, and any ordering that implies ranking has to be redone.
 * Every logo is treated at equal size.
 *
 * Every logo in the source folder is represented here except tesla.png, which
 * is a zero-byte file with no image data in it at all and cannot be rendered
 * by anything. Files whose originals cannot take the CSS filter are converted
 * to white PNGs ahead of time (see `treatment`); the one logo that survives
 * neither route keeps its own colours rather than shipping broken.
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
  { name: "Altair", logo: "/sponsors/altair.png", url: "https://www.altair.com", scale: 0.517 },
  // Stacked mark: object-contain fits it by height, which shrinks the wordmark
  // well below everything else. Needs the largest correction on the wall.
  { name: "Amprius", logo: "/sponsors/amprius.png", url: "https://amprius.com", scale: 0.826 },
  // VERIFY: ansys.com 301-redirects to ansys.synopsys.com — Synopsys completed
  // its acquisition of Ansys in July 2025. Same call as Altair above.
  { name: "Ansys", logo: "/sponsors/ansys.png", url: "https://www.ansys.com", scale: 0.592 },
  { name: "Boeing", logo: "/sponsors/boeing.png", url: "https://www.boeing.com", scale: 0.723 },
  { name: "Celsius", logo: "/sponsors/celsius.png", url: "https://www.celsius.com", scale: 0.702 },
  // Converted from a black-background original. Transparent margin trimmed
  // afterwards — the artwork was only 23% of its canvas, which left it far too
  // small once the black field it used to fill was gone.
  {
    name: "Earthlight Villas",
    logo: "/sponsors/earthlight-villas-white.png",
    url: "",
    scale: 0.62,
    treatment: "converted",
  },
  {
    name: "Electroimpact",
    logo: "/sponsors/electroimpact-white.png",
    url: "",
    scale: 0.72,
    treatment: "converted",
  },
  { name: "Kenesto", logo: "/sponsors/kenesto.png", url: "https://kenesto.com", scale: 0.674 },
  // Widest mark at 6.7:1, so it is width-limited and reads heavy at 1.
  // Corporate root serves Japanese; there is an English section but linking it
  // would be a deep link.
  { name: "Mitsuba", logo: "/sponsors/mitsuba.png", url: "https://www.mitsuba.co.jp", scale: 0.338 },
  {
    name: "SendCutSend",
    logo: "/sponsors/sendcutsend-white.png",
    url: "",
    scale: 0.42,
    treatment: "converted",
  },
  // Transparent background, so it is not a white-block case — but the mark is
  // an outline with an opaque white interior, and the filter closes its
  // counters into an unreadable blob. Verified by rendering both ways.
  {
    name: "Student Technology Fee",
    logo: "/sponsors/stf.png",
    url: "",
    scale: 0.654,
    treatment: "original",
  },
  {
    name: "The Gill Corporation",
    logo: "/sponsors/gill-corporation-white.png",
    url: "",
    scale: 0.5,
    treatment: "converted",
  },
];
