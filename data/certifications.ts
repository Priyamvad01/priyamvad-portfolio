import { Award, BadgeCheck, BriefcaseBusiness, FileBadge } from "lucide-react"

import type { CertificationRecord } from "@/types/site"

export const certificationRecords: CertificationRecord[] = [
  {
    id: "backend-development-track",
    title: "Backend development track",
    description:
      "Reserved for certificates connected to Python, APIs, system design, and backend implementation.",
    icon: FileBadge,
    meta: "Planned",
    status: "planned",
  },
  {
    id: "cloud-devops-track",
    title: "Cloud and DevOps track",
    description:
      "Reserved for AWS, Docker, CI/CD, deployment, and production engineering credentials.",
    icon: Award,
    meta: "Planned",
    status: "planned",
  },
  {
    id: "internship-certificate-01",
    title: "Internship certificate 01",
    description:
      "Future internship certificate slot prepared for issuer, duration, role, proof link, and PDF asset.",
    icon: BriefcaseBusiness,
    meta: "Future",
    status: "future",
    assetPath: "/certifications/internship-certificate-01.pdf",
  },
  {
    id: "internship-certificate-02",
    title: "Internship certificate 02",
    description:
      "Second internship certificate slot prepared for verified details, certificate preview, and recruiter context.",
    icon: BadgeCheck,
    meta: "Future",
    status: "future",
    assetPath: "/certifications/internship-certificate-02.pdf",
  },
]

export function getVerifiedCertifications() {
  return certificationRecords.filter(
    (certification) => certification.status === "verified"
  )
}
