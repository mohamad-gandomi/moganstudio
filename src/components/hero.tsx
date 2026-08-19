import { ArrowRight } from "lucide-react";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <section id="top" className="overflow-hidden pb-16 pt-16 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-32">
      <div className="shell grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-10">
        <div className="max-w-[720px]">
          <p className="eyebrow">WordPress · WooCommerce · Technical Support</p>
          <h1 className="display max-w-[760px] font-semibold">Fast, reliable WordPress &amp; WooCommerce development for <span className="mr-[.12em] font-serif font-normal italic">growing</span>businesses.</h1>
          <p className="mt-7 max-w-[640px] text-lg leading-8 text-muted sm:text-xl">From new builds to ongoing improvements, I help businesses keep their WordPress and WooCommerce sites fast, reliable, and ready to grow.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="button-primary group">Start a Conversation <ArrowRight aria-hidden="true" className="size-4 transition group-hover:translate-x-0.5" /></a>
            <a href="#work" className="button-secondary">View My Work</a>
          </div>
          <p className="mt-7 text-sm text-muted">Direct collaboration with Gandomi, Developer.</p>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
