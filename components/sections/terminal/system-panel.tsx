import { Activity, Cpu, Radar } from "lucide-react"

import { GlassCard } from "@/components/ui/glass-card"
import { terminalDashboard } from "@/data/terminal"

const icons = [Cpu, Radar, Activity]

export function SystemPanel() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {terminalDashboard.map((item, index) => {
        const Icon = icons[index] ?? Cpu

        return (
          <GlassCard key={item.label} className="p-5">
            <Icon className="mb-4 size-5 text-cyan-100" />
            <p className="text-label-premium mb-2">{item.label}</p>
            <h3 className="text-xl font-semibold tracking-[-0.025em] text-white">
              {item.value}
            </h3>
            <p className="text-caption-premium mt-2">{item.detail}</p>
          </GlassCard>
        )
      })}
    </div>
  )
}
