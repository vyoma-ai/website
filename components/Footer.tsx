import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-20 border-t border-black/5 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-display font-black tracking-tighter gradient-text mb-6 block">
              VYOMA
            </span>
            <p className="text-sm leading-relaxed font-medium">
              Eliminating the chaos of manual SAP transformation with precision AI. Reduce TCO, accelerate innovation, and de-risk your S/4HANA journey.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/#use-cases" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">S/4HANA Conversion</Link></li>
              <li><Link href="/#use-cases" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Release Optimization</Link></li>
              <li><Link href="/roi-calculator" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">ROI Assessment</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/pricing" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Pricing Plans</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Book a Demo</Link></li>
              <li><Link href="/guarantee" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Performance Guarantee</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 uppercase tracking-widest text-xs">Global Presence</h4>
            <div className="space-y-4 text-sm font-medium">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,209,255,0.5)]"></span>
                Dubai, UAE
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,209,255,0.5)]"></span>
                Chennai, India
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,209,255,0.5)]"></span>
                Belfast, UK
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © 2024 Vyoma AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400 dark:text-slate-500">
             <span className="hover:text-primary cursor-pointer transition-colors font-bold text-xs uppercase">Linkedin</span>
             <span className="hover:text-primary cursor-pointer transition-colors font-bold text-xs uppercase">Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
