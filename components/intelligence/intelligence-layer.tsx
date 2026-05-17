"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const CommandPalette = dynamic(
  () =>
    import("@/components/intelligence/command-palette").then(
      (mod) => mod.CommandPalette
    ),
  { ssr: false }
)

const SmartAssistant = dynamic(
  () =>
    import("@/components/intelligence/smart-assistant").then(
      (mod) => mod.SmartAssistant
    ),
  { ssr: false }
)

export function IntelligenceLayer() {
  const [commandOpen, setCommandOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setCommandOpen((open) => !open)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
      <SmartAssistant onOpenCommandPalette={() => setCommandOpen(true)} />
    </>
  )
}
