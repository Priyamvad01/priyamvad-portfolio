# Performance

The portfolio is optimized to preserve the cinematic experience while keeping rendering stable and deployment-ready.

## Current Optimization Strategy

- Static generation for standard portfolio routes.
- Static params for project case studies.
- Lazy loading for heavier interactive modules.
- Reduced-motion handling for animation-heavy wrappers.
- CSS-based ambient visuals instead of heavy canvas or particle systems.
- Responsive glow scaling for smaller devices.
- Production build validation through Next.js.
- Playwright responsive overflow checks across key routes and viewports.

## Lazy Loaded Modules

The following interactive sections are dynamically loaded:

- Terminal window
- Contact form
- Skills interactive cluster

This keeps initial page rendering lighter while preserving rich interactivity after hydration.

## Motion Guidelines

Motion should use:

- `transform`
- `opacity`
- subtle scale and position changes
- one-time scroll reveals

Avoid:

- layout-affecting animation
- aggressive blur changes on large surfaces
- excessive repeated animation
- particle-heavy effects

## Responsive Performance

The responsive system uses:

- fluid typography clamps
- adaptive containers
- mobile-safe scroll panels
- reduced glow intensity on small screens
- touch-friendly button sizing

## Validation Commands

```bash
npm run validate
```

Responsive audit:

```bash
npm run build
npm start
npm run responsive:check
```

Remote deployment audit:

```bash
BASE_URL=https://your-domain.vercel.app npm run responsive:check
```

## Lighthouse Direction

Expected optimization priorities:

- Keep LCP focused on text and lightweight hero visuals.
- Avoid layout shifts from dynamic sections by using stable skeleton dimensions.
- Maintain strong contrast and visible focus states.
- Keep JavaScript interaction surfaces isolated to the pages that need them.
