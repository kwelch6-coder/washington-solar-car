/**
 * What is different on each lab route compared to the live site, written for a
 * club member reviewing the lab rather than for a developer.
 *
 * ⚠ STANDING RULE: whenever a lab-only feature is added, changed or removed,
 * the matching bullet changes in the SAME commit. People are being asked to
 * review specific things against this list, so a stale list is worse than no
 * list — it sends them looking for something that is not there, or lets a real
 * change go unmentioned.
 *
 * Routes with no entry are handled explicitly by the panel, which says the page
 * matches the live site. Never render an empty panel: that reads as broken.
 */
/**
 * Differences that apply on every page rather than one route. Shown above the
 * route-specific bullets so a site-wide change cannot go unmentioned just
 * because the map is keyed by route.
 */
export const SITE_WIDE: string[] = [
  "The menu has a Home link that the live site does not need",
];

export const labDifferences: Record<string, string[]> = {
  "/": [
    "The quote under the numbers fades in word by word as you scroll",
    "More space around that quote, and a reworked shadow behind the hero title",
  ],
  "/about": [
    "The race result headline is bigger, and split into two lines",
    "Body text starts dimmed and fades in as you scroll down the page",
  ],
  "/sponsors": [
    "New interactive sponsor tier section, styled as a racing grid",
    "Tier names and dollar amounts are placeholders, not real",
  ],
  "/team": [
    "New photo gallery from the race season, in a different order each visit",
    "Placeholder grid showing where team headshots will go",
    "The Business subteam card now says its details are still being written",
  ],
};

/**
 * Shown for any route with no entry above. Worded to stay true alongside
 * SITE_WIDE: claiming the page "matches the live site" outright would be wrong
 * while a site-wide difference exists.
 */
export const NO_DIFFERENCES =
  "No changes specific to this page — it otherwise matches the live site.";
