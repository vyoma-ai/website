"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Pricing() {
  const [model, setModel] = useState<'brownfield' | 'subscription'>('brownfield');

  const brownfieldPlans = [
    {
      name: "STARTER",
      target: "< 300 processes",
      duration: "3-6 months",
      investment: "$150K-250K",
      savings: "$600K-1.2M",
      roi: "300-400%",
      features: [
        "Platform license (project duration)",
        "AI-powered AS-IS documentation",
        "Fit-gap analysis automation",
        "RTM generation",
        "Test script creation",
        "40 hours expert consulting"
      ]
    },
    {
      name: "ENTERPRISE",
      target: "300-1,000 processes",
      duration: "6-12 months",
      investment: "$400K-800K",
      savings: "$2M-5M",
      roi: "400-500%",
      popular: true,
      features: [
        "Everything in Starter",
        "Live SAP system connection",
        "Custom integration workflows",
        "Private knowledge base setup",
        "120 hours expert consulting",
        "Dedicated customer success manager"
      ]
    },
    {
      name: "GLOBAL",
      target: "> 1,000 processes",
      duration: "12-24 months",
      investment: "Custom ($1.2M-3M)",
      savings: "$5M-15M",
      roi: "400-600%",
      features: [
        "Everything in Enterprise",
        "Multi-instance support",
        "Custom AI model training",
        "24/7 support",
        "Unlimited consulting hours",
        "Co-delivery with your SI"
      ]
    }
  ];

  const subscriptionPlans = [
    {
      name: "TEAM LICENSE",
      target: "1-3 SAP instances",
      users: "Up to 25 named users",
      investment: "$120K / year",
      savings: "$500K-800K",
      roi: "400-600%",
      features: [
        "Release cycle automation",
        "Impact analysis for changes",
        "Auto-updated documentation",
        "Test script generation",
        "Private knowledge base (100GB)",
        "Email support (24-hour response)"
      ]
    },
    {
      name: "ENTERPRISE LICENSE",
      target: "3-10 SAP instances",
      users: "Up to 100 named users",
      investment: "$350K / year",
      savings: "$1.5M-2.5M",
      roi: "400-700%",
      popular: true,
      features: [
        "Everything in Team",
        "Priority support (4-hour response)",
        "Quarterly business reviews",
        "Private knowledge base (1TB)",
        "Custom workflow automation"
      ]
    },
    {
      name: "GLOBAL LICENSE",
      target: "10+ instances",
      users: "Unlimited users",
      investment: "Custom ($800K-2M)",
      savings: "$3M-8M",
      roi: "400-800%",
      features: [
        "Everything in Enterprise",
        "24/7 support",
        "Dedicated customer success team",
        "Private knowledge base (unlimited)",
        "Custom AI model fine-tuning",
        "White-glove onboarding"
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white mb-6">
             Transparent Pricing for <span className="gradient-text">Predictable ROI</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
             Our pricing is designed to deliver 3-5x ROI in Year 1. If you're not saving significantly more than you invest, we're not doing our job.
          </p>
        </div>

        {/* Model Toggle */}
        <div className="flex justify-center mb-16">
           <div className="inline-flex p-1.5 glass-dark rounded-2xl shadow-xl overflow-x-auto max-w-full">
              <button 
                onClick={() => setModel('brownfield')}
                className={`px-8 py-3.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${model === 'brownfield' ? 'bg-primary text-slate-950 shadow-lg' : 'text-slate-500'}`}
              >
                Brownfield Transformation
              </button>
              <button 
                onClick={() => setModel('subscription')}
                className={`px-8 py-3.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${model === 'subscription' ? 'bg-primary text-slate-950 shadow-lg' : 'text-slate-500'}`}
              >
                Ongoing Optimization
              </button>
           </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
           {(model === 'brownfield' ? brownfieldPlans : subscriptionPlans).map((plan, i) => (
             <div key={i} className={`glass-dark p-10 rounded-[40px] border flex flex-col transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'border-primary/50 ring-4 ring-primary/5 shadow-2xl shadow-primary/10' : 'border-black/5 dark:border-white/5'}`}>
                {plan.popular && (
                  <div className="text-[10px] font-black tracking-widest text-primary mb-4 bg-primary/10 inline-block px-3 py-1 rounded-full w-fit">MOST POPULAR</div>
                )}
                <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-sm font-bold text-slate-500 mb-6">{plan.target}</p>
                
                <div className="mb-8">
                   <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Investment</p>
                   <p className="text-3xl font-display font-black text-slate-900 dark:text-white tracking-tighter">{plan.investment}</p>
                   <p className="text-xs text-slate-500 font-medium">{(plan as any).duration || (plan as any).users}</p>
                </div>

                <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10 mb-8">
                   <div className="grid grid-cols-2 gap-4">
                      <div>
                         <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Typical Savings</p>
                         <p className="font-bold text-slate-900 dark:text-white">{plan.savings}</p>
                      </div>
                      <div className="text-right">
                         <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">ROI</p>
                         <p className="font-bold text-slate-900 dark:text-white">{plan.roi}</p>
                      </div>
                   </div>
                </div>

                <div className="space-y-4 mb-12 flex-grow">
                   {plan.features.map((feature, idx) => (
                     <div key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{feature}</span>
                     </div>
                   ))}
                </div>

                <Button className={`${plan.popular ? 'bg-primary text-slate-950 shadow-xl shadow-primary/20' : 'bg-slate-200 dark:bg-white/5 text-slate-900 dark:text-white border border-black/5 dark:border-white/10'} w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs`}>
                   Get Started →
                </Button>
             </div>
           ))}
        </div>

        {/* Add-On Services */}
        <div className="glass-dark p-12 rounded-[40px] border-black/5 dark:border-white/5">
           <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-10 text-center">Add-On Services</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Expert Delivery", val: "$200-350/hour", desc: "Vyoma team completes docs/testing" },
                { name: "Custom Integration", val: "$50K-150K", desc: "Connect to non-SAP systems" },
                { name: "Training Program", val: "$25K-75K", desc: "Enterprise-wide certification" },
                { name: "Managed Services", val: "$50K-150K/year", desc: "We manage your process intelligence" }
              ].map((service, i) => (
                <div key={i} className="text-center md:text-left">
                   <h4 className="text-md font-bold text-slate-900 dark:text-white mb-1">{service.name}</h4>
                   <p className="text-primary font-black text-sm mb-2">{service.val}</p>
                   <p className="text-xs text-slate-500">{service.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
