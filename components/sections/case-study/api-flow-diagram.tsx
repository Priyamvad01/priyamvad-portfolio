import { apiFlow } from "@/data/case-study"

import { WorkflowNode } from "./workflow-node"

export function APIFlowDiagram() {
  return (
    <div className="glass-panel-strong rounded-[2rem] p-5 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {apiFlow.map((node, index) => (
          <div key={node.title} className="relative">
            <WorkflowNode index={index} {...node} />
            {index < apiFlow.length - 1 ? (
              <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-cyan-100/25 xl:block" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
