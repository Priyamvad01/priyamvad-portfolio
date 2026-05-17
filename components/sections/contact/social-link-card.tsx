import type { ComponentType, SVGProps } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { GlassCard } from "@/components/ui/glass-card"

type SocialLinkCardProps = {
  title: string
  description: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export function SocialLinkCard({
  title,
  description,
  href,
  icon: Icon,
}: SocialLinkCardProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
      <GlassCard interactive className="h-full">
        <div className="mb-5 flex items-center justify-between gap-4">
          <Icon className="size-5 text-cyan-100" />
          <ExternalLink className="size-4 text-slate-500" />
        </div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="text-caption-premium mt-3">{description}</p>
      </GlassCard>
    </Link>
  )
}
