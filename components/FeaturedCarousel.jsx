"use client";

// "Featured works" carousel on the homepage.
// - Arrows on the left and right edges of the cards (they loop around)
// - Dots underneath show which slide you're on
// - Phones and trackpads can swipe
// Shows 2 cards at a time on wider screens and 1 on phones (see globals.css).
// Which projects appear is set in data/content.js -> featuredWorks.

import { useCallback, useEffect, useRef, useState } from "react";
import WorkCard from "./WorkCard";
import Icon from "./Icon";

export default function FeaturedCarousel({ works }) {
  const track = useRef(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  // Width of one card plus the gap between cards
  const stepSize = () => {
    const el = track.current;
    const first = el?.firstElementChild;
    if (!first) return 1;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    return first.offsetWidth + gap;
  };

  const measure = useCallback(() => {
    const el = track.current;
    if (!el || !el.firstElementChild) return;
    const perView = Math.max(1, Math.round(el.clientWidth / stepSize()));
    setPageCount(Math.max(1, works.length - perView + 1));
    setPage(Math.round(el.scrollLeft / stepSize()));
  }, [works.length]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  function goTo(i) {
    const target = (i + pageCount) % pageCount; // loop around
    track.current.scrollTo({ left: target * stepSize(), behavior: "smooth" });
  }

  const showArrows = pageCount > 1;

  return (
    <div className="carousel">
      <div className="carousel-viewport">
        {showArrows && (
          <button
            type="button"
            className="carousel-arrow carousel-arrow-left"
            onClick={() => goTo(page - 1)}
            aria-label="Previous featured work"
          >
            <Icon name="chevronLeft" size={22} />
          </button>
        )}

        <ul className="carousel-track" ref={track} onScroll={measure}>
          {works.map((w) => (
            <li key={w.slug} className="carousel-item">
              <WorkCard work={w} />
            </li>
          ))}
        </ul>

        {showArrows && (
          <button
            type="button"
            className="carousel-arrow carousel-arrow-right"
            onClick={() => goTo(page + 1)}
            aria-label="Next featured work"
          >
            <Icon name="chevronRight" size={22} />
          </button>
        )}
      </div>

      {showArrows && (
        <div className="carousel-dots" aria-hidden="true">
          {Array.from({ length: pageCount }, (_, i) => (
            <span key={i} className={`carousel-dot${i === page ? " is-active" : ""}`} />
          ))}
        </div>
      )}
    </div>
  );
}
