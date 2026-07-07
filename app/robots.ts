import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://susiddhaagro.com/sitemap.xml",

    host: "https://susiddhaagro.com",
  };
}