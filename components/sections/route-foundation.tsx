import type { LucideIcon } from "lucide-react"

import { Container } from "@/components/layout/container"
import { SectionShell } from "@/components/layout/section-shell"

type RouteFoundationProps = {
  items: {
    title: string
    description: string
    icon: LucideIcon
  }[]
}

export function RouteFoundation({ items }: RouteFoundationProps) {
  return (
    <SectionShell className="pt-0">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
            >
              <item.icon className="mb-5 size-5 text-cyan-200" />
              <h2 className="text-base font-semibold text-white">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionShell>
  )
}
