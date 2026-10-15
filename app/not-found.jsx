import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="page-title">This page doesn't exist</h1>
      <p>The link may be old or mistyped. Head back to the homepage or browse all works.</p>
      <div className="hero-buttons">
        <Link href="/" className="pill pill-primary">Go to homepage</Link>
        <Link href="/works" className="pill">See all works</Link>
      </div>
    </div>
  );
}
