"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[1] hidden lg:block h-[260px] w-[260px] rounded-full bg-[#D4AF37]/10 blur-[90px] transition-all duration-300"
      style={{
        left: position.x - 130,
        top: position.y - 130,
      }}
    />
  );
}