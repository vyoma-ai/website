"use client";

import React, { useState } from 'react';

const UseCases = () => {
  const [activeTab, setActiveTab] = useState('brownfield');

  const tabs = [
    { id: 'brownfield', label: 'Brownfield S/4HANA Conversion' },
    { id: 'release', label: 'Release Cycle Optimization' }
  ];

  const content = {
    brownfield: {
      problem: "Moving from SAP ECC to S/4HANA? Your biggest risk isn't the technology—it's losing critical process knowledge during the transition.",
      does: [
        "Existing SAP ECC system (optional live connection)",
        "Scattered documentation (Word, Excel, Confluence, SharePoint)",
        "Tribal knowledge from key users",
        "Complete AS-IS process documentation (L1-L5 BPMN)",
        "Automated fit-gap analysis vs S/4HANA best practices"
      ],
      impact: [
        { metric: "Documentation time", without: "12-16 weeks", with: "2-3 weeks", impact: "75% reduction" },
        { metric: "Fit-gap analysis", without: "8-10 weeks", with: "1-2 weeks", impact: "80% reduction" },
        { metric: "Test script creation", without: "6-8 weeks", with: "1 week", impact: "85% reduction" },
        { metric: "Total timeline", without: "18-24 months", with: "12-15 months", impact: "35% faster" }
      ]
    },
    release: {
      problem: "Every SAP change request creates a ripple effect. Without proper impact analysis, you're deploying blind—risking production stability.",
      does: [
        "New requirement or enhancement request",
        "Current process documentation",
        "System configuration baseline",
        "Downstream impact analysis (affected processes, integrations)",
        "Auto-updated process documentation reflecting changes"
      ],
      impact: [
        { metric: "Impact analysis", without: "3-5 days", with: "Minutes", impact: "98% faster" },
        { metric: "Regression testing", without: "2-3 weeks", with: "3-4 days", impact: "80% reduction" },
        { metric: "Documentation updates", without: "Weeks (Manual)", with: "Instant (AI)", impact: "100% automated" },
        { metric: "Release frequency", without: "Quarterly", with: "Monthly/Bi-weekly", impact: "3x velocity" }
      ]
    }
  };

  const current = content[activeTab as keyof typeof content];

  return (
    <section id="use-cases" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Use Cases That Matter</h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white rounded-2xl shadow-sm border border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeTab === tab.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 animate-fade-in" key={activeTab}>
            <div className="bg-white p-8 rounded-3xl border border-red-50 border-l-4 border-l-accent shadow-sm">
              <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-3">The Problem</h4>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                {current.problem}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-6 underline decoration-primary decoration-4 underline-offset-8">What Vyoma Does:</h4>
              <ul className="space-y-4">
                {current.does.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-primary text-xs font-bold">
                       {i + 1}
                    </span>
                    <span className="text-slate-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="animate-fade-in" key={`${activeTab}-impact`}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              <div className="bg-primary p-6 text-white font-bold text-xl">
                Impact on Your Timeline:
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50">
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Metric</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-center">Without Vyoma</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-center">With Vyoma</th>
                      <th className="px-6 py-4 text-xs font-bold text-primary uppercase tracking-widest text-right">Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {current.impact.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-700">{row.metric}</td>
                        <td className="px-6 py-4 text-slate-500 text-center">{row.without}</td>
                        <td className="px-6 py-4 text-slate-900 font-bold text-center">{row.with}</td>
                        <td className="px-6 py-4 text-success font-bold text-right">{row.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
