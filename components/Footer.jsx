import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} {site.name}. All rights reserved.
    </footer>
  );
}
