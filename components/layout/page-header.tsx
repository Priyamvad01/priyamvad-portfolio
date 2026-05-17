import { FadeIn } from "@/components/animations/fade-in"
import { Container } from "@/components/layout/container"

type PageHeaderProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <FadeIn className="max-w-3xl">
          <p className="text-label-premium mb-4">
            {eyebrow}
          </p>
          <h1 className="text-page-title gradient-text-primary">
            {title}
          </h1>
          <p className="text-subtitle mt-5">
            {description}
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}
