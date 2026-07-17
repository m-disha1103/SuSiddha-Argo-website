import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Benefits() {
  return (
    <section
      aria-labelledby="benefits-heading"
      id="benefits"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#FAF6EC] to-[#F5E9C8] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-[#1F5132]/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* LEFT */}
          <FadeIn>
            <div className="relative">
              <Image
                src="/images/wheat-left.png"
                alt=""
                aria-hidden="true"
                width={320}
                height={320}
                loading="lazy"
                quality={85}
                className="pointer-events-none absolute -left-20 top-0 h-[320px] opacity-10"
              />

              {/* Heading */}
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-16 bg-[#D4AF37]" />
                <p className="text-sm font-bold uppercase tracking-[5px] text-[#B8860B]">
                  Health Benefits
                </p>
                <div className="h-px w-16 bg-[#D4AF37]" />
              </div>

              <h2 id="benefits-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] sm:leading-tight text-[#1F5132]">
                Why Choose
                <br />
                <span className="bg-gradient-to-r from-[#B8860B] to-[#D4AF37] bg-clip-text text-transparent">
                  Unpolished Rice?
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base sm:text-lg leading-7 sm:leading-9 text-gray-600">
                Unpolished Sona Masuri Rice retains the outer bran layer, providing dietary fibre along with naturally occurring vitamins and minerals. 
                   These nutritional characteristics make it a suitable choice for balanced everyday meals.
              </p>

              {/* Benefit Cards */}
              <div className="mt-10 space-y-5">
                {[
                  {
                    title: "Retains Bran Layer",
                    text: "The outer bran layer remains intact after milling, preserving naturally occurring nutrients.",
                  }               ,
                  {
                    title: "Dietary Fibre",
                    text: "Provides dietary fibre that supports normal digestion as part of a balanced diet.",
                  },
                  {
                    title: "Lower Glycemic Index",
                    text: "Generally has a lower glycemic index than polished white rice.",
                  },
                  {
                    title: "Naturally Occurring Micronutrients",
                    text: "Contains vitamins and minerals naturally present in the grain.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 sm:gap-5 rounded-[28px] border border-white/60 bg-white/65 p-5 sm:p-6 backdrop-blur-xl shadow-[0_15px_45px_rgba(31,81,50,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#D4AF37]/40 hover:bg-white/80 hover:shadow-[0_25px_60px_rgba(31,81,50,0.16)]"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1F5132] to-[#2E6E46] text-lg font-bold text-white shadow-lg transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#1F5132] transition duration-300 group-hover:text-[#B8860B]">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-7 text-gray-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-[24px] border border-[#D4AF37]/20 bg-white/70 p-6 text-center backdrop-blur-xl shadow-xl transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(31,81,50,.15)]">
                  <h3 className="text-3xl font-bold text-[#1F5132]">Bran</h3>
                  <p className="mt-2 text-sm text-gray-600">Retained</p>
                </div>

                <div className="rounded-[24px] border border-[#D4AF37]/20 bg-white/70 p-6 text-center backdrop-blur-xl shadow-xl transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(31,81,50,.15)]">
                  <h3 className="text-3xl font-bold text-[#1F5132]">
                    Lower GI
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">Compared to Poloshed Rice</p>
                </div>

                <div className="rounded-[24px] border border-[#D4AF37]/20 bg-white/70 p-6 text-center backdrop-blur-xl shadow-xl transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(31,81,50,.15)]">
                  <h3 className="text-3xl font-bold text-[#1F5132]">Dietary</h3>
                  <p className="mt-2 text-sm text-gray-600">Fibre</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT SIDE */}
          <FadeIn delay={0.3}>
            <div className="relative flex items-center justify-center mt-10 lg:mt-0">

              {/* Background Glow */}
              <div className="absolute h-[560px] w-[560px] rounded-full bg-[#D4AF37]/20 blur-[120px]" />

              {/* Decorative Wheat */}
              <Image
                src="/images/wheat-right.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                quality={85}
                width={180}
                height={180}
                className="absolute -left-12 top-10 hidden sm:block w-32 opacity-60 rotate-[-18deg] pointer-events-none"
              />
              <Image
                src="/images/wheat-left.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                quality={85}
                width={158}
                height={158}
                className="absolute right-[-20px] bottom-8 w-32 opacity-50 rotate-[160deg] pointer-events-none"
              />

              {/* Organic Frame */}
              <div className="relative z-20">

                {/* Gold Border */}
                <div className="absolute inset-0 scale-105 rounded-[48%_52%_45%_55%/60%_40%_60%_40%] bg-gradient-to-br from-[#D4AF37] via-[#E8C75C] to-[#B8860B] blur-[1px]" />

                {/* Green Border */}
                <div className="relative rounded-[48%_52%_45%_55%/60%_40%_60%_40%] bg-gradient-to-br from-[#1F5132] via-[#2B6A43] to-[#3D8A59] p-[10px] shadow-[0_35px_80px_rgba(31,81,50,.28)]">

                  {/* Glass Layer */}
                  <div className="rounded-[48%_52%_45%_55%/60%_40%_60%_40%] bg-white/20 backdrop-blur-xl p-3">

                    {/* Image */}
                    <div className="overflow-hidden rounded-[48%_52%_45%_55%/60%_40%_60%_40%]">

                      <Image
                        src="/images/rice-field.png"
                        alt="Healthy unpolished Sona Masuri rice field"
                        width={650}
                        height={760}
                        loading="lazy"
                        quality={90}
                        sizes="(max-width:768px)100vw,(max-width:1024px)50vw,45vw"
                        className="object-cover transition-all duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Glass Reflection */}
                <div className="pointer-events-none absolute top-10 left-8 h-28 w-20 rounded-full bg-white/20 blur-xl" />

                {/* Premium Badge */}
                <div className="absolute bottom-4 left-4 sm:-bottom-8 sm:-left-8 rounded-full border-4 border-white bg-gradient-to-br from-[#1F5132] to-[#2F7A4A] h-20 w-20 sm:h-32 sm:w-32 shadow-2xl flex flex-col justify-center items-center text-center">
                  <span className="text-white text-xs tracking-[3px] uppercase">
                    Bran
                  </span>
                  <span className="text-[#F8E8B0] text-lg sm:text-2xl font-bold leading-none">
                    Layer
                  </span>
                </div>

                {/* Floating Card */}
                <div className="hidden sm:block absolute -right-10 top-12 rounded-3xl bg-white/90 backdrop-blur-xl border border-[#D4AF37]/30 px-6 py-5 shadow-2xl">
                  <p className="uppercase tracking-[3px] text-xs text-[#B8860B] font-semibold">
                    Daily Nutrition
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-[#1F5132]">
                    Balanced Meals
                  </h3>
                </div>

                {/* Bottom Card */}
                <div className="hidden sm:block absolute right-0 -bottom-10 rounded-[28px] border border-[#D4AF37]/25 bg-white/95 backdrop-blur-xl px-7 py-5 shadow-[0_20px_50px_rgba(0,0,0,.12)]">
                  <p className="uppercase tracking-[3px] text-xs text-[#B8860B] font-semibold">
                    Whole Grain
                  </p>
                  <h3 className="text-2xl font-bold text-[#1F5132] mt-1">
                    Sona Masuri
                  </h3>
                  <div className="mt-3 h-[2px] w-20 bg-gradient-to-r from-[#D4AF37] to-transparent" />
                </div>

                {/* Floating Circle */}
                <div className="hidden lg:block absolute right-10 h-10 w-10 rounded-full bg-[#D4AF37]/60 blur-sm" />
                <div className="hidden lg:block absolute  -right-5 h-6 w-6 rounded-full bg-[#1F5132]/60 blur-sm" />
                </div>
              </div>
            </FadeIn>
        </div>
      </div>
    </section>
  );
}