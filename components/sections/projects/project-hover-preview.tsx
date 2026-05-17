"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type ProjectHoverPreviewProps = {
  children: ReactNode
}

export function ProjectHoverPreview({ children }: ProjectHoverPreviewProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
