import { GridBackground } from "@/components/layout/grid-background"
import { SectionGlow } from "@/components/layout/section-glow"

type SectionGlowOverlayProps = {
  position?: "left" | "center" | "right"
}

export function SectionGlowOverlay({
  position = "center",
}: SectionGlowOverlayProps) {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <GridBackground className="opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <SectionGlow position={position} />
    </div>
  )
}
