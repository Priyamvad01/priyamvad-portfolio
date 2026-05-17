import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

export function Divider({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent",
        className
      )}
      {...props}
    />
  )
}
