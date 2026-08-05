"use client";

import Image from "next/image";
import { useTheme } from "../hooks/useTheme";

export function SiteFooter() {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        isDarkMode ? "border-slate-800 bg-slate-950/80 text-slate-300" : "border-slate-200 bg-white/80 text-slate-600"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:flex-row sm:text-left lg:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Agencia Aduanera L & A"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <div>
            <p className={`text-sm font-semibold ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>
              Agencia Aduanera L & A
            </p>
            <p className="text-xs leading-5">Aduanas y logística internacional en Honduras.</p>
          </div>
        </div>

        <div className="text-sm">
          <a
            href="mailto:gerenciageneral@agenciaaduaneralya.com"
            className="transition-colors hover:text-amber-400"
          >
            gerenciageneral@agenciaaduaneralya.com
          </a>
          <span className="mx-2 hidden sm:inline">·</span>
          <a
            href="https://wa.me/+50432890454"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-amber-400"
          >
            WhatsApp: +504 3289-0454
          </a>
        </div>
      </div>

      <div
        className={`border-t py-2 text-center text-xs ${
          isDarkMode ? "border-slate-800 text-slate-500" : "border-slate-200 text-slate-400"
        }`}
      >
        © {currentYear} Agencia Aduanera L & A. Todos los derechos reservados.
      </div>
    </footer>
  );
}
