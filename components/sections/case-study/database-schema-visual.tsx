import { Database } from "lucide-react"

import { databaseEntities } from "@/data/case-study"

export function DatabaseSchemaVisual() {
  return (
    <div className="glass-panel-strong rounded-[2rem] p-5 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {databaseEntities.map((entity) => (
          <div
            key={entity}
            className="rounded-2xl border border-white/10 bg-black/18 p-5"
          >
            <Database className="mb-4 size-5 text-cyan-100" />
            <p className="text-base font-semibold text-white">{entity}</p>
            <p className="text-caption-premium mt-2">
              Relational entity prepared for structured healthcare workflows.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
