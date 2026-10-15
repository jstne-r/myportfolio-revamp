"use client";

// Shared behavior for both photo effects:
// - mouse: active while hovering
// - touch or keyboard: tap / Enter turns it on and off

import { useRef, useState } from "react";

export default function useHoverToggle() {
  const [active, setActive] = useState(false);
  const lastPointer = useRef("");

  return {
    active,
    handlers: {
      onPointerDown: (e) => {
        lastPointer.current = e.pointerType;
      },
      onPointerEnter: (e) => {
        if (e.pointerType === "mouse") setActive(true);
      },
      onPointerLeave: (e) => {
        if (e.pointerType === "mouse") setActive(false);
      },
      onClick: () => {
        if (lastPointer.current !== "mouse") setActive((a) => !a);
        lastPointer.current = "";
      },
    },
  };
}
