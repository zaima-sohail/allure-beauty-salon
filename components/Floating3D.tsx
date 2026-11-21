"use client";

import { useEffect, useRef } from "react";

/**
 * A CSS-3D floating composition of gold orbs, rings and shards.
 * Reacts to mouse position for a parallax 3D feel, and gently
 * floats forever on its own. Pure CSS/JS — no WebGL needed.
 */
export default function Floating3D() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = ref.current;
    if (!scene) return;
    if (window.matchMedia("(hover: none)").matches) return; // skip on touch

    let frame = 0;
    const onMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        scene.style.setProperty("--mouse-x", x.toFixed(3));
        scene.style.setProperty("--mouse-y", y.toFixed(3));
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="scene3d" aria-hidden="true">
      <div className="scene3d-inner">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
        <span className="ring ring-1" />
        <span className="ring ring-2" />
        <span className="shard shard-1" />
        <span className="shard shard-2" />
        <span className="sparkle s1">✦</span>
        <span className="sparkle s2">✦</span>
        <span className="sparkle s3">✧</span>
      </div>
    </div>
  );
}
