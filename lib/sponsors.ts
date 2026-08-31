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
   * Skip the white filter and render this logo in its own colours.
   *
   * Set where `brightness(0) invert(1)` destroys the logo: any file with a
   * solid background flattens to a plain white block, and STF's outline mark
   * fills its own counters and becomes unreadable. A full-colour logo on the
   * wall beats a missing sponsor, so these render as supplied. Each one wants
   * a transparent version sourced — see the report.
   */
  keepColor?: boolean;
};

/**
 * Alphabetical, deliberately. Do not reorder into tiers — the tier structure
 * is not finalized, and any ordering that implies ranking has to be redone.
 * Every logo is treated at equal size.
 *
 * Every logo in the source folder is represented here except tesla.png, which
 * is a zero-byte file with no image data in it at all and cannot be rendered
 * by anything. Files that cannot take the white filter are not dropped — they
 * carry `keepColor` and render as supplied.
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
  // Artwork sits on its own solid black field, which very nearly matches the
  // band, so it reads almost seamlessly despite keeping its colours.
  {
    name: "Earthlight Villas",
    logo: "/sponsors/earthlight-villas.png",
    url: "",
    scale: 0.998,
    keepColor: true,
  },
  {
    name: "Electroimpact",
    logo: "/sponsors/electroimpact.png",
    url: "",
    scale: 0.619,
    keepColor: true,
  },
  { name: "Kenesto", logo: "/sponsors/kenesto.png", url: "https://kenesto.com", scale: 0.674 },
  // Widest mark at 6.7:1, so it is width-limited and reads heavy at 1.
  // Corporate root serves Japanese; there is an English section but linking it
  // would be a deep link.
  { name: "Mitsuba", logo: "/sponsors/mitsuba.png", url: "https://www.mitsuba.co.jp", scale: 0.338 },
  {
    name: "SendCutSend",
    logo: "/sponsors/sendcutsend.png",
    url: "",
    scale: 0.408,
    keepColor: true,
  },
  // Transparent background, so it is not a white-block case — but the mark is
  // an outline with an opaque white interior, and the filter closes its
  // counters into an unreadable blob. Verified by rendering both ways.
  {
    name: "Student Technology Fee",
    logo: "/sponsors/stf.png",
    url: "",
    scale: 0.654,
    keepColor: true,
  },
  {
    name: "The Gill Corporation",
    logo: "/sponsors/gill-corporation.png",
    url: "",
    scale: 0.654,
    keepColor: true,
  },
];
