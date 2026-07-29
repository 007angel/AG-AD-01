"use client";

import { useEffect, useState } from "react";

const services = [
  "Importación y exportación",
  "Trámites aduaneros",
  "Consultoría regulatoria",
  "Logística internacional",
];

const highlights = [
  {
    title: "100% Compliance",
    text: "Cumplimos con cada regulación vigente para evitar demoras y sanciones.",
  },
  {
    title: "Atención personalizada",
    text: "Diseñamos soluciones ágiles para cada operación de comercio exterior.",
  },
  {
    title: "Cobertura nacional",
    text: "Operamos con velocidad y precisión para mover tu carga sin fricción.",
  },
];

const serviceBoxes = [
  {
    title: "Agencia Aduanal",
    description: "Despachos aduanales rápidos y precisos en todas las aduanas de Honduras.",
    points: [
      "Importación y exportación",
      "Clasificación arancelaria",
      "Asesoría legal",
      "Despacho Ágiles",
    ],
    icon: "📦",
  },
  {
    title: "Logística Internacional",
    description: "Transporte aéreo, marítimo y terrestre con seguro de mercancías incluido.",
    points: ["Transporte aéreo", "Transporte marítimo", "Seguro de carga", "Rastreo en tiempo real"],
    icon: "🌍",
  },
  {
    title: "Gestión de Carga",
    description: "Almacenaje, consolidación y embalaje profesional de tu mercancía.",
    points: ["Almacenaje seguro", "Consolidación de carga", "Embalaje profesional", "Ahorro hasta 70%"],
    icon: "📍",
  },
  {
    title: "Asesoría y Trámites",
    description: "Consultoría en comercio exterior y gestión de permisos especiales.",
    points: ["Consultoría aduanera", "Gestión de permisos", "Defensa legal", "Cumplimiento normativo"],
    icon: "⚖️",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % serviceBoxes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fef3c7,_#f8fafc_55%,_#e2e8f0)] text-slate-900">
      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 lg:px-8 lg:py-28">
        <header className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl shadow-slate-200/70 backdrop-blur">
          <p className="w-fit rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
            Agencia Aduanera especializada
          </p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Soluciones aduaneras ágiles para tu comercio internacional
              </h1>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Acompañamos importaciones, exportaciones y operaciones logísticas con
                cumplimiento, agilidad y asesoría estratégica.
              </p>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
            >
              Solicitar asesoría
            </a>
          </div>
        </header>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
          <div className="text-center">
            <h2 className="text-3xl font-bold">¿Qué Hacemos?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Servicios aduanales y logísticos integrales para tu negocio
            </p>
          </div>

          <div className="mt-10">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-shadow hover:shadow-lg">
              <div className="space-y-8 transition-all duration-700 ease-out">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-sm text-3xl">
                      {serviceBoxes[activeIndex].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900">{serviceBoxes[activeIndex].title}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                        {serviceBoxes[activeIndex].description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    {serviceBoxes.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-3 w-3 rounded-full transition ${
                          index === activeIndex ? "bg-slate-900" : "bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Mostrar servicio ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <ul className="mt-8 space-y-3 text-sm text-slate-700 md:max-w-md">
                  {serviceBoxes[activeIndex].points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 text-emerald-600">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
            <h2 className="text-2xl font-semibold">Nuestros servicios</h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="text-xl text-amber-600">•</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-lg shadow-amber-100">
            <h2 className="text-2xl font-semibold text-slate-900">¿Por qué elegirnos?</h2>
            <div className="mt-6 space-y-5">
              {highlights.map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-xl shadow-slate-300/60"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                Contáctanos
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Tu operación internacional merece una gestión segura
              </h2>
            </div>
            <a
              href="mailto:operaciones@agenciaaduaneralya.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              operaciones@agenciaaduaneralya.com
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
