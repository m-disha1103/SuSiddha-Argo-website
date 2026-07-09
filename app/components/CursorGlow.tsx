"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    let raf = 0;

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        glow.style.transform = `translate3d(${e.clientX - 110}px, ${
          e.clientY - 110
        }px, 0)`;
      });
    };

    window.addEventListener("mousemove", move, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[1]
        hidden
        xl:block
        h-[220px]
        w-[220px]
        rounded-full
        bg-[#D4AF37]/8
        blur-[70px]
        will-change-transform
      "
    />
  );
}