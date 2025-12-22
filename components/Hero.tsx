import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl animate-pulse delay-700 mix-blend-multiply"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-violet-300/30 rounded-full blur-3xl animate-pulse mix-blend-multiply"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="animate-fade-in">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold mb-6 border border-indigo-100">
            Intelligent Enterprise Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8">
            Modernize Your ERP with <br />
            <span className="gradient-text">Intelligent AI</span>
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Vyoma brings the power of artificial intelligence to your enterprise resource planning. 
            Streamline workflows, predict outcomes, and unlock new value from your data.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="primary">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="mt-20 animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white/50 backdrop-blur-sm p-2">
                <div className="bg-slate-50 rounded-xl overflow-hidden aspect-[16/9] flex items-center justify-center">
                     {/* Placeholder for Hero Image - Ideally we'd valid image here */}
                     <div className="text-center p-10">
                        <p className="text-slate-400 text-sm font-medium">Dashboard Preview</p>
                        <div className="mt-4 grid grid-cols-3 gap-4 opacity-50">
                            <div className="h-24 bg-indigo-100 rounded-lg"></div>
                            <div className="h-24 bg-indigo-100 rounded-lg"></div>
                            <div className="h-24 bg-indigo-100 rounded-lg"></div>
                            <div className="h-32 bg-indigo-100 rounded-lg col-span-2"></div>
                            <div className="h-32 bg-indigo-100 rounded-lg"></div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
