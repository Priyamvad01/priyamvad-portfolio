"use client"

import { motion } from "framer-motion"

import { TechBadge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"
import { projectStackGroups } from "@/data/projects"

export function TechStackCluster() {
  return (
    <GlassCard intensity="strong" className="p-5 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projectStackGroups.map((group, index) => (
          <motion.div
            key={group.title}
            whileHover={{ y: -6, scale: 1.015 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/10 bg-black/18 p-5"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-xl border border-cyan-200/10 bg-cyan-200/8 text-cyan-100">
                <group.icon className="size-5" />
              </span>
              <span className="font-mono text-xs text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <TechBadge key={item}>{item}</TechBadge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}
