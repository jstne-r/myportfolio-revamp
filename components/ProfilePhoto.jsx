// Picks which hover effect the profile photo uses, based on
// data/content.js -> profile.photoEffect ("cycle" or "fanout").
// To add a new effect: create it in components/photo-effects/,
// import it here, and add it to the `effects` list.

import { profile } from "@/data/content";
import CycleEffect from "./photo-effects/CycleEffect";
import FanOutEffect from "./photo-effects/FanOutEffect";

const effects = {
  cycle: CycleEffect,
  fanout: FanOutEffect,
};

export default function ProfilePhoto() {
  const Effect = effects[profile.photoEffect] ?? CycleEffect;
  return <Effect photo={profile.photo} poses={profile.poses} alt={`Photo of ${profile.name}`} />;
}
