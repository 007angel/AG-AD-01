"use client";

import Image from "next/image";
import { useState } from "react";
import { defaultServiceBoxes } from "../lib/content";
import { getThemeStyles } from "../lib/theme";
import { IconCheck, IconMapPin } from "../lib/icons";

const locations = [
  "San Pedro Sula Oficina Principal",
  "Tegucigalpa",
  "Toncontín",
  "Puerto Cortés",
  "San Lorenzo",
  "Las Manos (Frontera Honduras – Nicaragua)",
  "Guasaule (Frontera Honduras – Nicaragua)",
  "El Poy (Frontera Honduras – Guatemala)",
  "El Florido (Frontera Honduras – Guatemala)",
  "Corinto (Frontera Honduras – Guatemala)",
  "Agua Caliente (Frontera Honduras – Guatemala)",
  "El Amatillo (Frontera Honduras – El Salvador)",
];

export function ServiceCarousel({ isDarkMode }: { isDarkMode: boolean }) {
  const themeStyles = getThemeStyles(isDarkMode);
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  return (
    <section id="servicios" className={`${themeStyles.cardSection} scroll-mt-28 p-8 lg:p-10`}>
      <div className="text-center">
        <h2 className={`text-2xl font-semibold sm:text-3xl ${themeStyles.accent}`}>¿Qué Hacemos?</h2>
        <p className={`mx-auto mt-3 max-w-2xl text-base ${themeStyles.mutedText}`}>
          Servicios aduanales y logísticos integrales para tu negocio
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:mt-10">
        {defaultServiceBoxes.map((box) => (
          <div
            key={box.title}
            className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
              isDarkMode
                ? "border-slate-700/60 shadow-lg shadow-slate-950/20"
                : "border-slate-200 shadow-lg shadow-slate-950/5"
            }`}
          >
            <div className="relative h-64 w-full overflow-hidden sm:h-72">
              <Image
                src={failed[box.title] ? box.image : box.localImage}
                alt={box.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setFailed((prev) => ({ ...prev, [box.title]: true }))}
              />
              <div
                className={`absolute inset-0 ${
                  isDarkMode
                    ? "bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent"
                    : "bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-2xl shadow-sm backdrop-blur-sm">
                  {box.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white lg:text-2xl">{box.title}</h3>
                  <p className="mt-1 max-w-xl text-sm leading-6 text-slate-200">
                    {box.description}
                  </p>
                </div>
              </div>
            </div>

            <div className={`px-5 py-5 ${isDarkMode ? "bg-slate-900/70" : "bg-white/90"}`}>
              <ul className="space-y-2.5">
                {box.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <IconCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-300" />
                    <span className={isDarkMode ? "text-slate-100" : "text-slate-800"}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <p className={`text-center text-sm font-semibold uppercase tracking-wider ${themeStyles.mutedText}`}>
          Presencia nacional
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <div
              key={loc}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                isDarkMode
                  ? "border-slate-700/60 bg-slate-800/60 text-slate-200"
                  : "border-slate-200 bg-white/80 text-slate-700"
              }`}
            >
              <IconMapPin className="h-5 w-5 flex-shrink-0 text-sky-500" />
              <span>{loc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
