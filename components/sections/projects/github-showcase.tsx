import { ExternalLink, GitBranch } from "lucide-react"
import Link from "next/link"

import { GitHubIcon } from "@/components/ui/social-icons"
import { Divider } from "@/components/ui/divider"
import { GlassCard } from "@/components/ui/glass-card"
import { GlowButton } from "@/components/ui/premium-button"
import { siteProfile } from "@/constants/site"

export function GitHubShowcase() {
  return (
    <GlassCard intensity="strong" className="p-6 md:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <div className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-cyan-100">
            <GitHubIcon className="size-5" />
          </div>
          <p className="text-label-premium mb-3">GitHub Integration</p>
          <h2 className="text-section-title">Project history and engineering workflow live on GitHub.</h2>
          <p className="text-body-premium mt-4">
            This section connects visitors to Priyamvad&apos;s public GitHub
            profile without inventing contribution statistics or repository data.
          </p>
          <div className="mt-7">
            <GlowButton asChild>
              <Link href={siteProfile.github} target="_blank" rel="noopener noreferrer">
                Open GitHub <ExternalLink className="size-4" />
              </Link>
            </GlowButton>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/18 p-5">
          <div className="flex items-center gap-3">
            <GitBranch className="size-5 text-cyan-100" />
            <p className="text-sm font-semibold text-white">Workflow branding</p>
          </div>
          <Divider className="my-5" />
          <div className="grid gap-3 sm:grid-cols-3">
            {["Readable repos", "Versioned builds", "Project proof"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <p className="text-sm font-medium text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
