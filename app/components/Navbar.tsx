"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Product", href: "#product" },
    { name: "Benefits", href: "#benefits" },
    { name: "Contact", href: "#contact" },
  ];

  // Navbar shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = links.map((l) =>
        document.querySelector(l.href)
      );

      const scroll = window.scrollY + 180;

      sections.forEach((section, index) => {
        if (!section) return;

        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;

        if (scroll >= top && scroll < top + height) {
          setActive(links[index].href.replace("#", ""));
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Close menu outside click
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () =>
      document.removeEventListener("mousedown", close);
  }, []);
  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex justify-center px-3 pt-4">
      <div
        ref={menuRef}
        className={`
        relative
        flex
        items-center
        justify-between
        w-full
        max-w-7xl
        rounded-full
        border
        border-white/40
        backdrop-blur-3xl
        transition-all
        duration-500
        overflow-visible
        ${
          scrolled
            ? "py-3 px-5 bg-white/75 shadow-[0_25px_80px_rgba(31,81,50,0.18)]"
            : "py-4 px-6 bg-white/55 shadow-[0_20px_70px_rgba(31,81,50,0.12)]"
        }
      `}
      >
        {/* Reflection */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-[-35%] h-full w-[30%] rotate-12 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-2xl animate-pulse" />
        {/* Gold Ring */}
        <div className="absolute inset-0 rounded-full ring-1 ring-[#D4AF37]/15 pointer-events-none" />
        {/* LOGO */}
        <a
          href="#home"
          className="relative z-20 flex items-center gap-3"
        >
          <div className="relative h-11 w-11 overflow-visible rounded-full border border-[#D4AF37]/30 bg-white shadow-lg transition duration-500 hover:rotate-6 hover:scale-110">
            <Image
              src="/images/logo.png"
              alt="logo"
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="hidden sm:block">
            <h2 className="font-semibold text-[#18442D]">
              SuSiddha
            </h2>
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#B8860B]">
              Agro Products
            </p>
          </div>
        </a>
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-9">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`group relative transition-all duration-300 font-medium
              ${
                active === link.href.replace("#", "")
                  ? "text-[#18442D]"
                  : "text-gray-600 hover:text-[#18442D]"
              }
            `}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-[#D4AF37] transition-all duration-300

                ${
                  active === link.href.replace("#", "")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }
              `}
              />
            </a>
          ))}
        </div>
        {/* CTA */}
        <a
          href="#contact"
          className="group hidden lg:flex relative overflow-visible rounded-full bg-gradient-to-r from-[#18442D] to-[#2D6A4F] px-7 py-3 text-sm font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
        >
          {/* Gold Shine */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

          <span className="relative z-10">
            Enquire →
          </span>
        </a>
        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden z-[9999] text-[#1F5132]"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Mobile Menu */}
        <div
          className={`absolute z-[999] left-1/2 top-full mt-3 w-[94%] -translate-x-1/2 rounded-3xl border border-white/50 bg-white/75 backdrop-blur-3xl backdrop-saturate-150 shadow-2xl transition-all duration-500 lg:hidden

          ${
            menuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-5"
          }
        `}
        >
          <div className="flex flex-col p-8 gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg transition

                ${
                  active === link.href.replace("#", "")
                    ? "text-[#18442D] font-semibold"
                    : "text-gray-600"
                }
              `}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-[#18442D] py-4 text-center text-white font-semibold"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}