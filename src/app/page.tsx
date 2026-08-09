import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Partners from "@/components/Partners";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-mesh">
      <FloatingShapes />
      <Navbar />
      <HeroSlider />
      <Stats />
      <Services />
      <HowItWorks />
      <Partners />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
