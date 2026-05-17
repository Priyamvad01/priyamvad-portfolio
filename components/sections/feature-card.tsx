import type { LucideIcon } from "lucide-react"

import { GlassCard } from "@/components/ui/glass-card"
import { GradientBadge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type FeatureCardProps = {
  title: string
  description: string
  icon?: LucideIcon
  meta?: string
  className?: string
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  meta,
  className,
}: FeatureCardProps) {
  return (
    <GlassCard
      interactive
      className={cn(
        "group",
        className
      )}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        {Icon ? (
          <span className="flex size-10 items-center justify-center rounded-xl border border-cyan-200/10 bg-cyan-200/8 text-cyan-100 shadow-[0_0_30px_rgba(103,232,249,0.08)] transition group-hover:border-cyan-200/18 group-hover:bg-cyan-200/12">
            <Icon className="size-5" />
          </span>
        ) : null}
        {meta ? (
          <GradientBadge>{meta}</GradientBadge>
        ) : null}
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="text-body-premium mt-3">{description}</p>
    </GlassCard>
  )
}
