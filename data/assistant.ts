import { siteProfile } from "@/constants/site"

export type CommandAction = {
  id: string
  title: string
  description: string
  href: string
  group: "Navigate" | "Project" | "Profile" | "System" | "Connect"
  keywords: string[]
  external?: boolean
}

export type AssistantPrompt = {
  id: string
  label: string
  query: string
  response: string
  links?: Array<{
    label: string
    href: string
  }>
  tags?: string[]
}

export const commandActions: CommandAction[] = [
  {
    id: "home",
    title: "Home",
    description: "Return to the cinematic portfolio introduction.",
    href: "/",
    group: "Navigate",
    keywords: ["home", "hero", "intro", "start"],
  },
  {
    id: "about",
    title: "About Priyamvad",
    description: "Read the engineering identity, mindset, and learning story.",
    href: "/about",
    group: "Profile",
    keywords: ["about", "story", "identity", "mindset"],
  },
  {
    id: "skills",
    title: "Skills Ecosystem",
    description: "Explore backend, AI, cloud, DevOps, and workflow capabilities.",
    href: "/skills",
    group: "Profile",
    keywords: ["skills", "stack", "tools", "backend", "cloud", "ai"],
  },
  {
    id: "projects",
    title: "Projects Showcase",
    description: "Open the engineering project showcase.",
    href: "/projects",
    group: "Project",
    keywords: ["projects", "work", "showcase"],
  },
  {
    id: "healthcare-case-study",
    title: "Healthcare AI Case Study",
    description: "Open the architecture-focused healthcare project case study.",
    href: "/projects/healthcare-ai-system",
    group: "Project",
    keywords: ["healthcare", "case study", "architecture", "ocr", "devops"],
  },
  {
    id: "terminal",
    title: "Terminal Lab",
    description: "Use the interactive engineering console.",
    href: "/terminal",
    group: "System",
    keywords: ["terminal", "console", "commands", "lab"],
  },
  {
    id: "contact",
    title: "Contact",
    description: "Open direct communication and opportunity channels.",
    href: "/contact",
    group: "Connect",
    keywords: ["contact", "email", "phone", "opportunity"],
  },
  {
    id: "github",
    title: "GitHub",
    description: "Open Priyamvad's GitHub profile.",
    href: siteProfile.github,
    group: "Connect",
    keywords: ["github", "repository", "code"],
    external: true,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Open Priyamvad's LinkedIn profile.",
    href: siteProfile.linkedin,
    group: "Connect",
    keywords: ["linkedin", "professional", "profile"],
    external: true,
  },
]

export const assistantPrompts: AssistantPrompt[] = [
  {
    id: "portfolio-summary",
    label: "Portfolio summary",
    query: "What should I look at first?",
    response:
      "Start with the Projects page, then open the Healthcare AI case study. Those sections best show Priyamvad's backend, AI integration, deployment awareness, and system-design direction.",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Case study", href: "/projects/healthcare-ai-system" },
    ],
    tags: ["Projects", "Case study", "Recruiter path"],
  },
  {
    id: "healthcare-system",
    label: "Healthcare project",
    query: "Explain the healthcare AI system.",
    response:
      "The healthcare system is presented as a backend-first platform concept: Spring Boot handles core healthcare workflows, FastAPI supports AI/OCR services, MySQL structures the data layer, and Docker/Jenkins/AWS form the deployment direction.",
    links: [{ label: "Open case study", href: "/projects/healthcare-ai-system" }],
    tags: ["Spring Boot", "FastAPI", "OCR", "Docker", "AWS"],
  },
  {
    id: "skills-direction",
    label: "Skills direction",
    query: "What is Priyamvad's technical direction?",
    response:
      "Priyamvad's technical direction is backend systems, REST APIs, Python/FastAPI/Flask, practical AI-integrated workflows, Docker, CI/CD, and cloud deployment foundations.",
    links: [{ label: "Skills", href: "/skills" }],
    tags: ["Backend", "AI workflows", "Cloud", "DevOps"],
  },
  {
    id: "contact-path",
    label: "Contact path",
    query: "How can I contact Priyamvad?",
    response:
      `Use the Contact page for the form and direct links. Email is ${siteProfile.email}, and LinkedIn/GitHub are available as professional channels.`,
    links: [{ label: "Contact", href: "/contact" }],
    tags: ["Email", "LinkedIn", "GitHub"],
  },
  {
    id: "terminal-lab",
    label: "Terminal Lab",
    query: "What can the terminal do?",
    response:
      "The Terminal Lab is an interactive portfolio console. It supports commands like help, skills, projects, healthcare-system, deploy-status, assistant, cmdk, and contact.",
    links: [{ label: "Terminal", href: "/terminal" }],
    tags: ["Console", "Commands", "Interactive"],
  },
]

export const assistantStatusPanels = [
  {
    label: "Production",
    value: "Live on Vercel",
    detail: "Static routes, SEO assets, and contact API deployed.",
  },
  {
    label: "Assistant",
    value: "Local knowledge mode",
    detail: "Curated portfolio guidance with a future AI API boundary.",
  },
  {
    label: "Shortcut",
    value: "Ctrl / Cmd + K",
    detail: "Quick navigation across pages, project routes, and profiles.",
  },
] as const

export function findAssistantResponse(message: string) {
  const words = message
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.replace(/[^a-z0-9-]/g, ""))
    .filter((word) => word.length > 2)
    .filter(
      (word) =>
        !["the", "and", "for", "about", "what", "how", "can", "you"].includes(
          word
        )
    )

  const matchedPrompt = assistantPrompts
    .map((prompt) => {
    const haystack = [
      prompt.label,
      prompt.query,
      prompt.response,
      ...(prompt.tags ?? []),
    ]
      .join(" ")
      .toLowerCase()

      return {
        prompt,
        score: words.reduce(
          (total, word) => total + (haystack.includes(word) ? 1 : 0),
          0
        ),
      }
    })
    .sort((a, b) => b.score - a.score)[0]

  return matchedPrompt?.score
    ? matchedPrompt.prompt
    : {
      id: "default",
      label: "Portfolio guide",
      query: message,
      response:
        "I can guide you through Priyamvad's projects, skills, healthcare case study, terminal lab, and contact paths. The strongest credibility route is Projects to Healthcare AI Case Study.",
      links: [
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
      ],
      tags: ["Guide", "Projects", "Skills", "Contact"],
    }
}
