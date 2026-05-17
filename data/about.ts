import {
  Blocks,
  BrainCircuit,
  Cloud,
  Code2,
  Container,
  DatabaseZap,
  GitBranch,
  Layers3,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react"

export type AboutCardItem = {
  title: string
  description: string
  icon: LucideIcon
  meta?: string
}

export const developerJourney = [
  {
    period: "Foundation",
    title: "Computer Science grounding",
    description:
      "Building the base through B.Tech Computer Science Engineering, with focus on programming fundamentals, software structure, and practical implementation.",
  },
  {
    period: "Direction",
    title: "Backend-first development path",
    description:
      "Moving deeper into Python, Flask, FastAPI, REST APIs, and the patterns that make backend systems understandable and maintainable.",
  },
  {
    period: "Expansion",
    title: "AI and cloud systems",
    description:
      "Exploring AI-integrated workflows, OCR-driven product ideas, Docker, CI/CD, and cloud deployment as part of real project building.",
  },
] as const

export const technicalDirection: AboutCardItem[] = [
  {
    title: "Backend Development",
    description:
      "Python services, route design, validation, data flow, and clean service boundaries.",
    icon: ServerCog,
    meta: "Core",
  },
  {
    title: "REST APIs",
    description:
      "Readable endpoints, request lifecycle thinking, response structure, and integration-ready contracts.",
    icon: Network,
    meta: "Systems",
  },
  {
    title: "AI-integrated Systems",
    description:
      "Practical AI features, OCR flows, automation points, and intelligent product behavior.",
    icon: BrainCircuit,
    meta: "Applied",
  },
  {
    title: "Cloud Deployment",
    description:
      "Deployment-ready architecture with environment configuration, AWS direction, and runtime awareness.",
    icon: Cloud,
    meta: "Cloud",
  },
  {
    title: "Docker & CI/CD",
    description:
      "Containerized workflows, repeatable setup, automated checks, and cleaner delivery habits.",
    icon: Container,
    meta: "DevOps",
  },
  {
    title: "Microservices Thinking",
    description:
      "Learning how independent services, clear contracts, and modular architecture scale over time.",
    icon: Blocks,
    meta: "Architecture",
  },
]

export const mindsetPrinciples: AboutCardItem[] = [
  {
    title: "Structure before scale",
    description:
      "Good systems start with understandable boundaries, predictable data flow, and code that can be extended without confusion.",
    icon: Layers3,
  },
  {
    title: "Practical implementation",
    description:
      "Learning is tied to building: each tool is explored through use cases, project constraints, and working software.",
    icon: Code2,
  },
  {
    title: "Production-oriented thinking",
    description:
      "Even as a student, the goal is to think about deployment, configuration, reliability, and developer experience early.",
    icon: ShieldCheck,
  },
] as const

export const coreInterests: AboutCardItem[] = [
  {
    title: "Backend Systems",
    description: "APIs, services, databases, authentication, and maintainable application logic.",
    icon: ServerCog,
  },
  {
    title: "AI-based Applications",
    description: "Intelligent workflows that add practical value without unnecessary complexity.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud Infrastructure",
    description: "Deployment foundations, AWS direction, environments, and service reliability.",
    icon: Cloud,
  },
  {
    title: "API Development",
    description: "RESTful design, integration contracts, validation, and clean response patterns.",
    icon: Network,
  },
  {
    title: "DevOps Automation",
    description: "Docker, CI/CD, repeatable workflows, and confidence-building delivery checks.",
    icon: Workflow,
  },
  {
    title: "Intelligent Platforms",
    description: "Full product systems where backend, AI, and cloud layers work together.",
    icon: DatabaseZap,
  },
]

export const currentFocus = [
  "Scalable backend systems",
  "FastAPI and Flask architecture",
  "AI integrations and OCR workflows",
  "Docker-based development",
  "AWS deployment foundations",
  "CI/CD workflows",
  "Modern frontend architecture",
  "Full-stack engineering habits",
] as const

export const highlights = [
  {
    value: 1,
    suffix: "",
    label: "Featured major project",
    description: "AI-Based Healthcare Management System case study foundation.",
    icon: Rocket,
  },
  {
    value: 6,
    suffix: "",
    label: "Core interest areas",
    description: "Backend, AI, cloud, APIs, DevOps, and intelligent platforms.",
    icon: Layers3,
  },
  {
    value: 8,
    suffix: "",
    label: "Current focus tracks",
    description: "A grounded learning map for modern software engineering.",
    icon: GitBranch,
  },
  {
    value: 2,
    suffix: "",
    label: "Certificate slots prepared",
    description: "Ready for upcoming internship and credential proof.",
    icon: ShieldCheck,
  },
] as const
