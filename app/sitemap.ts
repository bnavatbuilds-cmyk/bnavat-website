import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/intellectual-property",
    "/cookie-policy",
  ];

  return routes.map((route) => ({
    url: `${BRAND.siteUrl}${route}`,
    lastModified: new Date("2026-10-30"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.7,
  }));
}
