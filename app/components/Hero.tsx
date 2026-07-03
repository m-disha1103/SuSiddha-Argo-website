import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <>
    {/* Hero Section */}
          <section
            id="home"
            className="relative flex min-h-[95vh] items-center justify-center overflow-hidden bg-cover bg-center px-6 pt-36 py-24"
            style={{
              backgroundImage:
                "linear-gradient(rgba(248,244,232,0.85), rgba(248,244,232,0.85)), url('/images/rice-field.jpg')",
            }}
          >
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[#B8860B]/10 blur-3xl"></div>
    
              <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#1F5132]/10 blur-3xl"></div>
    
              <div className="absolute top-1/3 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-white/30 blur-3xl"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
              <div className="relative z-10 max-w-xl">
                <span className="inline-block rounded-full border border-[#B8860B]/30 bg-white/70 backdrop-blur-md px-5 py-2 text-sm font-semibold tracking-wider text-[#B8860B] shadow-md">
                  Premium • Farm Fresh • Naturally Healthy
                </span>
    
                <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] text-[#1F5132]">
                  SuSiddha
                  <span className="block mt-3 text-xl md:text-2xl font-medium tracking-[0.35em] text-[#B8860B] uppercase">
                    Agro Products
                  </span>
                </h1>
    
                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#B8860B]">
                  Premium Unpolished Sona Masuri Rice
                </h2>
    
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  Naturally nutritious, low glycemic index, traditionally sourced
                  rice that brings purity, taste and wellness to every family.
                </p>
    
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#1F5132] px-9 py-4 text-white font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-[#184228]"
                  >
                    Contact Us
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>

                  <a
                    href="#about"
                    className="inline-flex items-center rounded-full border-2 border-[#B8860B] bg-white px-9 py-4 font-semibold text-[#B8860B] shadow-md transition-all duration-300 hover:bg-[#B8860B] hover:text-white hover:shadow-xl"
                  >
                    Learn More
                  </a>
                  <div className="mt-8 flex flex-wrap gap-8 text-sm text-gray-700">
                    <div>
                      <p className="text-2xl font-bold text-[#1F5132]">100%</p>
                      <p>Natural</p>
                    </div>
    
                    <div>
                      <p className="text-2xl font-bold text-[#1F5132]">Low</p>
                      <p>Glycemic Index</p>
                    </div>
    
                    <div>
                      <p className="text-2xl font-bold text-[#1F5132]">Farm</p>
                      <p>Fresh Quality</p>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">

                    <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-md border border-[#B8860B]/20">
                      🌾 Premium Quality
                    </span>

                    <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-md border border-[#B8860B]/20">
                      🌿 Naturally Unpolished
                    </span>

                    <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-md border border-[#B8860B]/20">
                      ❤️ Healthy Choice
                    </span>

                  </div>
                </div>
              </div>
              </FadeIn>
              <FadeIn delay={0.3}>
              <div className="relative flex justify-center items-center">
                {/* Golden Glow */}
                <div className="absolute h-[480px] w-[480px] rounded-full bg-[#B8860B]/20 blur-3xl"></div>
    
                {/* Green Glow */}
                <div className="absolute h-[350px] w-[350px] rounded-full bg-[#1F5132]/10 blur-3xl"></div>
    
                {/* Product Image */}
                <div
                  className="relative z-10 overflow-hidden rounded-[2rem] border border-white/40 bg-white/20 p-4 backdrop-blur-md shadow-[0_30px_80px_rgba(31,81,50,0.25)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_40px_100px_rgba(31,81,50,0.35)]"
                >
                  <Image
                    src="/images/rice-advertisement.png"
                    alt="SuSiddha Rice Advertisement"
                    width={800}
                    height={1000}
                    priority
                    className="rounded-[1.5rem] object-cover"
                  />
                </div>
    
                {/* Premium Badge */}
                <div className="absolute right-4 top-6 z-20 rounded-full bg-[#1F5132] px-5 py-2 text-sm font-semibold text-white shadow-xl">
                  100% Natural Rice
                </div>
                {/* Floating Product Card */}
                <div className="absolute -left-6 bottom-10 z-20 rounded-2xl border border-white/50 bg-white/90 px-5 py-4 backdrop-blur-xl shadow-2xl">
                  <p className="text-xs uppercase tracking-widest text-[#B8860B] font-semibold">
                    Premium Quality
                  </p>
    
                  <h3 className="mt-1 text-xl font-bold text-[#1F5132]">
                    Sona Masuri Rice
                  </h3>
    
                  <p className="mt-1 text-sm text-gray-600">Naturally Unpolished</p>
                </div>
              </div>
              </FadeIn>
            </div>
          </section>
        </>  
  );
}