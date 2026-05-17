# Deployment

The project is prepared for GitHub and Vercel deployment with a production-safe environment structure.

## GitHub Repository

```txt
Repository: priyamvad-portfolio
Remote: https://github.com/Priyamvad01/priyamvad-portfolio.git
Primary branch: main
```

## Vercel Setup

Recommended settings:

```txt
Framework Preset: Next.js
Install Command: npm install
Build Command: npm run build
Output Directory: managed by Next.js
Node Version: latest stable supported by Vercel
Production Branch: main
```

The repository includes `vercel.json` so Vercel can detect the project consistently from GitHub or the CLI.

## Environment Variables

Create these variables in Vercel Project Settings:

```txt
NEXT_PUBLIC_SITE_URL=https://your-production-domain
CONTACT_FORM_ENDPOINT=
```

`CONTACT_FORM_ENDPOINT` can point to a Formspree endpoint, custom webhook, or backend service. When it is empty, the API route returns a safe fallback response and does not fake delivery.

## Deployment Flow

Recommended workflow:

1. Push production-ready code to `main`.
2. Connect the GitHub repository to Vercel.
3. Add environment variables.
4. Run the first production deployment.
5. Update `NEXT_PUBLIC_SITE_URL` with the live domain.
6. Re-deploy so canonical URLs and social previews use the production domain.

## Production Validation

Before deployment:

```bash
npm run validate
```

After deployment:

- Check homepage and all core routes.
- Test contact form fallback or configured provider.
- Confirm `/robots.txt`.
- Confirm `/sitemap.xml`.
- Confirm `/opengraph-image`.
- Confirm mobile layout on a real device.

## Security Notes

- Never commit `.env.local`.
- Keep provider tokens in deployment environment variables.
- External links use `noopener noreferrer`.
- Security headers are configured in `next.config.ts`.
