"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Command, Search, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

import { commandActions } from "@/data/assistant"
import { cn } from "@/lib/utils"

type CommandPaletteProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)

  const results = useMemo(() => {
    const normalized = query.toLowerCase().trim()

    if (!normalized) {
      return commandActions
    }

    return commandActions.filter((item) =>
      [item.title, item.description, item.group, ...item.keywords]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    )
  }, [query])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onOpenChange(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [onOpenChange])

  function selectActive() {
    const selected = results[activeIndex]

    if (!selected) {
      return
    }

    if (selected.external) {
      window.open(selected.href, "_blank", "noopener,noreferrer")
    } else {
      window.location.href = selected.href
    }

    onOpenChange(false)
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center bg-black/45 px-3 pt-24 backdrop-blur-xl sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          onMouseDown={() => onOpenChange(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel-strong w-full max-w-2xl overflow-hidden rounded-[1.75rem]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/8 px-4 py-4">
              <Search className="size-4 text-cyan-100" />
              <input
                autoFocus
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value)
                  setActiveIndex(0)
                }}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault()
                    setActiveIndex((index) =>
                      Math.min(index + 1, results.length - 1)
                    )
                  }

                  if (event.key === "ArrowUp") {
                    event.preventDefault()
                    setActiveIndex((index) => Math.max(index - 1, 0))
                  }

                  if (event.key === "Enter") {
                    event.preventDefault()
                    selectActive()
                  }
                }}
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                placeholder="Search pages, projects, skills, contact..."
              />
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="touch-target inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
                aria-label="Close command palette"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="max-h-[min(28rem,62dvh)] overflow-y-auto p-2">
              {results.length ? (
                results.map((item, index) => {
                  const active = index === activeIndex

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => onOpenChange(false)}
                      className={cn(
                        "grid gap-1 rounded-2xl border px-4 py-3 transition duration-200",
                        active
                          ? "border-cyan-100/18 bg-cyan-100/10 text-white"
                          : "border-transparent text-slate-300 hover:bg-white/[0.05]"
                      )}
                    >
                      <span className="flex items-center justify-between gap-3 text-sm font-medium">
                        <span>{item.title}</span>
                        <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-slate-500">
                          {item.group}
                          {item.external ? (
                            <ArrowUpRight className="size-3" />
                          ) : null}
                        </span>
                      </span>
                      <span className="text-xs leading-5 text-slate-500">
                        {item.description}
                      </span>
                    </Link>
                  )
                })
              ) : (
                <div className="p-6 text-sm text-slate-400">
                  No matching route found.
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-white/8 px-4 py-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-2">
                <Command className="size-3.5" />
                Ctrl / Cmd + K
              </span>
              <span>Enter to open</span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
