import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  ExternalLink,
  GitBranch,
  Network,
  ServerCog,
  Workflow,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

import { AnimatedContainer } from "@/components/animations/animated-container"
import { Container } from "@/components/layout/container"
import { GridBackground } from "@/components/layout/grid-background"
import { GridLayout } from "@/components/layout/grid-layout"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { SectionGlow } from "@/components/layout/section-glow"
import { GradientBadge, TechBadge } from "@/components/ui/badge"
import { Divider } from "@/components/ui/divider"
import { GlassCard } from "@/components/ui/glass-card"
import { GlowButton, SecondaryButton } from "@/components/ui/premium-button"
import { GitHubIcon } from "@/components/ui/social-icons"
import { APIFlowDiagram } from "@/components/sections/case-study/api-flow-diagram"
import { ArchitectureVisualizer } from "@/components/sections/case-study/architecture-visualizer"
import { CaseStudySection } from "@/components/sections/case-study/case-study-section"
import { DatabaseSchemaVisual } from "@/components/sections/case-study/database-schema-visual"
import { DeploymentTimeline } from "@/components/sections/case-study/deployment-timeline"
import { InfrastructurePanel } from "@/components/sections/case-study/infrastructure-panel"
import { PipelineVisualizer } from "@/components/sections/case-study/pipeline-visualizer"
import { SystemLayerCard } from "@/components/sections/case-study/system-layer-card"
import { TechnicalMetricCard } from "@/components/sections/case-study/technical-metric-card"
import {
  aiPipeline,
  backendPanels,
  challengesLearning,
  futureImprovements,
  infrastructureItems,
  ocrPipeline,
  outcomes,
  overviewCards,
  problemPoints,
  securityScalability,
  systemGoals,
} from "@/data/case-study"
import { getProjectBySlug, projects, projectStackGroups } from "@/data/projects"
import { siteProfile } from "@/constants/site"
import { createMetadata } from "@/lib/seo"

type ProjectCaseStudyPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectCaseStudyPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return createMetadata({
      title: "Project Case Study",
      description: "Project case study for Priyamvad Ranjan.",
      path: `/projects/${slug}`,
    })
  }

  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${slug}`,
  })
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectCaseStudyPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <PageWrapper className="overflow-hidden pt-0">
      <section className="relative isolate overflow-hidden pt-32 md:pt-40">
        <div aria-hidden="true" className="absolute inset-0">
          <GridBackground className="opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_76%)]" />
          <SectionGlow position="center" />
        </div>
        <Container className="relative z-10 pb-16">
          <AnimatedContainer className="max-w-5xl">
            <GradientBadge>{project.category}</GradientBadge>
            <h1 className="text-fluid-display mt-7 max-w-6xl">
              {project.title}
            </h1>
            <p className="text-subtitle mt-7 max-w-3xl">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <TechBadge key={item}>{item}</TechBadge>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GlowButton asChild>
                <Link href="#architecture">
                  View Architecture <ArrowRight className="size-4" />
                </Link>
              </GlowButton>
              <SecondaryButton asChild>
                <Link href={siteProfile.github} target="_blank" rel="noopener noreferrer">
                  GitHub Direction <ExternalLink className="size-4" />
                </Link>
              </SecondaryButton>
            </div>
          </AnimatedContainer>

          <AnimatedContainer delay={0.15} className="mt-10">
            <div className="grid gap-4 md:grid-cols-4">
              <TechnicalMetricCard
                label="Architecture"
                value="Microservices"
                description="Spring Boot backend plus FastAPI AI service."
                icon={Network}
              />
              <TechnicalMetricCard
                label="AI Workflow"
                value="OCR + ML"
                description="Tesseract, Random Forest, and Decision Tree direction."
                icon={BrainCircuit}
              />
              <TechnicalMetricCard
                label="Delivery"
                value="CI/CD"
                description="Docker and Jenkins deployment automation direction."
                icon={Workflow}
              />
              <TechnicalMetricCard
                label="Cloud"
                value="AWS"
                description="EC2, S3, IAM, and RDS architecture awareness."
                icon={Cloud}
              />
            </div>
          </AnimatedContainer>
        </Container>
      </section>

      <CaseStudySection
        eyebrow="Project Overview"
        title="A healthcare platform framed as connected backend, AI, and deployment systems."
        description="The project combines healthcare management workflows with OCR extraction, prediction concepts, service separation, and delivery automation."
        glow="left"
      >
        <GridLayout columns="three">
          {overviewCards.map((item) => (
            <SystemLayerCard key={item.title} {...item} />
          ))}
        </GridLayout>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Problem Statement"
        title="Healthcare workflows become difficult when data, documents, and systems stay fragmented."
        description="The case study presents a practical engineering response to manual workflows, unstructured reports, and deployment inefficiencies."
      >
        <GridLayout columns="three">
          {problemPoints.map((item) => (
            <SystemLayerCard key={item.title} {...item} />
          ))}
        </GridLayout>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="System Goals"
        title="The system goals connect healthcare operations with intelligent automation and deployment readiness."
        glow="right"
      >
        <GridLayout columns="four">
          {systemGoals.map((item) => (
            <SystemLayerCard key={item.title} {...item} />
          ))}
        </GridLayout>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Architecture Overview"
        title="A custom architecture visualization for the platform layers."
        description="Frontend, Spring Boot backend, FastAPI AI service, MySQL, Docker, CI/CD, and cloud direction are shown as one connected system."
        glow="center"
        className="scroll-mt-24"
      >
        <div id="architecture">
          <ArchitectureVisualizer />
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Microservices Design"
        title="Backend workflows and AI processing are separated through service boundaries."
        description="The Spring Boot service focuses on healthcare workflows while the FastAPI service handles OCR and prediction-oriented processing."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <GlassCard intensity="strong" className="p-6 md:p-8">
            <ServerCog className="mb-5 size-6 text-cyan-100" />
            <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white">
              Core backend service
            </h3>
            <p className="text-body-premium mt-4">
              Handles patient management, appointments, reports, billing,
              request validation, and structured API communication.
            </p>
          </GlassCard>
          <GlassCard intensity="strong" className="p-6 md:p-8">
            <BrainCircuit className="mb-5 size-6 text-cyan-100" />
            <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white">
              AI microservice
            </h3>
            <p className="text-body-premium mt-4">
              Keeps OCR extraction and prediction workflows independent enough to
              evolve without overloading the main healthcare backend.
            </p>
          </GlassCard>
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Backend Engineering"
        title="Spring Boot architecture organized around API structure and maintainability."
        description="The backend section communicates controllers, services, repositories, validation, and scalable API design."
        glow="left"
      >
        <GridLayout columns="four">
          {backendPanels.map((item) => (
            <SystemLayerCard key={item.title} {...item} />
          ))}
        </GridLayout>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="AI Processing Pipeline"
        title="A practical AI workflow from report input to structured output."
        description="The AI pipeline is presented as implementation-focused engineering, not exaggerated research expertise."
      >
        <PipelineVisualizer nodes={aiPipeline} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="OCR Workflow"
        title="Tesseract OCR converts uploaded reports into usable backend data."
        description="The OCR pipeline keeps extraction, cleaning, and structured output readable across the system."
        glow="right"
      >
        <PipelineVisualizer nodes={ocrPipeline} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Machine Learning Integration"
        title="Random Forest and Decision Tree concepts are used as practical prediction workflows."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <GlassCard intensity="strong" className="p-6 md:p-8">
            <BrainCircuit className="mb-5 size-6 text-cyan-100" />
            <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white">
              Random Forest direction
            </h3>
            <p className="text-body-premium mt-4">
              Positioned as a practical model option for structured healthcare
              prediction concepts where multiple decision paths can contribute to
              a result.
            </p>
          </GlassCard>
          <GlassCard intensity="strong" className="p-6 md:p-8">
            <GitBranch className="mb-5 size-6 text-cyan-100" />
            <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white">
              Decision Tree direction
            </h3>
            <p className="text-body-premium mt-4">
              Useful as an interpretable model concept for understandable
              prediction paths and implementation-focused healthcare analysis.
            </p>
          </GlassCard>
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Database Design"
        title="Relational entities are structured around healthcare workflows."
        description="Patients, doctors, appointments, reports, billing, and predictions are represented as schema-inspired system nodes."
        glow="center"
      >
        <DatabaseSchemaVisual />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="API Communication Flow"
        title="Frontend to backend to AI service to database to response."
        description="The API diagram shows how requests move through the platform without turning the page into an unreadable diagram dump."
      >
        <APIFlowDiagram />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Cloud & DevOps Infrastructure"
        title="A deployment-aware infrastructure dashboard for AWS, Docker, and CI/CD."
        glow="left"
      >
        <GridLayout columns="three">
          {infrastructureItems.map((item) => (
            <InfrastructurePanel key={item.title} {...item} />
          ))}
        </GridLayout>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Docker & CI/CD Workflow"
        title="Code moves through GitHub, Jenkins, Docker, and deployment direction."
        description="This visual explains the delivery path as a repeatable automation workflow."
      >
        <DeploymentTimeline />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Security & Scalability"
        title="Scalability starts with boundaries, configuration, and service isolation."
        glow="right"
      >
        <GridLayout columns="four">
          {securityScalability.map((item) => (
            <SystemLayerCard key={item.title} {...item} />
          ))}
        </GridLayout>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Challenges & Learning"
        title="The page intentionally shows learning complexity instead of pretending everything is trivial."
        description="This section builds trust by naming realistic engineering challenges."
      >
        <GridLayout columns="three">
          {challengesLearning.map((item) => (
            <SystemLayerCard key={item.title} {...item} />
          ))}
        </GridLayout>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="System Outcome"
        title="The project outcome is an architecture-driven healthcare system direction."
        glow="center"
      >
        <GridLayout columns="three">
          {outcomes.map((item) => (
            <SystemLayerCard key={item.title} {...item} />
          ))}
        </GridLayout>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Technology Ecosystem"
        title="Technology groups are arranged by engineering responsibility."
        description="Backend, AI/ML, cloud, DevOps, database, and structure are presented as connected capabilities."
      >
        <div className="glass-panel-strong rounded-[2rem] p-5 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projectStackGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 bg-black/18 p-5"
              >
                <group.icon className="mb-5 size-5 text-cyan-100" />
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <TechBadge key={item}>{item}</TechBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="GitHub & Deployment Direction"
        title="The project is framed for GitHub visibility and deployment architecture."
        glow="left"
      >
        <GlassCard intensity="strong" className="p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <GitHubIcon className="mb-5 size-6 text-cyan-100" />
              <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white">
                Repository and deployment path
              </h3>
              <p className="text-body-premium mt-4">
                GitHub is used as the professional project history destination.
                The page documents the deployment direction clearly so the
                architecture remains understandable even before a public project
                runtime is attached.
              </p>
              <div className="mt-7">
                <GlowButton asChild>
                  <Link href={siteProfile.github} target="_blank" rel="noopener noreferrer">
                    Open GitHub <ExternalLink className="size-4" />
                  </Link>
                </GlowButton>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/18 p-5">
              <p className="text-label-premium mb-4">Deployment Roadmap</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Docker images", "Jenkins pipeline", "AWS runtime", "Environment config"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm font-medium text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Future Improvements"
        title="Future expansions keep the system roadmap realistic and engineering-focused."
        glow="right"
      >
        <GridLayout columns="three">
          {futureImprovements.map((item) => (
            <SystemLayerCard key={item.title} {...item} />
          ))}
        </GridLayout>
      </CaseStudySection>

      <CaseStudySection>
        <GlassCard intensity="strong" className="p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-label-premium mb-3">CTA</p>
              <h2 className="text-section-title">
                Return to the project showcase or connect about the system.
              </h2>
              <p className="text-body-premium mt-4 max-w-2xl">
                This case study is structured as a premium engineering document:
                architecture, backend, AI, OCR, database, APIs, DevOps,
                deployment direction, and future roadmap.
              </p>
              <Divider className="mt-6 max-w-xl" />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <GlowButton asChild>
                <Link href="/projects">
                  Back to Projects <ArrowRight className="size-4" />
                </Link>
              </GlowButton>
              <SecondaryButton asChild>
                <Link href="/contact">Contact Priyamvad</Link>
              </SecondaryButton>
            </div>
          </div>
        </GlassCard>
      </CaseStudySection>
    </PageWrapper>
  )
}
