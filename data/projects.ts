import {
  Bot,
  BrainCircuit,
  Cloud,
  Container,
  Database,
  FileScan,
  GitBranch,
  HeartPulse,
  Network,
  ServerCog,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react"

import type { ProjectCaseStudy } from "@/types/site"

export type ProjectHighlight = {
  title: string
  description: string
  icon: LucideIcon
  tags?: string[]
}

export type ProjectWorkflowStep = {
  title: string
  description: string
  icon: LucideIcon
}

export const projects: ProjectCaseStudy[] = [
  {
    slug: "healthcare-ai-system",
    title: "AI-Based Healthcare Management System with DevOps Automation",
    eyebrow: "Featured Engineering Platform",
    category: "Backend | AI | Cloud | DevOps",
    summary:
      "A healthcare management platform concept combining Spring Boot backend services, FastAPI AI microservice, OCR extraction, prediction workflows, Dockerized delivery, Jenkins CI/CD, AWS deployment direction, and MySQL persistence.",
    problem:
      "Healthcare workflows often need structured patient data, appointment handling, document extraction, and prediction support while keeping backend services organized and deployment-ready.",
    outcome:
      "The project is framed as an engineering platform: backend services, AI-assisted workflows, OCR processing, database modeling, and DevOps automation connected through a scalable architecture direction.",
    architecture: [
      "Spring Boot backend for core patient and appointment workflows",
      "FastAPI microservice for AI prediction and OCR-assisted processing",
      "MySQL persistence for structured healthcare data",
      "Docker and Jenkins for repeatable delivery workflows",
      "AWS deployment direction with cloud infrastructure awareness",
    ],
    stack: [
      "Spring Boot",
      "FastAPI",
      "REST APIs",
      "MySQL",
      "Tesseract OCR",
      "Random Forest",
      "Decision Tree",
      "Docker",
      "Jenkins",
      "CI/CD",
      "AWS",
      "Microservices",
    ],
    status: "in-progress",
  },
]

export const projectArchitectureHighlights: ProjectHighlight[] = [
  {
    title: "Microservices architecture",
    description:
      "Separates core healthcare workflows from AI and OCR processing through service boundaries.",
    icon: Network,
    tags: ["Spring Boot", "FastAPI", "Services"],
  },
  {
    title: "API communication",
    description:
      "REST APIs provide the integration layer between patient workflows, AI services, and data operations.",
    icon: ServerCog,
    tags: ["REST", "Contracts", "Backend"],
  },
  {
    title: "AI prediction flow",
    description:
      "Random Forest and Decision Tree concepts are positioned as practical prediction features, not research claims.",
    icon: BrainCircuit,
    tags: ["Random Forest", "Decision Tree"],
  },
  {
    title: "OCR extraction workflow",
    description:
      "Tesseract OCR supports document-to-text processing for healthcare record workflows.",
    icon: FileScan,
    tags: ["OCR", "Tesseract", "Records"],
  },
  {
    title: "Dockerized deployment",
    description:
      "Containerized services prepare the system for consistent local setup and cloud delivery.",
    icon: Container,
    tags: ["Docker", "Runtime"],
  },
  {
    title: "CI/CD pipeline",
    description:
      "Jenkins and CI/CD direction create a foundation for repeatable build and deployment automation.",
    icon: Workflow,
    tags: ["Jenkins", "CI/CD", "Automation"],
  },
]

export const projectWorkflow: ProjectWorkflowStep[] = [
  {
    title: "Planning",
    description: "Define patient, appointment, AI, OCR, and deployment workflows.",
    icon: HeartPulse,
  },
  {
    title: "Backend development",
    description: "Build Spring Boot services, routes, business logic, and MySQL data models.",
    icon: ServerCog,
  },
  {
    title: "AI integration",
    description: "Connect FastAPI prediction and OCR flows through service-level APIs.",
    icon: Bot,
  },
  {
    title: "API design",
    description: "Shape REST contracts for frontend, backend, and AI service communication.",
    icon: Network,
  },
  {
    title: "Dockerization",
    description: "Prepare services for consistent runtime and deployment handoff.",
    icon: Container,
  },
  {
    title: "Deployment pipeline",
    description: "Use Jenkins, CI/CD, and AWS direction for automated delivery planning.",
    icon: GitBranch,
  },
]

export const projectStackGroups = [
  {
    title: "Backend",
    items: ["Spring Boot", "FastAPI", "REST APIs", "Microservices"],
    icon: ServerCog,
  },
  {
    title: "AI/ML",
    items: ["Tesseract OCR", "Random Forest", "Decision Tree", "AI service"],
    icon: BrainCircuit,
  },
  {
    title: "Database",
    items: ["MySQL", "RDS direction", "Data modeling"],
    icon: Database,
  },
  {
    title: "DevOps",
    items: ["Docker", "Jenkins", "CI/CD", "Pipelines"],
    icon: Workflow,
  },
  {
    title: "Cloud",
    items: ["AWS", "EC2 direction", "S3 direction", "Deployment"],
    icon: Cloud,
  },
  {
    title: "Security & structure",
    items: ["IAM awareness", "Service boundaries", "API contracts"],
    icon: ShieldCheck,
  },
] as const

export const futureProjects = [
  {
    title: "AI Workflow Automation Platform",
    description:
      "A future intelligent automation project focused on backend orchestration and practical AI workflows.",
    direction: "AI systems",
  },
  {
    title: "Cloud-Native Backend Service",
    description:
      "A future backend platform exploring deployment, monitoring, Docker, and cloud-ready service design.",
    direction: "Cloud apps",
  },
  {
    title: "Scalable Web System",
    description:
      "A future full-stack system connecting modern frontend architecture with dependable backend APIs.",
    direction: "Web systems",
  },
] as const

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
