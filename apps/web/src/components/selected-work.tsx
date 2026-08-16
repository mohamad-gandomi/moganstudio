import { projects } from "@/data/projects";
import { CaseStudy } from "./case-study";
import { SectionHeading } from "./section-heading";

export function SelectedWork() {
  return (
    <section id="work" className="section-space scroll-mt-20">
      <div className="shell">
        <SectionHeading eyebrow="Selected Work" title={<>Detailed concepts. <span className="font-serif font-normal italic">Honest</span> presentation.</>} copy="Three self-initiated projects showing how I approach ecommerce, content systems, and application interfaces. These are concept projects, not client commissions." />
        {projects.map((project, index) => <CaseStudy key={project.title} project={project} index={index} />)}
      </div>
    </section>
  );
}
