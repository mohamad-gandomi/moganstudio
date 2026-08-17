import { projects } from "@/data/projects";
import { CaseStudy } from "./case-study";
import { SectionHeading } from "./section-heading";

export function SelectedWork() {
  return (
    <section id="work" className="section-space scroll-mt-20">
      <div className="shell">
        <SectionHeading eyebrow="Selected Work" title={<>Purpose-built digital products. <span className="font-serif font-normal italic">Thoughtfully</span> executed.</>} copy="Three independent builds demonstrating how I solve ecommerce, content management, and application interface challenges from strategy through implementation." />
        {projects.map((project, index) => <CaseStudy key={project.title} project={project} index={index} />)}
      </div>
    </section>
  );
}
