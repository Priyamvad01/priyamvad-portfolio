import type { FlowNode } from "@/data/case-study"

import { WorkflowNode } from "./workflow-node"

type PipelineVisualizerProps = {
  nodes: FlowNode[]
}

export function PipelineVisualizer({ nodes }: PipelineVisualizerProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {nodes.map((node, index) => (
        <div key={node.title} className="relative">
          <WorkflowNode index={index} {...node} />
          {index < nodes.length - 1 ? (
            <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-gradient-to-r from-cyan-100/40 to-transparent xl:block" />
          ) : null}
        </div>
      ))}
    </div>
  )
}
