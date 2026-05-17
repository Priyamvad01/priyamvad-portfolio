import { GridLayout } from "@/components/layout/grid-layout"
import { PageHeader } from "@/components/layout/page-header"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { SectionContainer } from "@/components/layout/section-container"
import { SectionHeading } from "@/components/layout/section-heading"
import { FeatureCard } from "@/components/sections/feature-card"
import { certificationRecords } from "@/data/certifications"
import { createMetadata } from "@/lib/seo"

export const metadata = createMetadata({
  title: "Certifications",
  description:
    "Certification and learning track architecture for Priyamvad Ranjan's portfolio.",
  path: "/certifications",
})

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
          {certificationRecords.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </GridLayout>
      </SectionContainer>
    </PageWrapper>
  )
}
