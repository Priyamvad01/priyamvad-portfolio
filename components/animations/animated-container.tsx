"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

import { cinematicReveal } from "./motion-presets"

type AnimatedContainerProps = ComponentPropsWithoutRef<typeof motion.div> & {
  delay?: number
}

export function AnimatedContainer({
  className,
  delay = 0,
  ...props
}: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={
        shouldReduceMotion
          ? undefined
          : {
              ...cinematicReveal,
              visible: {
                ...cinematicReveal.visible,
                transition: {
                  duration: 0.58,
                  ease: [0.22, 1, 0.36, 1],
                  delay,
                },
              },
            }
      }
      className={cn(className)}
      {...props}
    />
  )
}
