import { redirect } from "next/navigation";
import Link from "next/link";
import { logout } from "./actions";
import { getLeads } from "@/lib/api";
import { isAdminAuthenticated } from "@/lib/auth";

const formatter = new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short", timeZone: "UTC" });

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  const leads = await getLeads();

  return (
    <main className="min-h-dvh bg-subtle/60 py-8 sm:py-12">
      <div className="shell">
        <header className="flex flex-col justify-between gap-5 border-b pb-7 sm:flex-row sm:items-end">
          <div><Link href="/" className="text-xs font-bold tracking-[.16em]">MOGAN STUDIO</Link><h1 className="mt-5 text-4xl font-semibold tracking-[-.045em]">Project leads</h1><p className="mt-2 text-muted">{leads.length} {leads.length === 1 ? "inquiry" : "inquiries"} stored</p></div>
          <form action={logout}><button className="button-secondary" type="submit">Sign out</button></form>
        </header>
        {leads.length === 0 ? <div className="mt-8 rounded-xl border bg-white p-12 text-center text-muted">No project inquiries yet.</div> : (
          <div className="mt-8 grid gap-5">
            {leads.map((lead) => (
              <article key={lead.id} className="rounded-xl border bg-white p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-3 border-b pb-5 sm:flex-row">
                  <div><span className="rounded-md bg-neutral-100 px-2 py-1 text-[11px] font-semibold tracking-wider">{lead.status}</span><h2 className="mt-3 text-xl font-semibold">{lead.name}</h2><a href={`mailto:${lead.email}`} className="mt-1 inline-block text-sm text-muted underline underline-offset-4">{lead.email}</a></div>
                  <time className="text-sm text-muted" dateTime={lead.createdAt}>{formatter.format(new Date(lead.createdAt))} UTC</time>
                </div>
                <dl className="mt-6 grid gap-6 md:grid-cols-3">
                  <div><dt className="text-xs font-semibold tracking-wider text-muted uppercase">Company / website</dt><dd className="mt-2 break-words">{lead.companyWebsite}</dd></div>
                  <div><dt className="text-xs font-semibold tracking-wider text-muted uppercase">Budget</dt><dd className="mt-2">{lead.budget ?? "Not provided"}</dd></div>
                  <div><dt className="text-xs font-semibold tracking-wider text-muted uppercase">Timeline</dt><dd className="mt-2">{lead.timeline ?? "Not provided"}</dd></div>
                  {lead.existingWebsiteUrl && <div className="md:col-span-3"><dt className="text-xs font-semibold tracking-wider text-muted uppercase">Existing website</dt><dd className="mt-2"><a className="break-all underline underline-offset-4" href={lead.existingWebsiteUrl} rel="noreferrer" target="_blank">{lead.existingWebsiteUrl}</a></dd></div>}
                  <div className="md:col-span-3"><dt className="text-xs font-semibold tracking-wider text-muted uppercase">Project details</dt><dd className="mt-2 whitespace-pre-wrap leading-7 text-neutral-700">{lead.message}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
