"use client"

import { useEffect, useMemo, useRef, useState } from "react"

import {
  terminalCommandNames,
  terminalCommands,
  type TerminalResponse,
} from "@/data/terminal"

import { CommandHistory, type TerminalEntry } from "./command-history"
import { TerminalHeader } from "./terminal-header"
import { TerminalPrompt } from "./terminal-prompt"

const bootResponse: TerminalResponse = {
  title: "Interactive Engineering Console",
  summary:
    "Type help to explore profile commands, project systems, skills, and deployment direction.",
  tags: ["help", "about", "skills", "healthcare-system", "deploy-status"],
}

function createUnknownResponse(command: string): TerminalResponse {
  return {
    title: `Command not found: ${command}`,
    summary:
      "This console is intentionally focused. Type help to see supported commands.",
    tags: [...terminalCommandNames],
  }
}

export function TerminalWindow() {
  const [entries, setEntries] = useState<TerminalEntry[]>([
    {
      id: "boot",
      command: "boot --console",
      response: bootResponse,
    },
  ])
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const commandMap = useMemo(() => terminalCommands, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    })
  }, [entries])

  function submitCommand() {
    const rawCommand = input.trim()

    if (!rawCommand) {
      return
    }

    const normalized = rawCommand.toLowerCase()
    setInput("")
    setHistory((current) => [...current, rawCommand])
    setHistoryIndex(null)

    if (normalized === "clear") {
      setEntries([])
      return
    }

    const response = commandMap[normalized] ?? createUnknownResponse(rawCommand)
    setEntries((current) => [
      ...current,
      {
        id: `${Date.now()}-${rawCommand}`,
        command: rawCommand,
        response,
      },
    ])
  }

  function showPreviousCommand() {
    if (!history.length) {
      return
    }

    const nextIndex =
      historyIndex === null ? history.length - 1 : Math.max(historyIndex - 1, 0)
    setHistoryIndex(nextIndex)
    setInput(history[nextIndex])
  }

  function showNextCommand() {
    if (!history.length || historyIndex === null) {
      return
    }

    const nextIndex = historyIndex + 1

    if (nextIndex >= history.length) {
      setHistoryIndex(null)
      setInput("")
      return
    }

    setHistoryIndex(nextIndex)
    setInput(history[nextIndex])
  }

  return (
    <div className="glass-panel-strong overflow-hidden rounded-[2rem] bg-[#05070b]/95 shadow-[0_30px_110px_rgba(0,0,0,0.4)]">
      <TerminalHeader />
      <div
        ref={scrollRef}
        className="mobile-scroll-panel max-h-[min(34rem,60dvh)] min-h-[24rem] overflow-y-auto p-4 font-mono text-[13px] leading-6 sm:min-h-[28rem] sm:p-5 sm:text-sm"
      >
        <CommandHistory entries={entries} />
      </div>
      <TerminalPrompt
        value={input}
        onChange={setInput}
        onSubmit={submitCommand}
        onHistoryPrevious={showPreviousCommand}
        onHistoryNext={showNextCommand}
      />
    </div>
  )
}
