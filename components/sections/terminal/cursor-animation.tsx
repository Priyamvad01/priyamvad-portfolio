"use client"

import { motion } from "framer-motion"

export function CursorAnimation() {
  return (
    <motion.span
      aria-hidden="true"
      animate={{ opacity: [1, 0.22, 1] }}
      transition={{ duration: 1.18, repeat: Infinity, ease: "easeInOut" }}
      className="inline-block h-4 w-2 translate-y-0.5 rounded-[2px] bg-cyan-100/80 shadow-[0_0_14px_rgba(103,232,249,0.28)]"
    />
  )
}
