import type { LucideIcon } from "lucide-react"

import { TechBadge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"

type SkillCardProps = {
  title: string
  description: string
  icon: LucideIcon
  tags?: readonly string[]
  meta?: string
}

export function SkillCard({
  title,
  description,
  icon: Icon,
  tags,
  meta,
}: SkillCardProps) {
  return (
    <GlassCard interactive className="group h-full">
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="flex size-11 items-center justify-center rounded-2xl border border-cyan-200/10 bg-cyan-200/8 text-cyan-100 transition group-hover:border-cyan-200/20 group-hover:bg-cyan-200/12">
          <Icon className="size-5" />
        </span>
        {meta ? <TechBadge>{meta}</TechBadge> : null}
      </div>
      <h3 className="text-lg font-semibold tracking-[-0.015em] text-white">
        {title}
      </h3>
      <p className="text-body-premium mt-3">{description}</p>
      {tags?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TechBadge key={tag}>{tag}</TechBadge>
          ))}
        </div>
      ) : null}
    </GlassCard>
  )
}
