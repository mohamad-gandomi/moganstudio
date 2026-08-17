import Image from "next/image";

function BrowserBar() {
  return (
    <div className="flex h-8 items-center gap-1.5 border-b px-3" aria-hidden="true">
      <i className="size-1.5 rounded-full bg-neutral-300" />
      <i className="size-1.5 rounded-full bg-neutral-300" />
      <i className="size-1.5 rounded-full bg-neutral-300" />
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto h-[410px] w-full max-w-[590px] sm:h-[520px]">
      <div className="absolute right-0 top-2 w-[88%] overflow-hidden rounded-xl border bg-white shadow-[0_8px_30px_rgba(0,0,0,.05)]">
        <BrowserBar />
        <div className="relative aspect-[1.58] bg-subtle">
          <Image src="/images/projects/furniture-store.png" alt="Furniture ecommerce interface" fill priority sizes="(min-width: 1024px) 44vw, 88vw" className="object-cover" />
        </div>
      </div>
      <div className="absolute bottom-2 left-0 w-[72%] overflow-hidden rounded-xl border bg-white shadow-[0_8px_30px_rgba(0,0,0,.07)]">
        <BrowserBar />
        <div className="relative aspect-[1.58] bg-subtle">
          <Image src="/images/projects/project-dashboard.png" alt="Project dashboard interface" fill priority sizes="(min-width: 1024px) 36vw, 72vw" className="object-cover" />
        </div>
      </div>
    </div>
  );
}
