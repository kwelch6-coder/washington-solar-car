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
export const labDifferences: Record<string, string[]> = {
  "/about": [
    "The race result headline is bigger, and split into two lines",
    "Body text starts dimmed and fades in as you scroll down the page",
  ],
  "/sponsors": [
    "New interactive sponsor tier section, styled as a racing grid",
    "Tier names and dollar amounts are placeholders, not real",
  ],
  "/team": [
    "Placeholder grid showing where team headshots will go",
    "The Business subteam card now says its details are still being written",
  ],
};

/** Shown for any route with no entry above. */
export const NO_DIFFERENCES =
  "No changes on this page yet. This page matches the live site.";
