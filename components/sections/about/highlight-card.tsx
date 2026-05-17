import type { LucideIcon } from "lucide-react"

import { GlassCard } from "@/components/ui/glass-card"

import { AnimatedCounter } from "./animated-counter"

type HighlightCardProps = {
  value: number
  suffix?: string
  label: string
  description: string
  icon: LucideIcon
}

export function HighlightCard({
  value,
  suffix,
  label,
  description,
  icon: Icon,
}: HighlightCardProps) {
  return (
    <GlassCard interactive className="h-full">
      <div className="mb-6 flex items-center justify-between">
        <Icon className="size-5 text-cyan-100" />
        <p className="text-4xl font-semibold tracking-[-0.04em] text-white">
          <AnimatedCounter value={value} suffix={suffix} />
        </p>
      </div>
      <h3 className="text-base font-semibold text-white">{label}</h3>
      <p className="text-caption-premium mt-3">{description}</p>
    </GlassCard>
  )
}
