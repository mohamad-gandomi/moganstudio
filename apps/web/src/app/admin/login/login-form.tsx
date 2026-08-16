"use client";

import { useActionState } from "react";
import { login, type LoginState } from "../actions";

const initialState: LoginState = { error: "" };

export function LoginForm() {
  const [state, action, pending] = useActionState(login, initialState);
  return (
    <form action={action} className="mt-8 space-y-5">
      <label className="block text-sm font-medium">Email<input className="field mt-2" name="email" type="email" autoComplete="username" required /></label>
      <label className="block text-sm font-medium">Password<input className="field mt-2" name="password" type="password" autoComplete="current-password" minLength={12} maxLength={200} required /></label>
      <button type="submit" className="button-primary w-full" disabled={pending}>{pending ? "Signing in…" : "Sign in"}</button>
      <p role="alert" aria-live="polite" className="min-h-5 text-sm text-red-700">{state.error}</p>
    </form>
  );
}
