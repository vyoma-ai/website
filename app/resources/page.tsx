"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Resources() {
  const categories = [
    { title: "Whitepapers", count: 12, icon: "📄" },
    { title: "Client Stories", count: 8, icon: "🏆" },
    { title: "Product Guides", count: 15, icon: "📚" },
    { title: "Webinars", count: 24, icon: "🎥" }
  ];

  const featuredResources = [
    {
      title: "The 2025 SAP Modernization Guide",
      category: "Whitepaper",
      desc: "A comprehensive framework for ECC to S/4HANA transitions using AI process intelligence.",
      image: "bg-primary/20"
    },
    {
      title: "How Bacardi Saved 4 Months",
      category: "Case Study",
      desc: "A deep dive into the automated documentation of 400+ complex SAP processes.",
      image: "bg-accent/20"
    },
    {
      title: "AI vs. Manual Documentation",
      category: "Infographic",
      desc: "Visualizing the 70% reduction in effort achieved through LLM orchestration.",
      image: "bg-success/20"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24 animate-fade-in">
           <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 dark:text-white mb-6">
              Resources & <br /><span className="gradient-text">Thought Leadership</span>
           </h1>
           <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
             Expert insights on SAP transformation, AI orchestration, and the future of enterprise software.
           </p>
        </div>

        {/* Search & Categories */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
           {categories.map((cat, i) => (
             <div key={i} className="glass-dark p-8 rounded-[32px] border-black/5 dark:border-white/5 text-center hover:border-primary/50 transition-all cursor-pointer group">
                <div className="text-3xl mb-4 group-hover:scale-125 transition-transform">{cat.icon}</div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{cat.title}</h4>
                <p className="text-xs text-slate-500 font-black uppercase tracking-widest">{cat.count} Items</p>
             </div>
           ))}
        </div>

        {/* Featured */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
           {featuredResources.map((res, i) => (
             <div key={i} className="glass-dark rounded-[40px] border-black/5 dark:border-white/5 overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-500">
                <div className={`h-48 ${res.image} relative`}>
                   <div className="absolute inset-0 mesh-gradient opacity-20"></div>
                </div>
                <div className="p-8 flex-grow">
                   <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-3">{res.category}</p>
                   <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">{res.title}</h3>
                   <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">{res.desc}</p>
                   <Button className="w-full bg-slate-200 dark:bg-white/5 text-slate-900 dark:text-white font-bold py-4 rounded-2xl text-xs uppercase tracking-widest group-hover:bg-primary group-hover:text-slate-950 transition-all">
                      Read More
                   </Button>
                </div>
             </div>
           ))}
        </div>

        {/* Newsletter */}
        <div className="p-12 md:p-20 rounded-[60px] bg-primary relative overflow-hidden text-slate-900">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                 <h2 className="text-3xl md:text-5xl font-display font-black mb-4">Stay Ahead of the Cycle</h2>
                 <p className="text-slate-800 font-medium">Join 2,500+ SAP leaders receiving our monthly briefing on AI execution.</p>
              </div>
              <div className="flex gap-4">
                 <input type="email" placeholder="work@company.com" className="flex-grow bg-white/20 border-2 border-white/30 rounded-2xl p-5 placeholder:text-slate-700 font-bold focus:outline-none focus:border-white transition-all" />
                 <Button className="bg-slate-950 text-white font-black px-8 rounded-2xl text-xs uppercase tracking-widest">Subscribe</Button>
              </div>
           </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
