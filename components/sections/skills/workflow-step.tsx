import type { LucideIcon } from "lucide-react"

type WorkflowStepProps = {
  index: number
  title: string
  description: string
  icon: LucideIcon
}

export function WorkflowStep({
  index,
  title,
  description,
  icon: Icon,
}: WorkflowStepProps) {
  return (
    <article className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-5">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="flex size-10 items-center justify-center rounded-xl border border-cyan-200/10 bg-cyan-200/8 text-cyan-100">
          <Icon className="size-5" />
        </span>
        <span className="font-mono text-xs text-slate-500">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="text-caption-premium mt-3">{description}</p>
    </article>
  )
}
