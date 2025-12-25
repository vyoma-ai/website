"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Careers() {
  const roles = [
    { title: "SAP Process Architect", type: "Remote", salary: "$120k-180k", tags: ["SAP ECC", "S/4HANA", "BPMN"] },
    { title: "Senior LLM Engineer", type: "Remote", salary: "$150k-220k", tags: ["Python", "PyTorch", "RAG"] },
    { title: "Product Marketing Manager", type: "Remote", salary: "$100k-140k", tags: ["B2B SaaS", "SAP Ecosystem"] }
  ];

  const benefits = [
    { title: "Remote-First", desc: "Work from anywhere in the world, on your own schedule." },
    { title: "Unlimited PTO", desc: "We trust you to manage your time and take breaks when you need them." },
    { title: "Equity Options", desc: "Own a piece of the future of SAP intelligence." },
    { title: "Growth Budget", desc: "$5k/year for SAP certifications and AI research." }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center mb-24 animate-fade-in">
           <div className="inline-flex py-1 px-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest mb-6">
              Join the Mission
           </div>
           <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 dark:text-white mb-6">
              Build the Future of <br /><span className="gradient-text">SAP Intelligence</span>
           </h1>
           <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
              We're a team of SAP veterans and AI enthusiasts disrupting a $200B industry. Join us in making complex ERP simple.
           </p>
        </div>

        {/* Culture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
           <div className="p-10 rounded-[48px] bg-slate-900 text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-2xl font-display font-bold mb-4 relative z-10">Outcome-Oriented</h3>
              <p className="text-slate-400 relative z-10">We don't care about hours logged. We care about the impact we deliver for our clients. No bureaucracy, just results.</p>
           </div>
           <div className="p-10 rounded-[48px] bg-white border border-black/5 dark:bg-white/5 dark:border-white/5 transition-all">
              <h3 className="text-2xl font-display font-bold mb-4 text-slate-900 dark:text-white">SAP + AI Geek Culture</h3>
              <p className="text-slate-600 dark:text-slate-400">If you get excited about LLM orchestration or BPMN 2.0 optimization, you've found your tribe. We love deep domain knowledge.</p>
           </div>
        </div>

        {/* Roles */}
        <div className="mb-32">
           <h2 className="text-3xl font-display font-black text-slate-900 dark:text-white mb-12">Open Opportunities</h2>
           <div className="space-y-6">
              {roles.map((role, i) => (
                <div key={i} className="glass-dark p-8 rounded-[32px] border-black/5 dark:border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/50 transition-all">
                   <div>
                      <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">{role.title}</h4>
                      <div className="flex flex-wrap gap-2">
                         <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">{role.type}</span>
                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-black/5 dark:bg-white/5 px-2 py-1 rounded">{role.salary}</span>
                         {role.tags.map(tag => (
                           <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-slate-400 border border-black/5 dark:border-white/10 px-2 py-1 rounded">{tag}</span>
                         ))}
                      </div>
                   </div>
                   <Button className="bg-primary text-slate-950 font-black px-8 py-4 rounded-xl text-xs uppercase tracking-widest whitespace-nowrap">
                      Apply Now
                   </Button>
                </div>
              ))}
           </div>
        </div>

        {/* Benefits */}
        <div className="mb-32">
           <h2 className="text-3xl font-display font-black text-slate-900 dark:text-white mb-12 text-center">Beyond the Paycheck</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="text-center p-8">
                   <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{benefit.title}</h4>
                   <p className="text-sm text-slate-500 dark:text-slate-400">{benefit.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Referral */}
        <div className="glass-dark p-12 rounded-[48px] border-dashed border-2 border-slate-300 dark:border-white/10 text-center">
           <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">Know someone perfect for us?</h3>
           <p className="text-slate-500 mb-6 font-medium">We offer a $5,000 referral bonus for any successful hire.</p>
           <p className="text-primary font-black uppercase tracking-widest text-xs">talent@vyoma.ai</p>
        </div>

      </div>
      <Footer />
    </main>
  );
}
