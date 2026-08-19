import { socialLinks } from "@/data/social-links";
import { BriefcaseBusiness, Camera, CodeXml } from "lucide-react";

const socialIcons = { GitHub: CodeXml, LinkedIn: BriefcaseBusiness, Instagram: Camera } as const;

export function SiteFooter() {
  return (
    <footer className="bg-canvas py-10">
      <div className="shell grid gap-8 sm:grid-cols-3 sm:items-end">
        <div><p className="text-sm font-bold tracking-[.16em]">MOGAN STUDIO</p><p className="mt-2 text-sm text-muted">Gandomi, Developer</p></div>
        <nav aria-label="Social links" className="flex flex-wrap gap-4 sm:justify-center">{socialLinks.map((link) => {
          const Icon = socialIcons[link.label];
          return <a key={link.label} href={link.href} aria-label={link.label} className="grid size-10 place-items-center rounded-lg border text-muted transition hover:border-neutral-400 hover:bg-white hover:text-ink"><Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.7} /></a>;
        })}</nav>
        <p className="text-sm text-muted sm:text-right">© {new Date().getFullYear()} Mogan Studio</p>
      </div>
    </footer>
  );
}
