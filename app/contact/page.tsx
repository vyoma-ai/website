import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">Book Your Demo</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">See how Vyoma can reduce your SAP TCO by 30-60%.</p>
          <div className="max-w-xl mx-auto p-12 glass-dark rounded-3xl border border-slate-200 dark:border-white/10 text-left">
             <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                  <input type="text" className="w-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Work Email</label>
                  <input type="email" className="w-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white" placeholder="john@company.com" />
                </div>
                <button className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-accent/80 transition-colors shadow-lg">
                  Schedule Demo
                </button>
             </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
