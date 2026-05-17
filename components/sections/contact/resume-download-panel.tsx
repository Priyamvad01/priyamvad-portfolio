import { ArrowDownToLine, FileText } from "lucide-react"

import { GlassCard } from "@/components/ui/glass-card"
import { SecondaryButton } from "@/components/ui/premium-button"

export function ResumeDownloadPanel() {
  return (
    <GlassCard intensity="strong" className="p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
        <span className="flex size-14 items-center justify-center rounded-2xl border border-cyan-200/12 bg-cyan-200/8 text-cyan-100">
          <FileText className="size-6" />
        </span>
        <div>
          <p className="text-label-premium mb-2">Resume</p>
          <h2 className="text-2xl font-semibold tracking-[-0.025em] text-white">
            Resume download architecture prepared.
          </h2>
          <p className="text-body-premium mt-3">
            Add a PDF later at `public/resume/priyamvad-ranjan-resume.pdf` and
            wire this button to the file path.
          </p>
        </div>
        <SecondaryButton type="button" aria-disabled="true" className="cursor-not-allowed opacity-75">
          Coming Soon <ArrowDownToLine className="size-4" />
        </SecondaryButton>
      </div>
    </GlassCard>
  )
}
