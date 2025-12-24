"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2.5 rounded-xl bg-slate-900/10 dark:bg-white/5 border border-black/5 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-primary transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-5 h-5 animate-in fade-in zoom-in duration-500" />
      ) : (
        <Moon className="w-5 h-5 animate-in fade-in zoom-in duration-500" />
      )}
    </button>
  );
}
