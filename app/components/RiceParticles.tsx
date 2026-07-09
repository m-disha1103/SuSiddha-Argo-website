"use client";

import { useMemo } from "react";

export default function RiceParticles() {
  const grains = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        rotate: Math.random() * 360,
        delay: `${i * 0.5}s`,
        opacity: 0.25 + Math.random() * 0.35,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block overflow-hidden">
      {grains.map((grain) => (
        <span
          key={grain.id}
          className="absolute h-[4px] w-[10px] rounded-full bg-[#F7E7AE] animate-pulse"
          style={{
            left: grain.left,
            top: grain.top,
            transform: `rotate(${grain.rotate}deg)`,
            animationDelay: grain.delay,
            opacity: grain.opacity,
            animationDuration: "6s",
          }}
        />
      ))}
    </div>
  );
}