"use client"

import { motion } from "framer-motion"

type TypingLineProps = {
  children: React.ReactNode
  delay?: number
}

export function TypingLine({ children, delay = 0 }: TypingLineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
