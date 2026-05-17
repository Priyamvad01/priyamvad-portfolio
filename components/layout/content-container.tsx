import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

export function ContentContainer({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("mx-auto max-w-3xl", className)} {...props} />
}
