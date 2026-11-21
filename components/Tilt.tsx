"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";

type TiltProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxTilt?: number;
  scale?: number;
};

/**
 * Mouse-driven 3D tilt wrapper.
 * Falls back to a flat card on touch devices (no hover capability).
 */
export default function Tilt({
  children,
  className,
  style,
  maxTilt = 10,
  scale = 1.02,
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 2 * maxTilt;
    const rotateX = (0.5 - y) * 2 * maxTilt;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale})`;
      card.style.setProperty("--glare-x", `${(x * 100).toFixed(1)}%`);
      card.style.setProperty("--glare-y", `${(y * 100).toFixed(1)}%`);
      card.style.setProperty("--glare-o", "1");
    });
  };

  const handleEnter = () => {
    const card = ref.current;
    if (card) card.style.transition = "transform 120ms ease";
  };

  const handleLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transition = "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)";
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.setProperty("--glare-o", "0");
  };

  return (
    <div
      ref={ref}
      className={className ? `tilt ${className}` : "tilt"}
      style={style}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
      <span aria-hidden="true" className="tilt-glare" />
    </div>
  );
}
