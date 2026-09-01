import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Production routes only. /lab is deliberately absent. */
const ROUTES = ["", "/about", "/team", "/cars", "/sponsors", "/contact", "/apply"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));
}
