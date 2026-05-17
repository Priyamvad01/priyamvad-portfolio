import type { LucideIcon } from "lucide-react"

import { GlassCard } from "@/components/ui/glass-card"

type TechnicalMetricCardProps = {
  label: string
  value: string
  description: string
  icon: LucideIcon
}

export function TechnicalMetricCard({
  label,
  value,
  description,
  icon: Icon,
}: TechnicalMetricCardProps) {
  return (
    <GlassCard className="p-5">
      <Icon className="mb-4 size-5 text-cyan-100" />
      <p className="text-label-premium mb-2">{label}</p>
      <p className="text-2xl font-semibold tracking-[-0.03em] text-white">
        {value}
      </p>
      <p className="text-caption-premium mt-2">{description}</p>
    </GlassCard>
  )
}
