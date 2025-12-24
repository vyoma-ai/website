"use client";

import React, { useState } from 'react';
import Button from "@/components/Button";

const UseCases = () => {
  const [activeTab, setActiveTab] = useState('brownfield');

  const tabs = [
    { id: 'brownfield', label: 'Brownfield Conversion' },
    { id: 'release', label: 'Release Optimization' }
  ];

  const content = {
    brownfield: {
      problem: "Moving from SAP ECC to S/4HANA? Your biggest risk isn't the technology—it's losing critical process knowledge during the transition.",
      does: [
        "Live SAP ECC connection for rapid discovery",
        "Multi-source intelligence (docs, tickets, tribal knowledge)",
        "Automated L1-L5 BPMN Generation",
        "Fit-Gap analysis vs 2024 SAP Best Practices"
      ],
      impact: [
        { metric: "Documentation", without: "16 weeks", with: "10 days", impact: "90% faster" },
        { metric: "Fit-gap Analysis", without: "10 weeks", with: "5 days", impact: "95% faster" },
        { metric: "Test Readiness", without: "8 weeks", with: "3 days", impact: "96% faster" }
      ]
    },
    release: {
      problem: "Traditional SAP releases are slow, manual, and risky. Deployment blindness causes production outages and user frustration.",
      does: [
        "Continuous AI-powered impact assessments",
        "Automated regression test suite generation",
        "Live system configuration monitoring",
        "Automated documentation updates with every change"
      ],
      impact: [
        { metric: "Impact Assessment", without: "5 days", with: "30s", impact: "Instant" },
        { metric: "Deployment Risk", without: "High", with: "Zero", impact: "Predictive" },
        { metric: "Release Velocity", without: "Quarterly", with: "Weekly", impact: "4x increase" }
      ]
    }
  };

  const current = content[activeTab as keyof typeof content];

  return (
    <section id="use-cases" className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Use Cases That <span className="gradient-text">Matter</span>
          </h2>
        </div>

        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 glass-dark rounded-2xl shadow-2xl backdrop-blur-3xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-500 active:scale-95 ${
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-6 animate-fade-in" key={activeTab}>
            <div className="glass-dark p-10 rounded-[32px] border-l-4 border-l-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Challenge</h4>
              <p className="text-2xl text-slate-900 dark:text-white leading-tight font-display font-medium">
                {current.problem}
              </p>
            </div>

            <div className="glass-dark p-10 rounded-[32px] border-white/5 h-full">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                The Vyoma Solution
              </h4>
              <ul className="space-y-6">
                {current.does.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <span className="mt-1 w-6 h-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-bold group-hover:bg-primary group-hover:text-slate-950 transition-all">
                       {i + 1}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-primary dark:group-hover:text-slate-200 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="animate-fade-in h-full" key={`${activeTab}-impact`}>
            <div className="glass-dark h-full rounded-[32px] overflow-hidden border-white/5 flex flex-col">
              <div className="bg-white/5 p-8 border-b border-white/5">
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">Strategic Impact</h3>
              </div>
              <div className="flex-grow">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900/40">
                      <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Metric</th>
                      <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest text-center">Typical</th>
                      <th className="px-8 py-5 text-xs font-bold text-primary uppercase tracking-widest text-right">With Vyoma</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {current.impact.map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-all duration-300 hover:scale-[1.01] group">
                        <td className="px-8 py-6 font-bold text-slate-700 dark:text-slate-300 group-hover:text-primary dark:group-hover:text-white">{row.metric}</td>
                        <td className="px-8 py-6 text-slate-500 text-center">{row.without}</td>
                        <td className="px-8 py-6 text-right">
                            <div className="inline-flex flex-col items-end">
                                <span className="text-slate-900 dark:text-white font-bold">{row.with}</span>
                                <span className="text-[10px] text-success font-black uppercase tracking-tighter">{row.impact}</span>
                            </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-8 mt-auto">
                 <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white rounded-2xl py-4 font-bold border border-white/10">
                    Download Full Case Study
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
