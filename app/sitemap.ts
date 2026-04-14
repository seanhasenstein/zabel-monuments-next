import type { MetadataRoute } from "next";

const BASE_URL = "https://www.zabelmonuments.com";

const routes = [
  "",
  "/about",
  "/contact",
  "/faq",
  "/gallery/companion-monuments",
  "/gallery/etchings",
  "/gallery/garden-art",
  "/gallery/hmong-monuments",
  "/gallery/individual-monuments",
  "/gallery/jewish-monuments",
  "/gallery/slant-monuments",
  "/granite-colors",
  "/guarantee",
  "/history",
  "/services",
  "/staff",
  "/why-choose-us",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
