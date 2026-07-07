"use client";

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess("Enquiry sent successfully.");

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#FAF7EF] to-[#F6EACA] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#1F5132]/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />

        <img
          src="/images/wheat-right.png"
          alt=""
          className="absolute left-0 top-20 hidden lg:block w-72 opacity-10"
        />

        <img
          src="/images/wheat-left.png"
          alt=""
          className="absolute right-0 bottom-10 hidden lg:block w-72 rotate-180 opacity-10"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#D4AF37]" />

            <p className="uppercase tracking-[5px] font-semibold text-[#B8860B]">
              Get In Touch
            </p>

            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>

          <h2 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] sm:leading-tight text-[#1F5132]">
            Let's Start a
            <br />
            <span className="bg-gradient-to-r from-[#B8860B] to-[#D4AF37] bg-clip-text text-transparent">
              Healthy Conversation
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Have questions, bulk order requirements or dealership enquiries?
            We&apos;d love to hear from you and help you choose the perfect rice for
            your family or business.
          </p>
        </div>

        <div className="mt-16 sm:mt-20 grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* LEFT */}
          <div className="space-y-6">
            {[
              {
                icon: "📞",
                title: "Phone",
                value: "+91 89535 65330",
                link: "tel:+918953565330",
              },
              {
                icon: "✉",
                title: "Email",
                value: "susiddhaagro@gmail.com",
                link: "mailto:susiddhaagro@gmail.com",
              },
              {
                icon: "📍",
                title: "Location",
                value:
                  "Plot No.16, Mini Industrial Area, Mathuranagar, Anandnagar, Dist. Maharajganj (U.P.)",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/65 p-5 sm:p-7 backdrop-blur-xl shadow-[0_20px_50px_rgba(31,81,50,.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-[0_30px_70px_rgba(31,81,50,.16)]"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl transition duration-500 group-hover:scale-125" />

                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1F5132] to-[#2F7A4A] text-2xl shadow-lg">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <p className="uppercase tracking-[3px] text-xs font-semibold text-[#B8860B]">
                      {item.title}
                    </p>

                    {item.link ? (
                      <a
                        href={item.link}
                        className="mt-3 block break-words text-base sm:text-lg font-semibold text-[#1F5132] transition hover:text-[#B8860B]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-3 text-base sm:text-lg leading-7 sm:leading-8 break-words text-[#1F5132]">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#1F5132] via-[#B8860B] to-[#D4AF37] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}

            {/* Trust Card */}
            <div className="rounded-[32px] p-6 sm:p-8 border border-[#D4AF37]/20 bg-gradient-to-r from-[#1F5132] to-[#2D6B44] p-8 text-white shadow-[0_25px_60px_rgba(31,81,50,.25)]">
              <p className="uppercase tracking-[4px] text-sm text-[#F5D97A]">
                SuSiddha Promise
              </p>

              <h3 className="mt-3 text-2xl sm:text-3xl font-bold">
                Naturally Pure
              </h3>

              <p className="mt-4 leading-8 text-white/80">
                Premium quality unpolished rice sourced with care, processed
                traditionally and delivered with complete freshness.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 sm:p-8 backdrop-blur-xl shadow-[0_25px_70px_rgba(31,81,50,.12)]">
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#D4AF37]/10 blur-[90px]" />

            <div className="relative grid gap-6">
              <div>
                <label className="mb-2 block text-sm font-semibold uppercase tracking-[3px] text-[#B8860B]">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  className="w-full rounded-2xl border border-[#D4AF37]/20 bg-white/80 px-4 sm:px-5 py-3.5 sm:py-4 outline-none transition-all duration-300 focus:border-[#1F5132] focus:ring-4 focus:ring-[#1F5132]/10"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold uppercase tracking-[3px] text-[#B8860B]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-2xl border border-[#D4AF37]/20 bg-white/80 px-4 sm:px-5 py-3.5 sm:py-4 outline-none transition-all duration-300 focus:border-[#1F5132] focus:ring-4 focus:ring-[#1F5132]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold uppercase tracking-[3px] text-[#B8860B]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-[#D4AF37]/20 bg-white/80 px-4 sm:px-5 py-3.5 sm:py-4 outline-none transition-all duration-300 focus:border-[#1F5132] focus:ring-4 focus:ring-[#1F5132]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold uppercase tracking-[3px] text-[#B8860B]">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  className="w-full rounded-2xl border border-[#D4AF37]/20 bg-white/80 px-4 sm:px-5 py-3.5 sm:py-4 outline-none transition-all duration-300 focus:border-[#1F5132] focus:ring-4 focus:ring-[#1F5132]/10"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`group relative overflow-hidden rounded-full py-4 font-semibold text-white transition-all duration-500
                  ${
                    loading
                      ? "cursor-not-allowed bg-gray-400"
                      : "bg-gradient-to-r from-[#1F5132] to-[#2F7A4A] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(31,81,50,.30)]"
                  }
                `}
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                <span className="relative z-10">
                  {loading ? "Sending..." : "Send Enquiry"}
                </span>
              </button>
              {success && (
                <div className="rounded-2xl border border-green-200 bg-green-50 px-4 sm:px-5 py-3.5 sm:py-4 text-center font-medium text-green-700">
                  ✅ {success}
                </div>
              )}

              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 sm:px-5 py-3.5 sm:py-4 text-center font-medium text-red-700">
                  ❌ {error}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}