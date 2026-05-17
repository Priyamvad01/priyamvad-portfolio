import type { LucideIcon } from "lucide-react"

export type NavItem = {
  label: string
  href: string
}

export type FeatureCard = {
  title: string
  description: string
  icon: LucideIcon
}

export type ProjectCaseStudy = {
  slug: string
  title: string
  summary: string
  stack: string[]
  status: "planned" | "in-progress" | "published"
  eyebrow?: string
  category?: string
  problem?: string
  outcome?: string
  architecture?: string[]
}

export type CertificationRecord = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  meta: string
  status: "planned" | "future" | "verified"
  issuer?: string
  issuedAt?: string
  proofUrl?: string
  assetPath?: string
}

export type BlogArticleDraft = {
  slug: string
  title: string
  description: string
  category: "backend" | "ai" | "cloud" | "devops" | "career"
  status: "planned" | "draft" | "published"
  keywords: string[]
}
