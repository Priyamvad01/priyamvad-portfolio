import { CalendarCheck, Clock, GraduationCap, ServerCog } from "lucide-react"

import { GlassCard } from "@/components/ui/glass-card"

const availabilityItems = [
  {
    title: "Open to opportunities",
    description: "Backend development, software development, internship, and project-focused conversations.",
    icon: CalendarCheck,
  },
  {
    title: "Technical direction",
    description: "Backend systems, AI-integrated applications, cloud workflows, and DevOps learning.",
    icon: ServerCog,
  },
  {
    title: "Student context",
    description: "B.Tech Computer Science Engineering student with project-based growth.",
    icon: GraduationCap,
  },
  {
    title: "Communication",
    description: "Best reached through email or LinkedIn for structured professional context.",
    icon: Clock,
  },
]

export function AvailabilityPanel() {
  return (
    <GlassCard intensity="strong" className="p-6 md:p-8">
      <p className="text-label-premium mb-3">Availability</p>
      <h2 className="text-section-title">
        Available for grounded engineering conversations and opportunities.
      </h2>
      <p className="text-body-premium mt-4 max-w-3xl">
        The focus is realistic: backend engineering roles, internships,
        AI-integrated project work, cloud and DevOps learning, and professional
        collaboration.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {availabilityItems.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-black/18 p-5">
            <item.icon className="mb-4 size-5 text-cyan-100" />
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
            <p className="text-caption-premium mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
