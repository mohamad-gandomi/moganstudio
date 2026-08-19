export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: React.ReactNode; copy?: string }) {
  return (
    <div className="mb-12 max-w-[720px] lg:mb-16">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title font-semibold">{title}</h2>
      {copy && <p className="mt-6 text-lg leading-8 text-muted">{copy}</p>}
    </div>
  );
}
