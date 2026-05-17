import { Mail } from "lucide-react"
import Link from "next/link"

import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons"
import { siteNavigation, siteProfile } from "@/constants/site"

import { Container } from "./container"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-black/10 py-10">
      <Container className="grid gap-8 lg:grid-cols-[1.1fr_1fr_0.8fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-sm font-semibold text-cyan-100 shadow-[0_0_34px_rgba(103,232,249,0.08)]">
              PR
            </span>
            <p className="font-medium text-white">{siteProfile.name}</p>
          </div>
          <p className="text-body-premium max-w-md">
            Building intelligent backend systems with clean APIs, cloud-aware
            delivery, and an engineering mindset shaped for production.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
          {siteNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-400 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-3 text-sm text-slate-400">
          <Link
            href={siteProfile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <GitHubIcon className="size-4" />
            GitHub
          </Link>
          <Link
            href={siteProfile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <LinkedInIcon className="size-4" />
            LinkedIn
          </Link>
          <Link
            href={`mailto:${siteProfile.email}`}
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Mail className="size-4" />
            {siteProfile.email}
          </Link>
        </div>
      </Container>
    </footer>
  )
}
