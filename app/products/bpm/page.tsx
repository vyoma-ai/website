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
                        <div className="bg-slate-900 rounded-lg aspect-[4/3] flex flex-col relative overflow-hidden border border-slate-700/50">
                             {/* Mockup of the actual dashboard */}
                             <div className="h-12 border-b border-slate-700 flex items-center px-4 space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                             </div>
                             <div className="flex-1 flex">
                                <div className="w-16 border-r border-slate-700 bg-slate-800/30 flex flex-col items-center py-4 space-y-4">
                                    <div className="w-8 h-8 rounded bg-indigo-500/20"></div>
                                    <div className="w-8 h-8 rounded bg-slate-700"></div>
                                    <div className="w-8 h-8 rounded bg-slate-700"></div>
                                </div>
                                <div className="flex-1 p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="h-6 w-1/3 bg-slate-700 rounded"></div>
                                        <div className="h-8 w-24 bg-indigo-600 rounded"></div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-32 bg-slate-800 rounded border border-slate-700 p-4">
                                            <div className="h-4 w-1/2 bg-slate-600 rounded mb-2"></div>
                                            <div className="h-8 w-full bg-slate-700/50 rounded"></div>
                                        </div>
                                        <div className="h-32 bg-slate-800 rounded border border-slate-700 p-4">
                                            <div className="h-4 w-1/2 bg-slate-600 rounded mb-2"></div>
                                            <div className="h-8 w-full bg-slate-700/50 rounded"></div>
                                        </div>
                                        <div className="h-32 bg-slate-800 rounded border border-slate-700 p-4">
                                            <div className="h-4 w-1/2 bg-slate-600 rounded mb-2"></div>
                                            <div className="h-8 w-full bg-slate-700/50 rounded"></div>
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
                    title="Flowee AI Assistant"
                    description="Your intelligent co-pilot for process documentation and analysis. Track token usage and optimize workflows with AI."
                    icon={
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                    }
                />
                <FeatureCard 
                    title="BPMN 2.0 Visualization"
                    description="Standard-compliant visual modeling with split-pane documentation view. seamlessly switch between diagram and details."
                    icon={
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    }
                />
                <FeatureCard 
                    title="Process Hierarchy"
                    description="Organize complex enterprise workflows into Containers and Levels (L0, L1) with intuitive Tree and Card views."
                    icon={
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
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
