import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { TechBadge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"
import type { ProjectCaseStudy } from "@/types/site"

type ProjectCardProps = {
  project: ProjectCaseStudy
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <GlassCard
      interactive
      intensity="strong"
      className="group p-6 md:p-7"
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <TechBadge key={item}>{item}</TechBadge>
        ))}
      </div>
      <p className="text-label-premium mb-3">
        {featured ? "Featured System" : project.status}
      </p>
      <h3 className="text-section-title">
        {project.title}
      </h3>
      <p className="text-body-premium mt-4 max-w-2xl">
        {project.summary}
      </p>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition group-hover:gap-3"
      >
        Open case study <ArrowRight className="size-4" />
      </Link>
    </GlassCard>
  )
}
