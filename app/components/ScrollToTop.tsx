"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 left-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#1F5132] text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[#184228]"
    >
      <ChevronUp size={28} />
    </button>
  );
}