import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandPromise from "./components/BrandPromise";
import FarmToFamily from "./components/FarmToFamily";
import ProductSection from "./components/ProductSection";
import ProductSpecs from "./components/ProductSpecs";
import Benefits from "./components/Benefits";
import CinematicBanner from "./components/CinematicBanner";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative bg-gradient-to-b from-[#FFFDF7] via-[#F8F4E8] to-[#F3E6C4]">
      <Navbar />
      <Hero />
      <BrandPromise />
      <FarmToFamily />
      <ProductSection />
      <ProductSpecs />
      <Benefits />
      <CinematicBanner />
      <About />
      <Contact />
      <Footer />
      <PageLoader />
      <ScrollToTop />
      <FloatingWhatsApp />
    </main>
  );
}