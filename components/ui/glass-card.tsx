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
        "relative overflow-hidden rounded-2xl p-4 transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out sm:p-5",
        intensity === "strong" ? "glass-panel-strong" : "glass-panel",
        interactive &&
          "active:scale-[0.99] motion-safe:hover:-translate-y-1 motion-safe:hover:border-cyan-200/18 motion-safe:hover:bg-white/[0.06] motion-safe:hover:shadow-[var(--shadow-card-hover)] motion-safe:hover:before:opacity-100 before:pointer-events-none before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-cyan-100/60 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 before:content-['']",
        className
      )}
      {...props}
    />
  )
}
