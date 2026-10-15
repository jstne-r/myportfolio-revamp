// Link that stays on the site for paths starting with "/",
// and opens everything else in a new tab.

import Link from "next/link";

export default function SmartLink({ href, children, ...props }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
