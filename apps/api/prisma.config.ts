import "dotenv/config";
import { defineConfig } from "prisma/config";

// Client generation does not connect to PostgreSQL, so keep installs usable
// before local or Vercel environment variables have been configured.
const databaseUrl =
  process.env.DATABASE_URL ??
  "postgresql://placeholder:placeholder@localhost:5432/placeholder";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  datasource: { url: databaseUrl },
});
