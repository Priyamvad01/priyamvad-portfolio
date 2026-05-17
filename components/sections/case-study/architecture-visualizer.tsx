import { architectureLayers } from "@/data/case-study"

import { SystemLayerCard } from "./system-layer-card"

export function ArchitectureVisualizer() {
  return (
    <div className="glass-panel-strong rounded-[2rem] p-5 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {architectureLayers.map((layer, index) => (
          <div key={layer.title} className="relative">
            <SystemLayerCard {...layer} />
            {index < architectureLayers.length - 1 ? (
              <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-cyan-100/25 lg:block" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
