"use client";

// Screenshot grid on project pages. Clicking an image opens the
// enlarge viewer. Inside the viewer:
//   arrows / buttons -> previous and next image
//   Esc / X / clicking outside the image -> close
// Tall screenshots (full web pages) can be scrolled inside the viewer.
// The viewer is placed directly in <body> so it always covers the whole screen.

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Icon from "./Icon";

export default function Gallery({ images, title }) {
  const [open, setOpen] = useState(null); // index of the open image, or null
  const closeButton = useRef(null);
  const lastTrigger = useRef(null);

  const close = useCallback(() => {
    setOpen(null);
    lastTrigger.current?.focus();
  }, []);

  const step = useCallback(
    (dir) => setOpen((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    closeButton.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <>
      <ul className="gallery">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              className="gallery-item"
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setOpen(i);
              }}
              aria-label={`Enlarge: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="gallery-zoom" aria-hidden="true">
                <Icon name="zoom" size={18} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open !== null &&
        createPortal(
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} images`}
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <div className="lightbox-bar">
              <span>
                {open + 1} / {images.length}
              </span>
              <button ref={closeButton} type="button" className="lightbox-button" onClick={close} aria-label="Close">
                <Icon name="x" size={20} />
              </button>
            </div>

            <div
              className="lightbox-stage"
              onClick={(e) => {
                if (e.target === e.currentTarget) close();
              }}
            >
              <img key={images[open].src} src={images[open].src} alt={images[open].alt} className="lightbox-image" />
            </div>

            {images.length > 1 && (
              <div className="lightbox-nav">
                <button type="button" className="lightbox-button" onClick={() => step(-1)} aria-label="Previous image">
                  <Icon name="chevronLeft" size={20} />
                </button>
                <button type="button" className="lightbox-button" onClick={() => step(1)} aria-label="Next image">
                  <Icon name="chevronRight" size={20} />
                </button>
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
}
