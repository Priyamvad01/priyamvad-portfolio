import type { LucideIcon } from "lucide-react"
import Link from "next/link"

import { GlassCard } from "@/components/ui/glass-card"

import { CopyButton } from "./copy-button"

type ContactCardProps = {
  title: string
  value: string
  href?: string
  icon: LucideIcon
  copyLabel?: string
}

export function ContactCard({
  title,
  value,
  href,
  icon: Icon,
  copyLabel = title,
}: ContactCardProps) {
  return (
    <GlassCard interactive className="h-full">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="flex size-11 items-center justify-center rounded-2xl border border-cyan-200/10 bg-cyan-200/8 text-cyan-100">
          <Icon className="size-5" />
        </span>
        <CopyButton value={value} label={copyLabel} />
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      {href ? (
        <Link
          href={href}
          className="mt-3 block break-words text-sm leading-6 text-slate-400 transition hover:text-cyan-100"
        >
          {value}
        </Link>
      ) : (
        <p className="text-body-premium mt-3 break-words">{value}</p>
      )}
    </GlassCard>
  )
}
