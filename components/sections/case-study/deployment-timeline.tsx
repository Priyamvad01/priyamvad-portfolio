import { deploymentFlow } from "@/data/case-study"

import { WorkflowNode } from "./workflow-node"

export function DeploymentTimeline() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {deploymentFlow.map((node, index) => (
        <WorkflowNode key={node.title} index={index} {...node} />
      ))}
    </div>
  )
}
