"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Cloud, ServerCog, Workflow } from "lucide-react"

import { Divider } from "@/components/ui/divider"

const systemSignals = [
  {
    label: "Backend",
    value: "FastAPI / Flask",
    icon: ServerCog,
  },
  {
    label: "AI Flow",
    value: "OCR + automation",
    icon: BrainCircuit,
  },
  {
    label: "Cloud",
    value: "AWS ready",
    icon: Cloud,
  },
  {
    label: "Delivery",
    value: "Docker + CI/CD",
    icon: Workflow,
  },
]

export function HeroSystemPanel() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="glass-panel-strong relative overflow-hidden rounded-[2rem] p-5 md:p-6"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/60 to-transparent" />
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-label-premium">System Identity</p>
          <h2 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-white">
            Intelligent engineering stack
          </h2>
        </div>
        <div className="flex size-12 items-center justify-center rounded-2xl border border-cyan-200/12 bg-cyan-200/8 text-cyan-100 shadow-[0_0_34px_rgba(103,232,249,0.1)]">
          <ServerCog className="size-5" />
        </div>
      </div>
      <div className="grid gap-3">
        {systemSignals.map((item) => (
          <div
            key={item.label}
            className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border border-white/8 bg-black/18 p-3"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-white/[0.045] text-cyan-100">
              <item.icon className="size-4" />
            </span>
            <span className="text-sm font-medium text-slate-200">
              {item.label}
            </span>
            <span className="text-right text-xs text-slate-500">
              {item.value}
            </span>
          </div>
        ))}
      </div>
      <Divider className="my-5" />
      <div className="grid grid-cols-3 gap-3 text-center">
        {["APIs", "AI", "Cloud"].map((item) => (
          <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
            <p className="text-sm font-semibold text-white">{item}</p>
            <p className="mt-1 text-[11px] text-slate-500">focus</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
