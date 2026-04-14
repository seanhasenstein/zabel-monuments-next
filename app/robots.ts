import type { MetadataRoute } from "next";

const BASE_URL = "https://www.zabelmonuments.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/contact/success"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
