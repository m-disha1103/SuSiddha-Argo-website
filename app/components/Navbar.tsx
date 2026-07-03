"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Product", href: "#product" },
    { name: "Benefits", href: "#benefits" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-x-0 top-0 z-50 px-4"
    >
      <div
        className={`mx-auto mt-5 max-w-7xl overflow-hidden rounded-full border transition-all duration-500 ${
          scrolled
            ? "border-[#d6c17d]/50 bg-[#fffdf7]/75 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-3xl"
            : "border-white/30 bg-white/45 backdrop-blur-2xl"
        }`}
      >
        <div className="flex items-center justify-between px-7 py-4">

          {/* Logo */}

          <a
            href="#home"
            className="group flex items-center gap-4"
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-[#d6c17d]/25 blur-xl transition-all duration-500 group-hover:scale-125" />

              <Image
                src="/images/logo.png"
                alt="SuSiddha Logo"
                width={58}
                height={58}
                className="relative rounded-full transition-all duration-500 group-hover:rotate-6 group-hover:scale-105"
              />

            </div>

            <div>

              <h2 className="text-[24px] font-bold tracking-wide text-[#17412C]">
                SuSiddha
              </h2>

              <div className="flex items-center gap-2">

                <span className="h-px w-6 bg-[#c8a34d]" />

                <p className="text-[10px] uppercase tracking-[0.45em] text-[#b8932f]">
                  Agro Products
                </p>

              </div>

            </div>

          </a>

          {/* Desktop */}

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative overflow-hidden text-[15px] font-medium tracking-wide text-[#20492f] transition-colors duration-300 hover:text-[#b8932f]"
              >
                {link.name}

                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#c8a34d] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right */}

          <div className="hidden lg:flex items-center gap-7">

            <div className="text-right">

              <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
                Call Anytime
              </p>

              <a
                href="tel:+918953565330"
                className="font-semibold text-[#17412C] transition hover:text-[#b8932f]"
              >
                +91 89535 65330
              </a>

            </div>

            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full border border-[#c8a34d] bg-[#17412C] px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(23,65,44,0.25)]"
            >
              <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#d9bf6b] to-[#b8932f] transition-transform duration-500 group-hover:translate-y-0" />

              <span className="relative group-hover:text-[#17412C]">
                Enquire Now
              </span>
            </a>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-[#d8c57d]/40 bg-white/60 p-2 backdrop-blur-xl transition hover:bg-white lg:hidden"
          >
            {open ? (
              <X className="text-[#17412C]" size={26} />
            ) : (
              <Menu className="text-[#17412C]" size={26} />
            )}
          </button>
        </div>

        <AnimatePresence>

          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="border-t border-[#e7ddba] bg-[#fffdf8]/95 backdrop-blur-xl lg:hidden"
            >
              <div className="space-y-5 px-7 py-7">

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg font-medium text-[#17412C] transition hover:translate-x-2 hover:text-[#b8932f]"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 block rounded-full border border-[#c8a34d] bg-[#17412C] py-3 text-center font-semibold text-white transition hover:bg-[#215538]"
                >
                  Enquire Now
                </a>

              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </motion.header>
  );
}