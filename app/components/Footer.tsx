import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#123524] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="SuSiddha Logo"
                width={60}
                height={60}
                className="rounded-full"
              />

              <div>
                <h2 className="text-2xl font-bold">SuSiddha</h2>
                <p className="text-sm tracking-widest text-[#D6B25E]">
                  AGRO PRODUCTS
                </p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-gray-300">
              Delivering premium unpolished Sona Masuri rice with purity,
              nutrition, and authentic taste directly from trusted farms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#home" className="transition hover:text-[#D6B25E]">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="transition hover:text-[#D6B25E]">
                  About
                </a>
              </li>

              <li>
                <a href="#product" className="transition hover:text-[#D6B25E]">
                  Product
                </a>
              </li>

              <li>
                <a href="#benefits" className="transition hover:text-[#D6B25E]">
                  Benefits
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-[#D6B25E]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">Contact</h3>

            <div className="space-y-5 text-gray-300">
              <a
                href="tel:+918953565330"
                className="flex items-center gap-3 transition hover:text-[#D6B25E]"
              >
                <Phone size={18} />
                <span>+91 89535 65330</span>
              </a>

              <a
                href="mailto:susiddhaagro@gmail.com"
                className="flex items-center gap-3 transition hover:text-[#D6B25E]"
              >
                <Mail size={18} />
                <span>susiddhaagro@gmail.com</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0" />
                <p>
                  Plot No. 16, Mini Industrial Area,
                  <br />
                  Mathuranagar, Anandnagar,
                  <br />
                  District Maharajganj (U.P.), India
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">Follow Us</h3>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-gray-300">
                Our social media pages will be available soon.
              </p>

              <p className="mt-3 text-sm text-gray-400">
                For any enquiry, please contact us via phone or email.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} SuSiddha Agro Products. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}