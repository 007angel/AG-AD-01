"use client";

import Image from "next/image";
import { companyInfo } from "../lib/content";
import { useTheme } from "../hooks/useTheme";

const socialIcons = [
  { label: "Facebook", href: companyInfo.socials.facebook, icon: "f" },
  { label: "Instagram", href: companyInfo.socials.instagram, icon: "◎" },
  { label: "LinkedIn", href: companyInfo.socials.linkedin, icon: "in" },
];

export function SiteFooter() {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        isDarkMode ? "border-slate-800 bg-slate-950/80 text-slate-300" : "border-slate-200 bg-white/80 text-slate-600"
      }`}
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 sm:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Agencia Aduanera L & A"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <p className={`text-base font-semibold ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>
              Agencia Aduanera L & A
            </p>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6">
            Aduanas y logística internacional en Honduras. Importación, exportación y trámites
            aduaneros con precisión, integridad y transparencia.
          </p>
          <div className="mt-4 flex items-center gap-2">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-colors hover:border-amber-400 hover:text-amber-400 ${
                  isDarkMode ? "border-slate-700 text-slate-300" : "border-slate-300 text-slate-600"
                }`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-xs font-semibold uppercase tracking-widest ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>
            Contacto
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <span className="text-amber-400">📍</span> {companyInfo.address}
            </li>
            <li>
              <a
                href={`https://wa.me/${companyInfo.phoneRaw}`}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-amber-400"
              >
                📞 {companyInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${companyInfo.email}`}
                className="transition-colors hover:text-amber-400"
              >
                ✉️ {companyInfo.email}
              </a>
            </li>
            <li>
              <span className="text-amber-400">🕐</span> Horario de atención: {companyInfo.hours}
            </li>
          </ul>
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
