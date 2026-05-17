"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

import { fadeUp, staggerContainer } from "./motion-presets"

type AnimatedSectionProps = ComponentPropsWithoutRef<typeof motion.div> & {
  stagger?: boolean
}

export function AnimatedSection({
  className,
  stagger = false,
  ...props
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={shouldReduceMotion ? undefined : stagger ? staggerContainer : fadeUp}
      className={cn(className)}
      {...props}
    />
  )
}
