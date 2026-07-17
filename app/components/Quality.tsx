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
    title: "Cleaning & Sorting",
    desc: "Raw paddy is cleaned and sorted to remove unwanted particles before processing.",
  },
  {
    icon: Wheat,
    title: "Controlled Milling",
    desc: "Milling is carried out carefully to retain the characteristic properties of unpolished rice.",
  },
  {
    icon: Leaf,
    title: "Hygienic Packaging",
    desc: "Finished rice is packed in clean, food-grade packaging to help maintain freshness during storage and transport.",
  },
  {
    icon: Award,
    title: "Batch Inspection",
    desc: "Each production batch is inspected for consistency before being released for distribution.",
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
                Quality Assurance
              </p>
              <div className="h-px w-16 bg-[#D4AF37]" />
            </div>

            <h2
              id="quality-heading"
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F5132]"
            >
              Maintaining
              <span className="block text-[#B8860B]">
                consistent Standards
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Every production batch follows a systematic workflow including cleaning, grading, controlled milling, hygienic packaging and inspection. 
              Our focus is to deliver consistent product quality from procurement through dispatch.
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
              Committed To Consistency At Every Stage
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-white/90 leading-8">
              From sourcing and processing to packaging and distribution, 
              every stage is managed with attention to consistency, hygiene and product integrity.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}