import { siteProfile } from "@/constants/site"

export type TerminalSection = {
  label: string
  items: string[]
}

export type TerminalLink = {
  label: string
  href: string
}

export type TerminalResponse = {
  title: string
  summary?: string
  sections?: TerminalSection[]
  tags?: string[]
  links?: TerminalLink[]
}

export const terminalCommandNames = [
  "help",
  "about",
  "whoami",
  "skills",
  "tech-stack",
  "projects",
  "healthcare-system",
  "deploy-status",
  "docker",
  "ci-cd",
  "aws",
  "github",
  "linkedin",
  "contact",
  "experience",
  "roadmap",
  "stack",
  "future",
  "philosophy",
  "inspiration",
  "clear",
] as const

export const terminalCommands: Record<string, TerminalResponse> = {
  help: {
    title: "Available commands",
    summary: "Use these commands to explore Priyamvad's engineering profile.",
    sections: [
      {
        label: "Profile",
        items: ["about", "whoami", "experience", "contact"],
      },
      {
        label: "Engineering",
        items: ["skills", "tech-stack", "projects", "healthcare-system"],
      },
      {
        label: "Cloud / DevOps",
        items: ["deploy-status", "docker", "ci-cd", "aws"],
      },
      {
        label: "Links",
        items: ["github", "linkedin"],
      },
      {
        label: "Extras",
        items: ["roadmap", "future", "philosophy", "inspiration", "clear"],
      },
    ],
    tags: [...terminalCommandNames],
  },
  about: {
    title: "Developer profile",
    summary:
      "Priyamvad Ranjan is a B.Tech Computer Science student building a backend-first direction around intelligent systems, APIs, cloud deployment, and practical engineering habits.",
    sections: [
      {
        label: "Identity",
        items: [
          siteProfile.role,
          siteProfile.education,
          "Focused on realistic backend, AI, and cloud development growth.",
        ],
      },
      {
        label: "Engineering mindset",
        items: [
          "Structure before scale.",
          "Build through projects, then refine architecture.",
          "Keep AI integrations practical and explainable.",
        ],
      },
    ],
    tags: ["Backend", "AI workflows", "Cloud", "DevOps"],
  },
  whoami: {
    title: siteProfile.name,
    summary:
      "Backend-oriented software developer in progress, focused on Python, APIs, AI-integrated systems, and deployment-aware project building.",
    tags: ["B.Tech CSE", "Backend Developer", "AI & Cloud Developer"],
  },
  skills: {
    title: "Skill groups",
    summary:
      "Skills are organized as an engineering ecosystem instead of a flat technology list.",
    sections: [
      {
        label: "Backend",
        items: ["Python", "Flask", "FastAPI", "Java", "Spring Boot", "REST APIs"],
      },
      {
        label: "AI / ML",
        items: ["OCR workflows", "Tesseract OCR", "Random Forest", "Decision Tree", "FastAPI AI service"],
      },
      {
        label: "Cloud / DevOps",
        items: ["AWS EC2", "AWS S3", "IAM", "RDS", "Docker", "Jenkins", "CI/CD"],
      },
      {
        label: "Frontend",
        items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
      },
      {
        label: "Database / Tools",
        items: ["MySQL", "Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Maven"],
      },
    ],
  },
  "tech-stack": {
    title: "Prioritized tech stack",
    summary:
      "Primary stack direction favors backend systems, AI integrations, and cloud-ready delivery.",
    sections: [
      {
        label: "Primary",
        items: ["Python", "FastAPI", "Flask", "REST APIs", "Docker", "AWS", "CI/CD"],
      },
      {
        label: "Secondary",
        items: ["Spring Boot", "Java", "MySQL", "Git", "GitHub", "Jenkins"],
      },
      {
        label: "Supporting UI",
        items: ["Next.js", "React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
      },
    ],
  },
  projects: {
    title: "Project index",
    summary:
      "The flagship project is the AI-Based Healthcare Management System with DevOps Automation.",
    sections: [
      {
        label: "Featured",
        items: [
          "AI-Based Healthcare Management System with DevOps Automation",
          "Route: /projects/healthcare-ai-system",
        ],
      },
      {
        label: "Signals",
        items: ["Backend architecture", "AI service integration", "OCR workflow", "Docker + CI/CD", "AWS deployment direction"],
      },
    ],
    links: [{ label: "Open projects page", href: "/projects" }],
  },
  "healthcare-system": {
    title: "Healthcare system case study",
    summary:
      "A healthcare platform concept combining Spring Boot backend services, FastAPI AI microservice, OCR extraction, prediction workflows, MySQL, Docker, Jenkins, CI/CD, and AWS deployment direction.",
    sections: [
      {
        label: "Architecture",
        items: [
          "Spring Boot backend for core healthcare workflows.",
          "FastAPI microservice for OCR and prediction processing.",
          "MySQL persistence for patients, doctors, appointments, reports, billing, and predictions.",
        ],
      },
      {
        label: "AI workflow",
        items: ["Report upload", "Tesseract OCR extraction", "Preprocessing", "Random Forest / Decision Tree direction", "Structured result generation"],
      },
      {
        label: "Deployment",
        items: ["Code", "GitHub", "Jenkins", "Docker", "AWS deployment direction"],
      },
    ],
    links: [{ label: "Open case study", href: "/projects/healthcare-ai-system" }],
  },
  "deploy-status": {
    title: "Deployment status",
    summary:
      "No live production deployment is claimed yet. The architecture is prepared around Docker, Jenkins, CI/CD, and AWS deployment direction.",
    sections: [
      {
        label: "Prepared path",
        items: ["GitHub source", "Jenkins pipeline direction", "Docker containers", "AWS EC2 / S3 / IAM / RDS awareness"],
      },
    ],
  },
  docker: {
    title: "Docker workflow",
    summary:
      "Docker is used as the containerization direction for consistent local runtime and deployment handoff.",
    sections: [
      {
        label: "Use cases",
        items: ["Package backend service", "Package AI service", "Reduce environment drift", "Prepare deployment-ready services"],
      },
    ],
  },
  "ci-cd": {
    title: "CI/CD direction",
    summary:
      "CI/CD is framed as build confidence and delivery automation, not as fake production maturity.",
    sections: [
      {
        label: "Pipeline concept",
        items: ["Push to GitHub", "Run Jenkins pipeline", "Build application", "Prepare Docker image", "Deploy to cloud runtime"],
      },
    ],
  },
  aws: {
    title: "AWS infrastructure direction",
    summary:
      "AWS is used as a deployment learning direction with EC2, S3, IAM, and RDS foundations.",
    tags: ["EC2", "S3", "IAM", "RDS", "Deployment"],
  },
  github: {
    title: "GitHub",
    summary: "Open Priyamvad's GitHub profile for repositories and project history.",
    links: [{ label: "github.com/Priyamvad01", href: siteProfile.github }],
  },
  linkedin: {
    title: "LinkedIn",
    summary: "Open Priyamvad's LinkedIn profile for professional context.",
    links: [{ label: "LinkedIn profile", href: siteProfile.linkedin }],
  },
  contact: {
    title: "Contact",
    summary: "Professional contact information for opportunities and collaboration.",
    sections: [
      {
        label: "Direct",
        items: [siteProfile.email, siteProfile.phone],
      },
    ],
    links: [{ label: "Open contact page", href: "/contact" }],
  },
  experience: {
    title: "Experience direction",
    summary:
      "The portfolio currently emphasizes project-based engineering growth, internship-proof slots, and practical backend/cloud/AI learning.",
    tags: ["Project-based learning", "Backend systems", "Cloud direction", "AI integration"],
  },
  roadmap: {
    title: "Learning roadmap",
    sections: [
      {
        label: "Next focus areas",
        items: ["Scalable backend systems", "Cloud-native workflows", "AI integrations", "DevOps automation", "Production deployment", "Full-stack engineering"],
      },
    ],
  },
  stack: {
    title: "Stack summary",
    summary: "Backend + AI + Cloud + DevOps, with modern frontend support.",
    tags: ["Spring Boot", "FastAPI", "MySQL", "Tesseract OCR", "Docker", "Jenkins", "AWS", "Next.js"],
  },
  future: {
    title: "Future direction",
    summary:
      "The growth path points toward advanced cloud systems, scalable microservices, AI-powered platforms, distributed systems, and production DevOps.",
  },
  philosophy: {
    title: "Engineering philosophy",
    summary:
      "Build software that is understandable before it becomes impressive. Clear structure, practical implementation, and deployment awareness matter.",
  },
  inspiration: {
    title: "Quiet principle",
    summary:
      "Treat every project as a system: define boundaries, make data flow visible, document decisions, and keep improving the architecture.",
  },
}

export const terminalDashboard = [
  {
    label: "Active stack",
    value: "Backend + AI + Cloud",
    detail: "Python, Spring Boot, FastAPI, Docker, AWS",
  },
  {
    label: "Featured route",
    value: "/projects/healthcare-ai-system",
    detail: "Healthcare case study with DevOps automation",
  },
  {
    label: "Console mode",
    value: "Interactive",
    detail: "Command parsing, history, auto-scroll, structured output",
  },
] as const
