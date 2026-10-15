// Project page at /works/<slug>. One page is generated for every
// project in data/content.js -> works.

import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Gallery from "@/components/Gallery";
import Icon from "@/components/Icon";
import { works, getWork } from "@/data/content";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  return { title: work.title, description: work.summary };
}

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  return (
    <article>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Works", href: "/works" },
          { label: work.title },
        ]}
      />

      <header className="reveal">
        <h1 className="page-title">
          {work.title} <span className="year-badge">{work.year}</span>
        </h1>
        <p className="work-description">{work.description}</p>

        <dl className="work-meta">
          {work.website && (
            <div>
              <dt>Website</dt>
              <dd>
                <a href={work.website.href} target="_blank" rel="noopener noreferrer">
                  {work.website.label} <Icon name="external" size={14} />
                </a>
              </dd>
            </div>
          )}
          <div>
            <dt>{work.detailLabel}</dt>
            <dd>{work.details}</dd>
          </div>
        </dl>
      </header>

      <div className="reveal" style={{ "--d": 1 }}>
        <Gallery images={work.images} title={work.title} />
      </div>
    </article>
  );
}
