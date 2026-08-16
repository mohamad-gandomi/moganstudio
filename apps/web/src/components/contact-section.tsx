import { ProjectForm } from "./project-form";

export function ContactSection() {
  return (
    <section id="contact" className="section-space scroll-mt-20">
      <div className="shell grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title font-semibold">Tell me about your <span className="font-serif font-normal italic">project.</span></h2>
          <p className="mt-6 max-w-[480px] text-lg leading-8 text-muted">Share what you are building, improving, or fixing. I’ll use the details to understand the scope and next steps.</p>
          <div className="mt-9 border-t pt-7"><p className="text-sm font-semibold">What happens next</p><p className="mt-2 max-w-[440px] text-sm leading-6 text-muted">Your inquiry is stored privately for review. I’ll use the contact details you provide to respond once the project scope is clear.</p></div>
        </div>
        <ProjectForm />
      </div>
    </section>
  );
}
