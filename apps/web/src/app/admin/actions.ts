"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { clearAdminSession, createAdminSession, verifyPassword } from "@/lib/auth";

export type LoginState = { error: string };

const attempts = new Map<string, { count: number; resetAt: number }>();

function canAttempt(key: string) {
  const now = Date.now();
  const current = attempts.get(key);
  if (!current || current.resetAt < now) {
    attempts.set(key, { count: 1, resetAt: now + 15 * 60_000 });
    return true;
  }
  current.count += 1;
  return current.count <= 5;
}

export async function login(_state: LoginState, formData: FormData): Promise<LoginState> {
  const requestHeaders = await headers();
  const clientKey = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!canAttempt(clientKey)) return { error: "Too many attempts. Please wait 15 minutes." };

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const expectedEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const passwordValid = password.length <= 200 && await verifyPassword(password);

  if (!expectedEmail || email !== expectedEmail || !passwordValid) return { error: "Invalid email or password." };

  attempts.delete(clientKey);
  await createAdminSession(email);
  redirect("/admin");
}

export async function logout() {
  await clearAdminSession();
  redirect("/admin/login");
}
