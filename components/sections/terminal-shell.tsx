const terminalLines = [
  { prompt: "$", command: "profile --identity", output: "Priyamvad Ranjan | Backend, AI & Cloud Developer" },
  { prompt: "$", command: "stack --core", output: "Python, FastAPI, Flask, AWS, Docker, CI/CD, REST APIs" },
  { prompt: "$", command: "project open healthcare-ai-system", output: "Opening architecture notes and AI workflow map..." },
]

export function TerminalShell() {
  return (
    <div className="glass-panel-strong overflow-hidden rounded-2xl bg-[#06080d]/90">
      <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.04] px-4 py-3">
        <div className="flex gap-2">
          <span className="size-2.5 rounded-full bg-slate-500" />
          <span className="size-2.5 rounded-full bg-slate-500/80" />
          <span className="size-2.5 rounded-full bg-cyan-200/70" />
        </div>
        <p className="font-mono text-xs text-slate-500">portfolio-console</p>
      </div>
      <div className="space-y-5 p-5 font-mono text-sm">
        {terminalLines.map((line) => (
          <div key={line.command}>
            <p className="text-slate-200">
              <span className="text-cyan-200">{line.prompt}</span>{" "}
              {line.command}
            </p>
            <p className="mt-2 text-slate-500">{line.output}</p>
          </div>
        ))}
        <p className="text-slate-200">
          <span className="text-cyan-200">$</span>{" "}
          <span className="inline-block h-4 w-2 translate-y-0.5 bg-cyan-100/80" />
        </p>
      </div>
    </div>
  )
}
