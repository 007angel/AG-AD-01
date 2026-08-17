"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
  image: string;
};

const groups: ServiceGroup[] = [
  {
    name: "Despacho Aduanero De Importación",
    icon: <IconBox className="text-2xl" />,
    modalities: ["FCL", "FTL", "LCL", "LTL", "Aéreo"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Despacho Aduanero De Exportación",
    icon: <IconUpload className="text-2xl" />,
    modalities: ["FCL", "FTL", "LCL", "LTL"],
    image: "https://images.unsplash.com/photo-1755428855454-56c364d2a808?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Permiso Fito Sanitario",
    icon: <IconLeaf className="text-2xl" />,
    modalities: ["Importación", "Exportación"],
    image: "https://images.unsplash.com/photo-1529313780224-1a12b68bed16?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Permiso Zoo Sanitario",
    icon: <IconPaw className="text-2xl" />,
    modalities: ["Importación", "Exportación"],
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Marchamo Nacional / Internacional",
    icon: <IconClipboard className="text-2xl" />,
    modalities: [],
    image: "https://images.unsplash.com/photo-1583521214690-73421a1829a9?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Entregas Locales",
    icon: <IconTruck className="text-2xl" />,
    modalities: ["Camión", "Chasis FCL"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Declaración De Oficio",
    icon: <IconFile className="text-2xl" />,
    modalities: [],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tránsitos a Zona Libre",
    icon: <IconRefresh className="text-2xl" />,
    modalities: [],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Asesoría Logística",
    icon: <IconCompass className="text-2xl" />,
    modalities: [],
    image: "https://images.unsplash.com/photo-1519992599773-1e1d4029929d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "DUCA T",
    icon: <IconFileText className="text-2xl" />,
    modalities: [],
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=600&q=80",
  },
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
            className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
              isDarkMode
                ? "border-slate-700/60 shadow-lg shadow-slate-950/20"
                : "border-slate-200 shadow-lg shadow-slate-950/5"
            }`}
          >
            <div className="relative h-36 w-full overflow-hidden">
              <Image
                src={group.image}
                alt={group.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className={`absolute inset-0 ${
                isDarkMode
                  ? "bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"
                  : "bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"
              }`} />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center gap-2">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-white ${
                    isDarkMode ? "bg-sky-500/20" : "bg-sky-500/30"
                  }`}>
                    {group.icon}
                  </div>
                  <h3 className="text-sm font-semibold leading-tight text-white drop-shadow-lg">
                    {group.name}
                  </h3>
                </div>
              </div>
            </div>
            {group.modalities.length > 0 && (
              <div className={`px-4 py-3 ${isDarkMode ? "bg-slate-900/60" : "bg-white/80"}`}>
                <div className="flex flex-wrap gap-1.5">
                  {group.modalities.map((mod) => (
                    <span
                      key={mod}
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        isDarkMode
                          ? "bg-sky-500/15 text-sky-200 border border-sky-400/20"
                          : "bg-sky-50 text-sky-700 border border-sky-200"
                      }`}
                    >
                      {mod}
                    </span>
                  ))}
                </div>
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
