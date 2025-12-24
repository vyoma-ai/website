import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Pricing() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">Choose the plan that fits your SAP transformation needs.</p>
          <div className="p-12 glass-dark rounded-3xl border border-slate-200 dark:border-white/10 inline-block">
             <p className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-left">Enterprise Plans</p>
             <p className="text-slate-600 dark:text-slate-400 text-left mb-8">Contact us for custom pricing based on your landscape size and complexity.</p>
             <button className="bg-primary text-slate-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-colors">
                Request a Quote
             </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
