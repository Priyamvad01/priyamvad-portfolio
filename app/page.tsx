import {
  BrainCircuit,
  Cloud,
  ServerCog,
  Workflow,
} from "lucide-react"
import Link from "next/link"

import { GridLayout } from "@/components/layout/grid-layout"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { SectionContainer } from "@/components/layout/section-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { FeatureCard } from "@/components/sections/feature-card"
import { HomeHero } from "@/components/sections/home-hero"
import { ProjectCard } from "@/components/sections/project-card"
import { Divider } from "@/components/ui/divider"
import { GlowButton } from "@/components/ui/premium-button"
import { projects } from "@/data/projects"
import { createMetadata } from "@/lib/seo"

export const metadata = createMetadata({
  title: "Home",
  description:
    "Priyamvad Ranjan's premium engineering portfolio for backend development, AI-integrated systems, cloud deployment, DevOps workflows, and modern software projects.",
  path: "/",
  keywords: ["portfolio", "developer portfolio", "engineering portfolio"],
})

const homePreviewSections = [
  {
    title: "Backend foundation",
    description:
      "API-first thinking, service boundaries, request flows, and maintainable Python systems.",
    icon: ServerCog,
  },
  {
    title: "AI product direction",
    description:
      "Architecture prepared for intelligent workflows, OCR flows, and practical automation.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud delivery",
    description:
      "Deployment-aware structure for AWS, Docker, CI/CD, and environment-led configuration.",
    icon: Cloud,
  },
]

export default function Home() {
  const featuredProject = projects[0]

  return (
    <PageWrapper className="pt-0">
      <HomeHero />
      <SectionContainer>
        <SectionHeading
          eyebrow="About Preview"
          title="A young engineer building toward intelligent production systems."
          description="This section is structured for the upcoming narrative: education, technical direction, problem-solving style, and engineering philosophy."
        />
      </SectionContainer>

      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionHeading
            eyebrow="Featured Project"
            title="Project storytelling starts with system design."
            description="The first project route is prepared as a proper case study, not a shallow gallery item."
          />
          <ProjectCard project={featuredProject} featured />
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading
          eyebrow="Skills Preview"
          title="Core signals for backend, AI, and cloud development."
        />
        <GridLayout columns="three" className="mt-8">
          {homePreviewSections.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </GridLayout>
      </SectionContainer>

      <SectionContainer>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-label-premium mb-3">
                Next Step
              </p>
              <h2 className="text-section-title">
                Explore the engineering backbone.
              </h2>
              <p className="text-body-premium mt-3 max-w-2xl">
                Visit the projects and terminal foundations before the visual
                polish and deep content phases are layered in.
              </p>
              <Divider className="mt-6 max-w-lg" />
            </div>
            <GlowButton asChild>
              <Link href="/terminal">
                Open Terminal <Workflow className="size-4" />
              </Link>
            </GlowButton>
          </div>
        </div>
      </SectionContainer>
    </PageWrapper>
  )
}
