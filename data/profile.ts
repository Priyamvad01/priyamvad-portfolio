import {
  BrainCircuit,
  Cloud,
  Code2,
  GitBranch,
  type LucideIcon,
  ServerCog,
  Workflow,
} from "lucide-react"

type Direction = {
  title: string
  description: string
  icon: LucideIcon
}

export const coreDirections: Direction[] = [
  {
    title: "Backend-first engineering",
    description:
      "Designing REST APIs, service layers, and dependable system foundations with Python, Flask, and FastAPI.",
    icon: ServerCog,
  },
  {
    title: "AI-integrated workflows",
    description:
      "Preparing architecture for applied AI features, inference pipelines, automation, and intelligent product surfaces.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud delivery mindset",
    description:
      "Thinking in deployable systems with AWS, Docker, CI/CD, observability, and production-ready handoff.",
    icon: Cloud,
  },
]

export const engineeringSignals: Direction[] = [
  {
    title: "Python",
    description: "Backend logic, automation, API services, and data-oriented tooling.",
    icon: Code2,
  },
  {
    title: "Docker + CI/CD",
    description: "Repeatable delivery flows and clean developer operations.",
    icon: Workflow,
  },
  {
    title: "GitHub",
    description: "Readable repositories, documented work, and recruiter-friendly project history.",
    icon: GitBranch,
  },
]
