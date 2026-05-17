import { Container } from "@/components/layout/container"

export default function Loading() {
  return (
    <div className="relative min-h-[70svh] pt-32">
      <Container>
        <div className="mx-auto max-w-4xl animate-pulse space-y-6">
          <div className="h-6 w-40 rounded-full bg-white/10" />
          <div className="h-16 max-w-3xl rounded-3xl bg-white/[0.07]" />
          <div className="h-5 max-w-xl rounded-full bg-white/[0.06]" />
          <div className="grid gap-4 pt-4 md:grid-cols-3">
            <div className="h-32 rounded-3xl border border-white/8 bg-white/[0.04]" />
            <div className="h-32 rounded-3xl border border-white/8 bg-white/[0.04]" />
            <div className="h-32 rounded-3xl border border-white/8 bg-white/[0.04]" />
          </div>
        </div>
      </Container>
    </div>
  )
}
