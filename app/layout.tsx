import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vyoma - Intelligent AI Solutions",
  description: "Modernizing ERPs with intelligent AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans bg-slate-50 text-slate-900`}
      >
        <div className="flex flex-col min-h-screen">
            {children}
        </div>
      </body>
    </html>
  );
}
