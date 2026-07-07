import Image from "next/image";
import FadeIn from "./FadeIn";

export default function ProductSection() {
  return (
    <section
      id="product"
      className="relative overflow-hidden py-32 bg-gradient-to-br from-[#FBF8F1] via-[#FCFAF5] to-[#F4E8C8]"
    >
    <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply bg-[url('/images/rice-grain.png')]" />
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-36 top-20 h-[520px] w-[520px] rounded-full  bg-gradient-to-r from-[#18442D] to-[#2F6B49] shadow[0_20px_45px_rgba(24,68,45,.25)] transition-all duration-500 hover:-translatey-1 hover:shadow-[0_30px_70px_rgba(24,68,45,.35)]/8 blur-[150px]" />
        <div className="absolute right-[-150px] bottom-[-100px] h-[600px] w-[600px] rounded-full bg-[#D4AF37]/15 blur-[170px]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[4px] font-semibold text-[#B8860B]">
            Premium Collection
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F5132]">
            Unpolished
            <br />
            Sona Masuri Rice
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            Carefully processed using traditional methods to preserve nutrition,
            taste, aroma and the natural goodness of every grain.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <FadeIn>
            <div className="relative flex justify-center">
              <div className="absolute -left-10 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-[#18442D] to-[#2F6B49] text-white shadow-lg blur-[120px]" />
              <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B8860B]/20 blur-[150px]" />

              <div className="group relative rounded-[42px] border border-white/60 bg-white/70 p-5 backdrop-blur-3xl shadow-[0_45px_120px_rgba(0,0,0,.18)] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_70px_150px_rgba(0,0,0,.22)]">
                <div
                    className="pointer-events-none absolute inset-0 rounded-[42px]"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(255,255,255,.45), transparent 40%)",
                    }}
                />
                <Image
                    src="/images/product.png"
                    alt="SuSiddha Premium Rice"
                    width={700}
                    height={700}
                    className="relative z-10 rounded-[30px] transition-all duration-700 group-hover:scale-110 hover:rotate-[0.8deg]"
                />
                <div className="absolute inset-0 overflow-hidden rounded-[42px]">
                    <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/30 blur-xl transition-all duration-[1800ms] group-hover:left-[120%]" />
                </div>
            </div>
            {/*premium badge*/}
                <div className="absolute -top-5 right-0 rounded-full border border-white/50 bg-white/80 backdrop-blur-xl px-6 py-3 shadow-2xl">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#B8860B]">
                Premium
                </p>
                <h4 className="mt-1 font-bold text-[#18442D]">
                100% Natural
                </h4>
                </div>
            </div>
          </FadeIn>

          {/* Right */}
          <FadeIn delay={0.3}>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7E8] px-5 py-2 border border-[#B8860B]/20 shadow">
                <span className="h-2.5 w-2.5 rounded-full  bg-gradient-to-r from-[#18442D] to-[#2F6B49] shadow[0_20px_45px_rgba(24,68,45,.25)] transition-all duration-500 hover:-translatey-1 hover:shadow-[0_30px_70px_rgba(24,68,45,.35)]" />
                <span className="text-sm font-semibold tracking-wide text-[#B8860B]">
                  PREMIUM QUALITY
                </span>
              </div>
              <h2 className="mt-6 text-5xl font-extrabold leading-tight text-[#1F5132]">
                Unpolished
                <br />
                Sona Masuri Rice
              </h2>
              <p className="mt-8 text-lg leading-9 text-gray-600">
                Crafted using traditional processing methods to preserve the
                natural bran layer, fibre, vitamins and authentic aroma. Every
                grain delivers purity, nutrition and wholesome taste for your
                family.
              </p>
              <div className="my-12 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"/>
              <div className="h-3 w-3 rounded-full border border-[#D4AF37] bg-[#FFF6D6] shadow-[0_0_15px_rgba(212,175,55,.6)]"/>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"/>
              </div>

              {/* Features */}
              <div className="space-y-5">
                {[
                  "Naturally Unpolished",
                  "Rich in Fiber & Nutrients",
                  "Low Glycemic Index",
                  "Farm Fresh Quality",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#18442D] to-[#2F6B49] text-white shadow-lg font-bold text-[#1F5132]">
                      ✓
                    </div>
                    <p className="text-lg font-medium text-[#1F5132]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-5">
                <a
                  href="#contact"
                  className="rounded-full  bg-gradient-to-r from-[#18442D] to-[#2F6B49] shadow[0_20px_45px_rgba(24,68,45,.25)] transition-all duration-500 hover:-translatey-1 hover:shadow-[0_30px_70px_rgba(24,68,45,.35)] px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#184228]"
                >
                  Contact Us →
                </a>
                <button
                  disabled
                  className="cursor-not-allowed rounded-full border-2 border-[#B8860B]/40 bg-white px-8 py-4 font-semibold text-[#B8860B]/60"
                >
                  Brochure Coming Soon
                </button>
              </div>

              {/* Stats */}
              <div className="mt-14 grid grid-cols-3 gap-5">
                <div className="flex min-h-[150px] flex-col items-center justify-center rounded-[30px] border border-white/60 bg-white/80 p-6 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-2">
                  <h3 className="text-4xl font-bold leading-none text-[#1F5132]">
                    100%
                  </h3>
                  <p className="mt-3 text-sm font-medium text-gray-500">
                    Natural
                  </p>
                </div>
                <div className="flex min-h-[150px] flex-col items-center justify-center rounded-[30px] border border-white/60 bg-white/80 p-6 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-2">
                  <h3 className="text-4xl font-bold leading-none text-[#1F5132]">
                    Low GI
                  </h3>
                  <p className="mt-3 text-sm font-medium text-gray-500">
                    Healthy Choice
                  </p>
                </div>
                <div className="flex min-h-[150px] flex-col items-center justify-center rounded-[30px] border border-white/60 bg-white/80 p-6 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-2">
                  <h3 className="text-4xl font-bold leading-none text-[#1F5132]">
                    Premium
                  </h3>
                  <p className="mt-3 text-sm font-medium text-gray-500">
                    Quality
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}