import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  { p: "", priority: 1.0 },
  { p: "/consultation", priority: 0.9 },
  { p: "/guide", priority: 0.85 },
  { p: "/packages", priority: 0.8 },
  { p: "/bathroom-renovations", priority: 0.8 },
  { p: "/survey-process", priority: 0.7 },
  { p: "/areas-covered", priority: 0.7 },
  { p: "/about", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return paths.map(({ p, priority }) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
