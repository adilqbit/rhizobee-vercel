import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/services",
  "/solutions",
  "/industries",
  "/careers",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.rhizobee.com";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
