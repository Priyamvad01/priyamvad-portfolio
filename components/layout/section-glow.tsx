import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

type SectionGlowProps = ComponentPropsWithoutRef<"div"> & {
  position?: "left" | "center" | "right"
}

export function SectionGlow({
  className,
  position = "center",
  ...props
}: SectionGlowProps) {
  const positionClass = {
    left: "left-0 -translate-x-1/3",
    center: "left-1/2 -translate-x-1/2",
    right: "right-0 translate-x-1/3",
  }[position]

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute top-0 h-64 w-[24rem] rounded-[40%] bg-[radial-gradient(ellipse_at_center,rgba(103,232,249,0.1),rgba(148,163,184,0.04)_38%,transparent_70%)] blur-3xl md:h-80 md:w-[38rem] md:bg-[radial-gradient(ellipse_at_center,rgba(103,232,249,0.12),rgba(148,163,184,0.045)_38%,transparent_70%)]",
        positionClass,
        className
      )}
      {...props}
    />
  )
}
