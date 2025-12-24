import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Guarantee() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Our Risk-Free Guarantee</h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            We are so confident in our platform that we guarantee the performance impact.
          </p>
          <div className="max-w-3xl mx-auto p-12 bg-success/5 rounded-3xl border border-success/20 text-left">
             <h2 className="text-2xl font-bold text-slate-900 mb-6">The Vyoma Commitment</h2>
             <p className="text-lg text-slate-600 mb-8 leading-relaxed">
               If Vyoma does not deliver the documented efficiency gains or TCO reduction within the agreed timeline, we will complete the remaining work ourselves at no additional cost to your organization.
             </p>
             <div className="flex items-center gap-4 text-success font-bold text-xl">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% Guaranteed Outcome
             </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
