import React from 'react';
import Link from 'next/link';

const CTABanner = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Visual elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Ready to Transform Your SAP Landscape?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          See your potential savings in 60 seconds with our interactive ROI calculator or book a demo with our experts.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link 
            href="/roi-calculator" 
            className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl shadow-black/10"
          >
            Calculate Your ROI
          </Link>
          <Link 
            href="/contact" 
            className="bg-accent text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-red-500 transition-all shadow-xl shadow-black/10"
          >
            Book Your Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
