"use client"

import { motion } from "framer-motion"
import type { ComponentPropsWithoutRef } from "react"

import { fadeUp } from "./motion-presets"

type FadeInProps = ComponentPropsWithoutRef<typeof motion.div> & {
  delay?: number
}

export function FadeIn({ delay = 0, ...props }: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        ...fadeUp,
        visible: {
          ...fadeUp.visible,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay,
          },
        },
      }}
      {...props}
    />
  )
}
