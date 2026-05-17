"use client"

import { motion } from "framer-motion"

export function ScrollIndicator() {
  return (
    <div className="hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-500 md:flex">
      <span>Scroll</span>
      <span className="relative h-10 w-px overflow-hidden bg-white/10">
        <motion.span
          animate={{ y: ["-100%", "120%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-0 h-5 w-px bg-cyan-100/70"
        />
      </span>
    </div>
  )
}
