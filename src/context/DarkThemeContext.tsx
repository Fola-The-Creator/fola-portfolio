"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
} 

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function DarkThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || storedTheme === "light") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(storedTheme as Theme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const html = document.documentElement;

    html.classList.remove("dark-mode", "light-mode");
    html.classList.add(theme === "dark" ? "dark-mode" : "light-mode");

    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useDarkTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useDarkTheme must be used within a DarkThemeProvider");
  }
  return context;
}
