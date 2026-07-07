export default function ProductSpecs() {
  const specs = [
    {
      title: "Rice Variety",
      value: "Sona Masuri",
    },
    {
      title: "Type",
      value: "Unpolished",
    },
    {
      title: "Origin",
      value: "India",
    },
    {
      title: "Processing",
      value: "Traditional",
    },
    {
      title: "Shelf Life",
      value: "12 Months",
    },
    {
      title: "Storage",
      value: "Cool & Dry Place",
    },
    {
      title: "Quality",
      value: "Premium Grade",
    },
    {
      title: "Nutrition",
      value: "Rich in Fiber",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#FCF8ED] to-[#F6ECCC] py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-[#1F5132]/8 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />

        <img
          src="/images/wheat-left.png"
          alt=""
          className="absolute left-0 top-20 w-36 opacity-10"
        />

        <img
          src="/images/wheat-left.png"
          alt=""
          className="absolute right-0 bottom-16 w-36 rotate-180 opacity-10"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#D4AF37]" />

            <p className="uppercase tracking-[5px] font-semibold text-[#B8860B]">
              Product Specifications
            </p>

            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#1F5132] sm:text-5xl lg:text-6xl">
            Everything You
            <br />
            <span className="bg-gradient-to-r from-[#B8860B] to-[#D4AF37] bg-clip-text text-transparent">
              Need To Know
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            Carefully cultivated and traditionally processed to preserve its
            natural nutrition, authentic taste and premium quality in every
            grain.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {specs.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/65 p-7 backdrop-blur-xl shadow-[0_20px_50px_rgba(31,81,50,.08)] transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37]/40 hover:bg-white/80 hover:shadow-[0_28px_70px_rgba(31,81,50,.18)]"
            >
              {/* Top Glow */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#D4AF37]/15 blur-3xl transition duration-500 group-hover:scale-125" />

              {/* Number */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1F5132] to-[#2E6F47] text-lg font-bold text-white shadow-lg transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Divider */}
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-500 group-hover:w-24" />

              {/* Title */}
              <p className="mt-6 text-xs font-semibold uppercase tracking-[3px] text-[#B8860B]">
                {item.title}
              </p>

              {/* Value */}
              <h3 className="mt-3 text-2xl font-bold leading-snug text-[#1F5132] transition duration-300 group-hover:text-[#B8860B]">
                {item.value}
              </h3>

              {/* Bottom Accent */}
              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Premium Quality
                </span>

                <div className="h-9 w-9 rounded-full border border-[#D4AF37]/30 bg-[#FFF8E8] flex items-center justify-center transition duration-500 group-hover:rotate-45 group-hover:bg-[#D4AF37] group-hover:text-white">
                  →
                </div>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#1F5132] via-[#B8860B] to-[#D4AF37] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom Premium Banner */}
        <div className="mt-20 rounded-[36px] border border-[#D4AF37]/20 bg-white/60 px-10 py-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(31,81,50,.08)]">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <p className="uppercase tracking-[4px] text-sm font-semibold text-[#B8860B]">
                SuSiddha Promise
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#1F5132]">
                Naturally Healthy. Traditionally Pure.
              </h3>
            </div>

            <div className="flex gap-5">
              <div className="rounded-2xl border border-[#D4AF37]/20 bg-white/80 px-6 py-4 text-center shadow-md">
                <h4 className="text-3xl font-bold text-[#1F5132]">100%</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Natural
                </p>
              </div>

              <div className="rounded-2xl border border-[#D4AF37]/20 bg-white/80 px-6 py-4 text-center shadow-md">
                <h4 className="text-3xl font-bold text-[#1F5132]">Premium</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Grade
                </p>
              </div>

              <div className="rounded-2xl border border-[#D4AF37]/20 bg-white/80 px-6 py-4 text-center shadow-md">
                <h4 className="text-3xl font-bold text-[#1F5132]">Fiber</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Rich
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}