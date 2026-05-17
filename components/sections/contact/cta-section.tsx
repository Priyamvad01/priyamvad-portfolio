import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

import { Divider } from "@/components/ui/divider"
import { GlassCard } from "@/components/ui/glass-card"
import { GlowButton, SecondaryButton } from "@/components/ui/premium-button"
import { siteProfile } from "@/constants/site"

export function CTASection() {
  return (
    <GlassCard intensity="strong" className="p-6 md:p-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-label-premium mb-3">Next Step</p>
          <h2 className="text-section-title">
            Start with a clear message and the right context.
          </h2>
          <p className="text-body-premium mt-4 max-w-2xl">
            For opportunities, internships, collaborations, or project
            discussions, share the role, timeline, and technical context so the
            conversation can move cleanly.
          </p>
          <Divider className="mt-6 max-w-xl" />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <GlowButton asChild>
            <Link href={`mailto:${siteProfile.email}`}>
              Email Directly <Mail className="size-4" />
            </Link>
          </GlowButton>
          <SecondaryButton asChild>
            <Link href="/projects">
              View Projects <ArrowRight className="size-4" />
            </Link>
          </SecondaryButton>
        </div>
      </div>
    </GlassCard>
  )
}
