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
          eyebrow="Engineering Direction"
          title="Backend-first learning with a clear path into AI and cloud systems."
          description="Priyamvad's portfolio is organized for fast professional scanning: education, technical direction, project depth, and production-aware engineering habits."
        />
      </SectionContainer>

      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionHeading
            eyebrow="Featured Project"
            title="Project storytelling is anchored in architecture and implementation."
            description="The healthcare platform is presented as the strongest proof of work, with backend structure, AI workflow, database thinking, and deployment direction visible from the start."
          />
          <ProjectCard project={featuredProject} featured />
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading
          eyebrow="Skills Preview"
          title="Technical signals that define the current engineering direction."
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
                Recruiter Path
              </p>
              <h2 className="text-section-title">
                Review the strongest proof of work first.
              </h2>
              <p className="text-body-premium mt-3 max-w-2xl">
                Start with the healthcare case study, then use the terminal or
                contact page to explore the portfolio quickly and connect with
                clear context.
              </p>
              <Divider className="mt-6 max-w-lg" />
            </div>
            <GlowButton asChild>
              <Link href="/projects/healthcare-ai-system">
                Open Case Study <Workflow className="size-4" />
              </Link>
            </GlowButton>
          </div>
        </div>
      </SectionContainer>
    </PageWrapper>
  )
}
