"use client";

import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Lucknow",
    review:
      "The aroma and quality are exceptional. SuSiddha has become our family's preferred rice for everyday meals.",
  },
  {
    name: "Rajesh Verma",
    location: "Gorakhpur",
    review:
      "You can immediately notice the difference in taste and texture. Fresh, natural and truly premium quality.",
  },
  {
    name: "Anita Singh",
    location: "Varanasi",
    review:
      "Healthy, nutritious and delicious. The unpolished rice cooks perfectly and retains its authentic flavour.",
  },
  {
    name: "Ashish Singh",
    location: "Ahmedabad",
    review:
      "The rice is soft, fragrant, and cooks evenly. We love the wholesome quality for our family meals.",
  },
  {
    name: "Arun Srivatav",
    location: "Banglore",
    review:
      "Great quality rice and lovely taste."
  }
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonial-heading"
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#FAF7EF] to-[#F5EACA] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#1F5132]/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-[#D4AF37]" />
              <p className="uppercase tracking-[5px] font-semibold text-[#B8860B]">
                Testimonials
              </p>
              <div className="h-px w-16 bg-[#D4AF37]" />
            </div>

            <h2
              id="testimonial-heading"
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F5132]"
            >
              Trusted By Families
              <span className="block text-[#B8860B]">
                Across India
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Every bowl of SuSiddha rice carries our promise of purity,
              nutrition and authentic taste, earning the trust of families
              across generations.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.15}>
              <div className="group relative overflow-hidden rounded-[32px] border border-white/50 bg-white/70 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(31,81,50,0.10)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-[0_35px_90px_rgba(31,81,50,0.14)]">

                {/* Gold Reflection */}
                <div className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/30 blur-2xl transition-all duration-1000 group-hover:left-[120%]" />

                <div
                  className="flex text-xl text-[#D4AF37]"
                  aria-label="5 star rating"
                >
                  <div className="mb-6 text-6xl font-serif leading-none text-[#D4AF37]/20">
                    “
                  </div>
                  ★★★★★
                </div>

                <p className="mt-6 leading-8 text-gray-600 italic text-[17px]">
                  &ldquo;{item.review}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#1F5132] to-[#2E6F47] text-lg font-bold text-white shadow-lg">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#1F5132]">
                      {item.name}
                    </h3>

                    <p className="text-sm text-[#B8860B]">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}