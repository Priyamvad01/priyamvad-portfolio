import { ArrowRight, Bot, Cloud, Command, Cpu, ServerCog, Sparkles, SquareTerminal } from "lucide-react"
import dynamic from "next/dynamic"
import Link from "next/link"

import { AnimatedContainer } from "@/components/animations/animated-container"
import { Container } from "@/components/layout/container"
import { GridBackground } from "@/components/layout/grid-background"
import { GridLayout } from "@/components/layout/grid-layout"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { SectionGlow } from "@/components/layout/section-glow"
import { SectionHeading } from "@/components/layout/section-heading"
import { FeatureCard } from "@/components/sections/feature-card"
import { SystemPanel } from "@/components/sections/terminal/system-panel"
import { GradientBadge, TechBadge } from "@/components/ui/badge"
import { Divider } from "@/components/ui/divider"
import { GlassCard } from "@/components/ui/glass-card"
import { GlowButton, SecondaryButton } from "@/components/ui/premium-button"
import { terminalCommandNames } from "@/data/terminal"
import { createMetadata } from "@/lib/seo"

const TerminalWindow = dynamic(
  () =>
    import("@/components/sections/terminal/terminal-window").then(
      (mod) => mod.TerminalWindow
    ),
  {
    loading: () => (
      <div className="glass-panel-strong min-h-[28rem] rounded-[2rem] p-5">
        <div className="mb-5 flex gap-2">
          <span className="size-3 rounded-full bg-white/20" />
          <span className="size-3 rounded-full bg-white/16" />
          <span className="size-3 rounded-full bg-white/12" />
        </div>
        <div className="space-y-3">
          <div className="h-4 w-2/3 rounded-full bg-white/10" />
          <div className="h-4 w-1/2 rounded-full bg-white/[0.07]" />
          <div className="h-24 rounded-2xl border border-white/8 bg-black/20" />
        </div>
      </div>
    ),
  }
)

export const metadata = createMetadata({
  title: "Terminal",
  description:
    "Interactive engineering console for Priyamvad Ranjan's portfolio with commands for profile, skills, projects, healthcare system, DevOps, GitHub, and contact routes.",
  path: "/terminal",
})

const commandSections = [
  {
    title: "Developer info commands",
    description:
      "Explore profile identity, engineering mindset, learning direction, and contact paths.",
    icon: Command,
    tags: ["about", "whoami", "experience", "contact"],
  },
  {
    title: "Skills commands",
    description:
      "Inspect backend, AI/ML, cloud, DevOps, frontend, database, and toolchain categories.",
    icon: ServerCog,
    tags: ["skills", "tech-stack", "stack"],
  },
  {
    title: "Project commands",
    description:
      "Open the healthcare system architecture, AI workflow, OCR flow, and deployment direction.",
    icon: Bot,
    tags: ["projects", "healthcare-system"],
  },
  {
    title: "Deployment commands",
    description:
      "Review Docker, Jenkins, CI/CD, AWS, and deployment architecture concepts realistically.",
    icon: Cloud,
    tags: ["deploy-status", "docker", "ci-cd", "aws"],
  },
]

const mobileTips = [
  "Tap the command input and type help.",
  "Use clear to reset the console.",
  "Command output scrolls inside the terminal window.",
  "Links inside responses open portfolio routes or profiles.",
]

export default function TerminalPage() {
  return (
    <PageWrapper className="overflow-hidden pt-0">
      <section className="relative isolate overflow-hidden pt-32 md:pt-40">
        <div aria-hidden="true" className="absolute inset-0">
          <GridBackground className="opacity-55 [mask-image:radial-gradient(ellipse_at_center,black,transparent_76%)]" />
          <SectionGlow position="center" />
        </div>
        <Container className="relative z-10 pb-16">
          <AnimatedContainer className="max-w-4xl">
            <GradientBadge>
              Terminal Lab | Interactive Engineering Console
            </GradientBadge>
            <h1 className="text-fluid-display mt-7">
              A premium command interface for exploring backend, AI, and cloud
              engineering direction.
            </h1>
            <p className="text-subtitle mt-7 max-w-2xl">
              This is a focused developer console, not a fake hacker simulator.
              Use commands to inspect Priyamvad&apos;s profile, skills, projects,
              healthcare case study, and deployment mindset.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["help", "skills", "healthcare-system", "deploy-status", "github"].map((command) => (
                <TechBadge key={command}>{command}</TechBadge>
              ))}
            </div>
          </AnimatedContainer>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <SectionGlow position="left" />
        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <AnimatedContainer>
              <TerminalWindow />
            </AnimatedContainer>
            <AnimatedContainer delay={0.12}>
              <GlassCard intensity="strong" className="p-6">
                <SquareTerminal className="mb-5 size-6 text-cyan-100" />
                <p className="text-label-premium mb-3">Command System</p>
                <h2 className="text-2xl font-semibold tracking-[-0.025em] text-white">
                  Useful commands, structured responses, and realistic routing.
                </h2>
                <p className="text-body-premium mt-4">
                  The console supports command parsing, command history, clear,
                  auto-scroll, internal portfolio links, and professional
                  terminal-styled output cards.
                </p>
                <Divider className="my-6" />
                <div className="flex flex-wrap gap-2">
                  {terminalCommandNames.slice(0, 14).map((command) => (
                    <TechBadge key={command}>{command}</TechBadge>
                  ))}
                </div>
              </GlassCard>
            </AnimatedContainer>
          </div>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="System Info"
            title="A compact dashboard for the console environment."
            description="The terminal is paired with lightweight system panels so the page feels like a modern engineering console."
          />
          <div className="mt-8">
            <SystemPanel />
          </div>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <SectionGlow position="right" />
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Command Groups"
            title="Commands are grouped around real portfolio exploration."
            description="Each command returns structured, readable output instead of noisy fake terminal spam."
          />
          <GridLayout columns="four" className="mt-8">
            {commandSections.map((item) => (
              <GlassCard interactive key={item.title} className="h-full">
                <item.icon className="mb-5 size-5 text-cyan-100" />
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-caption-premium mt-3">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <TechBadge key={tag}>{tag}</TechBadge>
                  ))}
                </div>
              </GlassCard>
            ))}
          </GridLayout>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <GlassCard intensity="strong" className="p-6 md:p-8">
              <Cpu className="mb-5 size-6 text-cyan-100" />
              <p className="text-label-premium mb-3">Mobile Terminal Experience</p>
              <h2 className="text-section-title">
                Responsive console layout with touch-friendly command input.
              </h2>
              <p className="text-body-premium mt-4">
                The terminal uses an internal scroll area, readable monospace
                sizing, compact badges, and command input that remains usable on
                mobile screens.
              </p>
            </GlassCard>
            <GridLayout columns="two">
              {mobileTips.map((tip) => (
                <FeatureCard
                  key={tip}
                  title={tip}
                  description="Designed to keep the terminal practical and polished across desktop, tablet, and mobile."
                  icon={Sparkles}
                />
              ))}
            </GridLayout>
          </div>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <GlassCard intensity="strong" className="p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-label-premium mb-3">Next Commands</p>
                <h2 className="text-section-title">
                  Use the console, then open the full engineering case study.
                </h2>
                <p className="text-body-premium mt-4 max-w-2xl">
                  Try `healthcare-system`, `skills`, `deploy-status`, or `github`.
                  The terminal connects directly to the strongest portfolio routes.
                </p>
                <Divider className="mt-6 max-w-xl" />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <GlowButton asChild>
                  <Link href="/projects/healthcare-ai-system">
                    Open Case Study <ArrowRight className="size-4" />
                  </Link>
                </GlowButton>
                <SecondaryButton asChild>
                  <Link href="/contact">Contact Priyamvad</Link>
                </SecondaryButton>
              </div>
            </div>
          </GlassCard>
        </Container>
      </section>
    </PageWrapper>
  )
}
