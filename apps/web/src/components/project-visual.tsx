import Image from "next/image";

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-[0_8px_30px_rgba(0,0,0,.05)]">
      <div className="flex h-9 items-center gap-1.5 border-b px-4" aria-hidden="true">
        <i className="size-1.5 rounded-full bg-neutral-300" />
        <i className="size-1.5 rounded-full bg-neutral-300" />
        <i className="size-1.5 rounded-full bg-neutral-300" />
      </div>
      {children}
    </div>
  );
}

export function ProjectVisual({ image }: { image: { src: string; alt: string } }) {
  return (
    <BrowserFrame>
      <div className="relative aspect-[1.58] bg-subtle">
        <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
    </BrowserFrame>
  );
}
