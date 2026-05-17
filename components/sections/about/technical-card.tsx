import type { LucideIcon } from "lucide-react"

import { GradientBadge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"

type TechnicalCardProps = {
  title: string
  description: string
  icon: LucideIcon
  meta?: string
}

export function TechnicalCard({
  title,
  description,
  icon: Icon,
  meta,
}: TechnicalCardProps) {
  return (
    <GlassCard interactive className="group h-full">
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="flex size-11 items-center justify-center rounded-2xl border border-cyan-200/10 bg-cyan-200/8 text-cyan-100 shadow-[0_0_34px_rgba(103,232,249,0.08)] transition group-hover:border-cyan-200/20 group-hover:bg-cyan-200/12">
          <Icon className="size-5" />
        </span>
        {meta ? <GradientBadge>{meta}</GradientBadge> : null}
      </div>
      <h3 className="text-lg font-semibold tracking-[-0.015em] text-white">
        {title}
      </h3>
      <p className="text-body-premium mt-3">{description}</p>
    </GlassCard>
  )
}
