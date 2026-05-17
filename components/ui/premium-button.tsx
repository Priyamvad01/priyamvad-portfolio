import { Slot } from "@radix-ui/react-slot"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

type PremiumButtonProps = ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean
  children: ReactNode
}

const baseButton =
  "group relative inline-flex h-11 min-h-11 w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-5 text-sm font-medium outline-none transition-[transform,background-color,border-color,box-shadow,color] duration-300 ease-out focus-visible:ring-2 focus-visible:ring-cyan-200/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:translate-y-px sm:w-auto motion-safe:hover:-translate-y-0.5 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-out motion-safe:hover:[&_svg]:translate-x-0.5"

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
        "bg-primary text-primary-foreground shadow-[0_16px_50px_rgba(103,232,249,0.14)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/55 after:absolute after:inset-0 after:-translate-x-full after:bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.22),transparent)] after:transition-transform after:duration-700 after:content-[''] hover:bg-primary/90 hover:shadow-[0_20px_66px_rgba(103,232,249,0.22)] motion-safe:hover:after:translate-x-full",
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
        "border border-white/12 bg-white/[0.035] text-white backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.075] hover:shadow-[0_18px_55px_rgba(0,0,0,0.24)]",
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
        "border border-cyan-200/18 bg-cyan-200/10 text-cyan-50 shadow-[0_0_42px_rgba(103,232,249,0.1)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.18),transparent_38%)] before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] after:absolute after:inset-0 after:-translate-x-full after:bg-[linear-gradient(110deg,transparent,rgba(125,211,252,0.18),transparent)] after:transition-transform after:duration-700 after:content-[''] hover:border-cyan-200/30 hover:bg-cyan-200/15 hover:shadow-[0_0_62px_rgba(103,232,249,0.18)] hover:before:opacity-100 motion-safe:hover:after:translate-x-full",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
