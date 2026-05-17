"use client"

import { motion, useScroll } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[70] h-px origin-left bg-cyan-200/70 shadow-[0_0_18px_rgba(125,211,252,0.35)]"
      style={{ scaleX: scrollYProgress, width: "100%" }}
    />
  )
}
