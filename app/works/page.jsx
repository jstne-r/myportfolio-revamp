// Works page: all projects grouped into sections.
// Projects and section order come from data/content.js.

import Breadcrumbs from "@/components/Breadcrumbs";
import WorkCard from "@/components/WorkCard";
import { works, workSections } from "@/data/content";

export const metadata = {
  title: "Works",
};

export default function WorksPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Works" }]} />
      <h1 className="page-title reveal">Works</h1>

      {workSections.map((section, i) => {
        const items = works.filter((w) => w.section === section);
        if (items.length === 0) return null;
        return (
          <section key={section} className="section reveal" style={{ "--d": i + 1 }} aria-label={section}>
            {i > 0 && <h2>{section}</h2>}
            <div className="card-grid">
              {items.map((w) => (
                <WorkCard key={w.slug} work={w} />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
