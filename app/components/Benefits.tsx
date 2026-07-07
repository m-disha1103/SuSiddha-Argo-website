import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#FAF6EC] to-[#F5E9C8] py-28"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-[#1F5132]/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <FadeIn>
            <div className="relative">
              <Image
                src="/images/wheat-left.png"
                alt=""
                width={320}
                height={320}
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

              <h2 className="text-4xl font-bold leading-tight text-[#1F5132] sm:text-5xl lg:text-6xl">
                Why Choose
                <br />
                <span className="bg-gradient-to-r from-[#B8860B] to-[#D4AF37] bg-clip-text text-transparent">
                  Unpolished Rice?
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600">
                Every grain of SuSiddha Unpolished Sona Masuri Rice retains its
                natural bran layer, preserving fiber, vitamins and minerals
                while delivering authentic taste, aroma and wholesome nutrition
                for your family.
              </p>

              {/* Benefit Cards */}
              <div className="mt-10 space-y-5">
                {[
                  {
                    title: "Rich in Fiber",
                    text: "Supports healthy digestion and everyday wellness.",
                  },
                  {
                    title: "Low Glycemic Index",
                    text: "Helps maintain balanced nutrition and healthy living.",
                  },
                  {
                    title: "Naturally Nutritious",
                    text: "Retains essential vitamins and minerals naturally.",
                  },
                  {
                    title: "Authentic Taste",
                    text: "Traditional aroma and wholesome flavour in every meal.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-start gap-5 rounded-[28px] border border-white/60 bg-white/65 p-6 backdrop-blur-xl shadow-[0_15px_45px_rgba(31,81,50,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:bg-white/80 hover:shadow-[0_25px_60px_rgba(31,81,50,0.16)]"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1F5132] to-[#2E6E46] text-lg font-bold text-white shadow-lg transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#1F5132] transition duration-300 group-hover:text-[#B8860B]">
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
              <div className="mt-10 grid grid-cols-3 gap-4">
                <div className="rounded-[24px] border border-[#D4AF37]/20 bg-white/70 p-6 text-center backdrop-blur-xl shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <h3 className="text-3xl font-bold text-[#1F5132]">100%</h3>
                  <p className="mt-2 text-sm text-gray-600">Natural</p>
                </div>

                <div className="rounded-[24px] border border-[#D4AF37]/20 bg-white/70 p-6 text-center backdrop-blur-xl shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <h3 className="text-3xl font-bold text-[#1F5132]">
                    Low GI
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">Healthy</p>
                </div>

                <div className="rounded-[24px] border border-[#D4AF37]/20 bg-white/70 p-6 text-center backdrop-blur-xl shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <h3 className="text-3xl font-bold text-[#1F5132]">Fiber</h3>
                  <p className="mt-2 text-sm text-gray-600">Rich</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT SIDE */}
          <FadeIn delay={0.3}>
            <div className="relative flex justify-center items-center">

              {/* Background Glow */}
              <div className="absolute h-[560px] w-[560px] rounded-full bg-[#D4AF37]/20 blur-[140px]" />

              {/* Decorative Wheat */}
              <Image
                src="/images/wheat-left.png"
                alt=""
                width={180}
                height={180}
                className="absolute -left-12 top-10 w-32 opacity-60 rotate-[-18deg] pointer-events-none"
              />
              <Image
                src="/images/wheat-right.png"
                alt=""
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
                        alt="Rice Field"
                        width={650}
                        height={760}
                        className="object-cover transition duration-700 hover:scale-110"
                              />
                    </div>
                  </div>
                </div>

                {/* Glass Reflection */}
                <div className="pointer-events-none absolute top-10 left-8 h-28 w-20 rounded-full bg-white/20 blur-xl" />

                {/* Premium Badge */}
                <div className="absolute -bottom-8 -left-8 rounded-full border-4 border-white bg-gradient-to-br from-[#1F5132] to-[#2F7A4A] h-32 w-32 shadow-2xl flex flex-col justify-center items-center text-center">
                  <span className="text-white text-xs tracking-[3px] uppercase">
                    100%
                  </span>
                  <span className="text-[#F8E8B0] text-2xl font-bold leading-none">
                    Natural
                  </span>
                </div>

                {/* Floating Card */}
                <div className="absolute -right-10 top-12 rounded-3xl bg-white/90 backdrop-blur-xl border border-[#D4AF37]/30 px-6 py-5 shadow-2xl">
                  <p className="uppercase tracking-[3px] text-xs text-[#B8860B] font-semibold">
                    Premium Quality
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-[#1F5132]">
                    Farm Fresh
                  </h3>
                </div>

                {/* Bottom Card */}
                <div className="absolute right-0 -bottom-10 rounded-[28px] border border-[#D4AF37]/25 bg-white/95 backdrop-blur-xl px-7 py-5 shadow-[0_20px_50px_rgba(0,0,0,.12)]">
                  <p className="uppercase tracking-[3px] text-xs text-[#B8860B] font-semibold">
                    Rich Nutrition
                  </p>
                  <h3 className="text-2xl font-bold text-[#1F5132] mt-1">
                    Unpolished Rice
                  </h3>
                  <div className="mt-3 h-[2px] w-20 bg-gradient-to-r from-[#D4AF37] to-transparent" />
                </div>

                {/* Floating Circle */}
                <div className="absolute -top-6 right-10 h-10 w-10 rounded-full bg-[#D4AF37]/60 blur-sm" />
                <div className="absolute bottom-24 -right-5 h-6 w-6 rounded-full bg-[#1F5132]/60 blur-sm" />
                </div>
              </div>
            </FadeIn>
        </div>
      </div>
    </section>
  );
}