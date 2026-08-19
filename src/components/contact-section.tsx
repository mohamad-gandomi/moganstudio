import { ArrowUpRight, CalendarDays, Mail, MessageCircle } from "lucide-react";

const whatsappNumber = "989355396804";
const whatsappMessage = encodeURIComponent("Hi Gandomi, I found Mogan Studio and would like to discuss a project. My website/project is: ");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
const calendlyUrl = "https://calendly.com/m-gandomi1995/30-minute-project-intro";

export function ContactSection() {
  return (
    <section id="contact" className="section-space scroll-mt-20">
      <div className="shell grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title font-semibold">Tell me about your <span className="font-serif font-normal italic">project.</span></h2>
          <p className="mt-6 max-w-[480px] text-lg leading-8 text-muted">Choose the easiest way to start. Send a quick message on WhatsApp, book a short call, or email me when you are ready.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group rounded-xl border bg-white p-7 transition hover:border-neutral-400 hover:shadow-sm sm:p-8">
            <MessageCircle aria-hidden="true" className="size-6" strokeWidth={1.7} />
            <h3 className="mt-10 text-2xl font-semibold tracking-[-.025em]">Chat on WhatsApp</h3>
            <p className="mt-3 leading-7 text-muted">Best for a quick question or an informal first message.</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">Start a chat <ArrowUpRight aria-hidden="true" className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
          </a>
          <a href={calendlyUrl} target="_blank" rel="noreferrer" className="group rounded-xl border bg-night p-7 text-white transition hover:bg-night-soft sm:p-8">
            <CalendarDays aria-hidden="true" className="size-6 text-neutral-300" strokeWidth={1.7} />
            <h3 className="mt-10 text-2xl font-semibold tracking-[-.025em]">Book a 30-minute call</h3>
            <p className="mt-3 leading-7 text-neutral-400">Choose a time that works for you and we’ll talk through the project.</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">Open Calendly <ArrowUpRight aria-hidden="true" className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
          </a>
          <a href="mailto:m.gandomi1995@gmail.com" className="group flex items-center gap-4 rounded-xl border p-5 text-sm font-semibold transition hover:border-neutral-400 sm:col-span-2">
            <Mail aria-hidden="true" className="size-5" strokeWidth={1.7} />
            <span className="flex-1">Prefer email? m.gandomi1995@gmail.com</span>
            <ArrowUpRight aria-hidden="true" className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
