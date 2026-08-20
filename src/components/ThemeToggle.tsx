"use client";

import { useTheme } from "../hooks/useTheme";
import { IconSun, IconMoon } from "../lib/icons";

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      onClick={toggleTheme}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 ${
        isDarkMode
          ? "bg-sky-500 text-slate-950 shadow-sky-500/20 hover:bg-sky-400"
          : "bg-slate-900 text-white shadow-slate-900/15 hover:bg-slate-800"
      }`}
    >
      {isDarkMode ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
    </button>
  );
}
