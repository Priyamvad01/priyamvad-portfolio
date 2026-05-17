import type { ReactNode } from "react"

import { AnimatedContainer } from "@/components/animations/animated-container"
import { GlassCard } from "@/components/ui/glass-card"
import { cn } from "@/lib/utils"

type DashboardPanelProps = {
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
  delay?: number
}

export function DashboardPanel({
  eyebrow,
  title,
  description,
  children,
  className,
  delay = 0,
}: DashboardPanelProps) {
  return (
    <AnimatedContainer delay={delay}>
      <GlassCard intensity="strong" className={cn("p-6 md:p-8", className)}>
        {eyebrow ? <p className="text-label-premium mb-3">{eyebrow}</p> : null}
        <h2 className="text-section-title">{title}</h2>
        {description ? (
          <p className="text-body-premium mt-4 max-w-3xl">{description}</p>
        ) : null}
        <div className="mt-7">{children}</div>
      </GlassCard>
    </AnimatedContainer>
  )
}
