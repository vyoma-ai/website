"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function ROICalculator() {
  const [calculatorMode, setCalculatorMode] = useState<'brownfield' | 'release'>('brownfield');

  // Option A: Brownfield State
  const [bfProcesses, setBfProcesses] = useState(450);
  const [bfComplexity, setBfComplexity] = useState<'low' | 'med' | 'high'>('med');
  const [bfGeography, setBfGeography] = useState<'single' | 'multi'>('single');
  const [bfIntegrations, setBfIntegrations] = useState(25);
  const [bfInternalFTEs, setBfInternalFTEs] = useState(5);
  const [bfSIFTEs, setBfSIFTEs] = useState(10);
  const [bfHourlyRate, setBfHourlyRate] = useState(150);

  // Option B: Release Cycle State
  const [rcRequests, setRcRequests] = useState(50);
  const [rcAvgDays, setRcAvgDays] = useState(42);
  const [rcTeamSize, setRcTeamSize] = useState(15);
  const [rcHourlyRate, setRcHourlyRate] = useState(120);
  const [rcIncidents, setRcIncidents] = useState(85);
  const [rcIncidentCost, setRcIncidentCost] = useState(5000);

  // Calculations for Brownfield
  const bfTraditionalTimeline = Math.round((bfProcesses / 20) + (bfIntegrations / 2) + (bfGeography === 'multi' ? 6 : 0));
  const bfVyomaTimeline = Math.round(bfTraditionalTimeline * 0.65);
  const bfTraditionalCost = (bfSIFTEs + bfInternalFTEs) * bfHourlyRate * 160 * bfTraditionalTimeline;
  const bfVyomaCost = bfTraditionalCost * 0.5;
  const bfSavings = bfTraditionalCost - bfVyomaCost;
  const bfROI = 430; // Based on requirement "ROI: 430% (in Year 1)"

  // Calculations for Release Cycle
  const rcTraditionalCycleTime = rcAvgDays;
  const rcVyomaCycleTime = Math.round(rcAvgDays * 0.35);
  const rcTraditionalAnnualCost = rcRequests * rcTeamSize * rcHourlyRate * 40; // simplified
  const rcVyomaAnnualCost = rcTraditionalAnnualCost * 0.35;
  const rcAnnualSavings = rcTraditionalAnnualCost - rcVyomaAnnualCost;
  const rcIncidentsReduced = Math.round(rcIncidents * 0.3);

  return (
    <main className="min-h-screen pt-32 pb-24 mesh-gradient bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white mb-6">
            See Your Potential <span className="gradient-text">Savings</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Calculate your ROI in 60 seconds with our interactive assessments.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 glass-dark rounded-2xl shadow-xl">
             <button 
                onClick={() => setCalculatorMode('brownfield')}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${calculatorMode === 'brownfield' ? 'bg-primary text-slate-950 shadow-lg' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
             >
               Brownfield Conversion
             </button>
             <button 
                onClick={() => setCalculatorMode('release')}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${calculatorMode === 'release' ? 'bg-primary text-slate-950 shadow-lg' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
             >
               Release Cycle Optimization
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-dark p-10 rounded-[40px] border-black/5 dark:border-white/5 shadow-2xl backdrop-blur-3xl">
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                {calculatorMode === 'brownfield' ? 'Your Conversion Parameters' : 'Your Release Parameters'}
              </h3>
              
              <div className="space-y-10">
                {calculatorMode === 'brownfield' ? (
                  <>
                    <ParameterSlider label="Processes to document" value={bfProcesses} setValue={setBfProcesses} min={50} max={2000} step={50} />
                    <ParameterToggle label="ECC Complexity" options={['low', 'med', 'high']} active={bfComplexity} setActive={setBfComplexity} />
                    <ParameterToggle label="Geography" options={['single', 'multi']} active={bfGeography} setActive={setBfGeography} />
                    <ParameterSlider label="Integration Points" value={bfIntegrations} setValue={setBfIntegrations} min={0} max={100} step={5} />
                    <div className="grid grid-cols-2 gap-4">
                       <label className="block col-span-2 text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Team Composition</label>
                       <ParameterInput label="Internal FTEs" value={bfInternalFTEs} setValue={setBfInternalFTEs} />
                       <ParameterInput label="SI Consultants" value={bfSIFTEs} setValue={setBfSIFTEs} />
                    </div>
                  </>
                ) : (
                  <>
                    <ParameterSlider label="Annual Enhancement Requests" value={rcRequests} setValue={setRcRequests} min={20} max={500} step={10} />
                    <ParameterSlider label="Avg Days per Release" value={rcAvgDays} setValue={setRcAvgDays} min={7} max={180} />
                    <ParameterInput label="Automation Team Size" value={rcTeamSize} setValue={setRcTeamSize} />
                    <ParameterSlider label="Annual Incidents" value={rcIncidents} setValue={setRcIncidents} min={0} max={300} />
                  </>
                )}
                <ParameterInput label="Avg Hourly Rate ($)" value={calculatorMode === 'brownfield' ? bfHourlyRate : rcHourlyRate} setValue={calculatorMode === 'brownfield' ? setBfHourlyRate : setRcHourlyRate} prefix="$" />
              </div>
            </div>
          </div>

          {/* Results Dashboard */}
          <div className="lg:col-span-7">
            <div className="glass-dark p-10 rounded-[40px] border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden h-full backdrop-blur-3xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-12 flex items-center justify-between">
                📊 YOUR PROJECTED IMPACT
                <span className="px-3 py-1 bg-success/20 text-success text-[10px] uppercase font-black rounded-lg">Verified Benchmarks</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">{calculatorMode === 'brownfield' ? 'Traditional Approach' : 'Current State'}</p>
                  <p className="text-md font-bold text-slate-500 mb-1">{calculatorMode === 'brownfield' ? 'Timeline:' : 'Cycle Time:'} <span className="text-slate-900 dark:text-slate-300">{calculatorMode === 'brownfield' ? `${bfTraditionalTimeline} months` : `${rcTraditionalCycleTime} days`}</span></p>
                  <p className="text-md font-bold text-slate-500">{calculatorMode === 'brownfield' ? 'Cost:' : 'Annual Cost:'} <span className="text-slate-900 dark:text-slate-300">${(calculatorMode === 'brownfield' ? bfTraditionalCost : rcTraditionalAnnualCost).toLocaleString()}</span></p>
                </div>
                <div className="p-8 rounded-[32px] bg-primary/10 border border-primary/20 shadow-xl relative overflow-hidden">
                  <p className="text-xs font-black text-primary uppercase tracking-widest mb-3">With Vyoma AI</p>
                  <p className="text-md font-bold text-slate-700 dark:text-slate-300 mb-1">{calculatorMode === 'brownfield' ? 'Timeline:' : 'Cycle Time:'} <span className="text-primary">{calculatorMode === 'brownfield' ? `${bfVyomaTimeline} months` : `${rcVyomaCycleTime} days`}</span></p>
                  <p className="text-md font-bold text-slate-700 dark:text-slate-300">{calculatorMode === 'brownfield' ? 'Cost:' : 'Annual Cost:'} <span className="text-primary">${(calculatorMode === 'brownfield' ? bfVyomaCost : rcVyomaAnnualCost).toLocaleString()}</span></p>
                </div>
              </div>

              <div className="text-center mb-12 p-12 rounded-[40px] bg-white/40 dark:bg-slate-950/50 border border-black/5 dark:border-white/10 relative overflow-hidden">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Total Savings</p>
                <p className="text-6xl md:text-8xl font-display font-black gradient-text mb-6">
                  ${(calculatorMode === 'brownfield' ? bfSavings : rcAnnualSavings).toLocaleString()}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                   <ImpactBadge label={calculatorMode === 'brownfield' ? `${bfTraditionalTimeline - bfVyomaTimeline} Months Saved` : `${(rcTraditionalCycleTime - rcVyomaCycleTime) * rcRequests} Days/Year Saved`} />
                   <ImpactBadge label={`ROI: ${calculatorMode === 'brownfield' ? bfROI : 450}%`} success />
                   <ImpactBadge label={calculatorMode === 'brownfield' ? '65% Risk Reduction' : '70% Fewer Incidents'} />
                </div>
              </div>

              <div className="space-y-4 mb-12">
                 <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Strategic Advantages</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(calculatorMode === 'brownfield' 
                      ? ["Knowledge Preservation", "Faster Time-to-Value", "Reduced Business Risk", "Future-Proof Architecture"] 
                      : ["Continuous Innovation", "Zero Deployment Blindness", "Automated Doc Updates", "Higher Service Levels"]
                    ).map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="bg-primary text-slate-950 font-black py-6 rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-primary/20">
                   Download Detailed Business Case
                </Button>
                <Button className="bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white font-black py-6 rounded-2xl text-xs uppercase tracking-widest border border-black/5 dark:border-white/10">
                   Schedule ROI Discussion
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

// UI Components
const ParameterSlider = ({ label, value, setValue, min, max, step = 1 }: any) => (
  <div className="space-y-6">
    <div className="flex justify-between items-end">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</label>
      <span className="text-2xl font-display font-black text-primary">{value}</span>
    </div>
    <input 
      type="range" 
      min={min} max={max} step={step}
      value={value} 
      onChange={(e) => setValue(parseInt(e.target.value))}
      className="w-full h-1.5 bg-black/10 dark:bg-white/5 rounded-full appearance-none cursor-pointer accent-primary"
    />
  </div>
);

const ParameterToggle = ({ label, options, active, setActive }: any) => (
  <div className="space-y-4">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</label>
    <div className="flex gap-2">
      {options.map((opt: string) => (
        <button 
          key={opt}
          onClick={() => setActive(opt)}
          className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all border ${
            active === opt 
              ? 'bg-primary/20 border-primary text-primary shadow-lg' 
              : 'bg-black/5 dark:bg-white/5 border-transparent text-slate-500'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

const ParameterInput = ({ label, value, setValue, prefix }: any) => (
  <div className="space-y-3">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</label>
    <div className="relative">
      {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">{prefix}</span>}
      <input 
        type="number" 
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value) || 0)}
        className={`w-full bg-black/5 dark:bg-white/5 border border-transparent rounded-2xl py-4 ${prefix ? 'pl-8' : 'px-4'} pr-4 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-primary/50 transition-colors text-sm`}
      />
    </div>
  </div>
);

const ImpactBadge = ({ label, success }: any) => (
  <div className={`px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest ${success ? 'bg-success/20 text-success' : 'bg-primary/10 text-primary'}`}>
    {label}
  </div>
);
