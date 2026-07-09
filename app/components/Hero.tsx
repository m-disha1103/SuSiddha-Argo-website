import Image from "next/image";
import FadeIn from "./FadeIn";
import PremiumDecor from "./PremiumDecor";
import RiceParticles from "./RiceParticles";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FBF8F1] px-5 sm:px-6 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20"
    >
      {/* 🌫️ Grain Texture Overlay */}
      <div className="pointer-events-none absolute inset-0 hidden md:block opacity-[0.05] mix-blend-multiply bg-[url('/images/rice-grain.png')]" />
      
      {/* ✨ Premium Soft Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[#D4AF37]/20 blur-[130px]" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-[#1F5132]/10 blur-[140px]" />
        <div className="absolute bottom-[-150px] right-[-120px] h-[650px] w-[650px] rounded-full bg-[#1F5132]/15 blur-[130px]" />
        <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_35%)]"/>
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_80%_70%,rgba(31,81,50,0.08),transparent_40%)]"/>
        </div>
        <PremiumDecor />
        <RiceParticles />
        <div className="absolute left-14 top-40 hidden xl:block h-32 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/60 to-transparent"/>
        <div className="absolute right-16 bottom-40 hidden xl:block h-32 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/60 to-transparent"/>
        <div className="absolute top-24 left-28 hidden xl:block h-px w-28 bg-gradient-to-r from-[#D4AF37]/60 to-transparent"/>
        <div className="absolute bottom-24 right-28 hidden xl:block h-px w-28 bg-gradient-to-l from-[#D4AF37]/60 to-transparent"/>
      </div>

      {/* Luxury Light Rays */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-40 top-20 h-[900px] w-[220px] rotate-[-28deg]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.55), transparent)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute right-0 top-0 h-[900px] w-[180px] rotate-[28deg]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)",
            filter: "blur(55px)",
          }}
        />
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* LEFT CONTENT */}
        <FadeIn>
          <div className="max-w-2xl">

            {/* Tag */}
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D4AF37]/25 bg-white/60 text-xs tracking-[0.3em] uppercase text-[#1F5132] backdrop-blur shadow-[0_0_35px_rgba(212,175,55,0.15)]">
              🌾 Est. 2025 • Premium Rice
            </span>

            {/* Title */}
            <h1 className="mt-6 text-4xl leading-[1.08] sm:text-5xl md:text-7xl lg:text-8xl font-semibold drop-shadow-[0_10px_25px_rgba(255,255,255,0.5)]">
              <span className="block bg-gradient-to-r from-[#18442D] via-[#2D6A4F] to-[#18442D] bg-clip-text text-transparent">
                Pure Rice.
              </span>
              <span className="block bg-gradient-to-r from-[#B8860B] via-[#E2C46C] to-[#B8860B] bg-clip-text text-transparent">
                Pure Tradition.
              </span>
            </h1>

            {/* Brand */}
            <h2 className="mt-5 text-xl sm:text-2xl font-medium text-gray-700">
              SuSiddha Agro Products
            </h2>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-7 sm:leading-8">
              Crafted from carefully selected Sona Masuri paddy, naturally unpolished
              to preserve authentic taste, nutrition, and everyday wellness.
            </p>
            <div className="mt-10 flex items-center gap-5">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <div className="h-3 w-3 rounded-full border border-[#D4AF37] bg-[#FFF6D6] shadow-[0_0_15px_rgba(212,175,55,0.6)]"></div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
              <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
              <div className="h-2 w-2 rounded-full bg-[#D4AF37]"></div>
              <div className="h-px flex-1 bg-gradient-to-l from-[#D4AF37] to-transparent"></div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a
                href="#contact"
                className="group w-full sm:w-auto text-center rounded-full bg-gradient-to-r from-[#18442D] to-[#2E6A48] px-8 py-4 font-semibold text-white shadow-[0_20px_45px_rgba(24,68,45,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(24,68,45,0.35)]"
              >
                Contact Us
              </a>

              <a
                href="#about"
                className="w-full sm:w-auto text-center rounded-full border border-[#D4AF37] bg-white/60 backdrop-blur-xl px-8 py-4 font-semibold text-[#B8860B] transition-all duration-500 hover:bg-[#D4AF37] hover:text-white hover:-translate-y-1"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-10">
              <div>
                <p className="text-3xl font-semibold text-[#1F5132]">100%</p>
                <p className="text-sm text-gray-500">Natural</p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-[#1F5132]">Low GI</p>
                <p className="text-sm text-gray-500">Healthy</p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-[#1F5132]">Farm</p>
                <p className="text-sm text-gray-500">Direct</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* RIGHT IMAGE */}
        <div className="absolute left-8 top-1/3 h-32 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent"></div>
        <div className="absolute right-8 bottom-1/3 h-28 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent"></div>
        <FadeIn delay={0.3}>
          <div className="relative flex justify-center items-center w-full">

            {/* premium decoration rings */}
            <div className="absolute hidden lg:block h-[520px] w-[520px] rounded-full border border-[#D4AF37]/15"></div>
            <div className="absolute hidden lg:block h-[430px] w-[430px] rounded-full border border-[#D4AF37]/10"></div>
            <div className="absolute hidden lg:block h-[350px] w-[350px] rounded-full border border-white/40"></div>

            {/* Glow */}
            <div className="absolute h-[380px] w-[380px] bg-[#D4AF37]/18 blur-[100px] rounded-full" />

            {/* Cinematic Spotlight */}
           <div
             className="absolute h-[500px] w-[500px] rounded-full"
             style={{
               background:
                 "radial-gradient(circle, rgba(255,233,170,0.35) 0%, rgba(255,233,170,0.12) 35%, transparent 75%)",
               filter: "blur(80px)",
             }}
           />
           <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 h-20 w-[380px] rounded-full bg-black/15 blur-3xl"/> 
            <div className="absolute h-[350px] w-[350px] rounded-[50px] bg-black/5 blur-3xl translate-y-14 scale-95"></div>
            {/* Product */}
            <div className="absolute h-[340px] w-[340px] rounded-full bg-[#D4AF37]/15 blur-[90px]"/>
            {/* Product Card */}
            <div className="group relative z-20 w-[280px] xs:w-[310px] sm:w-[380px] md:w-[430px] lg:w-[470px] xl:w-[500px] rounded-[42px] border border-white/60 bg-white/70 p-5 backdrop-blur-3xl shadow-[0_45px_120px_rgba(0,0,0,0.18)] transition-all duration-700 hover:-translate-y-2">
              {/* Glass Reflection */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[42px]"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(255,255,255,.45),rgba(255,255,255,.08),transparent)",
                }}
              />
              <div className="overflow-hidden rounded-[42px] border border-white/60 bg-white/70 backdrop-blur-3xl shadow-[0_45px_120px_rgba(0,0,0,0.18)] hover:shadow-[0_70px_170px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition-all duration-700">
              <div className="relative overflow-hidden rounded-[34px]">
                <Image
                src="/images/rice-advertisement.png"
                alt="Rice"
                width={1000}
                height={1200}
                priority
                className="
                rounded-[34px]
                object-cover
                transition-all
                duration-700
                group-hover:scale-105
                group-hover:rotate-[0.5deg]
                "
                />
              </div>
                <div className="absolute inset-0 rounded-[42px] bg-gradient-to-tr from-white/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-5 left-5 h-28 w-28 rounded-full bg-white/30 blur-3xl"></div>
                <div className="absolute bottom-10 right-10 h-20 w-20 rounded-full bg-[#D4AF37]/20 blur-2xl"></div>
        
                <div className="absolute inset-0 overflow-hidden rounded-[42px]">
                  <div className="absolute -left-40 top-0 h-full w-28 rotate-12 bg-white/30 blur-xl transition-all duration-[1800ms] group-hover:left-[120%]" />
                </div>
                <div className="absolute top-6 left-6 h-24 w-24 rounded-full bg-white/40 blur-2xl"></div>
                <div className="absolute bottom-10 right-10 h-16 w-16 rounded-full bg-[#D4AF37]/30 blur-xl"></div>
              </div>

              {/*floating premium badge */}
              <div className="absolute -top-5 right-3 sm:-top-6 sm:right-2 z-30 rounded-full border border-[#D4AF37]/20 bg-white/80 backdrop-blur-xl px-4 sm:px-6 py-2.5 sm:py-3 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#B8860B]">
                  PREMIUM
                </p>
                <h4 className="mt-1 text-sm font-bold text-[#18442D]">
                  100% Natural
                </h4>
                <div className="absolute left-16 top-28 h-2 w-2 rounded-full bg-[#D4AF37]/70 animate-pulse"></div>
                <div className="absolute right-20 bottom-32 h-3 w-3 rounded-full bg-white/80 animate-pulse"></div>
                <div className="absolute left-28 bottom-24 h-1.5 w-1.5 rounded-full bg-[#1F5132]/40 animate-pulse"></div>
              </div>

              <div className="hidden xl:block absolute -left-14 top-20 hidden lg:block rounded-3xl border border-white/60 ring-1 ring-[#D4AF37]/15 bg-white/70 backdrop-blur-3xl px-5 py-4 shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#B8860B]">
                    Quality
                </p>
                <h4 className="mt-1 text-lg font-bold text-[#18442D]">
                    Low GI
                </h4>
              </div>

              <div className="hidden xl:block absolute -right-14 bottom-20 hidden lg:block rounded-3xl border border-white/60 ring-1 ring-[#D4AF37]/15 bg-white/70 backdrop-blur-3xl px-5 py-4 shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#B8860B]">
                    Nutrition
                </p>
                <h4 className="mt-1 text-lg font-bold text-[#18442D]">
                    Unpolished
                </h4>
              </div>
          </div>
          </div>
        </FadeIn>
      </div>

      {/* 👇 Scroll Hint (NO motion, pure CSS animation) */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="h-10 w-6 rounded-full border border-[#1F5132] flex justify-center">
          <div className="h-2 w-2 bg-[#1F5132] rounded-full mt-2 animate-bounce"></div>
        </div>
        <p className="text-xs text-gray-500 mt-2 tracking-widest">
          SCROLL
        </p>
      </div>
    </section>
  );
}