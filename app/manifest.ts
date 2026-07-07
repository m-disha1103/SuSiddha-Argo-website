import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SuSiddha Agro Products",
    short_name: "SuSiddha",
    description:
      "Premium Unpolished Sona Masuri Rice from SuSiddha Agro Products.",

    start_url: "/",

    display: "standalone",

    background_color: "#FFFDF8",

    theme_color: "#1F5132",

    orientation: "portrait",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}