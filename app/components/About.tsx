import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <>
    {/* ================= ABOUT US ================= */}
      <section
        id="about"
        className="relative overflow-hidden bg-gradient-to-br from-[#F8F4E8] via-[#FCFAF4] to-[#FFF9EC] py-24 md:py-28 lg:py-36"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply bg-[url('/images/rice-grain.png')]" />
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-32 top-24 h-[500px] w-[500px] rounded-full bg-[#18442D]/8 blur-[140px]" />
          <div className="absolute right-[-120px] bottom-[-100px] h-[520px] w-[520px] rounded-full bg-[#D4AF37]/12 blur-[170px]" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT IMAGE */}
            <FadeIn>
            <div className="relative">

              {/* Glow */}
              <div className="absolute -left-10 top-10 h-[350px] w-[350px] rounded-full bg-[#B8860B]/15 blur-[100px]" />
              <div className="group relative overflow-hidden rounded-[42px] border border-white/60 bg-white/70 p-4 backdrop-blur-3xl shadow-[0_45px_120px_rgba(0,0,0,0.18)] transition-all duration-700 hover:-translate-y-3">
                <Image
                  src="/images/about-rice.png"
                  alt="SuSiddha Farm"
                  width={900}
                  height={900}
                  className="h-[420px] md:h-[560px] lg:h-[620px] w-full rounded-[30px] object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-4 rounded-[32px]"
                style={{
                background:
                "linear-gradient(135deg,rgba(255,255,255,.42),transparent 40%)",
                }}
              ></div>

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 md:-bottom-10 md:left-8 rounded-[28px] border border-white/60 bg-white/80 backdrop-blur-3xl px-6 py-5 shadow-[0_30px_80px_rgba(0,0,0,.15)]">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#B8860B]">
                  Trusted Quality
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[#1F5132]">
                  Premium Rice
                </h3>
                <p className="mt-2 text-gray-600">
                  Naturally Healthy & Farm Fresh
                </p>
              </div>
            </div>
            </FadeIn>

            {/* RIGHT CONTENT */}
            <FadeIn delay={0.3}>
            <div>

              <p className="uppercase tracking-[5px] font-semibold text-[#B8860B]">
                About SuSiddha
              </p>

              <h2 className="mt-5 text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.08] text-[#1F5132]">
                From Trusted
                <br />
                Farms To Your
                <span className="text-[#B8860B]"> Family</span>
              </h2>

              <p className="mt-8 text-base md:text-lg leading-8 text-gray-600">
                At Susiddha Agro, We celebrate the essence of authentic
                flavors with our unpolished Sona Masuri Rice, 
                meticulously sourced from traditional farmers commited to
                sustainable practices, Packed with essential nutritients, 
                our unpolished Sona Masuri Rice Is a wholesome
                addition to your meals.
              </p>
              <p className="mt-8 text-lg leading-9 text-gray-600">
                Our premium unpolished Sona Masuri rice is sourced directly 
                from carefully selected farms and processed using traditional 
                methods that preserve the natural bran layer.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                We believe healthy families deserve naturally nutritious
                food. That&#39;s why every batch undergoes strict quality
                checks before reaching your dining table.
              </p>

              {/* Features */}

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#18442D] to-[#2F6B49] shadow-lg text-white">
                    ✓
                  </div>

                  <p className="text-lg font-medium text-[#1F5132]">
                    Carefully Selected Premium Paddy
                  </p>

                </div>

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#18442D] to-[#2F6B49] shadow-lg text-white">
                    ✓
                  </div>

                  <p className="text-lg font-medium text-[#1F5132]">
                    Traditional Processing Techniques
                  </p>

                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#18442D] to-[#2F6B49] shadow-lg text-white">
                    ✓
                  </div>
                  <p className="text-lg font-medium text-[#1F5132]">
                    Quality Checked Before Packaging
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="group rounded-[30px] border border-white/60 bg-white/70 p-7 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(0,0,0,.15)]">
                  <h3 className="text-4xl font-bold text-[#1F5132]">
                    100%
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Natural
                  </p>
                </div>
                <div className="group rounded-[30px] border border-white/60 bg-white/70 p-7 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(0,0,0,.15)]">
                  <h3 className="text-4xl font-bold text-[#1F5132]">
                    Farm
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Fresh
                  </p>
                </div>
                <div className="group rounded-[30px] border border-white/60 bg-white/70 p-7 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(0,0,0,.15)]">
                  <h3 className="text-4xl font-bold text-[#1F5132]">
                    Premium
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Quality
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="mt-12">
                <a
                  href="#product"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#18442D] to-[#2E6A48] px-10 py-4 font-semibold text-white shadow-[0_20px_45px_rgba(24,68,45,.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(24,68,45,.35)]"
                >
                  <span>Explore Product</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                  </span>
                </a>
              </div>
            </div>
            </FadeIn>
          </div>
        </div>  
        <div className="pointer-events-none absolute right-20 top-32 hidden xl:block h-40 w-40 rounded-full border border-[#D4AF37]/15"></div>
        <div className="pointer-events-none absolute left-20 bottom-24 hidden xl:block h-28 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent"></div>
        <div className="pointer-events-none absolute right-36 top-56 hidden xl:block h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
      </section>
    </>
  );
}  