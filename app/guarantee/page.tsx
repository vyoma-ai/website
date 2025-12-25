import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
import Button from "@/components/Button";

export default function Guarantee() {
  const tiers = [
    {
      id: 1,
      badge: "🥉 TIER 1",
      name: "PROOF OF CONCEPT",
      duration: "4-6 weeks",
      scope: "Document 20-30 representative processes",
      investment: "$25K-50K",
      deliverable: "Validated ROI with your actual data",
      promise: "Full refund if savings don't meet 70% of projected impact",
      color: "border-slate-300 dark:border-slate-700"
    },
    {
      id: 2,
      badge: "🥈 TIER 2",
      name: "PARTNERSHIP MODEL",
      duration: "Project duration",
      scope: "Full transformation support",
      investment: "Platform license + services",
      deliverable: "Vyoma team works alongside your SI",
      promise: "If projected savings aren't achieved, we reduce fees proportionally",
      color: "border-primary/50 shadow-lg shadow-primary/10"
    },
    {
      id: 3,
      badge: "🥇 TIER 3",
      name: "FULL ACCOUNTABILITY",
      duration: "Project duration",
      scope: "Vyoma completes the work if SI disagrees",
      investment: "Platform license + service guarantee",
      deliverable: "Vyoma takes over documentation, test creation, and impact analysis",
      promise: "We deliver claimed impact at no additional cost, or we refund the delta",
      color: "border-accent/50 shadow-xl shadow-accent/10"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <Navbar />
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex py-1 px-4 rounded-full bg-success/10 border border-success/20 text-success text-[10px] font-black uppercase tracking-widest mb-6">
             100% Outcome Based
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white mb-6 tracking-tighter">
            We Don't Just Promise Results—<br /><span className="gradient-text">We Guarantee Them</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Tired of consulting reports that don't translate to real savings? Our performance-backed tiers ensure you only pay for impact.
          </p>
        </div>

        {/* The Challenge / Response */}
        <div className="max-w-4xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="p-10 rounded-[40px] bg-slate-200/50 dark:bg-white/5 border border-black/5 dark:border-white/5">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">The Challenge</h3>
              <p className="text-lg font-display font-medium text-slate-700 dark:text-slate-300">
                "Your implementation partner says: 'These AI projections look good, but they're too optimistic. We can't commit to these timelines.'"
              </p>
           </div>
           <div className="p-10 rounded-[40px] bg-primary/10 border border-primary/20 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-slate-950 shadow-lg">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0v4a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                 </svg>
              </div>
              <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-4">Our Response</h3>
              <p className="text-2xl font-display font-black text-slate-900 dark:text-white">
                "We'll prove it—or we'll do it ourselves."
              </p>
           </div>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
           {tiers.map((tier) => (
             <div key={tier.id} className={`glass-dark p-10 rounded-[40px] border flex flex-col transition-all duration-500 hover:-translate-y-2 ${tier.color}`}>
                <div className="text-[10px] font-black tracking-widest text-slate-500 mb-2">{tier.badge}</div>
                <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white mb-8">{tier.name}</h3>
                
                <div className="space-y-6 mb-12 flex-grow">
                   <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                      <p className="font-bold text-slate-700 dark:text-slate-200">{tier.duration}</p>
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Investment</p>
                      <p className="font-bold text-slate-700 dark:text-slate-200">{tier.investment}</p>
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Scope & Deliverable</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{tier.scope}</p>
                      <p className="text-sm font-bold text-primary">{tier.deliverable}</p>
                   </div>
                </div>

                <div className="p-6 rounded-3xl bg-success/10 border border-success/20">
                   <p className="text-[10px] font-black text-success uppercase tracking-widest mb-2 italic">Our Promise:</p>
                   <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                      {tier.promise}
                   </p>
                </div>
             </div>
           ))}
        </div>

        {/* Why We Can Offer This */}
        <div className="glass-dark p-12 rounded-[48px] border-black/5 dark:border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">Why We Can Offer This</h2>
                 <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium">
                    Our risk-reversal model isn't just marketing—it's backed by hardened data and proven results across some of the world's most complex SAP landscapes.
                 </p>
                 <Link href="/about">
                    <Button className="bg-primary text-slate-950 font-black rounded-2xl px-8 py-4">
                       See Client Case Studies →
                    </Button>
                 </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { val: "3", label: "Client Implementations" },
                   { val: "10k+", label: "SAP Processes Trained" },
                   { val: "Industry", label: "Specific Models" },
                   { val: "42%", label: "Avg client savings" }
                 ].map((stat, i) => (
                   <div key={i} className="p-8 rounded-3xl bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/5 text-center">
                      <p className="text-3xl font-display font-black text-slate-900 dark:text-white mb-1 tracking-tighter">{stat.val}</p>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
