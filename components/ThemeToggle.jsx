"use client";

// Light/dark mode button with the caption next to it.
// The visitor's choice is remembered in their browser.
// The first visit follows their device setting (see app/layout.jsx).

import { useEffect, useState } from "react";
import { navbar } from "@/data/content";
import Icon from "./Icon";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked (private mode); the toggle still works.
    }
    setTheme(next);
  }

  const isDark = theme === "dark";
  const caption = isDark ? navbar.themeCaptions.dark : navbar.themeCaptions.light;

  return (
    <div className="theme-toggle">
      {/* key makes the caption fade in again whenever it changes */}
      <span key={caption} className="theme-caption" aria-hidden="true">
        {theme ? caption : ""}
      </span>
      <button
        type="button"
        className="theme-button"
        onClick={toggle}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <Icon name={isDark ? "sun" : "moon"} size={18} />
      </button>
    </div>
  );
}
