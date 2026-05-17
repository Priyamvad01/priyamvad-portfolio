import type { MetadataRoute } from "next"

import { siteUrl } from "@/constants/site"
import { projects } from "@/data/projects"

const staticRoutes = [
  "",
  "/about",
  "/skills",
  "/projects",
  "/certifications",
  "/terminal",
  "/contact",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    ...staticRoutes,
    ...projects.map((project) => `/projects/${project.slug}`),
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/projects") ? 0.9 : 0.75,
  }))
}
