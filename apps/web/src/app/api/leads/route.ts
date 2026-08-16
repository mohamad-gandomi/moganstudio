import { NextResponse } from "next/server";
import { createHmac } from "node:crypto";
import { createLead } from "@/lib/api";

const allowedFields = ["name", "email", "companyWebsite", "existingWebsiteUrl", "message", "budget", "timeline", "officePhone"] as const;

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) return NextResponse.json({ error: "Unsupported content type." }, { status: 415 });

    const body = (await request.json()) as Record<string, unknown>;
    const payload = Object.fromEntries(
      allowedFields.flatMap((field) => {
        const value = body[field];
        return typeof value === "string" && value !== "" ? [[field, value]] : [];
      }),
    );
    const address = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const apiKey = process.env.INTERNAL_API_KEY;
    if (!apiKey) throw new Error("The leads service is not configured.");
    const clientId = createHmac("sha256", apiKey).update(address).digest("hex");
    const response = await createLead(payload, clientId);

    if (!response.ok) {
      const status = response.status >= 400 && response.status < 500 ? response.status : 502;
      return NextResponse.json({ error: status === 429 ? "Please wait before trying again." : "Please check the form and try again." }, { status });
    }

    return NextResponse.json({ accepted: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "The form is temporarily unavailable." }, { status: 503 });
  }
}
