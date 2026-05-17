"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Bot, Command, CornerDownLeft, Loader2, Sparkles, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import {
  assistantPrompts,
  assistantStatusPanels,
  type AssistantPrompt,
} from "@/data/assistant"

type AssistantApiResponse = {
  ok?: boolean
  response?: AssistantPrompt
  message?: string
}

type SmartAssistantProps = {
  onOpenCommandPalette: () => void
}

export function SmartAssistant({ onOpenCommandPalette }: SmartAssistantProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [activeResponse, setActiveResponse] = useState<AssistantPrompt>(
    assistantPrompts[0]
  )

  async function askAssistant(message: string) {
    const value = message.trim()

    if (!value) {
      return
    }

    setLoading(true)
    setQuery(value)

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: value }),
      })
      const data = (await response.json()) as AssistantApiResponse

      if (data.ok && data.response) {
        setActiveResponse(data.response)
      } else {
        setActiveResponse({
          id: "assistant-error",
          label: "Portfolio guide",
          query: value,
          response:
            data.message ??
            "The guide could not resolve that request. Try projects, skills, terminal, or contact.",
          tags: ["Guide"],
        })
      }
    } catch {
      setActiveResponse({
        id: "assistant-network",
        label: "Portfolio guide",
        query: value,
        response:
          "The guide is temporarily unavailable. The command palette and Terminal Lab are still available.",
        links: [{ label: "Terminal", href: "/terminal" }],
        tags: ["Fallback"],
      })
    } finally {
      setLoading(false)
      setQuery("")
    }
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-[60] inline-flex items-center gap-2 rounded-full border border-cyan-100/16 bg-background/82 px-4 py-3 text-sm font-medium text-cyan-50 shadow-[0_18px_70px_rgba(0,0,0,0.34),0_0_38px_rgba(103,232,249,0.08)] backdrop-blur-2xl transition hover:-translate-y-0.5 hover:border-cyan-100/24 hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-cyan-200/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Open portfolio guide"
      >
        <Sparkles className="size-4" />
        <span className="hidden sm:inline">Guide</span>
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-x-3 bottom-4 z-[80] mx-auto max-w-3xl sm:right-4 sm:left-auto sm:mx-0"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label="Portfolio guide"
          >
            <div className="glass-panel-strong overflow-hidden rounded-[1.75rem]">
              <div className="flex items-center justify-between border-b border-white/8 px-4 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-2xl border border-cyan-100/14 bg-cyan-100/10 text-cyan-50">
                    <Bot className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Portfolio guide
                    </p>
                    <p className="text-xs text-slate-500">
                      Local knowledge mode
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="touch-target inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
                  aria-label="Close portfolio guide"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="grid gap-4 p-4 md:grid-cols-[1fr_0.72fr]">
                <div className="rounded-2xl border border-white/8 bg-black/18 p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-100/70">
                    {activeResponse.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {activeResponse.response}
                  </p>
                  {activeResponse.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeResponse.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {activeResponse.links?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeResponse.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="rounded-full border border-cyan-200/18 bg-cyan-200/10 px-3 py-1.5 text-xs font-medium text-cyan-50 transition hover:bg-cyan-200/15"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="space-y-3">
                  {assistantStatusPanels.map((panel) => (
                    <div
                      key={panel.label}
                      className="rounded-2xl border border-white/8 bg-white/[0.035] p-3"
                    >
                      <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                        {panel.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {panel.value}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {panel.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/8 p-4">
                <div className="mb-3 flex flex-wrap gap-2">
                  {assistantPrompts.map((prompt) => (
                    <button
                      key={prompt.id}
                      type="button"
                      onClick={() => askAssistant(prompt.query)}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-100/18 hover:bg-white/[0.07] hover:text-white"
                    >
                      {prompt.label}
                    </button>
                  ))}
                </div>
                <form
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-3 py-2 focus-within:border-cyan-100/24"
                  onSubmit={(event) => {
                    event.preventDefault()
                    askAssistant(query)
                  }}
                >
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
                    placeholder="Ask about projects, skills, contact..."
                    aria-label="Ask portfolio guide"
                  />
                  <button
                    type="button"
                    onClick={onOpenCommandPalette}
                    className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 transition hover:text-white sm:inline-flex"
                  >
                    <Command className="mr-1.5 size-3.5" />
                    Cmd K
                  </button>
                  <button
                    type="button"
                    onClick={() => askAssistant(query)}
                    className="inline-flex size-8 items-center justify-center rounded-full bg-cyan-100/12 text-cyan-50 transition hover:bg-cyan-100/18"
                    aria-label="Submit assistant question"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <CornerDownLeft className="size-4" />
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
