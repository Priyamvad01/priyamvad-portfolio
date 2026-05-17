"use client"

import { motion } from "framer-motion"
import { ArrowDownToLine, ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

import { cinematicReveal, fadeUp, staggerContainer } from "@/components/animations/motion-presets"
import { Container } from "@/components/layout/container"
import { GradientBadge } from "@/components/ui/badge"
import { GlowButton, PrimaryButton, SecondaryButton } from "@/components/ui/premium-button"
import { siteProfile } from "@/constants/site"

import { HeroAtmosphere } from "./hero-atmosphere"
import { HeroSocialLinks } from "./hero-social-links"
import { HeroSystemPanel } from "./hero-system-panel"
import { ScrollIndicator } from "./scroll-indicator"

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pt-28 md:pt-32">
      <HeroAtmosphere />
      <Container className="relative z-10 grid min-h-[calc(100svh-8rem)] items-center gap-10 pb-14 lg:grid-cols-[1.08fr_0.92fr] xl:gap-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.div variants={fadeUp}>
            <GradientBadge>
              B.Tech CSE | Backend systems | AI + Cloud workflows
            </GradientBadge>
          </motion.div>
          <motion.h1
            variants={cinematicReveal}
            className="text-fluid-display mt-7 max-w-5xl"
          >
            Building backend-first systems with practical AI and cloud delivery
            awareness.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-subtitle mt-7 max-w-2xl"
          >
            I&apos;m {siteProfile.name}, a Computer Science student focused on
            Python backend development, REST APIs, AI-integrated workflows,
            Docker, and cloud-ready deployment practices.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <PrimaryButton asChild>
              <Link href="/projects">
                View Projects <ArrowRight className="size-4" />
              </Link>
            </PrimaryButton>
            <GlowButton asChild>
              <Link href="/contact">
                Contact Me <Mail className="size-4" />
              </Link>
            </GlowButton>
            <SecondaryButton
              type="button"
              disabled
              aria-disabled="true"
              className="cursor-not-allowed"
            >
              Resume Coming Soon <ArrowDownToLine className="size-4" />
            </SecondaryButton>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-7">
            <HeroSocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 22, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.74, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-xl lg:ml-auto"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-cyan-200/6 blur-3xl" />
          <HeroSystemPanel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="absolute bottom-6 left-5 sm:left-6 lg:left-8"
        >
          <ScrollIndicator />
        </motion.div>
      </Container>
    </section>
  )
}
