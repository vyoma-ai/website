import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Book Your Demo</h1>
          <p className="text-xl text-slate-600 mb-12">See how Vyoma can reduce your SAP TCO by 30-60%.</p>
          <div className="max-w-xl mx-auto p-12 bg-slate-50 rounded-3xl border border-slate-200 text-left">
             <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full p-4 bg-white border border-slate-200 rounded-xl" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                  <input type="email" className="w-full p-4 bg-white border border-slate-200 rounded-xl" placeholder="john@company.com" />
                </div>
                <button className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-red-500 transition-colors shadow-lg">
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
