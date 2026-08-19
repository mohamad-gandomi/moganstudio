import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="border-y bg-subtle/60 py-16 sm:py-20">
      <div className="shell flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div><p className="eyebrow">Start a conversation</p><h2 className="text-3xl font-semibold tracking-[-.04em] sm:text-4xl">Have a project in mind?</h2><p className="mt-3 text-muted">Choose WhatsApp, Calendly, or email and I’ll take a careful look.</p></div>
        <a href="#contact" className="button-primary group">Choose How to Connect <ArrowRight aria-hidden="true" className="size-4 transition group-hover:translate-x-0.5" /></a>
      </div>
    </section>
  );
}
