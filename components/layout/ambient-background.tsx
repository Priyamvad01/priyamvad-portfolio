import { GridBackground } from "./grid-background"

export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[radial-gradient(circle_at_20%_0%,rgba(148,163,184,0.11),transparent_30%),radial-gradient(circle_at_78%_12%,rgba(103,232,249,0.1),transparent_28%),linear-gradient(180deg,#05070b_0%,#070a10_44%,#040509_100%)]"
    >
      <GridBackground className="bg-[size:68px_68px]" />
      <div className="absolute inset-x-0 top-0 h-80 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),transparent)]" />
      <div className="absolute left-1/2 top-[-10rem] h-[26rem] w-[34rem] -translate-x-1/2 rounded-[45%] bg-[radial-gradient(ellipse_at_center,rgba(103,232,249,0.07),rgba(148,163,184,0.032)_42%,transparent_72%)] blur-3xl md:top-[-14rem] md:h-[34rem] md:w-[56rem] md:bg-[radial-gradient(ellipse_at_center,rgba(103,232,249,0.08),rgba(148,163,184,0.035)_42%,transparent_72%)]" />
      <div className="absolute bottom-[-18rem] right-[-10rem] h-[24rem] w-[24rem] rounded-[42%] bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.05),transparent_70%)] blur-3xl md:right-[-8rem] md:h-[34rem] md:w-[34rem] md:bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.06),transparent_70%)]" />
    </div>
  )
}
