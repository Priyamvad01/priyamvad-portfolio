import { CursorAnimation } from "./cursor-animation"

type TerminalPromptProps = {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  onHistoryPrevious: () => void
  onHistoryNext: () => void
}

export function TerminalPrompt({
  value,
  onChange,
  onSubmit,
  onHistoryPrevious,
  onHistoryNext,
}: TerminalPromptProps) {
  return (
    <div className="flex items-center gap-1.5 border-t border-white/8 bg-black/20 px-3 py-4 font-mono text-[13px] transition-colors duration-300 focus-within:bg-black/28 sm:gap-2 sm:px-4 sm:text-sm">
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
  )
}
