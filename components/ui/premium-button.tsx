import { Slot } from "@radix-ui/react-slot"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

type PremiumButtonProps = ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean
  children: ReactNode
}

const baseButton =
  "group relative inline-flex h-11 min-h-11 w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-5 text-sm font-medium outline-none transition duration-300 ease-out focus-visible:ring-2 focus-visible:ring-cyan-200/50 disabled:pointer-events-none disabled:opacity-50 active:translate-y-px sm:w-auto [&_svg]:size-4 [&_svg]:shrink-0"

export function PrimaryButton({
  asChild = false,
  className,
  children,
  ...props
}: PremiumButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(
        baseButton,
        "bg-primary text-primary-foreground shadow-[0_16px_50px_rgba(103,232,249,0.14)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/55 hover:bg-primary/90 hover:shadow-[0_18px_60px_rgba(103,232,249,0.2)]",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export function SecondaryButton({
  asChild = false,
  className,
  children,
  ...props
}: PremiumButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(
        baseButton,
        "border border-white/12 bg-white/[0.035] text-white backdrop-blur-xl hover:border-white/18 hover:bg-white/[0.07]",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export function GlowButton({
  asChild = false,
  className,
  children,
  ...props
}: PremiumButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(
        baseButton,
        "border border-cyan-200/18 bg-cyan-200/10 text-cyan-50 shadow-[0_0_42px_rgba(103,232,249,0.1)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.18),transparent_38%)] before:opacity-0 before:transition before:content-[''] hover:border-cyan-200/28 hover:bg-cyan-200/15 hover:shadow-[0_0_58px_rgba(103,232,249,0.16)] hover:before:opacity-100",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
