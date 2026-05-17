"use client"

import { motion } from "framer-motion"

import { GlassCard } from "@/components/ui/glass-card"
import type { TechItem } from "@/data/skills"
import { cn } from "@/lib/utils"

type InteractiveClusterProps = {
  items: TechItem[]
}

const clusterPositions = [
  "md:col-start-2 md:row-start-1",
  "md:col-start-1 md:row-start-2",
  "md:col-start-3 md:row-start-2",
  "md:col-start-2 md:row-start-3",
  "md:col-start-1 md:row-start-4",
  "md:col-start-3 md:row-start-4",
]

const priorityTone = {
  primary: "border-cyan-200/24 bg-cyan-200/10 text-cyan-50",
  secondary: "border-white/12 bg-white/[0.055] text-slate-100",
  supporting: "border-white/8 bg-black/25 text-slate-400",
}

export function InteractiveCluster({ items }: InteractiveClusterProps) {
  const featured = items.filter((item) => item.priority === "primary").slice(0, 6)

  return (
    <GlassCard intensity="strong" className="overflow-hidden p-5 md:p-8">
      <div className="relative grid min-h-0 gap-4 md:min-h-[30rem] md:grid-cols-3 md:grid-rows-4">
        <div className="absolute left-1/2 top-1/2 hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/10 md:block" />
        <div className="absolute left-1/2 top-1/2 hidden h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-100/18 to-transparent md:block" />
        <div className="absolute left-1/2 top-1/2 hidden h-[72%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-100/18 to-transparent md:block" />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 flex flex-col items-center justify-center rounded-[2rem] border border-cyan-200/18 bg-cyan-200/10 p-6 text-center shadow-[0_0_70px_rgba(103,232,249,0.12)] md:col-start-2 md:row-start-2 md:row-span-2"
        >
          <p className="text-label-premium mb-3">Core</p>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
            Backend + AI + Cloud
          </h3>
          <p className="text-caption-premium mt-3">
            A practical ecosystem for intelligent systems.
          </p>
        </motion.div>
        {featured.map((item, index) => (
          <motion.div
            key={item.name}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative z-10 rounded-2xl border p-4 backdrop-blur-xl",
              priorityTone[item.priority],
              clusterPositions[index]
            )}
          >
            <p className="text-sm font-semibold">{item.name}</p>
            <p className="mt-2 text-xs leading-5 opacity-75">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}
