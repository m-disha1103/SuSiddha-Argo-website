import { Wheat, HeartPulse, Sprout, ShieldCheck } from "lucide-react";
import FadeIn from "./FadeIn";

export default function BrandPromise() {
  return (
    <>
    {/* Brand Promise Section */}
    <FadeIn>
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#1F5132] via-[#2E6A45] to-[#3F7D58]">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#B8860B]/20 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD56A]/10 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6"></div>
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#3F7D58]/10 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#B8860B]/10 blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#B8860B] font-semibold tracking-widest uppercase">
              Why Choose SuSiddha
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Purity You Can Trust
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-[#F8F4E8]">
              Carefully sourced, naturally nutritious and crafted to bring
              wholesome goodness to every meal.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:bg-white/20 hover:border-[#B8860B]/50">
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#B8860B] via-[#FFD56A] to-[#B8860B]"></div>
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#B8860B]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="text-4xl mb-4">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                  <Wheat className="h-8 w-8 text-[#FFD56A]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">
                Naturally Unpolished
              </h3>
              <p className="text-white/80 mt-3">
                Retains natural nutrients and authentic flavor.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:bg-white/20 hover:border-[#B8860B]/50">
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#B8860B] via-[#FFD56A] to-[#B8860B]"></div>
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#B8860B]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="text-4xl mb-4">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                  <HeartPulse className="h-8 w-8 text-[#FFD56A]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">
                Low Glycemic Index
              </h3>
              <p className="text-white/80 mt-3">
                A healthier choice for balanced daily meals.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:bg-white/20 hover:border-[#B8860B]/50">
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#B8860B] via-[#FFD56A] to-[#B8860B]"></div>
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#B8860B]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="text-4xl mb-4">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                  <Sprout className="h-8 w-8 text-[#FFD56A]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Farm Sourced</h3>
              <p className="text-white/80 mt-3">
                Directly connected with trusted farming communities.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:bg-white/20 hover:border-[#B8860B]/50">
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#B8860B] via-[#FFD56A] to-[#B8860B]"></div>
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#B8860B]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="text-4xl mb-4">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                  <ShieldCheck className="h-8 w-8 text-[#FFD56A]" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white">Premium Quality</h3>

              <p className="mt-3 text-white/80">
                Carefully processed and quality checked.
              </p>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>
    </>
  )
}  