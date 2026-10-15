"use client";

// Homepage headline: "Hi there! (waving hand) I'm" + typed name.
// The hand waves once on load and again whenever the greeting is
// hovered or tapped. Text lives in data/content.js -> profile.

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/content";
import Icon from "./Icon";

const TYPE_SPEED_MS = 85; // lower = faster typing

export default function Greeting() {
  const [typed, setTyped] = useState("");
  const [waving, setWaving] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setTyped(profile.name);
      return;
    }

    setWaving(true);
    let i = 0;
    timer.current = setInterval(() => {
      i += 1;
      setTyped(profile.name.slice(0, i));
      if (i >= profile.name.length) clearInterval(timer.current);
    }, TYPE_SPEED_MS);

    return () => clearInterval(timer.current);
  }, []);

  // Start a wave only if one isn't already playing, so it never stutters.
  const wave = () => setWaving(true);

  return (
    <div className="greeting">
      <p className="greeting-line" onMouseEnter={wave} onClick={wave}>
        {profile.greeting}{" "}
        <span
          className={`wave${waving ? " is-waving" : ""}`}
          onAnimationEnd={() => setWaving(false)}
          aria-hidden="true"
        >
          <Icon name="hand" size={18} />
        </span>{" "}
        {profile.greetingEnd}
      </p>
      <h1 className="hero-name">
        {/* Screen readers and search engines get the full name right away */}
        <span className="sr-only">{profile.name}</span>
        <span aria-hidden="true">
          {typed}
          <span className="caret" />
        </span>
      </h1>
    </div>
  );
}
