import Link from "next/link"

import { TechBadge } from "@/components/ui/badge"
import type { TerminalResponse } from "@/data/terminal"

import { TechOutputCard } from "./tech-output-card"
import { TypingLine } from "./typing-line"

type CommandOutputProps = {
  response: TerminalResponse
}

export function CommandOutput({ response }: CommandOutputProps) {
  return (
    <div className="mt-3 space-y-3">
      <TypingLine>
        <p className="font-medium text-slate-100">{response.title}</p>
      </TypingLine>
      {response.summary ? (
        <TypingLine delay={0.04}>
          <p className="max-w-3xl leading-6 text-slate-400">{response.summary}</p>
        </TypingLine>
      ) : null}
      {response.sections?.length ? (
        <div className="grid gap-3 lg:grid-cols-2">
          {response.sections.map((section, index) => (
            <TypingLine key={section.label} delay={0.05 + index * 0.03}>
              <TechOutputCard section={section} />
            </TypingLine>
          ))}
        </div>
      ) : null}
      {response.tags?.length ? (
        <TypingLine delay={0.08}>
          <div className="flex flex-wrap gap-2">
            {response.tags.map((tag) => (
              <TechBadge key={tag}>{tag}</TechBadge>
            ))}
          </div>
        </TypingLine>
      ) : null}
      {response.links?.length ? (
        <TypingLine delay={0.1}>
          <div className="flex flex-wrap gap-2">
            {response.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-full border border-cyan-200/18 bg-cyan-200/10 px-3 py-1.5 text-xs font-medium text-cyan-50 transition hover:bg-cyan-200/15"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </TypingLine>
      ) : null}
    </div>
  )
}
