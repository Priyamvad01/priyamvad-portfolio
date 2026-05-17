export const evolutionTracks = [
  {
    id: "career-growth",
    title: "Career growth",
    purpose:
      "Represent internships, verified experience, open-source work, and stronger backend specialization as they become real proof.",
    futureSignals: [
      "Internship experience",
      "Open-source contributions",
      "Verified certificates",
      "Production project links",
    ],
    updateCadence: "Review monthly or after every meaningful achievement.",
  },
  {
    id: "project-ecosystem",
    title: "Project ecosystem",
    purpose:
      "Grow from one flagship case study into a catalogue of backend, AI, cloud, and DevOps systems.",
    futureSignals: [
      "Additional case studies",
      "Architecture diagrams",
      "Deployment notes",
      "Repository proof links",
    ],
    updateCadence: "Add only when a project has clear technical depth.",
  },
  {
    id: "knowledge-system",
    title: "Knowledge system",
    purpose:
      "Prepare technical writing around APIs, AI service boundaries, Docker, CI/CD, and learning reflections.",
    futureSignals: [
      "MDX articles",
      "Syntax-highlighted code",
      "SEO article metadata",
      "Learning logs",
    ],
    updateCadence: "Publish in small batches after proofreading and technical review.",
  },
  {
    id: "intelligence-layer",
    title: "Intelligence layer",
    purpose:
      "Evolve the local assistant into a real portfolio knowledge interface when provider keys and retrieval are ready.",
    futureSignals: [
      "Server-side AI provider",
      "Semantic search",
      "Portfolio retrieval",
      "Privacy-conscious interaction metrics",
    ],
    updateCadence: "Upgrade only after the content base is large enough to justify real retrieval.",
  },
] as const

export const futureProjectIntegrationChecklist = [
  "Add project metadata in data/projects.ts.",
  "Write a grounded problem, architecture, implementation, and outcome summary.",
  "Reuse existing project card, stack cluster, workflow, and case-study section patterns.",
  "Add screenshots or diagrams only when they clarify implementation.",
  "Update sitemap and metadata through the existing project data flow.",
  "Run lint, build, responsive check, and live smoke test before release.",
] as const

export const releaseCadence = [
  {
    name: "Patch update",
    examples: "Copy polish, small metadata update, minor certificate record.",
    validation: ["npm run lint", "targeted route check"],
  },
  {
    name: "Content release",
    examples: "New project card, verified certificate, resume PDF, case-study section.",
    validation: ["npm run lint", "npm run build", "responsive route check"],
  },
  {
    name: "Platform upgrade",
    examples: "Blog route, real AI assistant, analytics provider, major visualization.",
    validation: [
      "npm run lint",
      "npm run build",
      "full responsive check",
      "interaction smoke test",
      "production deployment check",
    ],
  },
] as const

export const ecosystemHealthChecks = [
  "No unverified claims presented as completed experience.",
  "Every new feature uses existing design tokens and layout primitives.",
  "Project additions include architecture or implementation detail, not only screenshots.",
  "Certificates include proof links or asset paths before being marked verified.",
  "AI and analytics integrations keep secrets server-side and avoid collecting form content.",
  "Production releases keep GitHub, README, docs, and Vercel deployment in sync.",
] as const
