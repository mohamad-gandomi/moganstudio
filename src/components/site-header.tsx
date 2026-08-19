import { navigation } from "@/lib/site";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/90 backdrop-blur-lg">
      <div className="shell flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="text-sm font-bold tracking-[0.16em]">MOGAN STUDIO</a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => <a key={item.href} href={item.href} className="text-sm text-muted transition hover:text-ink">{item.label}</a>)}
        </nav>
        <a href="#contact" className="button-primary hidden lg:inline-flex">Start a Conversation</a>
        <MobileMenu />
      </div>
    </header>
  );
}
