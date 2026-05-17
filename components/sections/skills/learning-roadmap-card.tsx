import type { LucideIcon } from "lucide-react"

import { GlassCard } from "@/components/ui/glass-card"

type LearningRoadmapCardProps = {
  title: string
  description: string
  icon: LucideIcon
}

export function LearningRoadmapCard({
  title,
  description,
  icon: Icon,
}: LearningRoadmapCardProps) {
  return (
    <GlassCard interactive className="h-full">
      <Icon className="mb-5 size-5 text-cyan-100" />
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="text-caption-premium mt-3">{description}</p>
    </GlassCard>
  )
}
