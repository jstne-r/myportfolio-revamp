"use client";

// Photo effect: "fanout"
// While hovered, the pose photos slide out from behind the profile photo
// like a spread of Polaroids, then tuck back in.
// Turn it on in data/content.js -> profile.photoEffect = "fanout"

import useHoverToggle from "./useHoverToggle";

const SPREAD_X = 190; // total horizontal spread of the cards, in px
const DROP_Y = 92; // how far below the photo the cards land, in px
const TILT = 15; // max tilt of the outer cards, in degrees

function cardPosition(i, count) {
  const t = count === 1 ? 0 : i / (count - 1) - 0.5; // -0.5 .. 0.5
  return {
    "--x": `${Math.round(t * SPREAD_X)}px`,
    "--y": `${Math.round(DROP_Y - Math.abs(t) * 24)}px`,
    "--r": `${Math.round(t * 2 * TILT)}deg`,
    "--delay": `${i * 40}ms`,
  };
}

export default function FanOutEffect({ photo, poses, alt }) {
  const { active, handlers } = useHoverToggle();

  return (
    <button
      type="button"
      className={`profile-photo fanout${active ? " is-open" : ""}`}
      aria-label="Show more photos of Justine"
      aria-pressed={active}
      {...handlers}
    >
      {poses.map((pose, i) => (
        <img
          key={pose.src}
          src={pose.src}
          alt=""
          className="fan-card"
          style={cardPosition(i, poses.length)}
          width="120"
          height="120"
          loading="lazy"
        />
      ))}
      <img src={photo} alt={alt} className="profile-main" width="200" height="200" />
    </button>
  );
}
