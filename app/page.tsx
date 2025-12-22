import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import ProcessSteps from "@/components/ProcessSteps";
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
      
      <section id="process" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The 4-Phase Transformation</h2>
            <p className="text-lg text-slate-600">
              A structured, AI-driven approach to de-risk your S/4HANA migration.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section id="challenges" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                     <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">Why It Matters</span>
                     <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                        Eliminate the Chaos of Manual Migration
                     </h2>
                     <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Traditional S/4HANA projects fail due to unclear scope, lack of documentation, and resistance to change. Vyoma tackles these head-on.
                     </p>
                     
                     <div className="space-y-6">
                        {[
                            { title: "Scope Creep", desc: "AI-defined scope based on actual data, not guess work." },
                            { title: "Process Variations", desc: "Automated standardization to SAP Best Practices." },
                            { title: "Testing Fatigue", desc: "Auto-generated test cases and sandboxes." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>
                <div className="relative">
                    <div className="bg-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <h3 className="text-2xl font-bold mb-6 relative z-10">Integration Capabilities</h3>
                        <div className="grid grid-cols-2 gap-4 relative z-10">
                            <div className="bg-indigo-800/50 p-4 rounded-xl border border-indigo-700/50">
                                <div className="text-3xl font-bold text-indigo-300 mb-1">95%</div>
                                <div className="text-xs text-indigo-200">Accuracy in Process Mapping</div>
                            </div>
                            <div className="bg-indigo-800/50 p-4 rounded-xl border border-indigo-700/50">
                                <div className="text-3xl font-bold text-indigo-300 mb-1">60%</div>
                                <div className="text-xs text-indigo-200">Faster Project Timelines</div>
                            </div>
                            <div className="bg-indigo-800/50 p-4 rounded-xl border border-indigo-700/50 col-span-2">
                                <div className="text-3xl font-bold text-indigo-300 mb-1">24/7</div>
                                <div className="text-xs text-indigo-200">AI-Powered Support & Analysis</div>
                            </div>
                        </div>
                    </div>
                </div>
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
