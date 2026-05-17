export const contentCollections = [
  {
    id: "projects",
    source: "data/projects.ts",
    route: "/projects",
    purpose: "Featured systems, future project cards, and case-study entries.",
    updateWorkflow: [
      "Add or update a project record.",
      "Create a case-study slug only when the project has enough technical depth.",
      "Run lint, build, responsive check, then commit with a feature-oriented message.",
    ],
  },
  {
    id: "certifications",
    source: "data/certifications.ts",
    route: "/certifications",
    purpose: "Verified credentials, internship certificates, proof URLs, and PDF assets.",
    updateWorkflow: [
      "Add certificate metadata first.",
      "Place PDFs or previews in public/certifications when proof is available.",
      "Mark status as verified only after issuer, date, and proof are ready.",
    ],
  },
  {
    id: "blog",
    source: "data/blog.ts",
    route: "/blog",
    purpose: "Future technical writing around backend, AI, cloud, DevOps, and learning notes.",
    updateWorkflow: [
      "Draft article metadata before building the route.",
      "Move long-form content to MDX or a CMS when writing volume increases.",
      "Generate metadata and sitemap entries from the same source of truth.",
    ],
  },
] as const

export const futureExpansionRoadmap = [
  {
    title: "Blog and technical writing",
    readiness: "Prepared data model, route intentionally not active yet.",
    nextStep: "Add `/blog` route when at least three polished articles are ready.",
  },
  {
    title: "Real AI assistant",
    readiness: "Assistant UI and API boundary already exist.",
    nextStep:
      "Connect server-side retrieval and OpenAI or Vercel AI SDK only after environment variables are configured.",
  },
  {
    title: "Analytics and insights",
    readiness: "Privacy-conscious analytics plan documented.",
    nextStep:
      "Add Vercel Analytics after production domain and tracking policy are finalized.",
  },
  {
    title: "Certificate proof gallery",
    readiness: "Structured certificate records and public asset folders prepared.",
    nextStep:
      "Attach certificate PDFs/previews and expose proof links once verified.",
  },
] as const

export const maintenanceValidationCommands = [
  "npm run lint",
  "npm run build",
  "$env:BASE_URL='http://localhost:3000'; npm run responsive:check",
] as const
