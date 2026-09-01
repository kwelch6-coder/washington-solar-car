import type { MetadataRoute } from "next";

/**
 * Lab branch. Every route on this deployment is experimental, so the whole
 * origin is disallowed rather than a /lab subtree — that prefix no longer
 * exists here. Production's robots.ts allows the site and disallows nothing.
 *
 * No sitemap is advertised: this deployment should not be indexed at all, and
 * pointing crawlers at production's URLs from here would only muddy things.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
