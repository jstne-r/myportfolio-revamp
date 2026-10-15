"use client";

// Photo effect: "cycle"
// While hovered, the profile photo flips through the pose photos like a
// flipbook, then returns to the main photo.
// Turn it on in data/content.js -> profile.photoEffect = "cycle"

import { useEffect, useState } from "react";
import useHoverToggle from "./useHoverToggle";

const FLIP_SPEED_MS = 450; // time each pose stays on screen

export default function CycleEffect({ photo, poses, alt }) {
  const { active, handlers } = useHoverToggle();
  const [index, setIndex] = useState(-1); // -1 = main photo

  useEffect(() => {
    if (!active || poses.length === 0) {
      setIndex(-1);
      return;
    }
    setIndex(0);
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % poses.length);
    }, FLIP_SPEED_MS);
    return () => clearInterval(timer);
  }, [active, poses.length]);

  return (
    <button
      type="button"
      className="profile-photo cycle"
      aria-label="Show more photos of Justine"
      aria-pressed={active}
      {...handlers}
    >
      <img
        src={photo}
        alt={alt}
        className={`profile-layer${index === -1 ? " is-visible" : ""}`}
        width="200"
        height="200"
      />
      {poses.map((pose, i) => (
        <img
          key={pose.src}
          src={pose.src}
          alt=""
          className={`profile-layer${index === i ? " is-visible" : ""}`}
          width="200"
          height="200"
          loading="lazy"
        />
      ))}
    </button>
  );
}
