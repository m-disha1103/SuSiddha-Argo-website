"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    question: "What is Unpolished Sona Masuri Rice?",
    answer:
      "Unpolished Sona Masuri Rice retains its natural bran layer, preserving essential fiber, vitamins, and minerals while offering authentic taste and aroma.",
  },
  {
    question: "Why is unpolished rice healthier?",
    answer:
      "Unlike polished rice, unpolished rice retains its natural nutrients, making it rich in dietary fiber, antioxidants, and essential minerals for a healthier lifestyle.",
  },
  {
    question: "How should I store the rice?",
    answer:
      "Store it in a cool, dry place in an airtight container away from moisture and direct sunlight to maintain freshness and aroma.",
  },
  {
    question: "Is this rice suitable for daily consumption?",
    answer:
      "Yes. Its balanced nutrition, low glycemic index, and natural processing make it an excellent choice for everyday meals.",
  },
  {
    question: "Where is SuSiddha rice sourced from?",
    answer:
      "Our premium rice is sourced directly from trusted Indian farms that follow traditional cultivation and quality-focused harvesting practices.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#FAF7EF] to-[#F5EACA] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#1F5132]/10 blur-[130px]" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-[#D4AF37]" />
              <p className="uppercase tracking-[5px] font-semibold text-[#B8860B]">
                Frequently Asked Questions
              </p>
              <div className="h-px w-16 bg-[#D4AF37]" />
            </div>

            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F5132]">
              Everything You
              <span className="block text-[#B8860B]">
                Need To Know
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Find answers to the most common questions about our premium
              unpolished Sona Masuri rice.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 space-y-5">
          {faqs.map((item, index) => (
            <FadeIn key={index} delay={index * 0.08}>
              <div className="overflow-hidden rounded-[28px] border border-white/50 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(31,81,50,.08)] transition-all duration-500 hover:shadow-[0_30px_70px_rgba(31,81,50,.15)]">

                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-7 text-left"
                >
                  <h3 className="text-lg font-semibold text-[#1F5132]">
                    {item.question}
                  </h3>

                  <ChevronDown
                    size={24}
                    className={`text-[#B8860B] transition-transform duration-300 ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    open === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-7 leading-8 text-gray-600">
                      {item.answer}
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