# Architecture

This portfolio is structured as a scalable Next.js App Router application with a clear separation between routes, reusable components, data, utilities, and production support files.

## Application Layers

```txt
app/              route segments, metadata, API routes, generated SEO assets
components/       reusable UI, layout, animation, and section systems
constants/        site profile, routes, shared constants
data/             structured content for pages and visual systems
hooks/            reusable client-side hooks
lib/              utility helpers and SEO metadata factory
scripts/          validation and repository automation helpers
types/            shared TypeScript contracts
public/           static assets, previews, screenshots, future OG media
```

## Route Model

The route structure supports a multi-page recruiter-facing portfolio:

- `/`
- `/about`
- `/skills`
- `/projects`
- `/projects/healthcare-ai-system`
- `/certifications`
- `/terminal`
- `/contact`

Project case studies use dynamic routing through `/projects/[slug]`, with static params generated from structured project data.

## Component Strategy

Components are grouped by responsibility:

- `components/ui`: low-level reusable primitives.
- `components/layout`: page shells, containers, section wrappers, navigation, footer, global background.
- `components/animations`: Framer Motion wrappers and presets.
- `components/sections`: page-specific and domain-specific sections.

This keeps the codebase scalable while preserving design consistency.

## Client Boundaries

The application prefers server components by default. Client components are used where interaction or browser APIs are required:

- Navigation scroll behavior
- Page transitions
- Scroll progress
- Motion reveals
- Terminal interaction system
- Contact form state
- Copy-to-clipboard interactions
- Interactive skills cluster

Heavier interactive sections are lazy-loaded to reduce initial route cost.

## Data Strategy

Portfolio content is stored in `data/` so pages can map structured content into reusable UI components. This keeps content updates cleaner and reduces hardcoded page logic.

Current structured sources:

- `data/projects.ts`: project records, future projects, architecture highlights, and workflow stages.
- `data/certifications.ts`: credential records, proof metadata, status, and future PDF paths.
- `data/blog.ts`: planned technical writing topics for a future blog route.
- `data/content-roadmap.ts`: long-term content, analytics, AI, and maintenance roadmap.
- `data/assistant.ts`: local assistant knowledge, command palette actions, and future AI boundary content.

Shared helpers in `lib/content.ts` support sorting and status filtering as future collections grow.

## Future Route Strategy

Routes should be activated only when content quality justifies them. For example, `/blog` is intentionally prepared as data and documentation first, then can become a real route once multiple polished technical articles exist.

Future dynamic routes should follow the project case-study pattern:

```txt
data source -> generateStaticParams -> metadata factory -> reusable page sections
```

## Design System

The visual system is built from:

- Tailwind CSS v4 theme variables
- Dark luxury color tokens
- Glassmorphism utilities
- Fluid typography utilities
- Reusable button, card, badge, divider, and input components
- Motion presets for cinematic but subtle reveals

The design direction should remain premium, minimal, technical, and mature.

## Asset Growth

Static asset folders are reserved for future proof and preview material:

- `public/certifications`
- `public/resume`
- `public/previews`
- `public/screenshots`
- `public/og`

These folders keep recruiter-facing proof, social previews, and deployment media organized without changing page architecture.
