import { TechBadge } from "@/components/ui/badge"
import type { TerminalSection } from "@/data/terminal"

type TechOutputCardProps = {
  section: TerminalSection
}

export function TechOutputCard({ section }: TechOutputCardProps) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.025] p-3">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/70">
        {section.label}
      </p>
      <div className="flex flex-wrap gap-2">
        {section.items.map((item) => (
          <TechBadge key={item}>{item}</TechBadge>
        ))}
      </div>
    </div>
  )
}
