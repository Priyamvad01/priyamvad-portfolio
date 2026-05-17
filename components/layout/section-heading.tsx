import { ContentContainer } from "./content-container"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center"

  return (
    <ContentContainer className={isCenter ? "text-center" : ""}>
      {eyebrow ? (
        <p className="text-label-premium mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-section-title">
        {title}
      </h2>
      {description ? (
        <p className="text-body-premium mt-4">
          {description}
        </p>
      ) : null}
    </ContentContainer>
  )
}
