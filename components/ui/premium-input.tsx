import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

export function PremiumInput({
  className,
  ...props
}: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      className={cn(
        "h-11 rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none transition-[background-color,border-color,box-shadow] duration-300 placeholder:text-slate-500 hover:border-white/16 focus:border-cyan-200/45 focus:bg-black/30 focus:shadow-[0_0_0_3px_rgba(103,232,249,0.08)]",
        className
      )}
      {...props}
    />
  )
}

export function PremiumTextarea({
  className,
  ...props
}: ComponentPropsWithoutRef<"textarea">) {
  return (
    <textarea
      className={cn(
        "resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-[background-color,border-color,box-shadow] duration-300 placeholder:text-slate-500 hover:border-white/16 focus:border-cyan-200/45 focus:bg-black/30 focus:shadow-[0_0_0_3px_rgba(103,232,249,0.08)]",
        className
      )}
      {...props}
    />
  )
}
