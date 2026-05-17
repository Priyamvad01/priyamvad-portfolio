import { AnimatedContainer } from "@/components/animations/animated-container"

type TimelineBlockProps = {
  items: readonly {
    period: string
    title: string
    description: string
  }[]
}

export function TimelineBlock({ items }: TimelineBlockProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-100/35 via-white/10 to-transparent md:block" />
      <div className="grid gap-4">
        {items.map((item, index) => (
          <AnimatedContainer key={item.title} delay={index * 0.08}>
            <article className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-5 md:ml-12">
              <span className="absolute -left-[3.25rem] top-6 hidden size-8 items-center justify-center rounded-full border border-cyan-200/20 bg-background text-xs font-semibold text-cyan-100 shadow-[0_0_30px_rgba(103,232,249,0.12)] md:flex">
                {index + 1}
              </span>
              <p className="text-label-premium mb-3">{item.period}</p>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-body-premium mt-3">{item.description}</p>
            </article>
          </AnimatedContainer>
        ))}
      </div>
    </div>
  )
}
