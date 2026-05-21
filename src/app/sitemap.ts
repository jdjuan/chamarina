import type { MetadataRoute } from "next";
import { absoluteUrl } from "./seo";

const routes = [
  { path: "/", priority: 1 },
  { path: "/ueber-mich", priority: 0.8 },
  { path: "/themen", priority: 0.9 },
  { path: "/diagnostik", priority: 0.9 },
  { path: "/ablauf-kosten", priority: 0.8 },
  { path: "/praxis", priority: 0.8 },
  { path: "/kontakt", priority: 0.8 },
  { path: "/faqs", priority: 0.6 },
  { path: "/impressum", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
