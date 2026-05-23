import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroStatement from "@/components/IntroStatement";
import FeatureGrid from "@/components/FeatureGrid";
import AppShowcase from "@/components/AppShowcase";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import AnimationProvider from "@/components/AnimationProvider";

/* ============================================
   LANDING PAGE
   Assembles all sections in order.
   AnimationProvider wraps everything to apply
   GSAP ScrollTrigger animations.
   ============================================ */
export default function Home() {
  return (
    <AnimationProvider>
      <Navbar />
      <main>
        <Hero />
        <IntroStatement />
        <FeatureGrid />
        <AppShowcase />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </AnimationProvider>
  );
}
