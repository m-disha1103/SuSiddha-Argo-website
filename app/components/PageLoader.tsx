"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FFFDF7]">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#B8860B] border-t-[#1F5132]" />
    </div>
  );
}