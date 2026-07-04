import Image from "next/image";
import FadeIn from "./FadeIn";
import PremiumDecor from "./PremiumDecor";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FBF8F1] px-6 pt-32 pb-20"
    >
      {/* 🌫️ Grain Texture Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply bg-[url('/images/rice-grain.png')]" />
      {/* ✨ Premium Soft Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[#D4AF37]/25 blur-[170px]" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-[#1F5132]/10 blur-[140px]" />
        <div className="absolute bottom-[-150px] right-[-120px] h-[650px] w-[650px] rounded-full bg-[#1F5132]/18 blur-[180px]" />
        <PremiumDecor />
      </div>
      <div className="
        relative
        z-10
        mx-auto
        grid
        max-w-[1500px]
        items-center
        gap-20
        lg:grid-cols-[1fr_1fr]
        ">
        {/* LEFT CONTENT */}
        <FadeIn>
          <div className="max-w-2xl">
            {/* Tag */}
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D4AF37]/25 bg-white/60 text-xs tracking-[0.3em] uppercase text-[#1F5132] backdrop-blur shadow-[0_0_35px_rgba(212,175,55,0.15)]">
              🌾 Est. 2025 • Premium Rice
            </span>
            {/* Title */}
            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] text-[#1F5132]">
              <span className="block bg-gradient-to-r from-[#18442D] via-[#2D6A4F] to-[#18442D] bg-clip-text text-transparent">
                Pure Rice.
              </span>
              <span className="block bg-gradient-to-r from-[#B8860B] via-[#E2C46C] to-[#B8860B] bg-clip-text text-transparent">
                Pure Tradition.
              </span>
            </h1>
            {/* Brand */}
            <h2 className="mt-6 text-2xl font-medium text-gray-700">
              SuSiddha Agro Products
            </h2>

            {/* Subtitle */}
            <p className="mt-6 text-lg text-gray-600 leading-8">
              Crafted from carefully selected Sona Masuri paddy, naturally unpolished
              to preserve authentic taste, nutrition, and everyday wellness.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
              <div className="h-2 w-2 rounded-full bg-[#D4AF37]"></div>
              <div className="h-px flex-1 bg-gradient-to-l from-[#D4AF37] to-transparent"></div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex gap-5">
              <a
                href="#contact"
                className="px-5 sm:px-6 lg:px-8 py-4 rounded-full bg-[#1F5132] text-white font-medium shadow-lg hover:scale-[1.03] transition"
              >
                Contact Us
              </a>

              <a
                href="#about"
                className="px-5 sm:px-6 lg:px-8 py-4 rounded-full border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white transition"
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
          <div className="relative flex justify-center">

            {/* premium decoration rings */}
            <div className="absolute h-[650px] w-[650px] rounded-full border border-[#D4AF37]/15"></div>
            <div className="absolute h-[560px] w-[560px] rounded-full border border-[#D4AF37]/10"></div>
            <div className="absolute h-[470px] w-[470px] rounded-full border border-white/40"></div>

            {/* Glow */}
            <div className="absolute h-[500px] w-[500px] bg-[#D4AF37]/20 blur-[140px] rounded-full" />

            {/* Cinematic Spotlight */}
           <div
             className="absolute h-[650px] w-[650px] rounded-full"
             style={{
               background:
                 "radial-gradient(circle, rgba(255,233,170,0.35) 0%, rgba(255,233,170,0.12) 35%, transparent 75%)",
               filter: "blur(80px)",
             }}
           />
           
            <div className="absolute h-[480px] w-[420px] rounded-[50px] bg-black/5 blur-3xl translate-y-14 scale-95"></div>
            {/* Product */}
            <div
              className="
              group
              relative
              z-20
              w-[320px]
              sm:w-[420px]
              md:w-[470px]
              lg:w-[560px]
              rounded-[44px]
              border
              border-white/50
              bg-white/65
              backdrop-blur-[30px]
              p-6
              shadow-[0_60px_180px_rgba(0,0,0,0.16)]
              transition-all
              duration-700
              hover:-translate-y-4
              hover:scale-[1.03]
              "
              >
              {/* Glass Reflection */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[40px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.05) 35%, transparent 60%)",
                }}
              ></div>
              <div className="overflow-hidden rounded-[42px] border border-white/60 bg-white/70 backdrop-blur-3xl shadow-[0_45px_120px_rgba(0,0,0,0.18)] hover:shadow-[0_70px_170px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition-all duration-700">

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
              <div className="absolute -top-4 right-0 z-30 rounded-full border border-dashed border-white/40 bg-white/80 backdrop-blur-xl px-6 py-3 shadow-xl">
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
            </div>
          </div>
        </FadeIn>
      </div>

      {/* 👇 Scroll Hint (NO motion, pure CSS animation) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
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