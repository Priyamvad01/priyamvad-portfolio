import { CursorAnimation } from "./cursor-animation"

type TerminalPromptProps = {
  value: string
  suggestions: string[]
  onChange: (value: string) => void
  onSubmit: () => void
  onHistoryPrevious: () => void
  onHistoryNext: () => void
}

export function TerminalPrompt({
  value,
  suggestions,
  onChange,
  onSubmit,
  onHistoryPrevious,
  onHistoryNext,
}: TerminalPromptProps) {
  return (
    <div className="border-t border-white/8 bg-black/20 px-3 py-3 font-mono text-[13px] transition-colors duration-300 focus-within:bg-black/28 sm:px-4 sm:text-sm">
      {suggestions.length ? (
        <div className="mb-3 flex flex-wrap gap-2">
          {suggestions.map((command) => (
            <button
              key={command}
              type="button"
              onClick={() => onChange(command)}
              className="rounded-full border border-white/8 bg-white/[0.035] px-2.5 py-1 text-[11px] text-slate-400 transition hover:border-cyan-100/18 hover:text-cyan-50"
            >
              {command}
            </button>
          ))}
        </div>
      ) : null}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="text-cyan-200">priyamvad@portfolio</span>
        <span className="text-slate-600">:</span>
        <span className="text-slate-300">~</span>
        <span className="text-cyan-200">$</span>
        <input
          aria-label="Terminal command input"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault()
              onSubmit()
            }

            if (event.key === "ArrowUp") {
              event.preventDefault()
              onHistoryPrevious()
            }

            if (event.key === "ArrowDown") {
              event.preventDefault()
              onHistoryNext()
            }
          }}
          autoComplete="off"
          spellCheck={false}
          className="min-w-0 flex-1 bg-transparent text-slate-100 outline-none placeholder:text-slate-600 selection:bg-cyan-200/20"
          placeholder="type help"
        />
        <CursorAnimation />
      </div>
    </div>
  )
}
