"use client";

import { useEffect, useState } from "react";
import { defaultServiceBoxes } from "../lib/content";
import { getThemeStyles } from "../lib/theme";

export function ServiceCarousel({ isDarkMode }: { isDarkMode: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const themeStyles = getThemeStyles(isDarkMode);
  const active = defaultServiceBoxes[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % defaultServiceBoxes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="servicios" className={`${themeStyles.cardSection} scroll-mt-28 p-8 lg:p-10`}>
      <div className="text-center">
        <h2 className={`text-2xl font-semibold sm:text-3xl ${themeStyles.accent}`}>¿Qué Hacemos?</h2>
        <p className={`mx-auto mt-3 max-w-2xl text-base ${themeStyles.mutedText}`}>
          Servicios aduanales y logísticos integrales para tu negocio
        </p>
      </div>

      <div className="mt-8 lg:mt-10">
        <div
          className={themeStyles.serviceCardWrapper}
          style={{
            backgroundImage: `url(${active.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
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
                    onClick={() => setActiveIndex(index)}
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
                  <span className="mt-1 text-sky-300">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
