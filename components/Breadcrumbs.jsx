// Trail at the top of inner pages, e.g. Home › Works › Bank Expo.
// Pass items like [{ label: "Home", href: "/" }, { label: "Works" }].
// The last item is the current page and isn't a link.

import Link from "next/link";
import Icon from "./Icon";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label}>
              {isLast ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href}>
                  {i === 0 && <Icon name="home" size={14} />}
                  {item.label}
                </Link>
              )}
              {!isLast && <span className="breadcrumb-sep" aria-hidden="true">›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
