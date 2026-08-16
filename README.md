# Mogan Studio V1

Mogan Studio is a Vercel-ready monorepo containing a public Next.js website, a protected Next.js lead dashboard, and a NestJS API backed by PostgreSQL.

## Apps

- `apps/web`: marketing site, admin session, dashboard, Vercel Analytics
- `apps/api`: validated lead ingestion and protected lead reads

## Local setup

1. Run `cd apps/api && npx prisma dev --name=mogan-studio --detach` to start local PostgreSQL without Docker.
2. Copy each `.env.example` file to `.env.local` (`web`) or `.env` (`api`) if local files have not already been configured.
3. Run `npm install` and `npm run db:generate`.
4. Apply the included database migration with `cd apps/api && npx prisma migrate deploy`.
5. Generate an admin password hash with `npm run admin:hash -- "your-long-password"`.
6. Start the API with `npm run dev:api` and the site with `npm run dev:web`.

The two apps should be deployed as separate Vercel projects using `apps/web` and `apps/api` as their project root directories. See [DEPLOYMENT.md](./DEPLOYMENT.md).
