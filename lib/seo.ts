import type { Metadata } from "next"

import { siteProfile, siteUrl } from "@/constants/site"

type SeoConfig = {
  title: string
  description: string
  path?: string
  keywords?: string[]
}

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: SeoConfig): Metadata {
  const url = `${siteUrl}${path}`
  const fullTitle =
    title === siteProfile.name ? title : `${title} | ${siteProfile.name}`
  const browserTitle =
    path === "/"
      ? `${siteProfile.name} | Backend, AI & Cloud Developer`
      : fullTitle

  return {
    title: {
      absolute: browserTitle,
    },
    description,
    keywords: [
      siteProfile.name,
      "Backend Developer",
      "Software Developer",
      "AI Developer",
      "Cloud Developer",
      "B.Tech Computer Science",
      "FastAPI",
      "Flask",
      "AWS",
      "Docker",
      "REST APIs",
      ...keywords,
    ],
    authors: [{ name: siteProfile.name, url: siteProfile.linkedin }],
    creator: siteProfile.name,
    publisher: siteProfile.name,
    category: "technology",
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: `${siteProfile.name} Portfolio`,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteProfile.name} engineering portfolio preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/twitter-image"],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  }
}
