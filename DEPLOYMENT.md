# Vercel deployment

Create two Vercel projects from this repository.

## API project

- Root directory: `apps/api`
- Install command: `npm install`
- Build command: `npm run build`
- Environment: copy the variables documented in `apps/api/.env.example`
- Attach a pooled PostgreSQL database and run `npx prisma migrate deploy` during release/deployment.

## Web project

- Root directory: `apps/web`
- Framework: Next.js
- Environment: copy the variables documented in `apps/web/.env.example`
- Set `API_BASE_URL` to the production API URL.
- Enable Web Analytics in the Vercel project dashboard.

Use the same high-entropy `INTERNAL_API_KEY` in both projects. Generate `ADMIN_PASSWORD_HASH` locally with `npm run admin:hash -- "your-long-password"` from the repository root. Never commit real secrets.
