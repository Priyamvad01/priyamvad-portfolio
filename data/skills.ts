import {
  Binary,
  Blocks,
  Bot,
  BrainCircuit,
  Braces,
  Cloud,
  Code2,
  Container,
  Database,
  FileSearch,
  GitBranch,
  Layers3,
  Network,
  PackageCheck,
  Route,
  ServerCog,
  Settings2,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  TestTube2,
  Workflow,
  type LucideIcon,
} from "lucide-react"

export type SkillPriority = "primary" | "secondary" | "supporting"

export type TechItem = {
  name: string
  category: string
  priority: SkillPriority
  description: string
}

export type SkillCardItem = {
  title: string
  description: string
  icon: LucideIcon
  tags?: string[]
  meta?: string
}

export const coreTechStack: TechItem[] = [
  {
    name: "Python",
    category: "Backend",
    priority: "primary",
    description: "Core language for backend logic, automation, APIs, and AI service integration.",
  },
  {
    name: "FastAPI",
    category: "Backend",
    priority: "primary",
    description: "Modern API framework direction for typed, performant backend services.",
  },
  {
    name: "Flask",
    category: "Backend",
    priority: "primary",
    description: "Lightweight backend framework for practical API and web service building.",
  },
  {
    name: "REST APIs",
    category: "Backend",
    priority: "primary",
    description: "Endpoint design, request lifecycle, response structure, and integrations.",
  },
  {
    name: "Docker",
    category: "DevOps",
    priority: "primary",
    description: "Containerized development and deployment-ready packaging.",
  },
  {
    name: "AWS",
    category: "Cloud",
    priority: "primary",
    description: "Cloud deployment direction across EC2, S3, IAM, and RDS foundations.",
  },
  {
    name: "CI/CD",
    category: "DevOps",
    priority: "primary",
    description: "Automated build and deployment workflow thinking.",
  },
  {
    name: "MySQL",
    category: "Database",
    priority: "secondary",
    description: "Relational data handling and structured persistence.",
  },
  {
    name: "Java",
    category: "Backend",
    priority: "secondary",
    description: "Object-oriented programming and backend fundamentals.",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    priority: "secondary",
    description: "Java backend ecosystem exposure and service-oriented concepts.",
  },
  {
    name: "Git",
    category: "Workflow",
    priority: "secondary",
    description: "Version control habits for structured project development.",
  },
  {
    name: "GitHub",
    category: "Workflow",
    priority: "secondary",
    description: "Repository management, collaboration, and visible project history.",
  },
  {
    name: "Next.js",
    category: "Frontend",
    priority: "supporting",
    description: "Modern React framework for production portfolio and app interfaces.",
  },
  {
    name: "React",
    category: "Frontend",
    priority: "supporting",
    description: "Component-based frontend development and interactive UI composition.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    priority: "supporting",
    description: "Utility-first styling for scalable, consistent UI systems.",
  },
  {
    name: "HTML",
    category: "Frontend",
    priority: "supporting",
    description: "Semantic structure and accessible page foundations.",
  },
  {
    name: "CSS",
    category: "Frontend",
    priority: "supporting",
    description: "Responsive styling, layout, and visual polish.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    priority: "supporting",
    description: "Client-side logic and web platform fundamentals.",
  },
]

export const backendEcosystem: SkillCardItem[] = [
  {
    title: "API development",
    description:
      "Designing REST endpoints, request/response contracts, route structure, and integration-ready backend flows.",
    icon: Route,
    tags: ["REST", "FastAPI", "Flask"],
  },
  {
    title: "Backend structure",
    description:
      "Organizing services, modules, validation, and data access so projects stay understandable as they grow.",
    icon: ServerCog,
    tags: ["Services", "Validation", "Modules"],
  },
  {
    title: "Authentication logic",
    description:
      "Preparing for user flows, protected routes, session or token-based access, and secure application boundaries.",
    icon: ShieldCheck,
    tags: ["Auth", "Access", "Security"],
  },
  {
    title: "Data handling",
    description:
      "Working with relational persistence, query flows, schema thinking, and backend-facing data operations.",
    icon: Database,
    tags: ["MySQL", "RDS", "Models"],
  },
  {
    title: "Microservices concepts",
    description:
      "Learning service boundaries, independent responsibilities, contracts, and scalable architecture patterns.",
    icon: Blocks,
    tags: ["Services", "Contracts", "Scale"],
  },
  {
    title: "Backend workflows",
    description:
      "Connecting planning, implementation, testing, containerization, and deployment into one engineering loop.",
    icon: Workflow,
    tags: ["Git", "Docker", "CI/CD"],
  },
]

export const aiDataStack: SkillCardItem[] = [
  {
    title: "OCR workflows",
    description:
      "Document processing direction for extracting usable data from forms, reports, and records.",
    icon: FileSearch,
    tags: ["OCR", "Extraction"],
  },
  {
    title: "Tesseract OCR",
    description:
      "Practical OCR tooling exposure for converting images and documents into structured text.",
    icon: Binary,
    tags: ["Tesseract", "Text"],
  },
  {
    title: "ML model integration",
    description:
      "Integrating prediction logic into backend services without overstating research-level ML claims.",
    icon: BrainCircuit,
    tags: ["Models", "APIs"],
  },
  {
    title: "Random Forest",
    description:
      "Classical ML model exposure for healthcare-style prediction and decision-support concepts.",
    icon: Sparkles,
    tags: ["ML", "Prediction"],
  },
  {
    title: "Decision Tree",
    description:
      "Interpretable model exposure for structured decision flows and understandable prediction behavior.",
    icon: GitBranch,
    tags: ["ML", "Logic"],
  },
  {
    title: "FastAPI AI service",
    description:
      "Serving AI-assisted features through clean API boundaries and backend orchestration.",
    icon: Bot,
    tags: ["FastAPI", "AI service"],
  },
]

export const cloudDevOpsStack: SkillCardItem[] = [
  {
    title: "AWS EC2",
    description: "Compute foundation for deploying backend services and application runtimes.",
    icon: Cloud,
    tags: ["Compute", "Deploy"],
  },
  {
    title: "AWS S3",
    description: "Object storage direction for files, documents, static assets, and app data.",
    icon: PackageCheck,
    tags: ["Storage", "Assets"],
  },
  {
    title: "IAM",
    description: "Access and permissions awareness for safer cloud resource usage.",
    icon: ShieldCheck,
    tags: ["Access", "Security"],
  },
  {
    title: "RDS",
    description: "Managed relational database direction for production-style persistence.",
    icon: Database,
    tags: ["Database", "MySQL"],
  },
  {
    title: "Docker",
    description: "Container packaging for consistent local development and deployable services.",
    icon: Container,
    tags: ["Containers", "Runtime"],
  },
  {
    title: "Jenkins + CI/CD",
    description: "Pipeline thinking for automated build, test, and delivery workflows.",
    icon: Workflow,
    tags: ["Jenkins", "Pipeline"],
  },
]

export const workflowSteps = [
  {
    title: "Planning",
    description: "Define feature scope, data flow, routes, and system boundaries.",
    icon: Layers3,
  },
  {
    title: "Development",
    description: "Build backend logic, UI components, and integration points.",
    icon: Code2,
  },
  {
    title: "Git Workflow",
    description: "Track changes, organize commits, and keep project history readable.",
    icon: GitBranch,
  },
  {
    title: "Testing",
    description: "Validate behavior, edge cases, and integration assumptions.",
    icon: TestTube2,
  },
  {
    title: "Dockerization",
    description: "Package services for consistent runtime and deployment preparation.",
    icon: Container,
  },
  {
    title: "Deployment",
    description: "Move toward cloud-ready releases and environment-based configuration.",
    icon: Cloud,
  },
  {
    title: "Iteration",
    description: "Improve architecture, documentation, and product reliability.",
    icon: Settings2,
  },
] as const

export const toolsPlatforms: SkillCardItem[] = [
  {
    title: "GitHub",
    description: "Repositories, project visibility, version control, and development history.",
    icon: GitBranch,
  },
  {
    title: "VS Code",
    description: "Primary editor workflow for web, backend, and configuration work.",
    icon: Code2,
  },
  {
    title: "IntelliJ IDEA",
    description: "Java and Spring Boot development environment.",
    icon: Braces,
  },
  {
    title: "Postman",
    description: "API testing, request validation, and backend workflow checks.",
    icon: Network,
  },
  {
    title: "Docker",
    description: "Container workflows and service packaging.",
    icon: Container,
  },
  {
    title: "Vercel",
    description: "Frontend deployment and production preview workflows.",
    icon: Cloud,
  },
  {
    title: "Maven",
    description: "Java dependency and build management exposure.",
    icon: PackageCheck,
  },
]

export const currentLearningDirection = [
  "Scalable backend systems",
  "Modern frontend architecture",
  "Cloud-native workflows",
  "AI integrations",
  "DevOps automation",
  "Production deployment",
] as const

export const futureRoadmap: SkillCardItem[] = [
  {
    title: "Advanced cloud systems",
    description:
      "Deeper AWS patterns, deployment topology, monitoring, and production infrastructure habits.",
    icon: Cloud,
  },
  {
    title: "Scalable microservices",
    description:
      "Service communication, distributed boundaries, API contracts, and deployment independence.",
    icon: Blocks,
  },
  {
    title: "AI-powered platforms",
    description:
      "Practical intelligent systems that combine backend reliability with useful AI workflows.",
    icon: BrainCircuit,
  },
  {
    title: "Production DevOps",
    description:
      "Stronger CI/CD, container orchestration direction, observability, and release confidence.",
    icon: TerminalSquare,
  },
  {
    title: "Distributed systems",
    description:
      "Foundational concepts around scale, reliability, service coordination, and data movement.",
    icon: Network,
  },
  {
    title: "Full-stack engineering",
    description:
      "Connecting refined frontend systems with dependable backend and cloud architecture.",
    icon: Layers3,
  },
]
