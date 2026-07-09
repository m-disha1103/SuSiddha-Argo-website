import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandPromise from "./components/BrandPromise";
import FarmToFamily from "./components/FarmToFamily";
import ProductSection from "./components/ProductSection";
import Benefits from "./components/Benefits";
import CinematicBanner from "./components/CinematicBanner";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Quality from "./components/Quality";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import ScrollFade from "./components/ScrollFade";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-gradient-to-b from-[#FFFDF7] via-[#F8F4E8] to-[#F3E6C4]">

      <Navbar />

      {/* Hero should appear immediately */}
      <Hero />

      <ScrollFade>
        <BrandPromise />
      </ScrollFade>

      <ScrollFade>
        <FarmToFamily />
      </ScrollFade>

      <ScrollFade>
        <ProductSection />
      </ScrollFade>
      
      <ScrollFade>
        <Benefits />
      </ScrollFade>

      <ScrollFade>
        <CinematicBanner />
      </ScrollFade>

      <ScrollFade>
        <About />
      </ScrollFade>

      <Testimonials />
      <Quality />
      <FAQ />

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