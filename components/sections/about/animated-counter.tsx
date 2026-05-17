"use client"

import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

type AnimatedCounterProps = {
  value: number
  suffix?: string
}

export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const spring = useSpring(0, { stiffness: 70, damping: 18, mass: 0.7 })
  const rounded = useTransform(spring, (latest) => `${Math.round(latest)}${suffix}`)

  useEffect(() => {
    if (inView) {
      spring.set(value)
    }
  }, [inView, spring, value])

  return <motion.span ref={ref}>{rounded}</motion.span>
}
