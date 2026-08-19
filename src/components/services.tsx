import { services } from "@/data/services";
import { SectionHeading } from "./section-heading";
import { ServiceIcon } from "./service-icon";

export function Services() {
  return (
    <section id="services" className="section-space border-t bg-subtle/50 scroll-mt-20">
      <div className="shell">
        <SectionHeading eyebrow="Services" title={<>Focused work, built to <span className="font-serif font-normal italic">last.</span></>} copy="Practical development for businesses that value clarity, dependable delivery, and maintainable technology." />
        <div className="grid gap-px overflow-hidden rounded-xl border bg-line md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="group bg-surface p-7 transition hover:bg-canvas sm:p-9 lg:p-11">
              <div className="mb-8 grid size-11 place-items-center rounded-lg border bg-canvas"><ServiceIcon icon={service.icon} /></div>
              <h3 className="text-2xl font-semibold tracking-[-.025em]">{service.title}</h3>
              <p className="mt-4 max-w-[520px] leading-7 text-muted">{service.description}</p>
              <ul className="mt-7 space-y-3 border-t pt-6 text-sm">
                {service.items.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2 size-1 rounded-full bg-ink" />{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
