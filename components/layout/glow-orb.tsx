import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

type GlowOrbProps = ComponentPropsWithoutRef<"div"> & {
  tone?: "cyan" | "slate" | "blue"
}

const tones = {
  cyan:
    "bg-[radial-gradient(ellipse_at_center,rgba(103,232,249,0.12),rgba(103,232,249,0.045)_38%,transparent_72%)]",
  slate:
    "bg-[radial-gradient(ellipse_at_center,rgba(203,213,225,0.1),rgba(148,163,184,0.04)_38%,transparent_72%)]",
  blue: "bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.1),rgba(103,232,249,0.035)_38%,transparent_72%)]",
}

export function GlowOrb({
  className,
  tone = "cyan",
  ...props
}: GlowOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute h-96 w-96 rounded-[42%] blur-3xl",
        tones[tone],
        className
      )}
      {...props}
    />
  )
}
