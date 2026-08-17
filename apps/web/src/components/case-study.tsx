import type { CaseStudy as CaseStudyType } from "@/data/projects";
import { ProjectVisual } from "./project-visual";

export function CaseStudy({ project, index }: { project: CaseStudyType; index: number }) {
  return (
    <article className="grid items-center gap-10 border-t py-16 first:border-t-0 first:pt-0 last:pb-0 lg:grid-cols-2 lg:gap-20 lg:py-24">
      <div className={index % 2 ? "lg:order-2" : ""}>
        <p className="mb-4 text-xs font-semibold tracking-[.16em] text-muted uppercase">Selected Project · 0{index + 1}</p>
        <h3 className="text-[1.75rem] font-semibold leading-tight tracking-[-.035em] sm:text-[2rem]">{project.title}</h3>
        <p className="mt-5 text-lg leading-8 text-muted">{project.context}</p>
        <dl className="mt-8 space-y-6">
          <div><dt className="mb-2 text-sm font-semibold">Problem</dt><dd className="leading-7 text-muted">{project.problem}</dd></div>
          <div><dt className="mb-2 text-sm font-semibold">What I did</dt><dd className="leading-7 text-muted">{project.solution}</dd></div>
          <div><dt className="mb-2 text-sm font-semibold">Outcome</dt><dd className="leading-7 text-muted">{project.result}</dd></div>
        </dl>
        <ul aria-label="Capabilities" className="mt-8 flex flex-wrap gap-2">{project.capabilities.map((item) => <li key={item} className="rounded-md border bg-white px-3 py-2 text-xs font-medium">{item}</li>)}</ul>
      </div>
      <div className={index % 2 ? "lg:order-1" : ""}><ProjectVisual image={project.image} /></div>
    </article>
  );
}
