import type { ReactNode } from "react"

import { AnimatedContainer } from "@/components/animations/animated-container"
import { Container } from "@/components/layout/container"
import { SectionGlow } from "@/components/layout/section-glow"
import { cn } from "@/lib/utils"

type CaseStudySectionProps = {
  eyebrow?: string
  title?: string
  description?: string
  children: ReactNode
  className?: string
  glow?: "left" | "center" | "right" | "none"
}

export function CaseStudySection({
  eyebrow,
  title,
  description,
  children,
  className,
  glow = "none",
}: CaseStudySectionProps) {
  return (
    <section className={cn("relative py-14 md:py-20", className)}>
      {glow !== "none" ? <SectionGlow position={glow} /> : null}
      <Container className="relative z-10">
        {title ? (
          <AnimatedContainer className="mb-8 max-w-3xl md:mb-10">
            {eyebrow ? <p className="text-label-premium mb-3">{eyebrow}</p> : null}
            <h2 className="text-section-title">{title}</h2>
            {description ? (
              <p className="text-body-premium mt-4">{description}</p>
            ) : null}
          </AnimatedContainer>
        ) : null}
        {children}
      </Container>
    </section>
  )
}
