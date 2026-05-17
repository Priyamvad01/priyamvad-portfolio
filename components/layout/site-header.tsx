"use client"

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons"
import { siteNavigation, siteProfile } from "@/constants/site"
import { cn } from "@/lib/utils"

import { Container } from "./container"

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/"
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const background = useTransform(
    scrollY,
    [0, 120],
    ["rgba(5, 7, 11, 0.42)", "rgba(5, 7, 11, 0.78)"]
  )
  const borderColor = useTransform(
    scrollY,
    [0, 120],
    ["rgba(255,255,255,0.08)", "rgba(255,255,255,0.14)"]
  )
  const navHeight = useTransform(scrollY, [0, 120], [68, 58])
  const navY = useTransform(scrollY, [0, 120], [18, 10])
  const navScale = useTransform(scrollY, [0, 120], [1, 0.985])
  const navShadow = useTransform(
    scrollY,
    [0, 120],
    [
      "0 18px 70px rgba(0,0,0,0.16)",
      "0 22px 85px rgba(0,0,0,0.28), 0 0 42px rgba(103,232,249,0.06)",
    ]
  )

  return (
    <motion.header className="fixed inset-x-0 top-0 z-50 px-2.5 sm:px-5">
      <motion.div
        className="relative mx-auto max-w-[88rem] rounded-2xl border backdrop-blur-2xl"
        style={{
          y: navY,
          height: navHeight,
          scale: navScale,
          background,
          borderColor,
          boxShadow: navShadow,
        }}
      >
        <Container className="flex h-full items-center justify-between gap-3 px-3 sm:px-5 lg:px-6">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-sm font-semibold text-cyan-100 shadow-[0_0_34px_rgba(103,232,249,0.08)]">
              PR
            </span>
            <span className="hidden truncate text-sm font-medium text-white sm:block">
              {siteProfile.name}
            </span>
          </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {siteNavigation.map((item) => {
            const active = isActiveRoute(pathname, item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm transition duration-300",
                  active
                    ? "text-white"
                    : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.08] shadow-[0_0_34px_rgba(103,232,249,0.07)]"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={siteProfile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Priyamvad Ranjan GitHub"
            className="micro-transition touch-target hidden size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/15 hover:bg-white/[0.08] hover:text-white sm:flex"
          >
            <GitHubIcon className="size-4" />
          </Link>
          <Link
            href={siteProfile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Priyamvad Ranjan LinkedIn"
            className="micro-transition touch-target hidden size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/15 hover:bg-white/[0.08] hover:text-white sm:flex"
          >
            <LinkedInIcon className="size-4" />
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
            className="micro-transition touch-target flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08] lg:hidden"
          >
            {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
        </Container>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.985, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, scale: 0.985, filter: "blur(8px)" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[calc(100dvh-5.5rem)] overflow-y-auto border-t border-white/8 bg-background/92 backdrop-blur-2xl lg:hidden"
          >
            <Container className="py-4">
              <nav className="grid gap-1">
                {siteNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "touch-target rounded-xl px-3 py-3 text-sm transition duration-300",
                      isActiveRoute(pathname, item.href)
                        ? "border border-white/10 bg-white/[0.07] text-white"
                        : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Link
                  href={siteProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm text-slate-200 transition hover:bg-white/[0.07]"
                >
                  <GitHubIcon className="size-4" />
                  GitHub
                  <ExternalLink className="size-3" />
                </Link>
                <Link
                  href={siteProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm text-slate-200 transition hover:bg-white/[0.07]"
                >
                  <LinkedInIcon className="size-4" />
                  LinkedIn
                  <ExternalLink className="size-3" />
                </Link>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
      </motion.div>
    </motion.header>
  )
}
