import { TechBadge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"
import type { CaseStudyCard } from "@/data/case-study"

type InfrastructurePanelProps = CaseStudyCard

export function InfrastructurePanel({
  title,
  description,
  icon: Icon,
  tags,
}: InfrastructurePanelProps) {
  return (
    <GlassCard interactive className="h-full">
      <div className="mb-5 flex items-center gap-4">
        <span className="flex size-11 items-center justify-center rounded-2xl border border-cyan-200/10 bg-cyan-200/8 text-cyan-100">
          <Icon className="size-5" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Infra</p>
          <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>
      <p className="text-body-premium">{description}</p>
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
