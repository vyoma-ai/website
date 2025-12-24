import React from 'react';

const AIFeatures = () => {
  const features = [
    {
      title: "Auto-Document Your Processes",
      description: "Harness AI to ingest legacy documentation and live system data, instantly generating complete BPMN 2.0 process maps with zero manual effort.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      className: "md:col-span-2",
      details: ["Legacy Document Ingestion", "Live System Analysis", "BPMN 2.0 Export"]
    },
    {
      title: "Predictive Impact",
      description: "Identify downstream risks across your entire SAP landscape before they happen.",
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      className: "md:col-span-1",
      details: ["Downstream Risk Alert", "Landscape Visibility", "Predictive Analytics"]
    },
    {
      title: "Accelerated Innovation",
      description: "Reduce release cycles by 70% with auto-generated test scripts and guided sandboxes.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        </svg>
      ),
      className: "md:col-span-1",
      details: ["Auto-Generated Scripts", "Guided Sandboxes", "70% Cycle Reduction"]
    },
    {
      title: "SAP Certified AI Engine",
      description: "Our proprietary Knowledge Base combines industry best practices with deep SAP technical expertise, validated and certified by SAP for maximum precision.",
      icon: (
        <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      className: "md:col-span-2",
      details: ["SAP Validated", "Industry Best Practices", "Deep SAP Expertise"]
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-950 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-6">
            AI Layer Your SAP <br />
            <span className="gradient-text">Transformation Needs</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Moving beyond manual processes to intelligent automation and precise execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`glass-dark p-8 rounded-[32px] border-black/5 dark:border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 group flex flex-col ${feature.className}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(0,209,255,0.1)]">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8 flex-grow">
                {feature.description}
              </p>
              
              <div className="space-y-4">
                {feature.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-500 dark:text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,209,255,0.5)]"></div>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="glass-dark p-10 rounded-[40px] border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-3xl bg-accent/10 flex items-center justify-center text-accent">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">Your Private Knowledge Vault</h4>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Enterprise-grade security. Your data stays in your tenant, always protected and private.</p>
              </div>
           </div>
           
           <div className="glass-dark p-10 rounded-[40px] border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center gap-8 bg-primary/5">
              <div className="w-20 h-20 rounded-3xl bg-success/10 flex items-center justify-center text-success">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">Risk-Free Guarantee</h4>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Don't see the documented efficiencies? You don't pay. Performance-backed assurance.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
