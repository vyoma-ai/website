"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function ROICalculator() {
  const [processes, setProcesses] = useState(450);
  const [isMedium, setIsMedium] = useState(true);
  const [isHigh, setIsHigh] = useState(false);
  const [hourlyRate, setHourlyRate] = useState(50);

  // Simple calculation logic
  const traditionalCost = processes * (isHigh ? 600 : isMedium ? 400 : 250) * (hourlyRate / 50);
  const vyomaCost = traditionalCost * 0.4; // 60% savings
  const savings = traditionalCost - vyomaCost;

  return (
    <main className="min-h-screen pt-32 pb-24 mesh-gradient bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white mb-6">
            Calculate Your <span className="gradient-text">Strategic ROI</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Quantify the impact of AI-driven process intelligence on your SAP landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-dark p-10 rounded-[32px] border-black/5 dark:border-white/5 shadow-2xl backdrop-blur-3xl">
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                Input Parameters
              </h3>
              
              <div className="space-y-12">
                {/* Processes Slider */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Processes to Document</label>
                    <span className="text-3xl font-display font-black text-primary">{processes}</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" 
                    max="2000" 
                    step="50"
                    value={processes} 
                    onChange={(e) => setProcesses(parseInt(e.target.value))}
                    className="w-full h-2 bg-black/10 dark:bg-white/5 rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-tighter">
                    <span>50 Processes</span>
                    <span>2000 Processes</span>
                  </div>
                </div>

                {/* Complexity Toggles */}
                <div className="space-y-4">
                  <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">ECC Complexity</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'low', label: 'Low', active: !isMedium && !isHigh, action: () => { setIsMedium(false); setIsHigh(false); } },
                      { id: 'med', label: 'Medium', active: isMedium, action: () => { setIsMedium(true); setIsHigh(false); } },
                      { id: 'high', label: 'High', active: isHigh, action: () => { setIsMedium(false); setIsHigh(true); } }
                    ].map((btn) => (
                      <button 
                        key={btn.id}
                        onClick={btn.action}
                        className={`py-3 rounded-xl font-bold text-sm transition-all border ${
                          btn.active 
                            ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(0,209,255,0.2)]' 
                            : 'bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/5 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hourly Rate */}
                <div className="space-y-4">
                  <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Average Hourly Rate ($)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                    <input 
                      type="number" 
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(parseInt(e.target.value) || 0)}
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl py-4 pl-10 pr-4 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-dark p-8 rounded-[32px] border-black/5 dark:border-white/5 bg-primary/5">
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                   <strong className="text-primary">Note:</strong> These calculations are based on average industry benchmarks for SAP documentation and transformation projects. Actual savings may vary based on system age and data quality.
                </p>
            </div>
          </div>

          {/* Results Dashboard */}
          <div className="lg:col-span-7">
            <div className="glass-dark p-10 rounded-[40px] border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden h-full backdrop-blur-3xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-12 flex items-center justify-between">
                Savings Projection
                <span className="px-3 py-1 bg-success/20 text-success text-[10px] uppercase font-black rounded-lg">Live Analysis</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Traditional Project Cost</p>
                  <p className="text-4xl font-display font-black text-slate-400 dark:text-slate-500">
                    ${traditionalCost.toLocaleString()}
                  </p>
                </div>
                <div className="p-8 rounded-[32px] bg-primary/10 border border-primary/20 shadow-[0_0_30px_rgba(0,209,255,0.1)] relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2 relative z-10">With Vyoma AI</p>
                  <p className="text-5xl font-display font-black text-slate-950 dark:text-white relative z-10">
                    ${vyomaCost.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="text-center mb-16 p-10 rounded-[40px] bg-white/40 dark:bg-slate-950/50 border border-black/5 dark:border-white/10 relative overflow-hidden shadow-inner">
                <div className="absolute -inset-10 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4 relative z-10">Projected Savings</p>
                <p className="text-7xl md:text-8xl font-display font-black gradient-text mb-4 relative z-10">
                  ${savings.toLocaleString()}
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-success/20 text-success font-black rounded-full text-sm relative z-10">
                   ~60% REDUCTION IN TCO
                </div>
              </div>

              <div className="space-y-4">
                 <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6">Strategic Advantages</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "95% accuracy in auto-mapping",
                      "De-risked S/4HANA conversion",
                      "Instant test case generation",
                      "Future-proof process governance"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="mt-12">
                <Button className="w-full bg-primary text-slate-950 font-black py-6 rounded-2xl text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20">
                   Get Detailed Assessment →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
