import { ArrowRight, BrainCircuit, GraduationCap, Rocket, ServerCog } from "lucide-react"
import Link from "next/link"

import { AnimatedContainer } from "@/components/animations/animated-container"
import { Container } from "@/components/layout/container"
import { GridLayout } from "@/components/layout/grid-layout"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { GradientBadge, TechBadge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"
import { GlowButton, SecondaryButton } from "@/components/ui/premium-button"
import { AboutSection } from "@/components/sections/about/about-section"
import { HighlightCard } from "@/components/sections/about/highlight-card"
import { IdentityPanel } from "@/components/sections/about/identity-panel"
import { SectionGlowOverlay } from "@/components/sections/about/section-glow-overlay"
import { StoryCard } from "@/components/sections/about/story-card"
import { TechnicalCard } from "@/components/sections/about/technical-card"
import { TimelineBlock } from "@/components/sections/about/timeline-block"
import {
  coreInterests,
  currentFocus,
  developerJourney,
  highlights,
  mindsetPrinciples,
  technicalDirection,
} from "@/data/about"
import { siteProfile } from "@/constants/site"
import { createMetadata } from "@/lib/seo"

export const metadata = createMetadata({
  title: "About",
  description:
    "About Priyamvad Ranjan, a B.Tech CSE student focused on backend systems, AI-integrated development, cloud deployment, and practical engineering growth.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <PageWrapper className="overflow-hidden pt-0">
      <section className="relative isolate min-h-[78svh] overflow-hidden pt-32 md:pt-40">
        <SectionGlowOverlay position="center" />
        <Container className="relative z-10 grid min-h-[calc(78svh-8rem)] items-center gap-10 pb-16 lg:grid-cols-[1.08fr_0.92fr]">
          <AnimatedContainer className="max-w-4xl">
            <GradientBadge>
              About Priyamvad | B.Tech CSE | Backend + AI + Cloud
            </GradientBadge>
            <h1 className="text-fluid-display mt-7">
              Building an engineering identity around systems that are clear,
              useful, and ready to grow.
            </h1>
            <p className="text-subtitle mt-7 max-w-2xl">
              I&apos;m Priyamvad Ranjan, a Computer Science student developing a
              backend-first skillset through Python, APIs, AI-integrated
              applications, cloud deployment, and DevOps workflows.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GlowButton asChild>
                <Link href="/projects">
                  Explore Work <ArrowRight className="size-4" />
                </Link>
              </GlowButton>
              <SecondaryButton asChild>
                <Link href="/skills">View Skills</Link>
              </SecondaryButton>
            </div>
          </AnimatedContainer>

          <AnimatedContainer delay={0.15}>
            <GlassCard intensity="strong" className="p-6 md:p-7">
              <p className="text-label-premium mb-5">Profile Signal</p>
              <div className="space-y-4">
                {[
                  {
                    icon: GraduationCap,
                    label: "Education",
                    value: siteProfile.education,
                  },
                  {
                    icon: ServerCog,
                    label: "Primary Direction",
                    value: "Backend systems and REST API development",
                  },
                  {
                    icon: BrainCircuit,
                    label: "Growth Track",
                    value: "AI workflows, cloud deployment, and DevOps habits",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/8 bg-black/18 p-4"
                  >
                    <span className="flex size-10 items-center justify-center rounded-xl bg-cyan-200/8 text-cyan-100">
                      <item.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-200">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedContainer>
        </Container>
      </section>

      <AboutSection
        eyebrow="Developer Story"
        title="Learning through real systems, not just isolated tutorials."
        description="The story is intentionally grounded: a student building direction through project work, backend structure, AI use cases, and deployment-oriented thinking."
        glow="left"
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <StoryCard title="A practical engineering path" meta="Intro Section">
            <p>
              Priyamvad is growing as a backend and software developer with a
              clear technical direction: understand how systems are designed,
              how data moves through APIs, and how applications become reliable
              enough to deploy.
            </p>
            <p>
              His current work is centered around Python backend development,
              AI-integrated features, cloud deployment fundamentals, and the
              engineering habits that make a project easier to maintain.
            </p>
          </StoryCard>
          <TimelineBlock items={developerJourney} />
        </div>
      </AboutSection>

      <AboutSection
        eyebrow="Technical Direction"
        title="A backend-first roadmap connected to AI, cloud, and delivery."
        description="These are the technical lanes shaping the portfolio and the projects that will grow around it."
        glow="right"
      >
        <GridLayout columns="three">
          {technicalDirection.map((item) => (
            <TechnicalCard key={item.title} {...item} />
          ))}
        </GridLayout>
      </AboutSection>

      <AboutSection
        eyebrow="Engineering Mindset"
        title="Thinking beyond features: structure, clarity, and maintainability."
        description="The goal is not to collect tools, but to learn how each tool supports a better system."
      >
        <GridLayout columns="three">
          {mindsetPrinciples.map((item) => (
            <TechnicalCard key={item.title} {...item} />
          ))}
        </GridLayout>
      </AboutSection>

      <AboutSection
        eyebrow="Core Areas of Interest"
        title="Where backend logic, intelligent workflows, and cloud systems meet."
        glow="center"
      >
        <GridLayout columns="three">
          {coreInterests.map((item) => (
            <TechnicalCard key={item.title} {...item} />
          ))}
        </GridLayout>
      </AboutSection>

      <AboutSection
        eyebrow="Learning Philosophy"
        title="Build first, understand deeper, then improve the system."
        description="The learning approach is implementation-led: pick meaningful projects, make the system work, then refine architecture, reliability, and delivery."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <StoryCard title="Grounded growth through implementation">
            <p>
              Priyamvad&apos;s learning style is practical. Instead of treating
              frameworks as checkboxes, he uses projects to understand where
              backend structure, database decisions, API contracts, and
              deployment requirements actually matter.
            </p>
            <p>
              This keeps the portfolio focused on real engineering signals:
              clean service boundaries, useful AI integration, environment-aware
              setup, and project documentation that a recruiter or engineer can
              follow.
            </p>
          </StoryCard>
          <GlassCard className="p-6">
            <Rocket className="mb-5 size-6 text-cyan-100" />
            <p className="text-label-premium mb-3">Improvement Loop</p>
            <h3 className="text-xl font-semibold text-white">
              Project, review, refine, document.
            </h3>
            <p className="text-body-premium mt-4">
              Each build becomes a feedback cycle: implement the core workflow,
              improve structure, prepare deployment, and document the engineering
              decisions clearly.
            </p>
          </GlassCard>
        </div>
      </AboutSection>

      <AboutSection
        eyebrow="Current Focus"
        title="What Priyamvad is actively shaping next."
        description="A realistic map of the tools and engineering habits currently being strengthened."
        glow="left"
      >
        <GlassCard intensity="strong" className="p-6 md:p-8">
          <div className="flex flex-wrap gap-3">
            {currentFocus.map((item) => (
              <TechBadge key={item}>{item}</TechBadge>
            ))}
          </div>
        </GlassCard>
      </AboutSection>

      <AboutSection>
        <IdentityPanel />
      </AboutSection>

      <AboutSection
        eyebrow="Mini Highlights"
        title="Small but honest signals of direction and readiness."
        description="No inflated numbers, just a concise snapshot of the current portfolio foundation."
      >
        <GridLayout columns="four">
          {highlights.map((item) => (
            <HighlightCard key={item.label} {...item} />
          ))}
        </GridLayout>
      </AboutSection>

      <AboutSection glow="right">
        <GlassCard intensity="strong" className="p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-label-premium mb-3">CTA</p>
              <h2 className="text-section-title">
                Explore the projects that turn this direction into proof.
              </h2>
              <p className="text-body-premium mt-4 max-w-2xl">
                The next layer of the portfolio connects this identity to case
                studies, backend architecture, AI workflows, and deployment
                decisions.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <GlowButton asChild>
                <Link href="/projects">
                  View Projects <ArrowRight className="size-4" />
                </Link>
              </GlowButton>
              <SecondaryButton asChild>
                <Link href="/contact">Start a Conversation</Link>
              </SecondaryButton>
            </div>
          </div>
        </GlassCard>
      </AboutSection>
    </PageWrapper>
  )
}
