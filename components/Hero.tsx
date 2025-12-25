import React from 'react';
import Link from 'next/link';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden mesh-gradient">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Your SAP Landscape is Your Most Critical—and Most Expensive—Asset
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter leading-tight animate-slide-up">
            Reduce SAP Total Cost of Ownership by <span className="gradient-text">30-60%</span> Through AI-Powered Process Intelligence
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            From brownfield conversions to release cycle optimization—automate documentation, impact analysis, and test generation for your SAP landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up mb-16" style={{ animationDelay: '0.2s' }}>
            <Link href="/roi-calculator">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-slate-950 font-black px-8 py-5 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 text-base">
                Calculate Your Savings
              </Button>
            </Link>
            <Link href="/#use-cases">
              <Button size="lg" className="bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold border border-black/5 dark:border-white/10 px-8 py-5 rounded-2xl transition-all text-base">
                See How It Works
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-5 rounded-2xl transition-all text-base">
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-display font-bold text-slate-600 dark:text-slate-400">
               <span className="text-sm">SAP Certified Partner</span>
            </div>
            <div className="flex items-center gap-2 font-display font-bold text-slate-600 dark:text-slate-400">
               <span className="text-sm">Available on SAP Store</span>
            </div>
            <div className="flex items-center gap-8 border-l border-slate-300 dark:border-slate-800 pl-8">
               <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-600">Trusted By</span>
               <span className="text-lg font-bold text-slate-600 dark:text-slate-400">BACARDI</span>
               <span className="text-lg font-bold text-slate-600 dark:text-slate-400">DharmaLife</span>
               <span className="text-lg font-bold text-slate-600 dark:text-slate-400">ACG</span>
            </div>
          </div>
        </div>

        {/* TCO Breakdown Card */}
        <div className="max-w-4xl mx-auto animate-float">
          <div className="glass-dark p-8 md:p-12 rounded-[40px] border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">Typical SAP TCO Breakdown</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Standard Landscape Allocation</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">Target Reduction</p>
                    <p className="text-3xl font-display font-black text-slate-900 dark:text-white">30-60%</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-success/20 flex items-center justify-center text-success">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Implementation", value: "40%", color: "bg-primary", sub: "Documentation & Setup" },
                  { label: "Upgrades/Transformations", value: "30%", color: "bg-accent", sub: "Transformations" },
                  { label: "Run/Support", value: "30%", color: "bg-slate-400 dark:bg-white/20", sub: "Ongoing Support" }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-primary/30 transition-all duration-300">
                    <div className={`h-1 w-12 ${item.color} rounded-full mb-4`}></div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-3xl font-display font-black text-slate-900 dark:text-white mb-2">{item.value}</p>
                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 leading-tight">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
