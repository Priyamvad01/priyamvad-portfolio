import type { MetadataRoute } from "next"

import { siteProfile } from "@/constants/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteProfile.name} Portfolio`,
    short_name: "Priyamvad",
    description:
      "Premium engineering portfolio for backend systems, AI workflows, and cloud-ready software.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070b",
    theme_color: "#05070b",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
