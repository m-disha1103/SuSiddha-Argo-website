import Image from "next/image";
import FadeIn from "./FadeIn";

export default function ProductSection() {
  return (
    <section
      id="product"
      className="relative overflow-hidden py-28 bg-gradient-to-br from-[#FFFDF8] via-[#F7F2E7] to-[#EFE2BE]"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#1F5132]/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B8860B]/15 blur-[150px]" />
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

              <div className="absolute -left-10 top-10 h-96 w-96 rounded-full bg-[#1F5132]/10 blur-[120px]" />

              <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B8860B]/20 blur-[150px]" />

              <Image
                src="/images/product.png"
                alt="SuSiddha Premium Rice"
                width={700}
                height={700}
                className="relative z-10 w-full max-w-[620px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition duration-500 hover:scale-105"
              />
            </div>
          </FadeIn>

          {/* Right */}
          <FadeIn delay={0.3}>
            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7E8] px-5 py-2 border border-[#B8860B]/20 shadow">
                <span className="h-2.5 w-2.5 rounded-full bg-[#1F5132]" />

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

              <div className="my-10 h-px bg-gradient-to-r from-[#B8860B]/40 via-[#1F5132]/20 to-transparent" />

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
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F5132]/10 font-bold text-[#1F5132]">
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
                  className="rounded-full bg-[#1F5132] px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#184228]"
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

                <div className="rounded-3xl bg-white p-6 text-center shadow-xl transition hover:-translate-y-2">
                  <h3 className="text-4xl font-bold text-[#1F5132]">
                    100%
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Natural
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 text-center shadow-xl transition hover:-translate-y-2">
                  <h3 className="text-4xl font-bold text-[#1F5132]">
                    Low GI
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Healthy Choice
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 text-center shadow-xl transition hover:-translate-y-2">
                  <h3 className="text-4xl font-bold text-[#1F5132]">
                    Premium
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
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