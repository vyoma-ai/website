import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-white">VYOMA</span>
            <p className="mt-6 text-sm text-slate-400 leading-relaxed">
              AI-powered SAP transformation platform. Reducing TCO and accelerating innovation for the modern enterprise.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">Solutions</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/#use-cases" className="hover:text-primary transition-colors">Brownfield S/4HANA Conversion</Link></li>
              <li><Link href="/#use-cases" className="hover:text-primary transition-colors">Release Cycle Optimization</Link></li>
              <li><Link href="/roi-calculator" className="hover:text-primary transition-colors">ROI Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/guarantee" className="hover:text-primary transition-colors">Our Guarantee</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">Global Presence</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-2">🇦🇪 Dubai, UAE (HQ)</li>
              <li className="flex items-center gap-2">🇮🇳 Chennai, India</li>
              <li className="flex items-center gap-2 text-slate-500 italic">🇨🇭 Switzerland (Q1 2026)</li>
              <li className="flex items-center gap-2 text-slate-500 italic">🇺🇸 USA (Q2 2026)</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Vyoma Management Consulting FZ-LLC. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
