import { ArrowLeft, Compass, Home } from "lucide-react"
import Link from "next/link"

import { AnimatedContainer } from "@/components/animations/animated-container"
import { Container } from "@/components/layout/container"
import { GridBackground } from "@/components/layout/grid-background"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { SectionGlow } from "@/components/layout/section-glow"
import { GradientBadge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"
import { GlowButton, SecondaryButton } from "@/components/ui/premium-button"

export default function NotFound() {
  return (
    <PageWrapper className="overflow-hidden pt-0">
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-32">
        <div aria-hidden="true" className="absolute inset-0">
          <GridBackground className="opacity-45 [mask-image:radial-gradient(ellipse_at_center,black,transparent_76%)]" />
          <SectionGlow position="center" />
        </div>
        <Container className="relative z-10 pb-20">
          <AnimatedContainer className="mx-auto max-w-4xl text-center">
            <GradientBadge>404 | Route unavailable</GradientBadge>
            <h1 className="text-fluid-display mt-7">
              This route has no active system yet.
            </h1>
            <p className="text-subtitle mx-auto mt-7 max-w-2xl">
              The portfolio is still structured for clean recovery. Return to
              the homepage, or continue into the project architecture.
            </p>
            <GlassCard intensity="strong" className="mx-auto mt-9 max-w-2xl p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <GlowButton asChild>
                  <Link href="/">
                    <Home className="size-4" />
                    Back Home
                  </Link>
                </GlowButton>
                <SecondaryButton asChild>
                  <Link href="/projects">
                    <Compass className="size-4" />
                    View Projects
                  </Link>
                </SecondaryButton>
              </div>
            </GlassCard>
            <Link
              href="/contact"
              className="micro-transition mt-7 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-100"
            >
              <ArrowLeft className="size-4" />
              Contact Priyamvad
            </Link>
          </AnimatedContainer>
        </Container>
      </section>
    </PageWrapper>
  )
}
