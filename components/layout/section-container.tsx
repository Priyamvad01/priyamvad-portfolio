import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

import { Container } from "./container"

type SectionContainerProps = ComponentPropsWithoutRef<"section"> & {
  innerClassName?: string
}

export function SectionContainer({
  className,
  innerClassName,
  children,
  ...props
}: SectionContainerProps) {
  return (
    <section className={cn("relative py-12 md:py-18", className)} {...props}>
      <Container className={innerClassName}>{children}</Container>
    </section>
  )
}
