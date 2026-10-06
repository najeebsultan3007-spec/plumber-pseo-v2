import type { MetadataRoute } from "next";
import { CITIES, cityPath } from "@/data/cities";
import { SITE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return CITIES.map((c) => ({ url: `${SITE_URL}${cityPath(c)}`, changeFrequency: "monthly", priority: 0.8 }));
}
