"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Use Cases", href: "/#use-cases" },
    { name: "ROI Calculator", href: "/roi-calculator" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none">
      <div className={`max-w-5xl mx-auto px-6 py-3 rounded-2xl border transition-all duration-500 pointer-events-auto ${
        scrolled 
          ? "bg-white/80 dark:bg-slate-950/70 backdrop-blur-xl border-black/5 dark:border-white/10 shadow-2xl" 
          : "bg-white/40 dark:bg-white/5 backdrop-blur-md border-black/5 dark:border-white/5 shadow-lg"
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-display font-black tracking-tighter gradient-text group-hover:scale-105 transition-transform duration-300">
                VYOMA
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 px-4 py-2 rounded-xl text-sm font-bold transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary-dark text-slate-950 font-bold px-6 py-2 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,209,255,0.2)]">
                Book Demo
              </Button>
            </Link>
          </div>

          <div className="-mr-2 flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-black/5 dark:border-white/5 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white block px-3 py-3 rounded-xl text-base font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary text-slate-950 font-bold py-4 rounded-xl">
                  Book Demo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
