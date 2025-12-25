import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsVyoma from "@/components/WhatIsVyoma";
import UseCases from "@/components/UseCases";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />
      
      <WhatIsVyoma />

      <UseCases />

      <CTABanner />

      <Footer />
    </main>
  );
}
