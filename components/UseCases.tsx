"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Button from "@/components/Button";

const UseCases = () => {
  const [activeTab, setActiveTab] = useState('brownfield');

  const tabs = [
    { id: 'brownfield', label: 'Brownfield S/4HANA Conversion' },
    { id: 'release', label: 'Release Optimization (Run Mode)' }
  ];

  const content = {
    brownfield: {
      problem: "Moving from SAP ECC to S/4HANA? Your biggest risk isn't the technology—it's losing critical process knowledge during the transition.",
      input: ["Existing SAP ECC system", "Scattered documentation (Word, Excel, Confluence)", "Tribal knowledge from key users"],
      output: ["Complete AS-IS process (L1-L5 BPMN)", "Automated fit-gap analysis", "Detailed RTM with RICEFW specs", "Pre-generated test scripts"],
      impact: [
        { metric: "Documentation time", without: "12-16 weeks", with: "2-3 weeks", change: "75% reduction" },
        { metric: "Fit-gap analysis", without: "8-10 weeks", with: "1-2 weeks", change: "80% reduction" },
        { metric: "Test script creation", without: "6-8 weeks", with: "1 week", change: "85% reduction" },
        { metric: "Total timeline", without: "18-24 months", with: "12-15 months", change: "35% faster" },
        { metric: "Total Cost Savings", without: "Baseline", with: "30-60% lower", change: "$2-5M savings" }
      ],
      client: {
        name: "Bacardi's Private Cloud Transformation",
        challenge: "Complex multi-country ECC to S/4HANA migration",
        result: "4 months saved on documentation, 45% reduction in testing effort"
      }
    },
    release: {
      problem: "Every SAP change request creates a ripple effect. Without proper impact analysis, you're deploying blind—risking production stability.",
      input: ["New enhancement request", "Current process documentation", "System configuration baseline"],
      output: ["Downstream impact analysis", "Auto-updated documentation", "Pre-generated regression tests", "Deployment risk assessment"],
      impact: [
        { metric: "Impact analysis", without: "3-5 days", with: "4-8 hours", change: "85% reduction" },
        { metric: "Doc updates", without: "2-3 days", with: "Automatic", change: "100% reduction" },
        { metric: "Test script creation", without: "2-4 days", with: "4 hours", change: "90% reduction" },
        { metric: "Release cycle time", without: "4-6 weeks", with: "1.5-2 weeks", change: "65% faster" },
        { metric: "Annual Savings", without: "Baseline", with: "$500K-1.2M", change: "3-5x ROI" }
      ],
      client: {
        name: "ACG's Continuous Innovation",
        challenge: "60+ enhancement requests per year, slow release cycles",
        result: "Cycle time reduced from 6 weeks to 10 days, 70% cost reduction"
      }
    }
  };

  const comingSoon = [
    { title: "Greenfield Implementation", useCase: "AI-guided configuration", date: "Q2 2026" },
    { title: "Legacy Instance Preservation", useCase: "Document before decommissioning", date: "Q3 2026" },
    { title: "Multi-ERP Portfolio", useCase: "Oracle, Microsoft Dynamics", date: "Q4 2026" },
    { title: "SAP Grow Optimization", useCase: "Specialized Public Cloud workflows", date: "Beta (DharmaLife)" }
  ];

  const current = content[activeTab as keyof typeof content];

  return (
    <section id="use-cases" className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Use Cases That <span className="gradient-text">Matter</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Explore how Vyoma AI transforms specific SAP initiatives.</p>
        </div>

        <div className="flex justify-center mb-16 px-4">
          <div className="inline-flex p-1.5 glass-dark rounded-2xl shadow-2xl backdrop-blur-3xl overflow-x-auto max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-500 whitespace-nowrap active:scale-95 ${
                  activeTab === tab.id 
                    ? 'bg-primary text-slate-950 shadow-[0_0_15px_rgba(0,209,255,0.4)]' 
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-24">
          {/* Left Column: Problem & Flow */}
          <div className="space-y-8 animate-fade-in" key={activeTab}>
            <div className="glass-dark p-8 rounded-[32px] border-l-4 border-l-primary relative overflow-hidden">
               <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 block">The Problem</span>
               <p className="text-xl md:text-2xl text-slate-900 dark:text-white leading-tight font-display font-medium">
                  "{current.problem}"
               </p>
            </div>

            <div className="glass-dark p-8 rounded-[32px] border-white/5">
              <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest mb-8 flex items-center gap-3">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                How It Works
              </h4>
              
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-[10px] uppercase font-black text-slate-500 mb-3">Input Data Source</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {current.input.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                        <div className="w-1 h-1 rounded-full bg-slate-600"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center py-2">
                  <div className="px-6 py-2 rounded-full bg-primary text-slate-950 text-[10px] font-black uppercase tracking-widest animate-pulse shadow-[0_0_20px_rgba(0,209,255,0.3)]">
                    AI Processing Layer
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                  <p className="text-[10px] uppercase font-black text-primary mb-3">Intelligent Output</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {current.output.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="glass-dark p-8 rounded-[32px] border-white/5 bg-accent/5">
               <h4 className="text-xs font-black text-accent uppercase tracking-widest mb-4">Client Success</h4>
               <p className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">{current.client.name}</p>
               <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{current.client.challenge}</p>
               <div className="text-sm font-bold text-slate-900 dark:text-white py-3 px-4 bg-white/5 rounded-xl border border-white/5">
                  Result: {current.client.result}
               </div>
            </div>
          </div>

          {/* Right Column: Impact Table */}
          <div className="animate-fade-in flex flex-col h-full" key={`${activeTab}-impact`}>
            <div className="glass-dark flex-grow rounded-[32px] overflow-hidden border-white/5 flex flex-col shadow-2xl">
              <div className="bg-white/5 p-8 border-b border-white/5">
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">Business Impact</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[500px]">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900/40">
                      <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Metric</th>
                      <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Without Vyoma</th>
                      <th className="px-6 py-5 text-[10px] font-black text-primary uppercase tracking-widest text-right">With Vyoma</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {current.impact.map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-5 font-bold text-slate-700 dark:text-slate-300 text-sm">{row.metric}</td>
                        <td className="px-6 py-5 text-slate-500 text-center text-sm">{row.without}</td>
                        <td className="px-6 py-5 text-right">
                            <div className="flex flex-col items-end">
                                <span className="text-slate-900 dark:text-white font-black text-sm">{row.with}</span>
                                <span className="text-[10px] text-success font-black uppercase tracking-tighter">{row.change}</span>
                            </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-8 mt-auto">
                 <Link href="/roi-calculator" className="block">
                    <Button className="w-full bg-primary hover:bg-primary-dark text-slate-950 rounded-2xl py-5 font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                        Calculate Your {activeTab === 'brownfield' ? 'Brownfield' : 'Release Cycle'} ROI
                    </Button>
                 </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div>
           <div className="flex items-center gap-4 mb-10">
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">Coming Soon:</h3>
              <div className="h-px flex-grow bg-slate-200 dark:bg-white/10"></div>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {comingSoon.map((item, i) => (
                <div key={i} className="glass-dark p-6 rounded-3xl border border-white/5 flex flex-col hover:border-primary/20 transition-all duration-300 group">
                   <div className="flex justify-between items-start mb-4">
                      <span className="px-2 py-0.5 rounded text-[8px] font-black bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-500 uppercase tracking-widest group-hover:bg-primary group-hover:text-slate-950 transition-colors">
                        {item.date}
                      </span>
                   </div>
                   <h4 className="text-md font-display font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                   <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.useCase}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
