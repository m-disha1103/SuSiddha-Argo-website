import dynamic from "next/dynamic";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const BrandPromise = dynamic(() => import("./components/BrandPromise"));
const FarmToFamily = dynamic(() => import("./components/FarmToFamily"));
const About = dynamic(() => import("./components/About"));
const ProductSection = dynamic(() => import("./components/ProductSection"));
const Benefits = dynamic(() => import("./components/Benefits"));
const CinematicBanner = dynamic(() => import("./components/CinematicBanner"));
const Testimonials = dynamic(() => import("./components/Testimonials"));
const Quality = dynamic(() => import("./components/Quality"));
const FAQ = dynamic(() => import("./components/FAQ"));
const Contact = dynamic(() => import("./components/Contact"));
const CTA = dynamic(() => import("./components/CTA"));
const Footer = dynamic(() => import("./components/Footer"));

import PageLoader from "./components/PageLoader";
import ScrollFade from "./components/ScrollFade";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-gradient-to-b from-[#FFFDF7] via-[#F8F4E8] to-[#F3E6C4]">
      <Navbar />

      <Hero />

      <ScrollFade>
        <About />
      </ScrollFade>

      <ScrollFade>
        <ProductSection />
      </ScrollFade>

      <ScrollFade>
        <Benefits />
      </ScrollFade>

      <ScrollFade>
        <FarmToFamily />
      </ScrollFade>

      <ScrollFade>
        <BrandPromise />
      </ScrollFade>

      <ScrollFade>
        <CinematicBanner />
      </ScrollFade>

      <ScrollFade>
        <Testimonials />
      </ScrollFade>

      <ScrollFade>
        <Quality />
      </ScrollFade>

      <ScrollFade>
        <FAQ />
      </ScrollFade>

      <ScrollFade>
        <Contact />
      </ScrollFade>

      <CTA />

      <Footer />

      <PageLoader />
      <ScrollToTop />
      <FloatingWhatsApp />

    </main>
  );
}