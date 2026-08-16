-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('NEW', 'READ');

-- CreateTable
CREATE TABLE "Lead" (
  "id" TEXT NOT NULL,
  "name" VARCHAR(100) NOT NULL,
  "email" VARCHAR(254) NOT NULL,
  "companyWebsite" VARCHAR(300) NOT NULL,
  "existingWebsiteUrl" VARCHAR(500),
  "message" VARCHAR(5000) NOT NULL,
  "budget" VARCHAR(50),
  "timeline" VARCHAR(50),
  "status" "LeadStatus" NOT NULL DEFAULT 'NEW',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt");
CREATE INDEX "Lead_status_createdAt_idx" ON "Lead"("status", "createdAt");
