import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Reduce SAP TCO by <br />
              <span className="text-primary">30-60% with AI</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
              AI-powered process intelligence that automates documentation, impact analysis, and test generation for your SAP landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" variant="primary" className="bg-primary hover:bg-primary-dark">
                Calculate Your Savings →
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-blue-50">
                See How It Works
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                SAP Certified
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                Available on SAP Store
              </div>
            </div>
            <p className="mt-6 text-xs text-slate-400 uppercase tracking-widest font-semibold">
              Trusted by Bacardi, DharmaLife, ACG
            </p>
          </div>

          <div className="relative animate-slide-up">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-xl max-w-md mx-auto lg:ml-auto">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center justify-between">
                Your SAP TCO Breakdown
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700">Implementation</span>
                    <span className="text-sm font-bold text-slate-900">40%</span>
                  </div>
                  <div className="w-full h-8 bg-slate-200 rounded-lg overflow-hidden">
                    <div className="h-full bg-primary rounded-lg" style={{ width: '40%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700">Upgrades/Transformations</span>
                    <span className="text-sm font-bold text-slate-900">30%</span>
                  </div>
                  <div className="w-full h-8 bg-slate-200 rounded-lg overflow-hidden">
                    <div className="h-full bg-success rounded-lg" style={{ width: '30%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700">Run/Support</span>
                    <span className="text-sm font-bold text-slate-900">30%</span>
                  </div>
                  <div className="w-full h-8 bg-slate-200 rounded-lg overflow-hidden">
                    <div className="h-full bg-accent rounded-lg" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-sm text-slate-500 text-center italic">
                Vyoma optimizes all three areas through intelligent automation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
