import { cookies } from "next/headers";
import { createHmac, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const COOKIE_NAME = "mogan_admin_session";
const SESSION_SECONDS = 60 * 60 * 8;

function secret() {
  const value = process.env.ADMIN_SESSION_SECRET;
  if (!value || value.length < 32) throw new Error("ADMIN_SESSION_SECRET must contain at least 32 characters.");
  return value;
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("base64url");
}

export async function verifyPassword(password: string) {
  const encoded = process.env.ADMIN_PASSWORD_HASH ?? "";
  const [scheme, saltHex, expectedHex] = encoded.split(":");
  if (scheme !== "scrypt" || !saltHex || !expectedHex) return false;

  const expected = Buffer.from(expectedHex, "hex");
  const actual = (await promisify(scrypt)(password, Buffer.from(saltHex, "hex"), expected.length)) as Buffer;
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export async function createAdminSession(email: string) {
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const payload = Buffer.from(`${email}|${expires}`).toString("base64url");
  const store = await cookies();

  store.set(COOKIE_NAME, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_SECONDS,
  });
}

export async function isAdminAuthenticated() {
  const value = (await cookies()).get(COOKIE_NAME)?.value;
  if (!value) return false;

  const [payload, suppliedSignature] = value.split(".");
  if (!payload || !suppliedSignature) return false;

  const expectedSignature = sign(payload);
  const supplied = Buffer.from(suppliedSignature);
  const expected = Buffer.from(expectedSignature);
  if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) return false;

  const decoded = Buffer.from(payload, "base64url").toString();
  const separator = decoded.lastIndexOf("|");
  const email = decoded.slice(0, separator);
  const expires = Number(decoded.slice(separator + 1));

  return (
    separator > 0 &&
    email === process.env.ADMIN_EMAIL?.trim().toLowerCase() &&
    Number.isFinite(expires) &&
    expires > Math.floor(Date.now() / 1000)
  );
}

export async function clearAdminSession() {
  (await cookies()).delete(COOKIE_NAME);
}
