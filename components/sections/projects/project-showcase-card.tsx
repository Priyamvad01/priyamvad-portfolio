import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { TechBadge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"
import type { ProjectCaseStudy } from "@/types/site"

type ProjectShowcaseCardProps = {
  project: ProjectCaseStudy
}

export function ProjectShowcaseCard({ project }: ProjectShowcaseCardProps) {
  return (
    <GlassCard interactive className="group h-full">
      <p className="text-label-premium mb-4">{project.category}</p>
      <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white">
        {project.title}
      </h3>
      <p className="text-body-premium mt-4">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.slice(0, 6).map((item) => (
          <TechBadge key={item}>{item}</TechBadge>
        ))}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition group-hover:gap-3"
      >
        Explore system <ArrowRight className="size-4" />
      </Link>
    </GlassCard>
  )
}
