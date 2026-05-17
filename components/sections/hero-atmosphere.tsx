"use client"

import { motion, useScroll, useTransform } from "framer-motion"

import { GridBackground } from "@/components/layout/grid-background"

export function HeroAtmosphere() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, 90])
  const opacity = useTransform(scrollY, [0, 520], [1, 0.35])

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <GridBackground className="opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <motion.div
        style={{ x: "-50%", y, opacity }}
        className="absolute left-1/2 top-[-12rem] h-[30rem] w-[40rem] rounded-[46%] bg-[radial-gradient(ellipse_at_center,rgba(103,232,249,0.14),rgba(148,163,184,0.05)_36%,transparent_70%)] blur-3xl md:top-[-16rem] md:h-[42rem] md:w-[62rem]"
      />
      <motion.div
        animate={{ y: [0, -14, 0], opacity: [0.44, 0.62, 0.44] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-12rem] top-32 h-[22rem] w-[22rem] rounded-[42%] bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.11),rgba(103,232,249,0.035)_42%,transparent_72%)] blur-3xl md:right-[-10rem] md:h-[30rem] md:w-[30rem]"
      />
      <motion.div
        animate={{ x: [0, 18, 0], y: [0, 10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-[-10rem] h-[20rem] w-[20rem] rounded-[44%] bg-[radial-gradient(ellipse_at_center,rgba(203,213,225,0.09),rgba(148,163,184,0.032)_44%,transparent_74%)] blur-3xl md:left-[-8rem] md:h-[26rem] md:w-[26rem]"
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}
