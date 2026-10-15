"use client";

// Top bar of every page.
// Left:  live clock in your time zone. On the homepage it's display-only;
//        on every other page it doubles as the "home" button.
// Right: caption + light/dark toggle.
// Text for both lives in data/content.js -> navbar.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navbar } from "@/data/content";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";

function getClock(date) {
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: navbar.timeZone,
    hour: "numeric",
    minute: "2-digit",
  }).format(date);

  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: navbar.timeZone,
      hour: "numeric",
      hourCycle: "h23",
    }).format(date)
  );

  const status =
    navbar.statuses.find((s) => hour >= s.from && hour < s.to) ?? navbar.statuses[0];

  return { time, status };
}

export default function Navbar() {
  // The time is only known in the browser, so it starts empty to avoid
  // a mismatch between the server-rendered page and the browser.
  const [clock, setClock] = useState(null);
  const isHome = usePathname() === "/";

  useEffect(() => {
    const update = () => setClock(getClock(new Date()));
    update();
    const timer = setInterval(update, 30_000);
    return () => clearInterval(timer);
  }, []);

  const clockContent = (
    <>
      <span className="nav-clock-time">
        <Icon name={clock ? clock.status.icon : "home"} size={16} />
        {clock ? `${clock.time} in ${navbar.cityLabel}` : navbar.cityLabel}
      </span>
      <span className="nav-clock-sub">
        <span className="nav-clock-status">{clock ? clock.status.text : "\u00a0"}</span>
        {!isHome && (
          <span className="nav-clock-home">
            <Icon name="arrowLeft" size={13} /> {navbar.homeHint}
          </span>
        )}
      </span>
    </>
  );

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {isHome ? (
          <div className="nav-clock is-static">{clockContent}</div>
        ) : (
          <Link href="/" className="nav-clock" aria-label={`Home. Current time in ${navbar.cityLabel}`}>
            {clockContent}
          </Link>
        )}

        <ThemeToggle />
      </div>
    </header>
  );
}
