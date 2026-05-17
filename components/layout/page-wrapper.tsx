import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

export function PageWrapper({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("min-h-screen pb-12 pt-20 md:pb-18 md:pt-24", className)}
      {...props}
    />
  )
}
