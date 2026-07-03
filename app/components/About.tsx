import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <>
    {/* ================= ABOUT US ================= */}
      <section
        id="about"
        className="relative overflow-hidden bg-gradient-to-br from-[#F8F4E8] via-white to-[#FFF9EC] py-28"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 top-20 h-[420px] w-[420px] rounded-full bg-[#1F5132]/8 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#B8860B]/10 blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT IMAGE */}
            <FadeIn>
            <div className="relative">

              {/* Glow */}
              <div className="absolute -left-10 top-10 h-[350px] w-[350px] rounded-full bg-[#B8860B]/15 blur-[100px]" />

              <div className="relative overflow-hidden rounded-[36px] shadow-[0_35px_80px_rgba(31,81,50,0.20)]">

                <Image
                  src="/images/about-rice.png"
                  alt="SuSiddha Farm"
                  width={900}
                  height={900}
                  className="w-full h-[650px] object-cover transition duration-700 hover:scale-105"
                />

              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 left-8 rounded-3xl bg-white/95 backdrop-blur-xl p-6 shadow-2xl">

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

              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#1F5132]">
                From Trusted
                <br />
                Farms To Your
                <span className="text-[#B8860B]"> Family</span>
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">
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

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1F5132] text-white">
                    ✓
                  </div>

                  <p className="text-lg font-medium text-[#1F5132]">
                    Carefully Selected Premium Paddy
                  </p>

                </div>

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1F5132] text-white">
                    ✓
                  </div>

                  <p className="text-lg font-medium text-[#1F5132]">
                    Traditional Processing Techniques
                  </p>

                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1F5132] text-white">
                    ✓
                  </div>
                  <p className="text-lg font-medium text-[#1F5132]">
                    Quality Checked Before Packaging
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="rounded-3xl bg-white p-6 text-center shadow-xl">
                  <h3 className="text-4xl font-bold text-[#1F5132]">
                    100%
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Natural
                  </p>
                </div>
                <div className="rounded-3xl bg-white p-6 text-center shadow-xl">
                  <h3 className="text-4xl font-bold text-[#1F5132]">
                    Farm
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Fresh
                  </p>
                </div>
                <div className="rounded-3xl bg-white p-6 text-center shadow-xl">
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
                  className="inline-block rounded-full bg-[#1F5132] px-10 py-4 text-white font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#184228]"
                >
                  Explore Product →
                </a>
              </div>
            </div>
            </FadeIn>
          </div>
        </div>  
      </section>
    </>
  );
}  