"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ROICalculator = () => {
  const [processes, setProcesses] = useState(450);
  const [complexity, setComplexity] = useState('Medium');
  const [teamSize, setTeamSize] = useState(20);
  const [rate, setRate] = useState(185);
  const [savings, setSavings] = useState({ traditional: 0, vyoma: 0, delta: 0 });

  useEffect(() => {
    // Basic ROI calculation logic for demonstration
    const complexityFactor = complexity === 'Low' ? 10 : complexity === 'Medium' ? 20 : 30;
    const traditionalCost = processes * complexityFactor * rate;
    const vyomaCost = traditionalCost * 0.4; // 60% savings
    setSavings({
      traditional: traditionalCost,
      vyoma: vyomaCost,
      delta: traditionalCost - vyomaCost
    });
  }, [processes, complexity, rate]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-24">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Calculate Your Savings in <span className="text-primary">60 Seconds</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See your projected ROI with real numbers from your SAP landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inputs Section */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">
              Your Conversion Parameters
            </h3>
            
            <div className="space-y-10">
              <div>
                <label className="flex justify-between items-center text-sm font-bold text-slate-700 mb-4">
                  Number of processes to document:
                  <span className="text-2xl text-primary">{processes}</span>
                </label>
                <input 
                  type="range" 
                  min="50" 
                  max="2000" 
                  step="50"
                  value={processes}
                  onChange={(e) => setProcesses(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-4">
                  Current ECC complexity:
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {['Low', 'Medium', 'High'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setComplexity(opt)}
                      className={`py-3 px-4 rounded-xl font-bold text-sm transition-all border ${
                        complexity === opt 
                          ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                          : 'bg-white border-slate-200 text-slate-500 hover:border-primary'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-4">
                  Avg hourly rate ($):
                </label>
                <input 
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(parseInt(e.target.value))}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <button className="w-full py-5 bg-accent text-white rounded-2xl font-bold text-xl hover:bg-red-500 transition-all shadow-xl shadow-accent/10 mt-4">
                Calculate My Savings
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               
               <h3 className="text-2xl font-bold mb-10 text-primary">📊 YOUR PROJECTED IMPACT</h3>
               
               <div className="space-y-12 mb-10">
                  <div>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Traditional Approach Cost</p>
                    <p className="text-4xl font-extrabold text-slate-300 line-through decoration-red-500/50">
                      {formatCurrency(savings.traditional)}
                    </p>
                  </div>

                  <div>
                    <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">With Vyoma AI Platform</p>
                    <p className="text-6xl font-extrabold text-white">
                      {formatCurrency(savings.vyoma)}
                    </p>
                    <p className="mt-4 text-success font-bold flex items-center gap-2 text-xl">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.455-.368l-7 5a1 1 0 00-.367 1.455l7 5a1 1 0 001.455-.367l-7-5a1 1 0 00.367-1.455l7-5z" clipRule="evenodd" />
                      </svg>
                      {formatCurrency(savings.delta)} SAVED
                    </p>
                  </div>
               </div>

               <button className="w-full py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                  Schedule ROI Discussion with Expert
               </button>
            </div>

            <div className="bg-success/5 border border-success/10 rounded-3xl p-8">
              <h4 className="text-lg font-bold text-slate-900 mb-4">Why this matters:</h4>
              <ul className="space-y-3">
                {[
                  "60% reduction in implementation costs",
                  "80% faster process documentation",
                  "Eliminate manual testing bottlenecks",
                  "100% process accuracy guarantee"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                    <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ROICalculator;
