import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  MessageSquare,
  Phone,
  ServerCog,
  Sparkles,
} from "lucide-react"
import dynamic from "next/dynamic"
import Link from "next/link"

import { AnimatedContainer } from "@/components/animations/animated-container"
import { Container } from "@/components/layout/container"
import { GridBackground } from "@/components/layout/grid-background"
import { GridLayout } from "@/components/layout/grid-layout"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { SectionGlow } from "@/components/layout/section-glow"
import { SectionHeading } from "@/components/layout/section-heading"
import { AvailabilityPanel } from "@/components/sections/contact/availability-panel"
import { ContactCard } from "@/components/sections/contact/contact-card"
import { CTASection } from "@/components/sections/contact/cta-section"
import { FloatingGlow } from "@/components/sections/contact/floating-glow"
import { ResumeDownloadPanel } from "@/components/sections/contact/resume-download-panel"
import { SocialLinkCard } from "@/components/sections/contact/social-link-card"
import { GradientBadge } from "@/components/ui/badge"
import { Divider } from "@/components/ui/divider"
import { GlassCard } from "@/components/ui/glass-card"
import { GlowButton, SecondaryButton } from "@/components/ui/premium-button"
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons"
import { siteProfile } from "@/constants/site"
import { createMetadata } from "@/lib/seo"

const ContactForm = dynamic(
  () =>
    import("@/components/sections/contact/contact-form").then(
      (mod) => mod.ContactForm
    ),
  {
    loading: () => (
      <GlassCard intensity="strong" className="min-h-[34rem] p-5 md:p-6">
        <div className="mb-6 h-5 w-36 rounded-full bg-white/10" />
        <div className="mb-8 h-8 w-3/4 rounded-full bg-white/[0.08]" />
        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-14 rounded-2xl bg-white/[0.055]" />
            <div className="h-14 rounded-2xl bg-white/[0.055]" />
          </div>
          <div className="h-14 rounded-2xl bg-white/[0.055]" />
          <div className="h-36 rounded-2xl bg-white/[0.055]" />
          <div className="h-11 rounded-full bg-cyan-200/10" />
        </div>
      </GlassCard>
    ),
  }
)

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Priyamvad Ranjan for backend development, AI-integrated projects, cloud workflows, internships, and professional engineering opportunities.",
  path: "/contact",
})

const collaborationAreas = [
  {
    title: "Backend engineering roles",
    description:
      "Python, FastAPI, Flask, Spring Boot, REST APIs, and structured backend project discussions.",
    icon: ServerCog,
  },
  {
    title: "AI-integrated projects",
    description:
      "Practical AI workflows, OCR concepts, prediction services, and backend integration ideas.",
    icon: Sparkles,
  },
  {
    title: "Cloud & DevOps learning",
    description:
      "Docker, CI/CD, AWS deployment direction, and production-aware project growth.",
    icon: Code2,
  },
  {
    title: "Internship opportunities",
    description:
      "Professional learning opportunities where structured engineering habits matter.",
    icon: BriefcaseBusiness,
  },
]

export default function ContactPage() {
  return (
    <PageWrapper className="overflow-hidden pt-0">
      <section className="relative isolate overflow-hidden pt-32 md:pt-40">
        <div aria-hidden="true" className="absolute inset-0">
          <GridBackground className="opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_76%)]" />
          <SectionGlow position="center" />
          <FloatingGlow className="-right-28 top-24" />
        </div>
        <Container className="relative z-10 pb-16">
          <AnimatedContainer className="max-w-4xl">
            <GradientBadge>
              Contact | Professional communication | Open to opportunities
            </GradientBadge>
            <h1 className="text-fluid-display mt-7">
              Let&apos;s connect around meaningful engineering work.
            </h1>
            <p className="text-subtitle mt-7 max-w-2xl">
              Reach out for backend development, AI-integrated systems, cloud
              workflows, internships, collaboration, or project-focused
              conversations. Clear context helps move the discussion faster.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GlowButton asChild>
                <Link href="#contact-form">
                  Send Message <ArrowRight className="size-4" />
                </Link>
              </GlowButton>
              <SecondaryButton asChild>
                <Link href={`mailto:${siteProfile.email}`}>
                  Email Directly <Mail className="size-4" />
                </Link>
              </SecondaryButton>
            </div>
          </AnimatedContainer>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <AnimatedContainer>
              <GlassCard intensity="strong" className="p-6 md:p-8">
                <MessageSquare className="mb-5 size-6 text-cyan-100" />
                <p className="text-label-premium mb-3">Professional Intro</p>
                <h2 className="text-section-title">
                  Communication focused on systems, context, and next steps.
                </h2>
                <p className="text-body-premium mt-4">
                  Priyamvad is building a backend-first engineering direction
                  through AI-integrated projects, cloud workflows, deployment
                  awareness, and scalable software habits. The best messages
                  include the opportunity type, project context, expected
                  timeline, and preferred next step.
                </p>
                <Divider className="my-6" />
                <div className="grid gap-3 sm:grid-cols-2">
                  {["Backend systems", "AI workflows", "Cloud deployment", "Project collaboration"].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-black/18 p-4 text-sm font-medium text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedContainer>
            <AnimatedContainer delay={0.12}>
              <div id="contact-form">
                <ContactForm />
              </div>
            </AnimatedContainer>
          </div>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <SectionGlow position="left" />
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Direct Communication"
            title="Reach Priyamvad through clean, reliable contact paths."
            description="Contact cards include copy interactions so details are easy to reuse in email, phone, or professional messages."
          />
          <GridLayout columns="two" className="mt-8">
            <ContactCard
              title="Email"
              value={siteProfile.email}
              href={`mailto:${siteProfile.email}`}
              icon={Mail}
              copyLabel="email"
            />
            <ContactCard
              title="Phone"
              value={siteProfile.phone}
              href={`tel:${siteProfile.phone.replace(/\s+/g, "")}`}
              icon={Phone}
              copyLabel="phone number"
            />
          </GridLayout>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Social & Developer Links"
            title="Professional profiles for project history and context."
          />
          <GridLayout columns="three" className="mt-8">
            <SocialLinkCard
              title="GitHub"
              description="Repository direction, project work, and engineering history."
              href={siteProfile.github}
              icon={GitHubIcon}
            />
            <SocialLinkCard
              title="LinkedIn"
              description="Professional profile, education context, and opportunity communication."
              href={siteProfile.linkedin}
              icon={LinkedInIcon}
            />
            <SocialLinkCard
              title="Email"
              description="Best direct channel for structured opportunities and collaboration."
              href={`mailto:${siteProfile.email}`}
              icon={Mail}
            />
          </GridLayout>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <SectionGlow position="right" />
        <Container className="relative z-10">
          <AvailabilityPanel />
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Collaboration & Opportunity"
            title="Focused on technical conversations that can become real work."
            description="The page is tuned for backend roles, internships, AI-integrated project discussion, and cloud or DevOps learning opportunities."
          />
          <GridLayout columns="four" className="mt-8">
            {collaborationAreas.map((item) => (
              <GlassCard interactive key={item.title} className="h-full">
                <item.icon className="mb-5 size-5 text-cyan-100" />
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-caption-premium mt-3">{item.description}</p>
              </GlassCard>
            ))}
          </GridLayout>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <ResumeDownloadPanel />
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <SectionGlow position="center" />
        <Container className="relative z-10">
          <CTASection />
        </Container>
      </section>
    </PageWrapper>
  )
}
