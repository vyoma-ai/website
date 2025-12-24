import React from 'react';
import Link from 'next/link';
import Button from './Button';

const CTABanner = () => {
  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-12 md:p-20 rounded-[48px] border-black/5 dark:border-white/10 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
            Ready to Transform Your <br />
            <span className="gradient-text">SAP Landscape?</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12 font-medium">
            Join the forward-thinking enterprises using Vyoma to accelerate their transformation and reduce total cost of ownership.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/roi-calculator">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-slate-950 font-black px-12 py-7 rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 text-xl">
                Calculate Your ROI
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold border border-black/5 dark:border-white/10 px-12 py-7 rounded-2xl transition-all hover:scale-105 active:scale-95 text-xl">
                Book Your Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
