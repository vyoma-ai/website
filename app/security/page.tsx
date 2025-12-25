"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Security() {
  const principles = [
    { title: "No Data Training", desc: "We never use client process data or documentation to train our base AI models. Your IP remains yours." },
    { title: "Tenant Isolation", desc: "Physical and logical separation of data at rest and in transit. No cross-client data leak risk." },
    { title: "Zero Trust Architecture", desc: "Identity-aware proxy for all internal services with mandatory MFA and periodic rotations." }
  ];

  const compliance = [
    { name: "SOC 2 Type II", status: "In Progress (Audit Q1 2025)", desc: "Formal validation of security, availability, and confidentiality." },
    { name: "ISO 27001", status: "Compliant", desc: "International standard for information security management systems." },
    { name: "GDPR / CCPA", status: "Compliant", desc: "Full data sovereignty and right-to-be-forgotten protocols." }
  ];

  const deployment = [
    { title: "Public SaaS", desc: "Multi-tenant architecture in premium AWS/Azure regions with dedicated encryption keys." },
    { title: "Private Cloud (VPC)", desc: "Deploy within your organization's own VPC for maximum network control." },
    { title: "On-Prem / Air-Gapped", desc: "Self-contained deployment for high-security environments with no external egress." }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24 animate-fade-in">
           <div className="inline-flex py-1 px-4 rounded-full bg-success/10 border border-success/20 text-success text-[10px] font-black uppercase tracking-widest mb-6">
              Enterprise Grade Security
           </div>
           <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 dark:text-white mb-6">
              Your Knowledge, <br /><span className="gradient-text">Secured.</span>
           </h1>
           <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
             Vyoma is built on a foundation of data sovereignty and architectural rigor. We protect your organization's most valuable asset: its tribal knowledge.
           </p>
        </div>

        {/* Security Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
           {principles.map((p, i) => (
             <div key={i} className="glass-dark p-10 rounded-[40px] border-black/5 dark:border-white/5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{p.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{p.desc}</p>
             </div>
           ))}
        </div>

        {/* Deployment Options */}
        <div className="mb-32">
           <h2 className="text-3xl font-display font-black text-slate-900 dark:text-white mb-12">Flexible Deployment</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deployment.map((d, i) => (
                <div key={i} className="p-10 rounded-[48px] bg-white border border-black/5 dark:bg-white/5 dark:border-white/5 hover:border-accent/50 transition-all group">
                   <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-accent transition-colors">{d.title}</h3>
                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{d.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Compliance */}
        <div className="glass-dark p-12 rounded-[60px] border-black/5 dark:border-white/10">
           <h2 className="text-3xl font-display font-black text-slate-900 dark:text-white mb-12 text-center">Compliance Standards</h2>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {compliance.map((c, i) => (
                <div key={i} className="text-center lg:text-left">
                   <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-1">{c.name}</h4>
                   <p className={`text-[10px] font-black uppercase tracking-widest mb-4 inline-block px-3 py-1 rounded-full ${c.status === 'Compliant' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'}`}>
                      {c.status}
                   </p>
                   <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{c.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Security Connectivity CTA */}
        <div className="mt-32 p-12 rounded-[40px] bg-slate-200/50 dark:bg-white/5 border border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="max-w-xl">
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">Secure Connectivity</h3>
              <p className="text-slate-500 font-medium">We connect to your SAP instances via SAP Secure Connector, VPN, or SNC. Zero data crosses the public internet unencrypted.</p>
           </div>
           <div className="flex-shrink-0">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Request Security Specs</p>
              <p className="text-primary font-black text-lg">security@vyoma.ai</p>
           </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
