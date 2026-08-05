"use client";

import Image from "next/image";
import { useTheme } from "../hooks/useTheme";

const navLinks: never[] = [];

export function SiteFooter() {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        isDarkMode ? "border-slate-800 bg-slate-950/80 text-slate-300" : "border-slate-200 bg-white/80 text-slate-600"
      }`}
    >
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 md:grid-cols-[1.2fr_auto_auto] md:items-center lg:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Agencia Aduanera L & A"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <div>
            <p className={`text-base font-semibold ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>
              Agencia Aduanera L & A
            </p>
            <p className="text-xs leading-5">
              Aduanas y logística internacional en Honduras.
            </p>
          </div>
        </div>

        <div>
          <h3 className={`text-xs font-semibold uppercase tracking-widest ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>
            Navegación
          </h3>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-amber-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={`text-xs font-semibold uppercase tracking-widest ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>
            Contacto
          </h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a
                href="mailto:gerenciageneral@agenciaaduaneralya.com"
                className="transition-colors hover:text-amber-400"
              >
                gerenciageneral@agenciaaduaneralya.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+50432890454"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-amber-400"
              >
                WhatsApp: +504 3289-0454
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`border-t py-3 text-center text-xs ${
          isDarkMode ? "border-slate-800 text-slate-500" : "border-slate-200 text-slate-400"
        }`}
      >
        © {currentYear} Agencia Aduanera L & A. Todos los derechos reservados.
      </div>
    </footer>
  );
}
