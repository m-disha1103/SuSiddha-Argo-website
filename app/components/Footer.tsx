import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#123524] via-[#17462E] to-[#0E2A1D] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#1F5132]/40 blur-[140px]" />

        <img
          src="/images/wheat-left.png"
          alt=""
          className="absolute left-0 top-10 w-72 opacity-[0.05]"
        />

        <img
          src="/images/wheat-right.png"
          alt=""
          className="absolute right-0 bottom-0 w-72 rotate-180 opacity-[0.05]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="flex items-center justify-center gap-4 sm:justify-start">
              <div className="rounded-full bg-white/10 p-2 backdrop-blur-xl border border-white/10">
                <Image
                  src="/images/logo.png"
                  alt="SuSiddha Logo"
                  width={62}
                  height={62}
                  className="rounded-full"
                />
              </div>

              <div className="text-center sm:text-left">
                <h2 className="text-3xl font-bold tracking-wide">
                  SuSiddha
                </h2>

                <p className="mt-1 text-xs uppercase tracking-[6px] text-[#D4AF37]">
                  Agro Products
                </p>
              </div>
            </div>

            <div className="mt-7 h-[2px] w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />

            <p className="mt-7 text-center leading-8 text-white/75 sm:text-left">
              Delivering premium unpolished Sona Masuri rice with authentic
              taste, natural nutrition and unmatched quality directly from
              trusted Indian farms.
            </p>

            <div className="mt-8 flex justify-center gap-4 sm:justify-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-white/10 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-[#D4AF37]">
                🌾
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-white/10 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-[#D4AF37]">
                🌱
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-white/10 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-[#D4AF37]">
                🌿
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-center text-2xl font-bold md:text-left">
              Quick Links
            </h3>

            <div className="mx-auto mt-3 h-[2px] w-16 bg-[#D4AF37] md:mx-0" />

            <ul className="mt-8 space-y-5 text-center md:text-left">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Product", "#product"],
                ["Benefits", "#benefits"],
                ["Contact", "#contact"],
              ].map(([title, href]) => (
                <li key={title}>
                  <a
                    href={href}
                    className="group flex items-center justify-between text-white/75 transition duration-300 hover:text-[#D4AF37]"
                  >
                    {title}

                    <ArrowUpRight
                      size={17}
                      className="opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-center text-2xl font-bold md:text-left">
              Contact
            </h3>

            <div className="mx-auto mt-3 h-[2px] w-16 bg-[#D4AF37] md:mx-0" />

            <div className="mt-8 space-y-5">
              <a
                href="tel:+918953565330"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-500 hover:border-[#D4AF37]/30 hover:bg-white/10"
              >
                <div className="rounded-xl bg-[#D4AF37] p-3 text-[#123524]">
                  <Phone size={20} />
                </div>

                <span className="break-all text-sm text-white/80 sm:text-base group-hover:text-white">
                  +91 89535 65330
                </span>
              </a>

              <a
                href="mailto:susiddhaagro@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-500 hover:border-[#D4AF37]/30 hover:bg-white/10"
              >
                <div className="rounded-xl bg-[#D4AF37] p-3 text-[#123524]">
                  <Mail size={20} />
                </div>

                <span className="break-all text-sm text-white/80 sm:text-base group-hover:text-white">
                  susiddhaagro@gmail.com
                </span>
              </a>

              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="rounded-xl bg-[#D4AF37] p-3 text-[#123524] h-fit">
                  <MapPin size={20} />
                </div>

                <p className="leading-7 text-white/80">
                  Plot No.16,
                  <br />
                  Mini Industrial Area,
                  <br />
                  Mathuranagar,
                  <br />
                  Anandnagar,
                  <br />
                  District Maharajganj,
                  <br />
                  Uttar Pradesh, India.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div>
            <div className="rounded-[34px] border border-white/10 bg-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl">
              <p className="uppercase tracking-[4px] text-sm font-semibold text-[#D4AF37]">
                SuSiddha Promise
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                Premium Quality
                <br />
                From Farm
                <br />
                To Family
              </h3>

              <p className="mt-6 leading-8 text-white/75">
                Every grain is carefully selected and naturally processed to
                preserve nutrition, aroma and authentic traditional taste.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
                <div className="rounded-2xl bg-white/10 px-2 py-4 text-center">
                  <h4 className="text-xl font-bold text-[#D4AF37]">
                    100%
                  </h4>

                  <p className="mt-1 text-xs text-white/70">
                    Natural
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 px-2 py-4 text-center">
                  <h4 className="text-xl font-bold text-[#D4AF37]">
                    Low GI
                  </h4>

                  <p className="mt-1 text-xs text-white/70">
                    Healthy
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 px-2 py-4 text-center">
                  <h4 className="text-xl font-bold text-[#D4AF37]">
                    Fiber
                  </h4>

                  <p className="mt-1 text-xs text-white/70">
                    Rich
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <p className="text-white/60">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-[#D4AF37]">
                SuSiddha Agro Products
              </span>
              . All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-center text-sm text-white/50">
              <span>Premium Quality</span>

              <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />

              <span>Natural Nutrition</span>

              <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />

              <span>Traditional Processing</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}