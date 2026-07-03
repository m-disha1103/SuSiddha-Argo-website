"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#1F5132]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#B8860B]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[4px] font-semibold text-[#B8860B]">
            Get In Touch
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#1F5132]">
            Contact Us Today
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Have questions or want to place an order? We&apos;re love to hear from
            you.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-[#FFF8E8] p-6 shadow-lg">
              <h3 className="font-bold text-[#1F5132]">📞 Phone</h3>
              <a
                href="tel:+918953565330"
                className="mt-2 block text-gray-600 hover:text-[#1F5132]"
              >
                +91 89535 65330
              </a>
            </div>

            <div className="rounded-3xl bg-[#FFF8E8] p-6 shadow-lg">
              <h3 className="font-bold text-[#1F5132]">✉ Email</h3>
              <a
                href="mailto:susiddha@gmail.com"
                className="mt-2 block text-gray-600 hover:text-[#1F5132]"
              >
                susiddhaagro@gmail.com
              </a>
            </div>

            <div className="rounded-3xl bg-[#FFF8E8] p-6 shadow-lg">
              <h3 className="font-bold text-[#1F5132]">📍 Location</h3>
              <p className="mt-2 text-gray-600">Plot number 16, Mini Industrial Area,
                Mathuranagar, Ananadnagar,
              Distt. Maharajganj(U.P.)
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="rounded-3xl bg-[#FFFDF7] p-8 shadow-xl">
            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-gray-300 p-4 outline-none focus:border-[#1F5132]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-xl border border-gray-300 p-4 outline-none focus:border-[#1F5132]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-gray-300 p-4 outline-none focus:border-[#1F5132]"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="rounded-xl border border-gray-300 p-4 outline-none focus:border-[#1F5132]"
              />

              <button
                type="submit"
                className="rounded-full bg-[#1F5132] py-4 font-semibold text-white transition hover:bg-[#184228]"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}