"use client";

import { FormEvent, useState } from "react";

type FormStatus = { state: "idle" | "submitting" | "success" | "error"; message?: string };

const budgets = ["Under $500", "$500–$1,000", "$1,000–$2,000", "$2,000–$4,000", "$4,000+", "Not sure yet"];
const timelines = ["ASAP", "1–2 weeks", "2–4 weeks", "1–2 months", "Flexible"];

export function ProjectForm() {
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ state: "submitting" });
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("Please check the form and try again.");
      form.reset();
      setStatus({ state: "success", message: "Thanks—your project details have been received." });
    } catch (error) {
      setStatus({ state: "error", message: error instanceof Error ? error.message : "Something went wrong. Please try again." });
    }
  }

  return (
    <form onSubmit={submit} className="rounded-xl border bg-white p-6 sm:p-8" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium">Name <span aria-hidden="true">*</span><input className="field mt-2" name="name" autoComplete="name" minLength={2} maxLength={100} required /></label>
        <label className="text-sm font-medium">Email <span aria-hidden="true">*</span><input className="field mt-2" name="email" type="email" autoComplete="email" maxLength={254} required /></label>
        <label className="text-sm font-medium sm:col-span-2">Company / website <span aria-hidden="true">*</span><input className="field mt-2" name="companyWebsite" autoComplete="organization" minLength={2} maxLength={300} required placeholder="Company name or website" /></label>
        <label className="text-sm font-medium sm:col-span-2">Existing website URL <span className="font-normal text-muted">(optional)</span><input className="field mt-2" name="existingWebsiteUrl" type="url" inputMode="url" autoComplete="url" maxLength={500} placeholder="https://example.com" /></label>
        <label className="text-sm font-medium">Budget <span className="font-normal text-muted">(optional)</span><select className="field mt-2" name="budget" defaultValue=""><option value="">Select a range</option>{budgets.map((value) => <option key={value}>{value}</option>)}</select></label>
        <label className="text-sm font-medium">Timeline <span className="font-normal text-muted">(optional)</span><select className="field mt-2" name="timeline" defaultValue=""><option value="">Select a timeline</option>{timelines.map((value) => <option key={value}>{value}</option>)}</select></label>
        <label className="text-sm font-medium sm:col-span-2">What do you need help with? <span aria-hidden="true">*</span><textarea className="field mt-2 min-h-36 resize-y py-3" name="message" minLength={20} maxLength={5000} required placeholder="Tell me about your goals, current situation, and what a good outcome looks like." /></label>
      </div>
      <div className="absolute -left-[9999px]" aria-hidden="true"><label>Office phone<input name="officePhone" tabIndex={-1} autoComplete="off" /></label></div>
      <button className="button-primary mt-7 w-full sm:w-auto" disabled={status.state === "submitting"} type="submit">{status.state === "submitting" ? "Sending…" : "Send Project Details"}</button>
      <p className={`mt-4 min-h-6 text-sm ${status.state === "error" ? "text-red-700" : "text-muted"}`} aria-live="polite" role="status">{status.message}</p>
    </form>
  );
}
