import { redirect } from "next/navigation";
import Link from "next/link";
import { isAdminAuthenticated } from "@/lib/auth";
import { LoginForm } from "./login-form";

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) redirect("/admin");
  return (
    <main className="grid min-h-dvh place-items-center px-5 py-16">
      <div className="w-full max-w-md rounded-xl border bg-white p-7 sm:p-9">
        <Link href="/" className="text-xs font-bold tracking-[.16em]">MOGAN STUDIO</Link>
        <h1 className="mt-12 text-3xl font-semibold tracking-[-.04em]">Admin sign in</h1>
        <p className="mt-3 leading-7 text-muted">Use the private administrator credentials configured for this deployment.</p>
        <LoginForm />
      </div>
    </main>
  );
}
