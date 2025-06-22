import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AromatherapySection from "@/components/AromatherapySection";
import BestsellersSection from "@/components/BestsellersSection";
import SoapPromo from "@/components/SoapPromo";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AromatherapySection />
      <BestsellersSection />
      <SoapPromo />
      <BlogSection />
      <Footer />
    </main>
  );
}
