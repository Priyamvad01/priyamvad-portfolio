import { Award, BadgeCheck, BriefcaseBusiness, FileBadge } from "lucide-react"

import { GridLayout } from "@/components/layout/grid-layout"
import { PageHeader } from "@/components/layout/page-header"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { SectionContainer } from "@/components/layout/section-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { FeatureCard } from "@/components/sections/feature-card"
import { createMetadata } from "@/lib/seo"

export const metadata = createMetadata({
  title: "Certifications",
  description:
    "Certification and learning track architecture for Priyamvad Ranjan's portfolio.",
  path: "/certifications",
})

const certificationCards = [
  {
    title: "Backend development track",
    description:
      "Placeholder for certificates connected to Python, APIs, system design, and backend implementation.",
    icon: FileBadge,
    meta: "Planned",
  },
  {
    title: "Cloud and DevOps track",
    description:
      "Reserved for AWS, Docker, CI/CD, deployment, and production engineering credentials.",
    icon: Award,
    meta: "Planned",
  },
  {
    title: "Internship certificate 01",
    description:
      "Professional placeholder reserved for a future internship certificate and verified details.",
    icon: BriefcaseBusiness,
    meta: "Future",
  },
  {
    title: "Internship certificate 02",
    description:
      "Second internship certificate slot prepared for future issuer, duration, role, and proof link.",
    icon: BadgeCheck,
    meta: "Future",
  },
]

export default function CertificationsPage() {
  return (
    <PageWrapper>
      <PageHeader
        eyebrow="Certifications"
        title="A clean proof system for credentials, internships, and learning milestones."
        description="The certifications page is built to scale from placeholders into verified professional proof without changing the layout architecture."
      />
      <SectionContainer className="pt-0">
        <SectionHeading
          eyebrow="Credential Architecture"
          title="Structured for verification, context, and recruiter scanning."
        />
        <GridLayout columns="two" className="mt-8">
          {certificationCards.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </GridLayout>
      </SectionContainer>
    </PageWrapper>
  )
}
