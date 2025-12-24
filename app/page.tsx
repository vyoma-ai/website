import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AIFeatures from "@/components/AIFeatures";
import UseCases from "@/components/UseCases";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />
      
      <AIFeatures />

      <UseCases />

      <CTABanner />

      <Footer />
    </main>
  );
}
