import { cn } from "@/lib/utils"

type FloatingGlowProps = {
  className?: string
}

export function FloatingGlow({ className }: FloatingGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute h-96 w-96 rounded-[44%] bg-[radial-gradient(ellipse_at_center,rgba(103,232,249,0.12),rgba(148,163,184,0.04)_42%,transparent_72%)] blur-3xl",
        className
      )}
    />
  )
}
