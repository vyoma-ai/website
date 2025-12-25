"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Contact() {
  const [inquiryType, setInquiryType] = useState('demo');

  return (
    <main className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Context & Trust */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tighter">
               Accelerate Your SAP <span className="gradient-text">Journey</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
               Whether you're planning a massive S/4HANA migration or looking to optimize monthly releases, our team is here to help you prove the impact.
            </p>

            <div className="space-y-10 mb-16">
               <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Live Demo</h4>
                     <p className="text-sm text-slate-500">See Vyoma document a live SAP environment in under 10 minutes.</p>
                  </div>
               </div>
               <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Joint ROI Study</h4>
                     <p className="text-sm text-slate-500">Analyze your specific SAP landscape to find the $1M+ savings leak.</p>
                  </div>
               </div>
            </div>

            <div className="p-8 rounded-[32px] bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/5">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Trusted by Pioneers</p>
                <div className="flex flex-wrap gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                   <div className="text-xl font-display font-black text-slate-900 dark:text-white">BACARDI</div>
                   <div className="text-xl font-display font-black text-slate-900 dark:text-white">ACG</div>
                   <div className="text-xl font-display font-black text-slate-900 dark:text-white">DharmaLife</div>
                </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-dark p-10 rounded-[48px] border-black/5 dark:border-white/10 shadow-3xl backdrop-blur-3xl">
              <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
                 {['demo', 'partner', 'roi-study'].map((type) => (
                   <button 
                     key={type}
                     onClick={() => setInquiryType(type)}
                     className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${inquiryType === type ? 'bg-primary text-slate-950' : 'bg-black/5 dark:bg-white/5 text-slate-500'}`}
                   >
                     {type.replace('-', ' ')}
                   </button>
                 ))}
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">First Name</label>
                    <input type="text" className="w-full bg-black/5 dark:bg-white/5 border border-transparent rounded-2xl p-5 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-primary/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Last Name</label>
                    <input type="text" className="w-full bg-black/5 dark:bg-white/5 border border-transparent rounded-2xl p-5 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-primary/50 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Work Email</label>
                  <input type="email" className="w-full bg-black/5 dark:bg-white/5 border border-transparent rounded-2xl p-5 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-primary/50 transition-all" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Company Name</label>
                    <input type="text" className="w-full bg-black/5 dark:bg-white/5 border border-transparent rounded-2xl p-5 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-primary/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Job Title</label>
                    <input type="text" className="w-full bg-black/5 dark:bg-white/5 border border-transparent rounded-2xl p-5 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-primary/50 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">SAP Transformation Stage</label>
                  <select className="w-full bg-black/5 dark:bg-white/5 border border-transparent rounded-2xl p-5 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer">
                    <option className="bg-slate-900">Planning S/4HANA Transformation</option>
                    <option className="bg-slate-900">Middle of S/4HANA Implementation</option>
                    <option className="bg-slate-900">Optimization (Run Mode / Release Cycles)</option>
                    <option className="bg-slate-900">Currently Documentation Process</option>
                    <option className="bg-slate-900">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">How can we help?</label>
                  <textarea rows={4} className="w-full bg-black/5 dark:bg-white/5 border border-transparent rounded-2xl p-5 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-primary/50 transition-all resize-none"></textarea>
                </div>

                <Button className="w-full bg-primary text-slate-950 font-black py-6 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest text-xs">
                   Send Request →
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
