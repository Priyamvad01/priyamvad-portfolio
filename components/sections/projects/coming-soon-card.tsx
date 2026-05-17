import { Clock3 } from "lucide-react"

import { GlassCard } from "@/components/ui/glass-card"

type ComingSoonCardProps = {
  title: string
  description: string
  direction: string
}

export function ComingSoonCard({
  title,
  description,
  direction,
}: ComingSoonCardProps) {
  return (
    <GlassCard interactive className="h-full">
      <div className="mb-5 flex items-center justify-between">
        <Clock3 className="size-5 text-cyan-100" />
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
          Coming Soon
        </span>
      </div>
      <p className="text-label-premium mb-3">{direction}</p>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-body-premium mt-3">{description}</p>
    </GlassCard>
  )
}
