"use client"

import { motion } from "framer-motion"

export function CursorAnimation() {
  return (
    <motion.span
      aria-hidden="true"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      className="inline-block h-4 w-2 translate-y-0.5 bg-cyan-100/80"
    />
  )
}
