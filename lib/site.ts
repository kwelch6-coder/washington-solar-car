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
