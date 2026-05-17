# Priyamvad Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-Production%20Ready-1f2937?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-0f172a?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Vercel Ready](https://img.shields.io/badge/Vercel-Deployment%20Ready-111827?style=for-the-badge&logo=vercel)](https://vercel.com)

Premium futuristic engineering portfolio for **Priyamvad Ranjan**, a B.Tech Computer Science student focused on backend systems, AI-integrated workflows, cloud deployment, and production-aware software engineering.

This is designed as a recruiter-facing portfolio and a real engineering repository: scalable App Router architecture, cinematic UI, responsive layouts, SEO metadata, deployment preparation, and documentation that supports future growth.

## Project Overview

The portfolio presents Priyamvad as a young engineer building intelligent systems. It avoids generic portfolio templates and focuses on credible technical storytelling across backend development, REST APIs, DevOps workflows, cloud infrastructure, and applied AI integrations.

Core routes:

- Home
- About
- Skills
- Projects
- Healthcare AI System Case Study
- Certifications
- Terminal Lab
- Contact

## Portfolio Philosophy

The design language balances futuristic minimalism with professional engineering clarity. The interface uses dark luxury surfaces, restrained glow, glassmorphism, cinematic motion, and technical dashboard-inspired sections without drifting into exaggerated cyberpunk styling.

The content is intentionally grounded: it communicates growth, practical implementation, and system thinking without pretending to be senior-level production experience.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 App Router |
| Language | TypeScript |
| UI | React 19, Tailwind CSS v4 |
| Motion | Framer Motion |
| Components | Shadcn-style UI foundation, Radix Slot |
| Icons | Lucide React |
| SEO | Next Metadata API, generated OG/Twitter images, sitemap, robots |
| Validation | ESLint, production build, Playwright responsive audit |
| Deployment | Vercel-ready |

## Features

- Multi-page premium portfolio architecture
- Cinematic homepage hero and advanced navigation
- Full About page with engineering identity storytelling
- Skills ecosystem with backend, AI, cloud, DevOps, and workflow sections
- Projects showcase centered on an AI-based healthcare platform
- Full case study page with architecture, API, database, DevOps, and AI pipeline visualizations
- Interactive Terminal Lab with command parsing and structured outputs
- Contact page with validation, API route, and deployment-ready provider integration
- Responsive optimization across mobile, tablet, laptop, desktop, and ultrawide
- Production SEO: metadata, Open Graph, Twitter cards, sitemap, robots, manifest
- Accessibility foundations: semantic landmarks, skip link, focus states, reduced-motion support

## Engineering Highlights

- Server-first route architecture with client boundaries only where interactivity is required
- Reusable design system for buttons, cards, badges, layout containers, glow systems, and motion wrappers
- Lazy loading for heavier interactive experiences such as Terminal Lab, Contact Form, and Skills visualization
- Consistent SEO helper for scalable metadata creation
- Deployment-safe contact API route using `CONTACT_FORM_ENDPOINT`
- Automated responsive overflow audit through Playwright
- Security-conscious external links and production headers

## Architecture Direction

```txt
app/
  api/contact/
  about/
  certifications/
  contact/
  projects/
    [slug]/
  skills/
  terminal/
components/
  animations/
  layout/
  sections/
  ui/
constants/
data/
docs/
hooks/
lib/
public/
  og/
  previews/
  screenshots/
scripts/
styles/
types/
```

The codebase separates content, layout primitives, motion wrappers, UI elements, and page-specific sections so future projects, screenshots, certifications, and deployment assets can be added without reshaping the repository.

## Performance & SEO

Production optimizations include:

- Next.js static generation for portfolio pages
- Dynamic route generation for project case studies
- Lazy-loaded interactive sections
- Reduced-motion support for accessibility and performance
- Generated Open Graph and Twitter preview images
- `robots.txt`, `sitemap.xml`, and `manifest.webmanifest`
- Security headers through `next.config.ts`
- Responsive validation script for layout stability

## Installation

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Validation

```bash
npm run validate
```

For responsive validation, start the production server first:

```bash
npm run build
npm start
npm run responsive:check
```

To validate a deployed URL:

```bash
BASE_URL=https://your-domain.vercel.app npm run responsive:check
```

## Environment

Create `.env.local` from `.env.example` when deployment-specific values are required.

```bash
cp .env.example .env.local
```

Supported variables:

```txt
NEXT_PUBLIC_SITE_URL=
CONTACT_FORM_ENDPOINT=
```

When `CONTACT_FORM_ENDPOINT` is not configured, the contact API returns a clear fallback response instead of pretending delivery succeeded.

## Deployment

The project is prepared for GitHub and Vercel deployment.

Recommended Vercel settings:

- Framework: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Output: managed by Next.js
- Environment variables: `NEXT_PUBLIC_SITE_URL`, `CONTACT_FORM_ENDPOINT`

## Screenshots Placeholder

Preview assets are prepared for future use:

```txt
public/previews/
public/screenshots/
public/og/
```

## Future Enhancements

- Add real resume PDF download
- Add verified certifications and internship certificates
- Add live deployment URL after Vercel setup
- Add project screenshots and preview media
- Add additional case studies as projects grow
- Add analytics and monitoring after deployment
- Activate a future blog route once technical writing content is ready
- Connect a real AI assistant provider only through server-side environment variables

## Documentation

- [Architecture](./docs/ARCHITECTURE.md)
- [Deployment](./docs/DEPLOYMENT.md)
- [Performance](./docs/PERFORMANCE.md)
- [SEO](./docs/SEO.md)
- [Future-Ready Enhancements](./docs/FUTURE_READY.md)
- [Maintenance Workflow](./docs/MAINTENANCE.md)
- [Contributing](./CONTRIBUTING.md)
- [Changelog](./CHANGELOG.md)

## License

Released under the [MIT License](./LICENSE).
