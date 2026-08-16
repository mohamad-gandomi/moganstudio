import { MessageSquareText, ShieldCheck, Sparkles, Wrench } from "lucide-react";

const principles = [
  { icon: Sparkles, title: "Simple solutions", copy: "I avoid unnecessary complexity and choose solutions that solve the actual business problem." },
  { icon: ShieldCheck, title: "Security & reliability", copy: "Security, stability, and dependable behavior are treated as fundamentals, not afterthoughts." },
  { icon: MessageSquareText, title: "Direct communication", copy: "You communicate directly with the developer doing the work." },
  { icon: Wrench, title: "Maintainability", copy: "The work is understandable, maintainable, and easier to improve over time." },
] as const;

const process = [
  ["Send project details", "Share your goals, current site, problems, and requirements."],
  ["Scope & estimate", "I clarify scope, dependencies, price, and delivery expectations."],
  ["Build / improve", "Implementation moves forward with clear written updates."],
  ["Review & launch", "We review the work, complete QA, resolve issues, and launch."],
  ["Optional ongoing support", "Continue with maintenance, improvements, or new features when useful."],
] as const;

export function WhyProcess() {
  return (
    <section className="bg-night text-white">
      <div id="why-me" className="shell section-space scroll-mt-20">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="eyebrow !text-neutral-400">Why work with me</p>
            <h2 className="section-title font-semibold">Calm process.<br /><span className="font-serif font-normal italic text-neutral-300">Dependable</span> work.</h2>
            <p className="mt-7 max-w-[520px] text-lg leading-8 text-neutral-400">I focus on solutions that stay simple, secure, reliable, and maintainable. You work directly with me from first scope to final review.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-neutral-800 bg-neutral-800 sm:grid-cols-2">
            {principles.map(({ icon: Icon, title, copy }, index) => (
              <article key={title} className="bg-night-soft p-7 sm:p-8">
                <div className="flex items-center justify-between text-neutral-500">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                  <span className="text-xs">0{index + 1}</span>
                </div>
                <h3 className="mt-9 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-neutral-400">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div id="process" className="shell scroll-mt-20 border-t border-neutral-800 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[.4fr_1fr] lg:gap-24">
          <div>
            <p className="eyebrow !text-neutral-400">Process</p>
            <h2 className="text-3xl font-semibold tracking-[-.035em] sm:text-[2.125rem]">Clear from start to launch.</h2>
          </div>
          <ol>
            {process.map(([title, copy], index) => (
              <li key={title} className="grid gap-3 border-t border-neutral-800 py-7 first:border-t-0 first:pt-0 sm:grid-cols-[56px_.65fr_1fr]">
                <span className="text-sm text-neutral-500">0{index + 1}</span>
                <h3 className="font-semibold">{title}</h3>
                <p className="leading-7 text-neutral-400">{copy}</p>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-12 max-w-[760px] border-t border-neutral-800 pt-8 text-sm leading-7 text-neutral-400">Remote projects are handled asynchronously when possible, with clear scope, milestones, written updates, and scheduled calls when useful.</p>
      </div>
    </section>
  );
}
