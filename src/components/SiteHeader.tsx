"use client";

import Image from "next/image";
import { useTheme } from "../hooks/useTheme";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  const { isDarkMode } = useTheme();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full backdrop-blur-md transition-colors duration-300 ${
        isDarkMode ? "bg-slate-950/30 text-white" : "bg-white/30 text-slate-900"
      }`}
    >
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-6 md:h-32">
        <a
          href="#inicio"
          className={`flex items-center rounded-2xl border px-3 py-2 shadow-sm ring-1 ${
            isDarkMode
              ? "border-white/10 bg-white/5 ring-white/5"
              : "border-black/10 bg-white/40 ring-black/5"
          }`}
        >
          <Image
            src="/logo.png"
            alt="Agencia Aduanera L & A"
            width={64}
            height={64}
            className="h-20 w-auto object-contain md:h-24"
            style={{ filter: "drop-shadow(0 0 6px rgba(15, 23, 42, 0.35))" }}
          />
        </a>

        <nav className="hidden items-center gap-8 text-xl font-medium md:flex">
          <a href="#inicio" className="transition-colors duration-200 hover:text-amber-400">
            Inicio
          </a>
          <a href="#servicios" className="transition-colors duration-200 hover:text-amber-400">
            Servicios
          </a>
          <a href="#por-que-elegirnos" className="transition-colors duration-200 hover:text-amber-400">
            ¿Por qué elegirnos?
          </a>
          <a href="#contacto" className="transition-colors duration-200 hover:text-amber-400">
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/+50432890454?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20mis%20operaciones%20de%20comercio%20exterior."
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar por WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 md:hidden"
          >
            <span className="text-base">💬</span>
            WhatsApp
          </a>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
