/**
 * Every user-facing appearance of the team's name resolves through here.
 *
 * The rename from "Solar Vehicle Team at the University of Washington" to
 * "Washington Solar Car" is in progress, not finalised. Editing TEAM_NAME
 * below reverts the entire site — page titles, metadata, hero lockup, footer,
 * alt text and body copy all read from it. Nothing hardcodes the name.
 *
 * Deliberately one form only: no short form, no initialism. The old SVTUW /
 * UW SVT abbreviations are retired and must not come back.
 */
export const TEAM_NAME = "Washington Solar Car";

/** The affiliation, kept separate so the rename can't disturb it. */
export const UNIVERSITY = "University of Washington";

/** The team's positioning line. Opens the home page. */
export const TAGLINE = `${TEAM_NAME} turns sun into speed, and students into leaders.`;

/**
 * Every outbound destination the site links to. One place to swap them.
 *
 * `apply` currently points at Google's `/closedform` URL — the form is not
 * accepting responses. When recruiting reopens the same form, the live path is
 * `/viewform`; changing the suffix here updates every Join the Team call to
 * action at once.
 */
export const links = {
  instagram: "https://www.instagram.com/solarvehicleteamuw/",
  email: "svtuw@uw.edu",
  donate:
    "https://www.zeffy.com/en-US/donation-form/help-us-race-at-american-solar-car-challenge",
  apply:
    "https://docs.google.com/forms/d/e/1FAIpQLSem-i-Lbalqol25wIHA7YWzH4BR9YGDG0njnOvqwfMjum2qNQ/closedform",
} as const;

/** Spread onto any anchor leaving the site. */
export const external = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
