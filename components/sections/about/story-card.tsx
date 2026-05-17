import type { ReactNode } from "react"

import { GlassCard } from "@/components/ui/glass-card"

type StoryCardProps = {
  title: string
  children: ReactNode
  meta?: string
}

export function StoryCard({ title, children, meta }: StoryCardProps) {
  return (
    <GlassCard intensity="strong" className="p-6 md:p-8">
      {meta ? <p className="text-label-premium mb-4">{meta}</p> : null}
      <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white md:text-3xl">
        {title}
      </h3>
      <div className="text-body-premium mt-5 space-y-4">{children}</div>
    </GlassCard>
  )
}
