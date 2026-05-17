import type { TerminalResponse } from "@/data/terminal"

import { CommandOutput } from "./command-output"

export type TerminalEntry = {
  id: string
  command: string
  response: TerminalResponse
}

type CommandHistoryProps = {
  entries: TerminalEntry[]
}

export function CommandHistory({ entries }: CommandHistoryProps) {
  return (
    <div className="space-y-6">
      {entries.map((entry) => (
        <div key={entry.id} className="animate-in fade-in slide-in-from-bottom-1 duration-300">
          <p className="font-mono text-sm text-slate-200">
            <span className="text-cyan-200">$</span>{" "}
            <span>{entry.command}</span>
          </p>
          <CommandOutput response={entry.response} />
        </div>
      ))}
    </div>
  )
}
