import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";

export default function BpmProductPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Product Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold mb-6 border border-indigo-500/30">
                        Intelligent Process Orchestration
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Vyoma <span className="text-indigo-400">BPM</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                        The AI-native business process management suite with built-in <strong>Flowee</strong> assistance. 
                        Visualize, document, and optimize your enterprise workflows with precision.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" variant="primary" href="https://bpm.myvyoma.ai">
                            Launch Dashboard
                        </Button>
                        <Button size="lg" variant="secondary" className="bg-transparent text-white border-white hover:bg-white/10">
                            View Documentation
                        </Button>
                    </div>
                </div>
                <div className="relative">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm p-4">
                        <div className="bg-slate-900 rounded-lg aspect-[16/10] flex flex-col relative overflow-hidden border border-slate-700/50">
                             {/* Global Manufacturing Dashboard Mockup */}
                             <div className="h-10 border-b border-slate-700 flex items-center justify-between px-4 bg-slate-800/50">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-xs text-slate-400 font-mono">Vyoma v2.4 - Global Mfg Dashboard</div>
                             </div>
                             <div className="flex-1 flex">
                                {/* Sidebar */}
                                <div className="w-16 border-r border-slate-700 bg-slate-800/30 flex flex-col items-center py-4 space-y-6">
                                    <div className="w-8 h-8 rounded bg-indigo-500/20 border border-indigo-500/30"></div>
                                    <div className="w-6 h-6 rounded bg-slate-700/50"></div>
                                    <div className="w-6 h-6 rounded bg-slate-700/50"></div>
                                    <div className="w-6 h-6 rounded bg-slate-700/50"></div>
                                    <div className="mt-auto w-6 h-6 rounded-full bg-indigo-400/20"></div>
                                </div>
                                {/* Main Content */}
                                <div className="flex-1 p-6 overflow-hidden">
                                    <div className="flex justify-between items-center mb-8">
                                        <div>
                                            <h3 className="text-white font-bold text-lg">Global Manufacturing ECC to S/4HANA</h3>
                                            <p className="text-slate-400 text-xs">Last updated: Just now via Flowee AI</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs border border-green-500/20">On Track</span>
                                            <span className="px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 text-xs border border-indigo-500/20">Phase: Analyze</span>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="bg-slate-800 rounded-lg border border-slate-700 p-3">
                                            <p className="text-slate-400 text-[10px] uppercase">Process Coverage</p>
                                            <p className="text-xl font-bold text-white mt-1">85%</p>
                                            <div className="w-full bg-slate-700 h-1 mt-2 rounded-full overflow-hidden">
                                                <div className="bg-indigo-500 w-[85%] h-full rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-800 rounded-lg border border-slate-700 p-3">
                                            <p className="text-slate-400 text-[10px] uppercase">Gap Analysis</p>
                                            <p className="text-xl font-bold text-white mt-1">12 Critical</p>
                                            <div className="w-full bg-slate-700 h-1 mt-2 rounded-full overflow-hidden">
                                                <div className="bg-red-500 w-[40%] h-full rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-800 rounded-lg border border-slate-700 p-3">
                                            <p className="text-slate-400 text-[10px] uppercase">RTM Completion</p>
                                            <p className="text-xl font-bold text-white mt-1">92%</p>
                                            <div className="w-full bg-slate-700 h-1 mt-2 rounded-full overflow-hidden">
                                                <div className="bg-green-500 w-[92%] h-full rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-4 h-full">
                                        <div className="flex gap-2 mb-4">
                                            <div className="h-2 w-20 bg-slate-600 rounded"></div>
                                            <div className="h-2 w-10 bg-slate-700 rounded"></div>
                                        </div>
                                        <div className="space-y-3">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="flex items-center justify-between p-2 bg-slate-800 rounded border border-slate-700/50">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-4 h-4 rounded-sm bg-indigo-500/20 border border-indigo-500/30"></div>
                                                        <div className="h-2 w-32 bg-slate-600 rounded"></div>
                                                    </div>
                                                    <div className="h-2 w-12 bg-slate-700 rounded"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Modules</h2>
                <p className="text-lg text-slate-600">
                    From high-level process containerization to granular BPMN modeling, Vyoma BPM covers the entire lifecycle.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard 
                    title="Process Generation"
                    description="Upload your legacy documents and let AI automatically generate detailed BPMN 2.0 diagrams in seconds."
                    icon={
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                    }
                />
                <FeatureCard 
                    title="Gap Analysis & RTM"
                    description="Automatically compare your processes against SAP Best Practices and generate a Requirements Traceability Matrix."
                    icon={
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                    }
                />
                <FeatureCard 
                    title="Flowee AI Assistant"
                    description="Your intelligent co-pilot for process documentation, token usage tracking, and optimization suggestions."
                    icon={
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                    }
                />
            </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between gap-16">
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Enterprise-Grade Security</h2>
                    <p className="text-lg text-slate-600 mb-6">
                        Secure by design. Vyoma BPM integrates with your existing identity providers for seamless access control.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Microsoft SSO Authentication", 
                            "Role-Based Access Control (RBAC)", 
                            "Detailed Usage Analytics"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center text-slate-700">
                                <svg className="w-5 h-5 text-indigo-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:w-1/2">
                    <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100 text-center">
                        <div className="inline-flex items-center justify-center p-4 bg-white rounded-xl shadow-sm mb-4">
                           <span className="font-bold text-slate-700 flex items-center gap-2">
                            <svg className="w-6 h-6 text-[#00a4ef]" viewBox="0 0 24 24" fill="currentColor"><path d="M11.55 21H3v-8.55h8.55V21zM21 21h-8.55v-8.55H21V21zm-9.45-9.45H3V3h8.55v8.55zm9.45 0h-8.55V3H21v8.55z"/></svg>
                            Sign in with Microsoft
                           </span>
                        </div>
                        <p className="text-sm text-slate-500">
                            Secure, centralized authentication for all your users.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
