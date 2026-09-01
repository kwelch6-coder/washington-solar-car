import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Obscurity, not security — the route is discoverable from the bundle
      // and the footer links to it. This only keeps it out of search.
      disallow: "/lab",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
