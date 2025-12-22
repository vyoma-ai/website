import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";

export default function Home() {
  const features = [
    {
      title: "Intelligent Automation",
      description: "Automate complex workflows and reduce manual effort with our AI-driven process engines.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with advanced predictive models integrated into your ERP.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
        title: "Seamless Integration",
        description: "Effortlessly connect with your existing SAP landscape using our secure and scalable connectors.",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        )
      },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />
      
      <section id="expertise" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Vyoma?</h2>
            <p className="text-lg text-slate-600">
              We combine deep industry expertise with state-of-the-art AI technology to transform your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                title={feature.title} 
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="banner" className="py-20 bg-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-indigo-900 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to modernize your enterprise?</h2>
            <p className="text-indigo-200 text-lg mb-8 max-w-2xl mx-auto">
                Join leading companies who are already leveraging Vyoma to drive efficiency and innovation.
            </p>
            <button className="bg-white text-indigo-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg">
                Schedule a Consultation
            </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
