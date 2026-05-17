import {
  Bot,
  BrainCircuit,
  Cloud,
  Container,
  Database,
  FileScan,
  GitBranch,
  HeartPulse,
  Layers3,
  Network,
  ServerCog,
  ShieldCheck,
  Upload,
  Workflow,
  type LucideIcon,
} from "lucide-react"

export type CaseStudyCard = {
  title: string
  description: string
  icon: LucideIcon
  tags?: string[]
}

export type FlowNode = {
  title: string
  description: string
  icon: LucideIcon
}

export const overviewCards: CaseStudyCard[] = [
  {
    title: "Healthcare platform direction",
    description:
      "A system concept for managing patients, doctors, appointments, reports, billing, and prediction workflows.",
    icon: HeartPulse,
    tags: ["Patients", "Appointments", "Reports"],
  },
  {
    title: "AI integration layer",
    description:
      "FastAPI service direction for OCR extraction and practical prediction workflows using classical ML models.",
    icon: BrainCircuit,
    tags: ["FastAPI", "OCR", "Prediction"],
  },
  {
    title: "Deployment automation",
    description:
      "Docker, Jenkins, CI/CD, and AWS direction used to frame the project as deployment-aware from the start.",
    icon: Workflow,
    tags: ["Docker", "Jenkins", "AWS"],
  },
]

export const problemPoints: CaseStudyCard[] = [
  {
    title: "Manual workflows",
    description:
      "Healthcare operations often involve repeated manual entry across patient data, appointments, and reports.",
    icon: HeartPulse,
  },
  {
    title: "Unstructured medical data",
    description:
      "Reports and documents can remain trapped in image or PDF formats without extraction workflows.",
    icon: FileScan,
  },
  {
    title: "Fragmented systems",
    description:
      "Backend workflows, AI processing, databases, and deployment pipelines need clear boundaries to remain maintainable.",
    icon: Layers3,
  },
]

export const systemGoals: CaseStudyCard[] = [
  {
    title: "Healthcare management",
    description: "Support patient, doctor, appointment, report, and billing workflow foundations.",
    icon: HeartPulse,
  },
  {
    title: "AI-assisted processing",
    description: "Use AI service boundaries for OCR extraction and prediction flow integration.",
    icon: BrainCircuit,
  },
  {
    title: "Scalable architecture",
    description: "Separate backend, AI, database, and deployment responsibilities through modular design.",
    icon: Network,
  },
  {
    title: "Deployment automation",
    description: "Prepare Docker and Jenkins workflows for repeatable delivery and cloud direction.",
    icon: Workflow,
  },
]

export const architectureLayers: FlowNode[] = [
  {
    title: "Frontend layer",
    description: "User interface for healthcare workflows and system interaction.",
    icon: Layers3,
  },
  {
    title: "Spring Boot backend",
    description: "Core APIs for patients, appointments, reports, billing, and service orchestration.",
    icon: ServerCog,
  },
  {
    title: "FastAPI AI microservice",
    description: "Separate service for OCR and prediction workflows.",
    icon: BrainCircuit,
  },
  {
    title: "MySQL database",
    description: "Relational persistence for structured healthcare entities.",
    icon: Database,
  },
  {
    title: "Docker containers",
    description: "Runtime packaging for backend and AI service consistency.",
    icon: Container,
  },
  {
    title: "CI/CD + AWS direction",
    description: "Jenkins pipeline and cloud deployment architecture foundation.",
    icon: Cloud,
  },
]

export const backendPanels: CaseStudyCard[] = [
  {
    title: "Controller layer",
    description: "Routes receive requests and expose REST endpoints for application workflows.",
    icon: Network,
    tags: ["REST", "Routes"],
  },
  {
    title: "Service layer",
    description: "Business logic stays organized around healthcare workflows and data operations.",
    icon: ServerCog,
    tags: ["Logic", "Modules"],
  },
  {
    title: "Repository layer",
    description: "Database operations are isolated behind persistence-focused structures.",
    icon: Database,
    tags: ["MySQL", "Persistence"],
  },
  {
    title: "Validation and structure",
    description: "Request handling is framed around maintainability, validation, and clear API contracts.",
    icon: ShieldCheck,
    tags: ["Validation", "Contracts"],
  },
]

export const aiPipeline: FlowNode[] = [
  {
    title: "Report upload",
    description: "Healthcare report or document enters the processing workflow.",
    icon: Upload,
  },
  {
    title: "OCR extraction",
    description: "Tesseract OCR extracts text from report images or documents.",
    icon: FileScan,
  },
  {
    title: "Preprocessing",
    description: "Extracted values are cleaned and shaped for prediction or storage.",
    icon: Workflow,
  },
  {
    title: "ML prediction",
    description: "Random Forest or Decision Tree concepts support prediction workflows.",
    icon: BrainCircuit,
  },
  {
    title: "Result generation",
    description: "The AI service returns structured output to the backend workflow.",
    icon: Bot,
  },
]

export const ocrPipeline: FlowNode[] = [
  {
    title: "Image upload",
    description: "Medical report image or scan enters the OCR workflow.",
    icon: Upload,
  },
  {
    title: "Preprocessing",
    description: "Input is prepared for better extraction quality.",
    icon: Workflow,
  },
  {
    title: "Text extraction",
    description: "Tesseract OCR converts visual content into text.",
    icon: FileScan,
  },
  {
    title: "Cleaning",
    description: "Text is normalized and filtered for useful report data.",
    icon: ShieldCheck,
  },
  {
    title: "Structured output",
    description: "Cleaned content is returned as usable backend data.",
    icon: Database,
  },
]

export const databaseEntities = [
  "Patients",
  "Doctors",
  "Appointments",
  "Reports",
  "Billing",
  "Predictions",
] as const

export const apiFlow: FlowNode[] = [
  {
    title: "Frontend",
    description: "User requests healthcare workflows through the interface.",
    icon: Layers3,
  },
  {
    title: "Backend",
    description: "Spring Boot APIs validate and orchestrate the request.",
    icon: ServerCog,
  },
  {
    title: "AI Service",
    description: "FastAPI handles OCR or prediction-specific processing.",
    icon: BrainCircuit,
  },
  {
    title: "Database",
    description: "MySQL stores and retrieves structured healthcare data.",
    icon: Database,
  },
  {
    title: "Response",
    description: "The system returns clean output to the user workflow.",
    icon: Network,
  },
]

export const infrastructureItems: CaseStudyCard[] = [
  {
    title: "AWS EC2",
    description: "Compute direction for running backend and service workloads.",
    icon: Cloud,
    tags: ["Compute"],
  },
  {
    title: "AWS S3",
    description: "Storage direction for documents, reports, and assets.",
    icon: Database,
    tags: ["Storage"],
  },
  {
    title: "IAM",
    description: "Access control awareness for cloud resources and safer deployment.",
    icon: ShieldCheck,
    tags: ["Access"],
  },
  {
    title: "RDS",
    description: "Managed database direction for relational healthcare data.",
    icon: Database,
    tags: ["Database"],
  },
  {
    title: "Docker",
    description: "Containerization for repeatable service runtime.",
    icon: Container,
    tags: ["Containers"],
  },
  {
    title: "Jenkins",
    description: "Automation direction for build and deployment pipelines.",
    icon: Workflow,
    tags: ["CI/CD"],
  },
]

export const deploymentFlow: FlowNode[] = [
  {
    title: "Code",
    description: "Backend, AI service, and app changes are developed locally.",
    icon: ServerCog,
  },
  {
    title: "GitHub",
    description: "Version control keeps project history and delivery source organized.",
    icon: GitBranch,
  },
  {
    title: "Jenkins",
    description: "Pipeline runs build and delivery automation direction.",
    icon: Workflow,
  },
  {
    title: "Docker",
    description: "Services are packaged into consistent containers.",
    icon: Container,
  },
  {
    title: "Deployment",
    description: "Cloud runtime direction prepares the system for production-style hosting.",
    icon: Cloud,
  },
]

export const securityScalability: CaseStudyCard[] = [
  {
    title: "Modular architecture",
    description: "Separate backend, AI, database, and deployment concerns for easier growth.",
    icon: Layers3,
  },
  {
    title: "Secure API concepts",
    description: "Authentication, validation, and protected workflows are planned as core backend concerns.",
    icon: ShieldCheck,
  },
  {
    title: "Environment variables",
    description: "Configuration is kept environment-aware for deployment and service portability.",
    icon: Workflow,
  },
  {
    title: "Container isolation",
    description: "Docker boundaries make service runtime more repeatable and easier to reason about.",
    icon: Container,
  },
]

export const challengesLearning: CaseStudyCard[] = [
  {
    title: "Integration complexity",
    description:
      "Connecting Spring Boot, FastAPI, OCR, ML logic, and database workflows requires careful boundary planning.",
    icon: Network,
  },
  {
    title: "AI workflow handling",
    description:
      "OCR extraction and prediction outputs need clean preprocessing and realistic expectations.",
    icon: BrainCircuit,
  },
  {
    title: "Deployment learning",
    description:
      "Docker, Jenkins, CI/CD, and AWS direction introduce production-style thinking beyond local execution.",
    icon: Cloud,
  },
]

export const outcomes: CaseStudyCard[] = [
  {
    title: "Architecture-first project framing",
    description:
      "The system is presented as connected services and workflows rather than a flat application demo.",
    icon: Layers3,
  },
  {
    title: "Backend + AI integration direction",
    description:
      "The case study demonstrates how AI workflows can be served through backend APIs.",
    icon: BrainCircuit,
  },
  {
    title: "Deployment-aware engineering",
    description:
      "Docker and CI/CD direction make the project feel closer to real delivery practice.",
    icon: Workflow,
  },
]

export const futureImprovements: CaseStudyCard[] = [
  {
    title: "Real-time analytics",
    description: "Dashboards for operational insights, reports, and healthcare workflow trends.",
    icon: HeartPulse,
  },
  {
    title: "Advanced AI models",
    description: "More robust model evaluation and better prediction workflows over time.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud-native scaling",
    description: "Stronger deployment topology, monitoring, and service scaling direction.",
    icon: Cloud,
  },
  {
    title: "IoT integrations",
    description: "Future device or sensor data workflows for healthcare use cases.",
    icon: Network,
  },
  {
    title: "Monitoring systems",
    description: "Logs, uptime checks, metrics, and production visibility.",
    icon: Workflow,
  },
  {
    title: "Production DevOps",
    description: "More complete CI/CD, secrets handling, tests, and release controls.",
    icon: ShieldCheck,
  },
]
