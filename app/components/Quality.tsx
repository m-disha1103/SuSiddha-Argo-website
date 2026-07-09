"use client";

import {
  ShieldCheck,
  Leaf,
  Award,
  Wheat,
} from "lucide-react";
import FadeIn from "./FadeIn";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "Every batch is carefully processed to maintain consistent quality, purity and freshness.",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    desc: "Naturally processed without unnecessary polishing to retain essential nutrients.",
  },
  {
    icon: Wheat,
    title: "Farm Fresh",
    desc: "Directly sourced from trusted farms using traditional cultivation practices.",
  },
  {
    icon: Award,
    title: "Trusted Brand",
    desc: "Committed to delivering authentic taste, nutrition and customer satisfaction.",
  },
];

export default function Quality() {
  return (
    <section
      id="quality"
      aria-labelledby="quality-heading"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-[#1F5132]/8 blur-[130px]" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-[#D4AF37]" />
              <p className="uppercase tracking-[5px] font-semibold text-[#B8860B]">
                Why Trust SuSiddha
              </p>
              <div className="h-px w-16 bg-[#D4AF37]" />
            </div>

            <h2
              id="quality-heading"
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F5132]"
            >
              Quality You Can
              <span className="block text-[#B8860B]">
                Trust Every Day
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              We believe every grain should reflect purity, nutrition and
              authenticity. From carefully selected farms to hygienic
              processing, every step is focused on delivering premium quality
              rice for your family.
            </p>
            <div className="mx-auto mt-10 flex max-w-xs items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <div className="h-3 w-3 rounded-full border border-[#D4AF37] bg-[#FFF6D6]" />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </div>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title} delay={index * 0.15}>
                <div className="group rounded-[32px] border border-white/50 bg-gradient-to-br from-white via-white to-[#FFF9ED] p-8 shadow-[0_20px_60px_rgba(31,81,50,.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-[0_35px_80px_rgba(31,81,50,.16)]">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1F5132] to-[#2F7A4A] text-white shadow-xl transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#1F5132] transition duration-300 group-hover:text-[#B8860B]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[17px] leading-8 text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom Trust Strip */}
        <FadeIn delay={0.5}>
          <div className="mt-20 rounded-[42px] border border-[#D4AF37]/20 bg-gradient-to-r from-[#1F5132] via-[#295F3D] to-[#1F5132] px-8 py-10 text-center text-white shadow-[0_25px_70px_rgba(31,81,50,.20)]">
            <div className="mb-6 flex justify-center">
              <div className="h-px w-20 bg-[#D4AF37]" />
            </div>
            <h3 className="text-3xl font-bold">
              Premium Rice. Pure Nutrition. Trusted Quality.
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-white/90 leading-8">
              Every grain of SuSiddha Unpolished Sona Masuri Rice is selected
              with care to bring healthy, wholesome and delicious meals to your
              table.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}