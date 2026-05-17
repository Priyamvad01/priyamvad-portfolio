import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

type GlassCardProps = ComponentPropsWithoutRef<"div"> & {
  interactive?: boolean
  intensity?: "soft" | "strong"
}

export function GlassCard({
  className,
  interactive = false,
  intensity = "soft",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-4 sm:p-5",
        intensity === "strong" ? "glass-panel-strong" : "glass-panel",
        interactive &&
          "micro-transition active:scale-[0.99] motion-safe:hover:-translate-y-1 motion-safe:hover:border-cyan-200/18 motion-safe:hover:shadow-[var(--shadow-card-hover)]",
        className
      )}
      {...props}
    />
  )
}
