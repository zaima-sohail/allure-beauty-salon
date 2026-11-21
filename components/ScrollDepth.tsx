"use client";

import { useEffect, useRef } from "react";

/**
 * Adds a scroll-driven depth (translateZ / translateY) effect to any
 * element with the `data-depth` attribute. Element rises slightly
 * and scales as it enters the viewport — a layered 3D feel without WebGL.
 */
export default function ScrollDepth() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-depth]")
    );
    if (!targets.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onScroll = () => {
      const viewportHeight = window.innerHeight;
      for (const el of targets) {
        const strength = Number(el.dataset.depth || 20);
        const rect = el.getBoundingClientRect();
        const progress = 1 - rect.top / viewportHeight; // 0 below, ~1 at top
        if (rect.bottom < -200 || rect.top > viewportHeight + 200) continue;
        const clamped = Math.min(Math.max(progress, 0), 1.4);
        const shift = (1.4 - clamped) * strength;
        el.style.transform = `perspective(1200px) translate3d(0, ${shift.toFixed(1)}px, 0)`;
        el.style.willChange = "transform";
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
