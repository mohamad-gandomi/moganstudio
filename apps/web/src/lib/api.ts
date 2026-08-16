export type Lead = {
  id: string;
  name: string;
  email: string;
  companyWebsite: string;
  existingWebsiteUrl: string | null;
  message: string;
  budget: string | null;
  timeline: string | null;
  status: "NEW" | "READ";
  createdAt: string;
};

function apiConfig() {
  const baseUrl = process.env.API_BASE_URL;
  const apiKey = process.env.INTERNAL_API_KEY;
  if (!baseUrl || !apiKey) throw new Error("The private API configuration is incomplete.");
  return { baseUrl: baseUrl.replace(/\/$/, ""), apiKey };
}

export async function getLeads(): Promise<Lead[]> {
  const { baseUrl, apiKey } = apiConfig();
  const response = await fetch(`${baseUrl}/v1/leads`, {
    headers: { "X-Internal-Api-Key": apiKey },
    cache: "no-store",
  });

  if (!response.ok) throw new Error("The leads service is unavailable.");
  return response.json() as Promise<Lead[]>;
}

export async function createLead(payload: unknown, clientId: string) {
  const { baseUrl, apiKey } = apiConfig();

  return fetch(`${baseUrl}/v1/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Internal-Api-Key": apiKey,
      "X-Client-Id": clientId,
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
}
