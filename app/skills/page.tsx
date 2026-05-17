import { ArrowRight, BrainCircuit, Cloud, Code2, Layers3, ServerCog } from "lucide-react"
import dynamic from "next/dynamic"
import Link from "next/link"

import { AnimatedContainer } from "@/components/animations/animated-container"
import { Container } from "@/components/layout/container"
import { GridLayout } from "@/components/layout/grid-layout"
import { GridBackground } from "@/components/layout/grid-background"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { SectionGlow } from "@/components/layout/section-glow"
import { SectionHeading } from "@/components/layout/section-heading"
import { GradientBadge, TechBadge } from "@/components/ui/badge"
import { Divider } from "@/components/ui/divider"
import { GlassCard } from "@/components/ui/glass-card"
import { GlowButton, SecondaryButton } from "@/components/ui/premium-button"
import { DashboardPanel } from "@/components/sections/skills/dashboard-panel"
import { InfrastructureCard } from "@/components/sections/skills/infrastructure-card"
import { LearningRoadmapCard } from "@/components/sections/skills/learning-roadmap-card"
import { SkillCard } from "@/components/sections/skills/skill-card"
import { StackPanel } from "@/components/sections/skills/stack-panel"
import { WorkflowStep } from "@/components/sections/skills/workflow-step"
import {
  aiDataStack,
  backendEcosystem,
  cloudDevOpsStack,
  coreTechStack,
  currentLearningDirection,
  futureRoadmap,
  toolsPlatforms,
  workflowSteps,
} from "@/data/skills"
import { createMetadata } from "@/lib/seo"

const InteractiveCluster = dynamic(
  () =>
    import("@/components/sections/skills/interactive-cluster").then(
      (mod) => mod.InteractiveCluster
    ),
  {
    loading: () => (
      <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-28 rounded-2xl border border-white/8 bg-white/[0.04]"
          />
        ))}
      </div>
    ),
  }
)

export const metadata = createMetadata({
  title: "Skills",
  description:
    "A premium technical capability ecosystem for Priyamvad Ranjan across backend systems, AI-integrated workflows, cloud deployment, DevOps, and modern web development.",
  path: "/skills",
})

export default function SkillsPage() {
  return (
    <PageWrapper className="overflow-hidden pt-0">
      <section className="relative isolate overflow-hidden pt-32 md:pt-40">
        <div aria-hidden="true" className="absolute inset-0">
          <GridBackground className="opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <SectionGlow position="center" />
        </div>
        <Container className="relative z-10 pb-16">
          <AnimatedContainer className="max-w-4xl">
            <GradientBadge>
              Skills ecosystem | Backend-first | AI + Cloud delivery
            </GradientBadge>
            <h1 className="text-fluid-display mt-7">
              A modern engineering stack for backend systems, AI workflows, and
              cloud-ready applications.
            </h1>
            <p className="text-subtitle mt-7 max-w-2xl">
              Priyamvad&apos;s technical direction prioritizes Python backend
              development, REST APIs, practical AI integration, Docker workflows,
              AWS foundations, and production-aware software habits.
            </p>
          </AnimatedContainer>

          <AnimatedContainer delay={0.15} className="mt-10">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: ServerCog,
                  title: "Backend systems",
                  value: "Python / FastAPI / Flask",
                },
                {
                  icon: BrainCircuit,
                  title: "AI integration",
                  value: "OCR / ML services",
                },
                {
                  icon: Cloud,
                  title: "Cloud delivery",
                  value: "AWS / Docker / CI/CD",
                },
              ].map((item) => (
                <GlassCard key={item.title} className="p-5">
                  <item.icon className="mb-4 size-5 text-cyan-100" />
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-caption-premium mt-2">{item.value}</p>
                </GlassCard>
              ))}
            </div>
          </AnimatedContainer>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <DashboardPanel
            eyebrow="Core Technical Stack"
            title="Primary tools are weighted toward backend, AI systems, cloud, and scalable engineering."
            description="The stack is intentionally organized by priority instead of presenting every technology as equal."
          >
            <StackPanel items={coreTechStack} />
          </DashboardPanel>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <SectionGlow position="left" />
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Backend Ecosystem"
            title="API-driven development with structure, data flow, and service boundaries."
            description="This section focuses on the backend capabilities that support real application architecture."
          />
          <GridLayout columns="three" className="mt-8">
            {backendEcosystem.map((item) => (
              <SkillCard key={item.title} {...item} />
            ))}
          </GridLayout>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <SectionGlow position="right" />
        <Container className="relative z-10">
          <DashboardPanel
            eyebrow="AI & Data Processing Stack"
            title="Practical AI-integrated development, not inflated research claims."
            description="The AI direction is focused on useful workflows: OCR, classical ML exposure, prediction concepts, and backend service integration."
          >
            <GridLayout columns="three">
              {aiDataStack.map((item) => (
                <SkillCard key={item.title} {...item} />
              ))}
            </GridLayout>
          </DashboardPanel>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <SectionHeading
              eyebrow="Cloud & DevOps"
              title="Deployment thinking shaped like an infrastructure dashboard."
              description="AWS services, Docker, Jenkins, and CI/CD are framed as a delivery workflow rather than disconnected tools."
            />
            <GridLayout columns="two">
              {cloudDevOpsStack.map((item) => (
                <InfrastructureCard key={item.title} {...item} />
              ))}
            </GridLayout>
          </div>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <SectionGlow position="center" />
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Development Workflow"
            title="A structured loop from planning to deployment and iteration."
            description="The workflow communicates engineering thinking: define, build, test, package, deploy, and improve."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {workflowSteps.map((item, index) => (
              <WorkflowStep key={item.title} index={index} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <DashboardPanel
            eyebrow="Tools & Platforms"
            title="The working environment behind implementation, testing, and delivery."
          >
            <GridLayout columns="four">
              {toolsPlatforms.map((item) => (
                <SkillCard key={item.title} {...item} />
              ))}
            </GridLayout>
          </DashboardPanel>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <GlassCard intensity="strong" className="p-6 md:p-8">
              <p className="text-label-premium mb-3">Current Learning Direction</p>
              <h2 className="text-section-title">
                Growth areas connected to real project capability.
              </h2>
              <p className="text-body-premium mt-4">
                These focus areas keep the portfolio grounded in practical
                engineering improvement: better architecture, cleaner deployment,
                useful AI integration, and stronger full-stack delivery.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {currentLearningDirection.map((item) => (
                  <TechBadge key={item}>{item}</TechBadge>
                ))}
              </div>
            </GlassCard>
            <GlassCard className="p-6 md:p-8">
              <Code2 className="mb-5 size-6 text-cyan-100" />
              <p className="text-label-premium mb-3">Engineering Approach</p>
              <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white">
                Modular thinking, reusable systems, and deployment awareness.
              </h3>
              <p className="text-body-premium mt-4">
                Projects are approached as systems: define clear boundaries,
                build reusable components, keep data flow understandable, and
                prepare the work for deployment instead of stopping at local demos.
              </p>
            </GlassCard>
          </div>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <SectionGlow position="center" />
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Interactive Tech Visualization"
            title="A compact ecosystem map for the core engineering direction."
            description="Hover the cluster cards to explore how backend, AI, cloud, Docker, and CI/CD connect as one capability system."
          />
          <div className="mt-8">
            <InteractiveCluster items={coreTechStack} />
          </div>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Future Learning Roadmap"
            title="A realistic roadmap toward stronger production engineering."
            description="The next learning layer focuses on deeper cloud systems, microservices, distributed thinking, and full-stack delivery."
          />
          <GridLayout columns="three" className="mt-8">
            {futureRoadmap.map((item) => (
              <LearningRoadmapCard key={item.title} {...item} />
            ))}
          </GridLayout>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <GlassCard intensity="strong" className="p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-label-premium mb-3">Capability Showcase</p>
                <h2 className="text-section-title">
                  See how these skills connect inside real project architecture.
                </h2>
                <p className="text-body-premium mt-4 max-w-2xl">
                  The projects section turns this skills ecosystem into case
                  studies, system design, AI workflow planning, and deployment
                  decisions.
                </p>
                <Divider className="mt-6 max-w-xl" />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <GlowButton asChild>
                  <Link href="/projects">
                    View Projects <ArrowRight className="size-4" />
                  </Link>
                </GlowButton>
                <SecondaryButton asChild>
                  <Link href="/terminal">
                    Open Terminal Lab <Layers3 className="size-4" />
                  </Link>
                </SecondaryButton>
              </div>
            </div>
          </GlassCard>
        </Container>
      </section>
    </PageWrapper>
  )
}
