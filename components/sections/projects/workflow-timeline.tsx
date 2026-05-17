import type { ProjectWorkflowStep } from "@/data/projects"

type WorkflowTimelineProps = {
  steps: ProjectWorkflowStep[]
}

export function WorkflowTimeline({ steps }: WorkflowTimelineProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {steps.map((step, index) => (
        <article
          key={step.title}
          className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="flex size-10 items-center justify-center rounded-xl border border-cyan-200/10 bg-cyan-200/8 text-cyan-100">
              <step.icon className="size-5" />
            </span>
            <span className="font-mono text-xs text-slate-500">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-base font-semibold text-white">{step.title}</h3>
          <p className="text-caption-premium mt-3">{step.description}</p>
        </article>
      ))}
    </div>
  )
}
