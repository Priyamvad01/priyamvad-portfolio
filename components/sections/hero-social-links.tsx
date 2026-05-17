import { Mail } from "lucide-react"
import Link from "next/link"

import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons"
import { siteProfile } from "@/constants/site"

const socialLinks = [
  {
    label: "GitHub",
    href: siteProfile.github,
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: siteProfile.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: `mailto:${siteProfile.email}`,
    icon: Mail,
  },
]

export function HeroSocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialLinks.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-slate-300 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/20 hover:bg-white/[0.07] hover:text-white hover:shadow-[0_0_40px_rgba(103,232,249,0.1)]"
        >
          <item.icon className="size-4 transition group-hover:text-cyan-100" />
          {item.label}
        </Link>
      ))}
    </div>
  )
}
