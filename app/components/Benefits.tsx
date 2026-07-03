import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Benefits() {
  return (
  <>
  {/* WHY CHOOSE UNPOLISHED RICE */}
        <section
          id="benefits"
          className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#FAF6EC] to-[#F5E9C8] py-28"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-32 top-20 h-[450px] w-[450px] rounded-full bg-[#1F5132]/10 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B8860B]/10 blur-[150px]" />
          </div>
  
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* LEFT SIDE */}
              <FadeIn>
              <div className="relative">
                <img
                  src="/images/wheat-left.png"
                  alt=""
                  className="absolute -left-20 top-0 h-[320px] opacity-10 pointer-events-none"
                />
  
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-16 bg-[#C69A22]" />
  
                  <p className="uppercase tracking-[4px] text-[#B8860B] font-bold">
                    Health Benefits
                  </p>
  
                  <div className="h-px w-16 bg-[#C69A22]" />
                </div>
  
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-[#1F5132]">Why Choose</span>
  
                  <br />
  
                  <span className="text-[#B8860B]">Unpolished Rice?</span>
                </h2>
  
                <p className="mt-8 text-lg leading-9 text-gray-600 max-w-xl">
                  Every grain of SuSiddha Unpolished Sona Masuri Rice retains its
                  natural bran layer, preserving fiber, vitamins and minerals while
                  delivering authentic taste, aroma and wholesome nutrition for your
                  family.
                </p>
  
                <div className="mt-10 space-y-5">
                  <div className="group flex items-start gap-4 rounded-3xl bg-white p-6 shadow-lg border border-transparent transition-all duration-500 hover:-translate-y-2 hover:border-[#B8860B]/30 hover:shadow-2xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1F5132] to-[#2F7A4A] text-white font-bold shadow-lg transition group-hover:scale-110">
                      ✓
                    </div>
  
                    <div>
                      <h3 className="font-bold text-[#1F5132] text-lg transition-colors duration-300 group-hover:text-[#B8860B]">
                        Rich in Fiber
                      </h3>
  
                      <p className="text-gray-600 mt-1">
                        Supports healthy digestion and daily wellness.
                      </p>
                    </div>
                  </div>
  
                  <div className="group flex items-start gap-4 rounded-3xl bg-white p-6 shadow-lg border border-transparent transition-all duration-500 hover:-translate-y-2 hover:border-[#B8860B]/30 hover:shadow-2xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1F5132] to-[#2F7A4A] text-white font-bold shadow-lg transition group-hover:scale-110">
                      ✓
                    </div>
  
                    <div>
                      <h3 className="font-bold text-[#1F5132] text-lg transition-colors duration-300 group-hover:text-[#B8860B]">
                        Low Glycemic Index
                      </h3>
  
                      <p className="text-gray-600 mt-1">
                        Better choice for balanced nutrition.
                      </p>
                    </div>
                  </div>
  
                  <div className="group flex items-start gap-4 rounded-3xl bg-white p-6 shadow-lg border border-transparent transition-all duration-500 hover:-translate-y-2 hover:border-[#B8860B]/30 hover:shadow-2xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1F5132] to-[#2F7A4A] text-white font-bold shadow-lg transition group-hover:scale-110">
                      ✓
                    </div>
  
                    <div>
                      <h3 className="font-bold text-[#1F5132] text-lg transition-colors duration-300 group-hover:text-[#B8860B]">
                        Naturally Nutritious
                      </h3>
  
                      <p className="text-gray-600 mt-1">
                        Retains vitamins and minerals naturally.
                      </p>
                    </div>
                  </div>
  
                  <div className="group flex items-start gap-4 rounded-3xl bg-white p-6 shadow-lg border border-transparent transition-all duration-500 hover:-translate-y-2 hover:border-[#B8860B]/30 hover:shadow-2xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1F5132] to-[#2F7A4A] text-white font-bold shadow-lg transition group-hover:scale-110">
                      ✓
                    </div>
  
                    <div>
                      <h3 className="font-bold text-[#1F5132] text-lg transition-colors duration-300 group-hover:text-[#B8860B]">
                        Authentic Taste
                      </h3>

                      <div className="mt-10 grid grid-cols-3 gap-4">

                        <div className="rounded-2xl bg-white p-5 text-center shadow-lg">
                          <h3 className="text-3xl font-bold text-[#1F5132]">100%</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            Natural
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white p-5 text-center shadow-lg">
                          <h3 className="text-3xl font-bold text-[#1F5132]">Low GI</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            Healthy
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white p-5 text-center shadow-lg">
                          <h3 className="text-3xl font-bold text-[#1F5132]">Fiber</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            Rich
                          </p>
                        </div>

                      </div>
  
                      <p className="text-gray-600 mt-1">
                        Traditional aroma and wholesome flavour in every meal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </FadeIn>
              
              {/* RIGHT SIDE */}
              <FadeIn delay={0.3}>
              <div className="relative flex justify-center">

                <div className="absolute h-[430px] w-[430px] rounded-full bg-[#B8860B]/15 blur-[120px]" />

                <div className="relative z-10 overflow-hidden rounded-[36px] border border-white/40 bg-white/40 p-3 shadow-[0_30px_70px_rgba(31,81,50,0.18)] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(31,81,50,0.28)]">

                  <Image
                    src="/images/rice-field.png"
                    alt="Rice Field"
                    width={700}
                    height={850}
                    className="rounded-[30px] object-cover transition duration-700 hover:scale-105"
                  />

                </div>

                <div className="absolute top-8 right-8 rounded-full bg-[#1F5132] px-5 py-2 text-sm font-semibold text-white shadow-xl">
                  Farm Fresh
                </div>

                <div className="absolute bottom-8 left-8 rounded-3xl bg-white/95 backdrop-blur-xl px-6 py-4 shadow-2xl border border-[#B8860B]/20 transition duration-500 hover:-translate-y-2">

                  <p className="text-sm font-semibold text-[#B8860B]">
                    100% Natural
                  </p>

                  <h3 className="text-xl font-bold text-[#1F5132]">
                    Rich In Nutrition
                  </h3>
                
                </div>

              </div>
            </FadeIn>
          </div>
        </div>
        </section>
  </>
  );
}