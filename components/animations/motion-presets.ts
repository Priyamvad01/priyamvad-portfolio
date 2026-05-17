import type { Variants } from "framer-motion"

export const motionTimings = {
  soft: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  quick: { duration: 0.26, ease: [0.22, 1, 0.36, 1] },
  cinematic: { duration: 0.78, ease: [0.16, 1, 0.3, 1] },
} as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(7px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: motionTimings.soft,
  },
}

export const cinematicReveal: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.99, filter: "blur(9px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: motionTimings.cinematic,
  },
}

export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: motionTimings.soft,
  },
}

export const smoothScale: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.015,
    y: -4,
    transition: motionTimings.quick,
  },
  tap: {
    scale: 0.99,
    y: 0,
    transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
  },
}

export const glowTransition: Variants = {
  rest: { boxShadow: "0 18px 70px rgba(0, 0, 0, 0.22)" },
  hover: {
    boxShadow:
      "0 28px 95px rgba(0, 0, 0, 0.32), 0 0 55px rgba(103, 232, 249, 0.12)",
    transition: motionTimings.quick,
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.06,
    },
  },
}

export const sectionTransition: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...motionTimings.soft,
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
}
