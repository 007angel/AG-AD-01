"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { defaultServiceBoxes } from "../lib/content";
import { getThemeStyles } from "../lib/theme";
import { IconCheck, IconMapPin } from "../lib/icons";

const locations = [
  "Tegucigalpa Oficina Principal",
  "Toncontín",
  "San Pedro Sula",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgSrc, setBgSrc] = useState(defaultServiceBoxes[0].localImage);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const themeStyles = getThemeStyles(isDarkMode);
  const active = defaultServiceBoxes[activeIndex];

  useEffect(() => {
    setBgSrc(active.localImage);
  }, [activeIndex, active.localImage]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % defaultServiceBoxes.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <section
      id="servicios"
      className={`${themeStyles.cardSection} scroll-mt-28 p-8 lg:p-10`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="text-center">
        <h2 className={`text-2xl font-semibold sm:text-3xl ${themeStyles.accent}`}>¿Qué Hacemos?</h2>
        <p className={`mx-auto mt-3 max-w-2xl text-base ${themeStyles.mutedText}`}>
          Servicios aduanales y logísticos integrales para tu negocio
        </p>
      </div>

      <div className="mt-8 lg:mt-10">
        <div className={themeStyles.serviceCardWrapper}>
          <Image
            src={bgSrc}
            alt={active.title}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            onError={() => setBgSrc(active.image)}
          />
          <div className={themeStyles.serviceOverlay} />
          <div className="relative flex min-h-[420px] flex-col justify-between gap-6 p-8 text-white transition-all duration-700 ease-out lg:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-3xl shadow-sm backdrop-blur-sm">
                  {active.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{active.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-200">
                    {active.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                {defaultServiceBoxes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`h-3 w-3 rounded-full border border-white/40 transition ${
                      index === activeIndex ? "bg-white" : "bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Mostrar servicio ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <ul className="space-y-3 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm shadow-lg shadow-slate-950/20 backdrop-blur-sm md:max-w-md">
              {active.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-slate-100">
                  <IconCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
