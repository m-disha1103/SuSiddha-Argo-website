"use client";

import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F5132] via-[#285F3D] to-[#1F5132]" />

      {/* Gold Glow */}
      <div className="absolute -left-24 top-10 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-white/10 blur-[160px]" />

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.06),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 px-8 py-16 backdrop-blur-xl shadow-[0_35px_90px_rgba(0,0,0,.25)]">

            <div className="mx-auto max-w-4xl text-center">

              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-[#D4AF37]" />

                <p className="uppercase tracking-[5px] font-semibold text-[#D4AF37]">
                  Ready To Experience
                </p>

                <div className="h-px w-16 bg-[#D4AF37]" />
              </div>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">
                Bring Home The Goodness Of
                <span className="block text-[#D4AF37]">
                  Premium Unpolished Rice
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80">
                Carefully sourced from trusted farms and naturally processed to
                preserve nutrition, aroma and authentic taste. Experience
                healthier meals with every serving of SuSiddha Unpolished Sona
                Masuri Rice.
              </p>

              <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

                <a
                  href="#contact"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-10 py-4 font-semibold text-white shadow-[0_15px_40px_rgba(212,175,55,.35)] transition duration-500 hover:-translate-y-1"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                  <span className="relative z-10">
                    Contact Us
                  </span>
                </a>

                <a
                  href="#product"
                  className="rounded-full border border-white/20 bg-white/10 px-10 py-4 font-semibold text-white backdrop-blur-xl transition duration-500 hover:bg-white hover:text-[#1F5132]"
                >
                  Explore Products
                </a>

              </div>

            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}