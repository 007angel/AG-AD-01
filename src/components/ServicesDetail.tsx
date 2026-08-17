"use client";

import { useEffect, useState } from "react";
import { getThemeStyles } from "../lib/theme";
import {
  IconBox,
  IconUpload,
  IconLeaf,
  IconPaw,
  IconClipboard,
  IconTruck,
  IconFile,
  IconRefresh,
  IconCompass,
  IconFileText,
} from "../lib/icons";

type ServiceGroup = {
  name: string;
  icon: React.ReactNode;
  modalities: string[];
};

const groups: ServiceGroup[] = [
  { name: "Despacho Aduanero De Importación", icon: <IconBox className="text-2xl" />, modalities: ["FCL", "FTL", "LCL", "LTL", "Aéreo"] },
  { name: "Despacho Aduanero De Exportación", icon: <IconUpload className="text-2xl" />, modalities: ["FCL", "FTL", "LCL", "LTL"] },
  { name: "Permiso Fito Sanitario", icon: <IconLeaf className="text-2xl" />, modalities: ["Importación", "Exportación"] },
  { name: "Permiso Zoo Sanitario", icon: <IconPaw className="text-2xl" />, modalities: ["Importación", "Exportación"] },
  { name: "Marchamo Nacional / Internacional", icon: <IconClipboard className="text-2xl" />, modalities: [] },
  { name: "Entregas Locales", icon: <IconTruck className="text-2xl" />, modalities: ["Camión", "Chasis FCL"] },
  { name: "Declaración De Oficio", icon: <IconFile className="text-2xl" />, modalities: [] },
  { name: "Tránsitos a Zona Libre", icon: <IconRefresh className="text-2xl" />, modalities: [] },
  { name: "Asesoría Logística", icon: <IconCompass className="text-2xl" />, modalities: [] },
  { name: "DUCA T", icon: <IconFileText className="text-2xl" />, modalities: [] },
];

function getCardsPerView(): number {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth >= 1024) return 4;
  if (window.innerWidth >= 640) return 3;
  return 2;
}

export function ServicesDetail({ isDarkMode }: { isDarkMode: boolean }) {
  const [activePage, setActivePage] = useState(0);
  const [perView, setPerView] = useState(4);
  const themeStyles = getThemeStyles(isDarkMode);

  useEffect(() => {
    setPerView(getCardsPerView());
    const onResize = () => setPerView(getCardsPerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const totalPages = Math.ceil(groups.length / perView);

  useEffect(() => {
    if (totalPages <= 1) return;
    const id = setInterval(() => {
      setActivePage((p) => (p + 1) % totalPages);
    }, 6000);
    return () => clearInterval(id);
  }, [totalPages]);

  const pageGroups = groups.slice(activePage * perView, activePage * perView + perView);

  return (
    <section className={`${themeStyles.cardSection} scroll-mt-28 p-8 lg:p-10`}>
      <div className="text-center">
        <h2 className={`text-2xl font-semibold sm:text-3xl ${themeStyles.accent}`}>
          Servicios a ofrecer
        </h2>
        <p className={`mx-auto mt-3 max-w-2xl text-base ${themeStyles.mutedText}`}>
          Catálogo completo de servicios aduanales y logísticos
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pageGroups.map((group) => (
          <div
            key={group.name}
            className={`flex flex-col gap-4 rounded-2xl border p-6 transition-all duration-300 ${
              isDarkMode
                ? "border-slate-700/60 bg-slate-800/60 shadow-lg shadow-slate-950/20"
                : "border-slate-200 bg-white/80 shadow-lg shadow-slate-950/5"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${
                  isDarkMode ? "bg-slate-700/60" : "bg-sky-50"
                }`}
              >
                {group.icon}
              </div>
              <h3
                className={`text-base font-semibold leading-tight ${
                  isDarkMode ? "text-slate-100" : "text-slate-800"
                }`}
              >
                {group.name}
              </h3>
            </div>
            {group.modalities.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {group.modalities.map((mod) => (
                  <span
                    key={mod}
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      isDarkMode
                        ? "bg-sky-500/15 text-sky-200 border border-sky-400/20"
                        : "bg-sky-50 text-sky-700 border border-sky-200"
                    }`}
                  >
                    {mod}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActivePage(i)}
              className={`h-3 w-3 rounded-full border transition ${
                isDarkMode
                  ? `border-slate-500 ${i === activePage ? "bg-sky-400" : "bg-slate-600 hover:bg-slate-500"}`
                  : `border-slate-300 ${i === activePage ? "bg-sky-500" : "bg-slate-300 hover:bg-slate-400"}`
              }`}
              aria-label={`Página ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
