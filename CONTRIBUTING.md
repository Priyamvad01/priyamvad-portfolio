# Contributing

This repository is maintained as a professional portfolio project for Priyamvad Ranjan. Contributions should preserve the premium engineering identity, production-ready structure, and clean development workflow.

## Development Principles

- Keep changes focused and easy to review.
- Prefer reusable components over one-off page styling.
- Preserve responsive behavior across mobile, tablet, desktop, and ultrawide layouts.
- Keep motion subtle, performant, and respectful of reduced-motion preferences.
- Avoid exaggerated hacker, gaming, or neon-heavy visuals.
- Do not commit secrets, local environment files, build output, or deployment tokens.

## Branching Strategy

Use a simple professional workflow:

```txt
main              production-ready code
development       integration branch for larger updates
feature/*         new sections or features
fix/*             bug fixes and regressions
docs/*            documentation-only updates
perf/*            performance-focused changes
```

## Commit Style

Use semantic commit messages:

```txt
feat: add cinematic hero section
feat: implement terminal interaction system
perf: optimize motion rendering
fix: improve responsive layout scaling
docs: add deployment documentation
chore: configure repository workflow
```

## Local Validation

Run the standard checks before pushing:

```bash
npm run validate
```

For responsive regression checks, run the production server and then execute:

```bash
npm run responsive:check
```

## Pull Request Checklist

- The production build passes.
- No secrets or local environment files are committed.
- New UI remains responsive.
- New interactive UI has keyboard and reduced-motion considerations.
- Documentation is updated when architecture, deployment, or environment behavior changes.
