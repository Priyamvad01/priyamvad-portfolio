import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

import { TechBadge } from "@/components/ui/badge"
import { Divider } from "@/components/ui/divider"
import { GlassCard } from "@/components/ui/glass-card"
import { GlowButton, SecondaryButton } from "@/components/ui/premium-button"
import type { ProjectCaseStudy } from "@/types/site"

type FeaturedProjectCardProps = {
  project: ProjectCaseStudy
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <GlassCard intensity="strong" className="group p-6 md:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="text-label-premium mb-4">{project.eyebrow}</p>
          <h2 className="text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            {project.title}
          </h2>
          <p className="text-body-premium mt-5 max-w-3xl">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.slice(0, 9).map((item) => (
              <TechBadge key={item}>{item}</TechBadge>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <GlowButton asChild>
              <Link href={`/projects/${project.slug}`}>
                Open Case Study <ArrowRight className="size-4" />
              </Link>
            </GlowButton>
            <SecondaryButton asChild>
              <Link href="https://github.com/Priyamvad01" target="_blank" rel="noopener noreferrer">
                GitHub Profile <ExternalLink className="size-4" />
              </Link>
            </SecondaryButton>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/18 p-5">
          <p className="text-label-premium mb-4">System Overview</p>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-white">Problem direction</p>
              <p className="text-caption-premium mt-2">{project.problem}</p>
            </div>
            <Divider />
            <div>
              <p className="text-sm font-semibold text-white">Engineering outcome</p>
              <p className="text-caption-premium mt-2">{project.outcome}</p>
            </div>
            <Divider />
            <div>
              <p className="text-sm font-semibold text-white">Architecture notes</p>
              <ul className="mt-3 space-y-2 text-xs leading-5 text-slate-500">
                {project.architecture?.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1 rounded-full bg-cyan-100/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
