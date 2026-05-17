import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Divider } from "@/components/ui/divider"
import { GlassCard } from "@/components/ui/glass-card"
import { GlowButton, SecondaryButton } from "@/components/ui/premium-button"

export function IdentityPanel() {
  return (
    <GlassCard intensity="strong" className="p-6 md:p-8">
      <p className="text-label-premium mb-4">Developer Identity</p>
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <h2 className="text-section-title">
            A backend-focused builder learning to connect systems, intelligence,
            and deployment.
          </h2>
          <p className="text-body-premium mt-5">
            Priyamvad&apos;s developer identity is shaped around practical
            systems: APIs that are understandable, backend logic that stays
            organized, AI features that serve a real workflow, and cloud delivery
            habits that make projects feel closer to production.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/18 p-5">
          <p className="text-sm font-medium text-white">Working direction</p>
          <Divider className="my-4" />
          <ul className="space-y-3 text-sm leading-6 text-slate-400">
            <li>Backend systems with Python, Flask, and FastAPI.</li>
            <li>AI-integrated applications with practical automation goals.</li>
            <li>Cloud and DevOps habits through Docker, CI/CD, and AWS direction.</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <GlowButton asChild>
          <Link href="/projects">
            View Projects <ArrowRight className="size-4" />
          </Link>
        </GlowButton>
        <SecondaryButton asChild>
          <Link href="/contact">Contact Priyamvad</Link>
        </SecondaryButton>
      </div>
    </GlassCard>
  )
}
