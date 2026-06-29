import Image from "next/image";
import { Wheat, HeartPulse, Sprout, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#F8F4E8] to-[#F3E6C4]">
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 z-50 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/30 bg-white/70 px-6 py-4 shadow-xl backdrop-blur-xl mt-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="SuSiddha Logo"
              width={55}
              height={55}
              className="rounded-full"
            />

            <div>
              <h2 className="text-xl font-bold text-[#1F5132]">SuSiddha</h2>

              <p className="text-xs tracking-widest text-[#B8860B]">
                AGRO PRODUCTS
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <a
              href="#home"
              className="font-medium text-[#1F5132] hover:text-[#B8860B] transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="font-medium text-[#1F5132] hover:text-[#B8860B] transition"
            >
              About
            </a>

            <a
              href="#product"
              className="font-medium text-[#1F5132] hover:text-[#B8860B] transition"
            >
              Product
            </a>

            <a
              href="#benefits"
              className="font-medium text-[#1F5132] hover:text-[#B8860B] transition"
            >
              Benefits
            </a>

            <a
              href="#contact"
              className="font-medium text-[#1F5132] hover:text-[#B8860B] transition"
            >
              Contact
            </a>
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="text-right">
              <p className="text-xs text-gray-500">Call Anytime</p>

              <p className="font-semibold text-[#1F5132]">+91 89535-65330</p>
            </div>

            <button className="rounded-full bg-[#1F5132] px-6 py-3 text-white font-semibold shadow-lg transition duration-300 hover:bg-[#184228] hover:-translate-y-1">
              Enquire Now
            </button>
          </div>
        </div>
      </header>
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
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 max-w-xl">
            <span className="inline-block rounded-full border border-[#B8860B]/30 bg-white/70 backdrop-blur-md px-5 py-2 text-sm font-semibold tracking-wider text-[#B8860B] shadow-md">
              Premium • Farm Fresh • Naturally Healthy
            </span>

            <h1 className="mt-6 text-6xl md:text-8xl font-extrabold leading-[0.95] text-[#1F5132]">
              SuSiddha
            </h1>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-[#B8860B]">
              Premium Unpolished Sona Masuri Rice
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Naturally nutritious, low glycemic index, traditionally sourced
              rice that brings purity, taste and wellness to every family.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button className="rounded-full bg-[#1F5132] px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#184228]">
                Contact Us
              </button>

              <button className="rounded-full border-2 border-[#B8860B] bg-white/70 px-8 py-4 font-semibold text-[#B8860B] backdrop-blur-md transition-all duration-300 hover:bg-[#B8860B] hover:text-white">
                Learn More
              </button>
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
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            {/* Golden Glow */}
            <div className="absolute h-[480px] w-[480px] rounded-full bg-[#B8860B]/20 blur-3xl"></div>

            {/* Green Glow */}
            <div className="absolute h-[350px] w-[350px] rounded-full bg-[#1F5132]/10 blur-3xl"></div>

            {/* Product Image */}
            <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/40 bg-white/20 p-4 backdrop-blur-md shadow-[0_30px_80px_rgba(31,81,50,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(31,81,50,0.35)]">
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
              100% Natural
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
        </div>
      </section>

      {/* Brand Promise Section */}
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
      {/* Farm To Family Section */}
      <section className="relative overflow-hidden py-28 bg-gradient-to-br from-[#FFFDF7] via-[#F8F4E8] to-[#EDE3C8]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#1F5132]/10 blur-3xl"></div>

          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B8860B]/10 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B8860B] font-semibold tracking-widest uppercase">
              Our Process
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1F5132] mt-4">
              From Farm To Family
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Every grain of SuSiddha rice follows a carefully monitored journey
              from cultivation to your dining table, ensuring purity, nutrition,
              and exceptional quality.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Seed Selection */}
            <div className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(31,81,50,0.20)]">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80"
                alt="Seed Selection"
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F5132]/60 via-transparent to-transparent"></div>

              <div className="p-6">
                <h3 className="mt-2 text-2xl font-bold text-[#1F5132]">
                  Seed Selection
                </h3>

                <p className="text-gray-600 mt-3">
                  Carefully selected premium-quality seeds ensure superior grain
                  quality and consistency.
                </p>
              </div>
            </div>

            {/* Cultivation */}
            <div className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(31,81,50,0.20)]">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
                alt="Green Rice Field"
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F5132]/60 via-transparent to-transparent"></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F5132]">
                  Cultivation
                </h3>

                <p className="text-gray-600 mt-3">
                  Nurtured in lush green paddy fields using traditional farming
                  practices and sustainable methods.
                </p>
              </div>
            </div>

            {/* Processing */}
            <div className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(31,81,50,0.20)]">
              <img
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80"
                alt="Rice Processing Plant"
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F5132]/60 via-transparent to-transparent"></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F5132]">
                  Careful Processing
                </h3>

                <p className="text-gray-600 mt-3">
                  Processed with care to preserve natural nutrition, aroma,
                  texture, and authentic taste.
                </p>
              </div>
            </div>

            {/* Family Table */}
            <div className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(31,81,50,0.20)]">
              <img
                src="https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80"
                alt="Family Dining"
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F5132]/60 via-transparent to-transparent"></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F5132]">
                  Family Table
                </h3>

                <p className="text-gray-600 mt-3">
                  Healthy, wholesome meals enjoyed by families every day with
                  the goodness of SuSiddha rice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section */}
      <section
        id="product"
        className="relative overflow-hidden py-28 bg-gradient-to-br from-[#FFFDF8] via-[#F7F2E7] to-[#EFE2BE]"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#1F5132]/8 blur-[120px]"></div>
          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B8860B]/10 blur-[150px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] font-semibold text-[#B8860B]">
              Premium Collection
            </p>
            <h2 className="mt-3 text-5xl md:text-6xl font-bold text-[#1F5132]">
              Unpolished
              <br />
              Sona Masuri Rice
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
              Carefully processed using traditional methods to preserve
              nutrition, taste, aroma and the natural goodness of every grain.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Left Side - Product Image */}
            <div className="relative flex justify-center">
              {/* Green Glow */}
              <div className="absolute -left-10 top-10 h-96 w-96 rounded-full bg-[#1F5132]/10 blur-[120px]"></div>

              {/* Golden Glow */}
              <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B8860B]/20 blur-[150px]"></div>

              <div className="relative z-10">
                <Image
                  src="/images/product.png"
                  alt="SuSiddha Rice"
                  width={900}
                  height={900}
                  priority
                  className="w-[650px] lg:w-[720px] xl:w-[760px] h-auto drop-shadow-[0_35px_60px_rgba(0,0,0,0.25)] transition duration-700 hover:scale-105"
                />
              </div>
            </div>
            {/* Right Side */}
            <div>
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B8860B]/20 bg-[#FFF7E8] px-5 py-2 shadow-md">
                <span className="h-2.5 w-2.5 rounded-full bg-[#1F5132]"></span>

                <span className="text-sm font-semibold tracking-wide text-[#B8860B]">
                  PREMIUM QUALITY RICE
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-6 text-5xl leading-tight font-extrabold text-[#1F5132]">
                Unpolished
                <br />
                Sona Masuri Rice
              </h2>

              {/* Description */}
              <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600">
                Crafted using traditional processing methods to preserve the
                natural bran, aroma, fiber and wholesome nutrition of every
                grain. Perfect for healthy families seeking purity, taste and
                everyday wellness.
              </p>

              {/* Divider */}
              <div className="my-8 h-px w-full bg-gradient-to-r from-[#B8860B]/30 via-[#1F5132]/20 to-transparent"></div>

              {/* Features */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F5132]/10 text-[#1F5132] font-bold">
                    ✓
                  </div>
                  <p className="text-lg font-medium text-[#1F5132]">
                    Naturally Unpolished
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F5132]/10 text-[#1F5132] font-bold">
                    ✓
                  </div>
                  <p className="text-lg font-medium text-[#1F5132]">
                    Rich in Fiber & Nutrients
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F5132]/10 text-[#1F5132] font-bold">
                    ✓
                  </div>
                  <p className="text-lg font-medium text-[#1F5132]">
                    Low Glycemic Index
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F5132]/10 text-[#1F5132] font-bold">
                    ✓
                  </div>
                  <p className="text-lg font-medium text-[#1F5132]">
                    Farm Fresh Quality
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-6">
                <button className="rounded-full bg-[#1F5132] px-9 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-[#184228]">
                  Contact Us →
                </button>

                <button className="rounded-full border-2 border-[#B8860B] bg-white px-9 py-4 font-semibold text-[#B8860B] shadow-md transition-all duration-300 hover:bg-[#B8860B] hover:text-white">
                  Download Brochure
                </button>
              </div>

              {/* Stats */}
              <div className="mt-14 grid grid-cols-3 gap-5">
                <div className="rounded-3xl bg-white p-6 text-center shadow-xl transition duration-300 hover:-translate-y-2">
                  <h3 className="text-4xl font-bold text-[#1F5132]">100%</h3>
                  <p className="mt-2 text-sm font-medium text-gray-600">
                    Natural
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 text-center shadow-xl transition duration-300 hover:-translate-y-2">
                  <h3 className="text-4xl font-bold text-[#1F5132]">Low GI</h3>
                  <p className="mt-2 text-sm font-medium text-gray-600">
                    Healthy Choice
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 text-center shadow-xl transition duration-300 hover:-translate-y-2">
                  <h3 className="text-4xl font-bold text-[#1F5132]">Premium</h3>
                  <p className="mt-2 text-sm font-medium text-gray-600">
                    Quality
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* Right Side End */}
          </div>{" "}
          {/* Grid End */}
        </div>{" "}
        {/* Container End */}
      </section>
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
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT SIDE */}
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

              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#1F5132]">Why Choose</span>

                <br />

                <span className="text-[#B8860B]">Unpolished Rice?</span>
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600 max-w-xl">
                Unlike heavily polished rice, SuSiddha Unpolished Rice retains
                its natural bran layer, preserving essential nutrients, dietary
                fiber and authentic traditional taste.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1F5132] text-white font-bold">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold text-[#1F5132] text-lg">
                      Rich in Fiber
                    </h3>

                    <p className="text-gray-600 mt-1">
                      Supports healthy digestion and daily wellness.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1F5132] text-white font-bold">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold text-[#1F5132] text-lg">
                      Low Glycemic Index
                    </h3>

                    <p className="text-gray-600 mt-1">
                      Better choice for balanced nutrition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1F5132] text-white font-bold">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold text-[#1F5132] text-lg">
                      Naturally Nutritious
                    </h3>

                    <p className="text-gray-600 mt-1">
                      Retains vitamins and minerals naturally.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1F5132] text-white font-bold">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold text-[#1F5132] text-lg">
                      Authentic Taste
                    </h3>

                    <p className="text-gray-600 mt-1">
                      Traditional aroma and wholesome flavour in every meal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex justify-center">
              <div className="absolute h-[430px] w-[430px] rounded-full bg-[#B8860B]/15 blur-[120px]" />

              <div className="relative z-10 overflow-hidden rounded-[36px] shadow-[0_30px_70px_rgba(31,81,50,0.18)]">
                <Image
                  src="/images/rice-field.png"
                  alt="Rice Field"
                  width={700}
                  height={850}
                  className="rounded-[36px] object-cover"
                />
              </div>

              <div className="absolute bottom-8 left-8 rounded-2xl bg-white/95 backdrop-blur-xl px-6 py-4 shadow-xl">
                <p className="text-sm font-semibold text-[#B8860B]">
                  100% Natural
                </p>

                <h3 className="text-xl font-bold text-[#1F5132]">
                  Rich In Nutrition
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cinemetic Banner*/}
      <section
        className="py-40 bg-cover bg-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url('/images/paddy-field-wide.jpg')",
        }}
      >
        <h2 className="text-6xl font-bold text-white">From Golden Fields</h2>
        <p className="text-3xl text-[#E9C46A] mt-5">To Healthy Family Meals</p>
      </section>

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
            <div className="relative">

              {/* Glow */}
              <div className="absolute -left-10 top-10 h-[350px] w-[350px] rounded-full bg-[#B8860B]/15 blur-[100px]" />

              <div className="relative overflow-hidden rounded-[36px] shadow-[0_35px_80px_rgba(31,81,50,0.20)]">

                <Image
                  src="/images/about-rice.jpg"
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

            {/* RIGHT CONTENT */}
            <div>

              <p className="uppercase tracking-[5px] font-semibold text-[#B8860B]">
                About SuSiddha
              </p>

              <h2 className="mt-5 text-5xl lg:text-6xl font-bold leading-tight text-[#1F5132]">
                From Trusted
                <br />
                Farms To Your
                <span className="text-[#B8860B]"> Family</span>
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                At SuSiddha Agro Products, every grain reflects purity,
                nutrition and trust. Our premium unpolished Sona Masuri
                rice is sourced directly from carefully selected farms
                and processed using traditional methods that preserve
                the natural bran layer.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                We believe healthy families deserve naturally nutritious
                food. That's why every batch undergoes strict quality
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
                <button className="rounded-full bg-[#1F5132] px-10 py-4 text-white font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#184228]">
                  Know More →
                </button>
              </div>
            </div>
          </div>
        </div>  
      </section>
