import React from 'react';

const WhatIsVyoma = () => {
  const pillars = [
    {
      title: "Auto-Document Your Processes",
      description: "Generate complete process documentation from system + docs. No manual recording required.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      stat: "L1-L5 BPMN"
    },
    {
      title: "AI-Powered Impact Analysis",
      description: "Predict downstream effects of changes across your entire SAP landscape before they cause stable regressions.",
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      stat: "Connected Graph"
    },
    {
      title: "Accelerate Innovation",
      description: "Reduce release cycles by 70% with auto-generated test scripts and automated impact assessments.",
      icon: (
        <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      stat: "70% Faster Cycles"
    }
  ];

  const differentiators = [
    { label: "Documentation Time", traditional: "12-16 weeks manual", vyoma: "2-3 weeks automated" },
    { label: "Process Knowledge", traditional: "Siloed knowledge", vyoma: "Connected knowledge graph" },
    { label: "Testing Strategy", traditional: "Reactive testing", vyoma: "Predictive impact analysis" },
    { label: "Manual Effort", traditional: "60-80% effort", vyoma: "30-40% effort" }
  ];

  const uvps = [
    { title: "System-Connected Intelligence", desc: "Optional live SAP connection for real-time process mapping." },
    { title: "Proprietary Knowledge Base", desc: "Industry best practices + consulting frameworks unavailable in public LLMs." },
    { title: "Your Private Knowledge Vault", desc: "Store and query your organization's proprietary SAP knowledge." },
    { title: "Risk-Free Guarantee", desc: "We deliver the claimed impact or complete the work ourselves." }
  ];

  return (
    <section id="what-is-vyoma" className="py-24 bg-slate-50 dark:bg-slate-950 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-6">
            The AI Layer Your SAP <br />
            <span className="gradient-text">Transformation Needs</span>
          </h2>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pillars.map((pillar, index) => (
            <div key={index} className="glass-dark p-10 rounded-[40px] border-black/5 dark:border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">{pillar.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6 italic">
                {pillar.description}
              </p>
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                {pillar.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Differentiators Table */}
        <div className="mb-24">
          <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-10 text-center">How We Compare</h3>
          <div className="glass-dark rounded-[40px] border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-3 bg-black/5 dark:bg-white/5 p-6 border-b border-black/5 dark:border-white/5">
              <div className="text-sm font-black uppercase tracking-widest text-slate-400">Dimension</div>
              <div className="text-sm font-black uppercase tracking-widest text-slate-400">Traditional Approach</div>
              <div className="text-sm font-black uppercase tracking-widest text-primary">With Vyoma AI</div>
            </div>
            {differentiators.map((diff, index) => (
              <div key={index} className="grid grid-cols-3 p-6 border-b border-black/5 dark:border-white/5 last:border-0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <div className="text-sm font-bold text-slate-900 dark:text-white">{diff.label}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{diff.traditional}</div>
                <div className="text-sm font-bold text-primary">{diff.vyoma}</div>
              </div>
            ))}
          </div>
        </div>

        {/* UVPs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {uvps.map((uvp, index) => (
            <div key={index} className="p-8 rounded-[32px] bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-primary/50 transition-all duration-300">
              <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-3">{uvp.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{uvp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsVyoma;
