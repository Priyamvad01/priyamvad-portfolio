export const siteProfile = {
  name: "Priyamvad Ranjan",
  role: "Backend Developer | Software Developer | AI & Cloud Developer",
  education: "B.Tech Computer Science Engineering",
  email: "priyamvad2104@gmail.com",
  phone: "+91 8829926478",
  github: "https://github.com/Priyamvad01",
  linkedin: "https://www.linkedin.com/in/priyamvad-ranjan-5767a0250",
} as const

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://priyamvad.dev"

export const siteNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Certifications", href: "/certifications" },
  { label: "Terminal", href: "/terminal" },
  { label: "Contact", href: "/contact" },
] as const

export const plannedRoutes = [
  "/",
  "/about",
  "/projects",
  "/projects/[slug]",
  "/skills",
  "/certifications",
  "/terminal",
  "/contact",
] as const
