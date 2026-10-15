// Project card used on the homepage (featured works) and the Works page.

import Link from "next/link";

export default function WorkCard({ work }) {
  return (
    <Link href={`/works/${work.slug}`} className="work-card">
      <img src={work.thumbnail} alt="" className="work-card-image" width="720" height="400" loading="lazy" />
      <span className="work-card-body">
        <span className="work-card-title">{work.title}</span>
        <span className="work-card-summary">{work.summary}</span>
      </span>
    </Link>
  );
}
