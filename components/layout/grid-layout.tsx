import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

type GridLayoutProps = ComponentPropsWithoutRef<"div"> & {
  columns?: "two" | "three" | "four"
}

const gridColumns = {
  two: "md:grid-cols-2",
  three: "md:grid-cols-2 lg:grid-cols-3",
  four: "sm:grid-cols-2 xl:grid-cols-4",
}

export function GridLayout({
  className,
  columns = "three",
  ...props
}: GridLayoutProps) {
  return (
    <div
      className={cn("grid gap-4 md:gap-5", gridColumns[columns], className)}
      {...props}
    />
  )
}
