import { ArrowRight, Boxes, BrainCircuit, Cloud, ServerCog } from "lucide-react"
import Link from "next/link"

import { AnimatedContainer } from "@/components/animations/animated-container"
import { Container } from "@/components/layout/container"
import { GridBackground } from "@/components/layout/grid-background"
import { GridLayout } from "@/components/layout/grid-layout"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { SectionGlow } from "@/components/layout/section-glow"
import { SectionHeading } from "@/components/layout/section-heading"
import { GradientBadge } from "@/components/ui/badge"
import { Divider } from "@/components/ui/divider"
import { GlassCard } from "@/components/ui/glass-card"
import { GlowButton, SecondaryButton } from "@/components/ui/premium-button"
import { ArchitecturePanel } from "@/components/sections/projects/architecture-panel"
import { ComingSoonCard } from "@/components/sections/projects/coming-soon-card"
import { FeaturedProjectCard } from "@/components/sections/projects/featured-project-card"
import { GitHubShowcase } from "@/components/sections/projects/github-showcase"
import { ProjectHoverPreview } from "@/components/sections/projects/project-hover-preview"
import { ProjectShowcaseCard } from "@/components/sections/projects/project-showcase-card"
import { TechStackCluster } from "@/components/sections/projects/tech-stack-cluster"
import { WorkflowTimeline } from "@/components/sections/projects/workflow-timeline"
import {
  futureProjects,
  projectArchitectureHighlights,
  projects,
  projectWorkflow,
} from "@/data/projects"
import { createMetadata } from "@/lib/seo"

export const metadata = createMetadata({
  title: "Projects",
  description:
    "A premium project showcase for Priyamvad Ranjan featuring AI-Based Healthcare Management System with DevOps Automation, backend architecture, AI workflows, Docker, Jenkins, AWS, and scalable engineering direction.",
  path: "/projects",
})

export default function ProjectsPage() {
  const featuredProject = projects[0]

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
              Projects showcase | Systems thinking | Engineering proof
            </GradientBadge>
            <h1 className="text-fluid-display mt-7">
              Project work presented as architecture, workflow, and deployment
              thinking.
            </h1>
            <p className="text-subtitle mt-7 max-w-2xl">
              The projects section focuses on technical credibility: backend
              systems, AI integration, OCR workflows, microservices architecture,
              Dockerized delivery, CI/CD pipelines, and cloud deployment
              direction.
            </p>
          </AnimatedContainer>

          <AnimatedContainer delay={0.15} className="mt-10">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: ServerCog,
                  title: "Backend architecture",
                  value: "Spring Boot, FastAPI, REST APIs",
                },
                {
                  icon: BrainCircuit,
                  title: "AI workflows",
                  value: "OCR, Tesseract, prediction concepts",
                },
                {
                  icon: Cloud,
                  title: "Delivery direction",
                  value: "Docker, Jenkins, CI/CD, AWS",
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
          <FeaturedProjectCard project={featuredProject} />
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <SectionGlow position="left" />
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Project Grid System"
            title="A scalable project catalogue designed for future engineering work."
            description="The grid supports featured systems, secondary projects, and future project placeholders without redesigning the page."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <ProjectHoverPreview>
              <ProjectShowcaseCard project={featuredProject} />
            </ProjectHoverPreview>
            <GlassCard className="p-6">
              <Boxes className="mb-5 size-6 text-cyan-100" />
              <p className="text-label-premium mb-3">Scalable Catalogue</p>
              <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white">
                Built for more than one project.
              </h3>
              <p className="text-body-premium mt-4">
                Future projects can plug into the same data model and visual
                system: stack groups, architecture notes, workflow steps, GitHub
                links, and case-study navigation.
              </p>
            </GlassCard>
          </div>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Technical Architecture Highlights"
            title="The featured project is framed through engineering concepts."
            description="These panels communicate how backend, AI, OCR, Docker, CI/CD, and service design connect."
          />
          <GridLayout columns="three" className="mt-8">
            {projectArchitectureHighlights.map((item) => (
              <ArchitecturePanel key={item.title} {...item} />
            ))}
          </GridLayout>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <SectionGlow position="right" />
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Development Workflow"
            title="A realistic build path from planning to deployment automation."
            description="The workflow avoids vague claims and shows the actual engineering stages behind the healthcare system direction."
          />
          <div className="mt-8">
            <WorkflowTimeline steps={projectWorkflow} />
          </div>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Project Stack Ecosystem"
            title="Technology groups organized like an engineering dashboard."
            description="Backend, AI/ML, database, DevOps, cloud, and security structure are grouped as a connected system."
          />
          <div className="mt-8">
            <TechStackCluster />
          </div>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <GitHubShowcase />
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <SectionGlow position="center" />
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Future Projects"
            title="Placeholders for the next systems without breaking the premium rhythm."
            description="These cards preserve the architecture for upcoming AI systems, backend platforms, and cloud-native apps."
          />
          <GridLayout columns="three" className="mt-8">
            {futureProjects.map((project) => (
              <ComingSoonCard key={project.title} {...project} />
            ))}
          </GridLayout>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <GlassCard intensity="strong" className="p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-label-premium mb-3">Case Study Navigation</p>
                <h2 className="text-section-title">
                  Open the healthcare system case study for deeper architecture.
                </h2>
                <p className="text-body-premium mt-4 max-w-2xl">
                  The case-study route is prepared for system diagrams, AI
                  service flow, OCR pipeline, database modeling, DevOps pipeline,
                  and deployment strategy.
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
                  <Link href="/contact">Discuss Project</Link>
                </SecondaryButton>
              </div>
            </div>
          </GlassCard>
        </Container>
      </section>
    </PageWrapper>
  )
}
