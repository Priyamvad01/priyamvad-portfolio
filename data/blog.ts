import type { BlogArticleDraft } from "@/types/site"

export const plannedBlogArticles: BlogArticleDraft[] = [
  {
    slug: "building-backend-first-portfolio",
    title: "Building a backend-first engineering portfolio",
    description:
      "A future article about turning project work, architecture decisions, and deployment habits into a professional portfolio.",
    category: "career",
    status: "planned",
    keywords: ["portfolio", "backend", "projects", "engineering"],
  },
  {
    slug: "fastapi-ai-service-pattern",
    title: "Designing a practical FastAPI AI service boundary",
    description:
      "A future technical note on separating AI workflows from core backend services without overcomplicating a student project.",
    category: "ai",
    status: "planned",
    keywords: ["FastAPI", "AI", "microservices", "REST APIs"],
  },
  {
    slug: "docker-ci-cd-learning-path",
    title: "Learning Docker and CI/CD through deployable projects",
    description:
      "A future learning log focused on containerization, repeatable builds, and deployment readiness.",
    category: "devops",
    status: "planned",
    keywords: ["Docker", "CI/CD", "Jenkins", "deployment"],
  },
]
