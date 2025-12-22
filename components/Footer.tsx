import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-white">Vyoma</span>
            <p className="mt-4 text-sm text-slate-400">
              Modernizing ERPs with intelligent AI solutions. Bringing your vision to reality with cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">SAP Modernization</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">AI Integration</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Cloud Migration</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Data Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Connect</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Twitter</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">GitHub</Link></li>
              <li><Link href="mailto:info@vyoma.com" className="hover:text-indigo-400 transition-colors">info@vyoma.com</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Vyoma. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-300">Privacy Policy</Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
