"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que-elegirnos", label: "¿Por qué elegirnos?" },
  { href: "#contacto", label: "Contacto" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label="Abrir menú"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
        className={`inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm transition-colors duration-200 hover:bg-slate-800 ${
          isDarkMode ? "border-slate-700 text-slate-100" : "border-slate-300 bg-white/50 text-slate-900"
        }`}
      >
        ☰
      </button>
      {isOpen && (
        <div
          className={`absolute right-0 top-full mt-2 w-56 rounded-xl border p-2 shadow-lg backdrop-blur-lg ${
            isDarkMode ? "border-slate-700 bg-slate-900/95" : "border-slate-200 bg-white/95"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-4 py-2 text-sm transition-colors hover:text-amber-400 ${
                isDarkMode ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className={`mt-1 flex w-full items-center justify-between rounded-lg px-4 py-2 text-sm transition-colors ${
              isDarkMode ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <span>{isDarkMode ? "Modo claro" : "Modo oscuro"}</span>
            <span>{isDarkMode ? "☀️" : "🌙"}</span>
          </button>
        </div>
      )}
    </div>
  );
}

