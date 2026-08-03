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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
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
            className="h-14 w-auto object-contain md:h-16"
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
          <a href="#ubicaciones" className="transition-colors duration-200 hover:text-amber-400">
            Ubicaciones
          </a>
          <a href="#contacto" className="transition-colors duration-200 hover:text-amber-400">
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
