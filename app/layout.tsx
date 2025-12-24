import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vyoma - AI-Powered SAP Transformation Platform",
  description: "Reduce SAP TCO by 30-60% with the AI layer your transformation needs. Auto-document, analyze impact, and accelerate innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 transition-colors duration-300 font-sans selection:bg-primary/30`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Mesh Gradient Background */}
          <div className="fixed inset-0 z-[-1] opacity-30 dark:opacity-50 pointer-events-none">
            <div className="mesh-gradient absolute inset-0"></div>
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 dark:bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
