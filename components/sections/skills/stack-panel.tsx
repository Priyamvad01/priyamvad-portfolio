import { TechBadge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"
import type { TechItem } from "@/data/skills"
import { cn } from "@/lib/utils"

const priorityStyles = {
  primary: "border-cyan-200/20 bg-cyan-200/10 text-cyan-50 shadow-[0_0_32px_rgba(103,232,249,0.08)]",
  secondary: "border-white/12 bg-white/[0.045] text-slate-200",
  supporting: "border-white/8 bg-black/20 text-slate-400",
}

type StackPanelProps = {
  items: TechItem[]
}

export function StackPanel({ items }: StackPanelProps) {
  const groups = ["Backend", "DevOps", "Cloud", "Database", "Workflow", "Frontend"]

  return (
    <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
      <GlassCard className="p-6">
        <p className="text-label-premium mb-4">Priority Stack</p>
        <div className="flex flex-wrap gap-3">
          {items.map((item) => (
            <span
              key={item.name}
              className={cn(
                "inline-flex rounded-full border px-3.5 py-2 text-xs font-medium transition hover:-translate-y-0.5",
                priorityStyles[item.priority]
              )}
              title={item.description}
            >
              {item.name}
            </span>
          ))}
        </div>
      </GlassCard>
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((group) => {
          const groupItems = items.filter((item) => item.category === group)

          if (!groupItems.length) {
            return null
          }

          return (
            <GlassCard key={group} className="p-5">
              <p className="mb-4 text-sm font-semibold text-white">{group}</p>
              <div className="flex flex-wrap gap-2">
                {groupItems.map((item) => (
                  <TechBadge key={item.name}>{item.name}</TechBadge>
                ))}
              </div>
            </GlassCard>
          )
        })}
      </div>
    </div>
  )
}
