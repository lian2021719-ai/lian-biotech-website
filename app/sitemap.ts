import type { MetadataRoute } from "next";
import { navItems, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...navItems.map((item) => item.href), "/downloads"];

  return routes.map((route) => ({
    url: new URL(route, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "/" ? 1 : 0.8,
  }));
}
