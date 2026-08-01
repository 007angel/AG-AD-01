"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const nextMode = storedTheme === "dark";
    setIsDarkMode(nextMode);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    window.dispatchEvent(
      new CustomEvent("theme:changed", {
        detail: { isDarkMode },
      })
    );
  }, [isDarkMode]);

  return (
    <button
      type="button"
      aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      onClick={() => setIsDarkMode((value) => !value)}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-lg shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 ${
        isDarkMode
          ? "bg-sky-500 text-slate-950 shadow-sky-500/20 hover:bg-sky-400"
          : "bg-slate-900 text-white shadow-slate-900/15 hover:bg-slate-800"
      }`}
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
}
