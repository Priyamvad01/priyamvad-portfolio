# Maintenance Workflow

This portfolio is designed to evolve as Priyamvad Ranjan adds projects, certificates, writing, and deployment improvements. The goal is to keep updates structured, verifiable, and production-safe.

## Update Principles

- Keep content in `data/` whenever it can be represented as structured records.
- Keep long-form future writing in MDX, markdown, or a CMS layer instead of large page components.
- Add verified proof only when issuer, date, link, or asset details are ready.
- Preserve the premium visual language by using existing layout, UI, and motion primitives.
- Validate every meaningful update before pushing to GitHub or deploying to Vercel.

## Content Sources

| Area | Source | Future Path |
| --- | --- | --- |
| Projects | `data/projects.ts` | More project cards and dynamic case studies |
| Certifications | `data/certifications.ts` | Verified proof links, PDFs, preview images |
| Blog planning | `data/blog.ts` | Future `/blog` route with MDX or CMS content |
| Expansion roadmap | `data/content-roadmap.ts` | Analytics, AI assistant, certificate gallery, content workflow |
| Evolution roadmap | `data/evolution.ts` | Career growth, project ecosystem, release cadence, health checks |
| Assistant knowledge | `data/assistant.ts` | Future retrieval or AI provider integration |
| Skills | `data/skills.ts` | New tools, learning areas, and workflow updates |

## Adding A New Project

1. Add a new record in `data/projects.ts`.
2. Keep the summary grounded: problem, architecture, stack, and outcome.
3. Add case-study content only when the project has enough technical substance.
4. Confirm `/projects` and `/projects/[slug]` render correctly.
5. Run validation commands before commit.

## Adding A Certification

1. Add the certificate metadata in `data/certifications.ts`.
2. Place PDFs in `public/certifications/` only when the proof is ready.
3. Use `status: "verified"` only after issuer, date, and proof details are available.
4. Keep placeholder language professional and clearly future-facing.

## Preparing Blog Content

The blog route is intentionally not active yet. Use `data/blog.ts` to plan topics until there are enough polished articles to justify a dedicated page.

Recommended future structure:

```txt
content/
  blog/
    backend-api-design.mdx
    fastapi-ai-service-boundary.mdx
```

Future blog posts should generate metadata and sitemap entries from the same source of truth.

## AI Assistant Evolution

Current assistant behavior is local and curated. A future AI-backed version should keep this boundary:

```txt
components/intelligence
  -> /api/assistant
    -> structured portfolio data
    -> optional retrieval
    -> optional AI provider
```

Never expose provider keys in client components. Add AI provider variables only in `.env.local` or Vercel environment settings.

## Validation Checklist

Run these before a production push:

```bash
npm run lint
npm run build
```

For responsive validation, start production locally first:

```bash
npm start
$env:BASE_URL='http://localhost:3000'; npm run responsive:check
```

On macOS/Linux:

```bash
BASE_URL=http://localhost:3000 npm run responsive:check
```

## Deployment Maintenance

Recommended long-term flow:

```txt
local update
  -> lint and build
  -> responsive check
  -> semantic commit
  -> git push origin main
  -> Vercel production deployment
  -> live route smoke test
```

Use small commits for content updates and feature-oriented commits for new systems.

## Release Levels

Use `data/evolution.ts` and `docs/EVOLUTION.md` to choose the right validation depth:

- Patch update: copy, metadata, or minor proof corrections.
- Content release: new project, certificate, resume, or case-study update.
- Platform upgrade: blog route, analytics, real AI assistant, or major interactive system.

## Rollback Awareness

If a deployment introduces a regression:

1. Identify the last stable commit.
2. Revert the failing commit with a new revert commit.
3. Push to `main` so Vercel redeploys the stable state.
4. Document the fix in `CHANGELOG.md` when the issue affects production behavior.
