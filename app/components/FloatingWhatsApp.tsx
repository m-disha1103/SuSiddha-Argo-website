"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918953565330?text=Hello%20SuSiddha%20Agro%20Products"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110"
    >
      <MessageCircle size={30} strokeWidth={2.5} />
    </a>
  );
}