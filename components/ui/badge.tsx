import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

export function GradientBadge({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-cyan-100/15 bg-cyan-100/8 px-3.5 py-1.5 text-xs font-medium text-cyan-50 shadow-[0_0_30px_rgba(103,232,249,0.08)]",
        className
      )}
      {...props}
    />
  )
}

export function TechBadge({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-slate-300",
        className
      )}
      {...props}
    />
  )
}
