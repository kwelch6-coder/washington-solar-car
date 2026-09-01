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
 * The single all-subteams application form that used to live here is gone:
 * applying is now per-subteam, and every Join the Team call to action points
 * at the internal APPLY_PATH page instead, which is where these two forms are
 * offered. Business has no form yet — see `subTeams` in lib/data.ts.
 */
export const links = {
  instagram: "https://www.instagram.com/solarvehicleteamuw/",
  linkedin: "https://www.linkedin.com/company/solarvehicleteamuw",
  email: "svtuw@uw.edu",
  donate:
    "https://www.zeffy.com/en-US/donation-form/help-us-race-at-american-solar-car-challenge",
  applyMechanical:
    "https://docs.google.com/forms/d/e/1FAIpQLSfsKaRukCikBrVyzfyoqAhPPVOX5_9A22e8znTZsHQTLaHAGw/viewform",
  applyElectrical:
    "https://docs.google.com/forms/d/e/1FAIpQLSecw4pRc5Wo8qW7J2uXjCOhWAibaRlqh96-dxAe86HpLJdnvQ/viewform",
  /**
   * The lab sandbox. An absolute URL to the lab branch deployment, not a
   * relative /lab path: the lab routes live only on that branch, so a relative
   * link would 404 here. Absolute means the same link works from production
   * and from the lab, with no per-context behaviour.
   */
  lab: "https://washington-solar-car-git-lab-svt-uw.vercel.app",
} as const;

/**
 * The internal apply page. Deliberately absent from the nav list — the Join
 * the Team button is its only nav-level entry point.
 */
export const APPLY_PATH = "/apply";

/** Spread onto any anchor leaving the site. */
export const external = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
