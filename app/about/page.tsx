"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function About() {
  const roadmap = [
    { q: "Q1", title: "Self-Service Portal", desc: "Open beta for instant AI-led document ingestion and BPMN generation." },
    { q: "Q2", title: "S/4HANA Fit-Gap Engine", desc: "Automated comparison against SAP Best Practices 2025 library." },
    { q: "Q3", title: "Regression Suite Gen", desc: "One-click generation of Tosca/UFT test scripts from process maps." },
    { q: "Q4", title: "Cross-ERP Expansion", desc: "Support for Oracle Cloud ERP and Microsoft Dynamics 365." }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Origin Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32 animate-fade-in">
           <div>
              <div className="inline-flex py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
                 Our Origin
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-black text-slate-900 dark:text-white mb-8 leading-tight">
                 Born in the Trenches of <span className="gradient-text">Complex ERP</span>
              </h1>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                 <p>
                    For two decades, our founders watched SAP transformations stall. Not because of bad technology, but because of "process amnesia"—the loss of tribal knowledge during the shift from ECC to S/4HANA.
                 </p>
                 <p>
                    Vyoma was built to solve this once and for all. By combining deep SAP domain expertise with proprietary LLM orchestration, we've created the AI layer that ensures your transformation is predictable, profitable, and painless.
                 </p>
              </div>
           </div>
           <div className="relative">
              <div className="aspect-square rounded-[60px] bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 mesh-gradient opacity-30"></div>
                  <div className="relative z-10 text-center p-12">
                     <p className="text-5xl font-display font-black text-slate-900 dark:text-white mb-2">30+</p>
                     <p className="text-sm font-black text-slate-500 uppercase tracking-widest">Combined Years in SAP Consulting</p>
                  </div>
              </div>
           </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
           {[
             { title: "Predictable", desc: "No more timeline surprises. Accurate scope from day one." },
             { title: "Profitable", desc: "Standardize on SAP best practices to lower TCO by 30-60%." },
             { title: "Painless", desc: "Auto-document and auto-test. Let the AI do the heavy lifting." }
           ].map((item, i) => (
             <div key={i} className="glass-dark p-10 rounded-[40px] border-black/5 dark:border-white/5">
                <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white mb-4 text-primary">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        {/* Roadmap */}
        <div className="mb-32">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 dark:text-white mb-4">The Future of <span className="gradient-text">Process Intelligence</span></h2>
              <p className="text-slate-500 font-medium">Our roadmap is driven by one metric: client time-to-value.</p>
           </div>
           
           <div className="relative">
              {/* Desktop Timeline Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-white/10 -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                 {roadmap.map((item, i) => (
                   <div key={i} className="glass-dark p-8 rounded-[32px] border-black/5 dark:border-white/10 hover:border-primary/50 transition-all group">
                      <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-slate-950 transition-all font-black text-[10px] leading-none text-center">
                         {item.q}
                      </div>
                      <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Join the Journey CTA */}
        <div className="p-12 md:p-20 rounded-[60px] bg-slate-900 text-white text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-[100px]"></div>
           <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-black mb-6">Want to Shape the Future?</h2>
              <p className="text-slate-400 mb-10 text-lg">We're always looking for SAP experts and AI engineers who believe there's a better way to innovate.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button className="bg-primary text-slate-950 font-black rounded-2xl px-10 py-5">View Open Roles</Button>
                 <Button className="bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl px-10 py-5">Partner With Us</Button>
              </div>
           </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
