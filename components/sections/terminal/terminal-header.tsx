import { Circle, SquareTerminal } from "lucide-react"

export function TerminalHeader() {
  return (
    <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.04] px-4 py-3">
      <div className="flex items-center gap-2">
        <Circle className="size-2.5 fill-slate-500 text-slate-500" />
        <Circle className="size-2.5 fill-slate-500/80 text-slate-500/80" />
        <Circle className="size-2.5 fill-cyan-200/70 text-cyan-200/70" />
      </div>
      <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
        <SquareTerminal className="size-3.5" />
        terminal.priyamvad.dev
      </div>
    </div>
  )
}
