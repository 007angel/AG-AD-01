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

const defaultServiceBoxes = [
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
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Logística Internacional",
    description: "Transporte aéreo, marítimo y terrestre con seguro de mercancías incluido.",
    points: ["Transporte aéreo", "Transporte marítimo", "Seguro de carga", "Rastreo en tiempo real"],
    icon: "🌍",
    image:
      "https://images.unsplash.com/photo-1517502166878-35c93a0072bb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Gestión de Carga",
    description: "Almacenaje, consolidación y embalaje profesional de tu mercancía.",
    points: ["Almacenaje seguro", "Consolidación de carga", "Embalaje profesional"],
    icon: "📍",
    image:
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Asesoría y Trámites",
    description: "Consultoría en comercio exterior y gestión de permisos especiales.",
    points: ["Consultoría aduanera", "Gestión de permisos", "Defensa legal", "Cumplimiento normativo"],
    icon: "⚖️",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [boxes, setBoxes] = useState(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("serviceBoxes") : null;
      return raw ? JSON.parse(raw) : defaultServiceBoxes;
    } catch (e) {
      return defaultServiceBoxes;
    }
  });
  const [showModal, setShowModal] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState("");
  const [quoteEmail, setQuoteEmail] = useState("");
  const [quoteName, setQuoteName] = useState("");
  const [quoteDetails, setQuoteDetails] = useState("");
  const [quoteStatus, setQuoteStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [quoteMessage, setQuoteMessage] = useState("");
  const [isQuoteClosing, setIsQuoteClosing] = useState(false);
  const [editedBoxes, setEditedBoxes] = useState(boxes);
  const [useVideo, setUseVideo] = useState(() => {
    try {
      return typeof window !== "undefined" ? localStorage.getItem("useVideo") !== "false" : true;
    } catch (e) {
      return true;
    }
  });
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  const defaultVideoUrl = "/earth.mp4";

  const persistQuoteLog = (stage: "submit" | "success" | "error", payload?: Record<string, unknown>) => {
    try {
      const existingLogs = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("quoteLogs") || "[]") : [];
      const logEntry = {
        timestamp: new Date().toISOString(),
        stage,
        ...payload,
      };
      const nextLogs = [...existingLogs, logEntry].slice(-50);

      if (typeof window !== "undefined") {
        localStorage.setItem("quoteLogs", JSON.stringify(nextLogs));
      }

      console.info("[quote-log]", logEntry);
    } catch (e) {
      console.error("[quote-log] No se pudo guardar el log", e);
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem("useVideo", useVideo ? "true" : "false");
    } catch (e) {
      // ignore
    }
  }, [useVideo]);

  useEffect(() => {
    try {
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    } catch (e) {
      // ignore
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleThemeChanged = (event: Event) => {
      const customEvent = event as CustomEvent<{ isDarkMode: boolean }>;
      setIsDarkMode(customEvent.detail.isDarkMode);
    };

    window.addEventListener("theme:changed", handleThemeChanged);

    return () => {
      window.removeEventListener("theme:changed", handleThemeChanged);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % boxes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [boxes]);

  useEffect(() => {
    try {
      localStorage.setItem("serviceBoxes", JSON.stringify(boxes));
    } catch (e) {
      // ignore write errors
    }
  }, [boxes]);

  const themeStyles = {
    main: isDarkMode
      ? "bg-[radial-gradient(circle_at_top,_#112a57,_#07142b_55%,_#030816)] text-slate-100"
      : "bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef5ff_55%,_#fdfefe_100%)] text-slate-950",
    cardSection: isDarkMode
      ? "rounded-[2rem] border border-slate-700/70 bg-slate-950/90 shadow-[0_24px_60px_rgba(2,8,23,0.45)] backdrop-blur-xl"
      : "rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl",
    toggleButton: isDarkMode
      ? "inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition duration-200 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
      : "inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400",
    serviceCardWrapper: isDarkMode
      ? "relative overflow-hidden rounded-[2rem] border border-slate-700/70 shadow-[0_16px_36px_rgba(2,8,23,0.35)] transition-shadow hover:shadow-[0_24px_50px_rgba(2,8,23,0.45)]"
      : "relative overflow-hidden rounded-[2rem] border border-slate-200/80 shadow-[0_16px_36px_rgba(15,23,42,0.12)] transition-shadow hover:shadow-[0_24px_50px_rgba(15,23,42,0.16)]",
    serviceOverlay: isDarkMode
      ? "absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.86)_0%,rgba(15,23,42,0.55)_50%,rgba(2,6,23,0.82)_100%)]"
      : "absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.82)_0%,rgba(15,23,42,0.45)_50%,rgba(2,6,23,0.74)_100%)]",
    accent: isDarkMode ? "text-sky-100" : "text-slate-900",
    mutedText: isDarkMode ? "text-slate-300" : "text-slate-600",
    bodyText: isDarkMode ? "text-slate-100" : "text-slate-800",
    pill: isDarkMode
      ? "border border-sky-400/20 bg-sky-500/15 text-sky-200"
      : "border border-sky-200 bg-sky-50 text-sky-700",
  };

  return (
    <main className={`min-h-screen relative transition-colors duration-300 ${themeStyles.main}`}>
      <div className="fixed inset-0 -z-10">
        {isDarkMode && useVideo && (
          <video
            src={defaultVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        )}
        <div className={`absolute inset-0 ${isDarkMode ? "bg-slate-950/65" : "bg-white"}`} />
      </div>
      <section className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:px-8 lg:py-16">
        <header className={`${themeStyles.cardSection} flex flex-col gap-8 p-8 lg:p-10`}>
          <p className={`w-fit rounded-full px-3 py-1 text-sm font-semibold ${themeStyles.pill}`}>
            Agencia Aduanera especializada
          </p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Soluciones aduaneras ágiles para tu comercio internacional
              </h1>
              <p className={`mt-4 max-w-2xl text-lg leading-8 ${themeStyles.mutedText}`}>
                Acompañamos importaciones, exportaciones y operaciones logísticas con
                cumplimiento, agilidad y asesoría estratégica.
              </p>
            </div>
            <a
              href="#contacto"
              className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition ${isDarkMode ? "bg-sky-500 text-slate-950 hover:bg-sky-400" : "bg-slate-900 text-white hover:bg-slate-800"}`}
            >
              Solicitar asesoría
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className={`rounded-2xl border p-5 ${isDarkMode ? "border-slate-700 bg-slate-900/70" : "border-slate-200 bg-slate-50/80"}`}
              >
                <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full ${isDarkMode ? "bg-sky-500/15 text-sky-200" : "bg-sky-100 text-sky-700"}`}>
                  ✓
                </div>
                <h3 className={`text-lg font-semibold ${themeStyles.accent}`}>{item.title}</h3>
                <p className={`mt-2 text-sm leading-6 ${themeStyles.mutedText}`}>{item.text}</p>
              </article>
            ))}
          </div>
        </header>

        <section id="servicios" className={`${themeStyles.cardSection} scroll-mt-28 p-8 lg:p-10`}>
          <div className="text-center">
            <h2 className={`text-3xl font-semibold ${themeStyles.accent}`}>¿Qué Hacemos?</h2>
            <p className={`mx-auto mt-3 max-w-2xl text-base ${themeStyles.mutedText}`}>
              Servicios aduanales y logísticos integrales para tu negocio
            </p>
          </div>

          <div className="mt-8 lg:mt-10">
            <div
              className={themeStyles.serviceCardWrapper}
              style={{
                backgroundImage: `url(${boxes[activeIndex].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className={themeStyles.serviceOverlay} />
              <div className="relative flex min-h-[420px] flex-col justify-between gap-6 p-8 text-white transition-all duration-700 ease-out lg:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-3xl shadow-sm backdrop-blur-sm">
                      {boxes[activeIndex].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{boxes[activeIndex].title}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-200">
                        {boxes[activeIndex].description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    {boxes.map((_, index) => (
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
                  {boxes[activeIndex].points.map((point) => (
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

{/*          <div className="flex justify-end items-center gap-3">
         <button
            onClick={() => setUseVideo((v) => !v)}
            className="mt-4 rounded-md bg-sky-500 px-3 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400"
          >
            {useVideo ? "Fondo: Video (ON)" : "Fondo: Video (OFF)"}
          </button>
          <button
            onClick={() => {
              setEditedBoxes(boxes);
              setShowModal(true);
            }}
            className="mt-4 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700"
          >
            Editar imágenes
          </button>
        </div> */}

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-2xl rounded-lg bg-white p-6">
              <h3 className="text-lg font-semibold mb-4">Mantenimiento de imágenes</h3>
              <div className="space-y-4">
                {editedBoxes.map((box, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <div className="h-12 w-20 overflow-hidden rounded-md bg-slate-100">
                      <img src={box.image} alt={box.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{box.title}</div>
                      <input
                        type="text"
                        value={box.image}
                        onChange={(e: any) => {
                          const next = [...editedBoxes];
                          next[idx] = { ...next[idx], image: e.target.value };
                          setEditedBoxes(next);
                        }}
                        className="mt-1 w-full rounded border px-2 py-1"
                      />
                    </div>
                    <button
                      onClick={() => {
                        const next = [...editedBoxes];
                        next[idx] = { ...next[idx], image: "" };
                        setEditedBoxes(next);
                      }}
                      className="text-sm text-red-600"
                    >
                      Clear
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button onClick={() => setShowModal(false)} className="rounded-md px-3 py-2 bg-gray-200">
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    setBoxes(editedBoxes);
                    setShowModal(false);
                  }}
                  className="rounded-md bg-slate-900 px-3 py-2 text-white"
                >
                  Guardar
                </button>
                <button
                  onClick={() => {
                    setEditedBoxes(defaultServiceBoxes);
                    setBoxes(defaultServiceBoxes);
                    setShowModal(false);
                  }}
                  className="rounded-md bg-red-600 px-3 py-2 text-white"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}

        {showQuoteForm && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-6 transition-opacity duration-300 sm:px-6 ${
              isQuoteClosing ? "opacity-0" : "opacity-100"
            }`}
          >
            <div
              className={`w-full max-w-2xl rounded-3xl bg-slate-900 p-6 text-slate-100 shadow-2xl shadow-slate-950/60 transition-all duration-300 ${
                isQuoteClosing ? "translate-y-4 scale-95 opacity-0" : "translate-y-0 scale-100 opacity-100"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                    Formulario de cotización
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">Envíanos tu solicitud</h3>
                </div>
                <button
                  onClick={() => {
                    setIsQuoteClosing(true);
                    window.setTimeout(() => {
                      setShowQuoteForm(false);
                      setIsQuoteClosing(false);
                    }, 300);
                  }}
                  className="rounded-full bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-700"
                >
                  Cerrar
                </button>
              </div>

              <form
                onSubmit={async (event) => {
                  event.preventDefault();
                  const payload = {
                    subject: quoteSubject || "Solicitud de cotización",
                    email: quoteEmail,
                    name: quoteName,
                    details: quoteDetails,
                  };

                  persistQuoteLog("submit", payload);
                  setQuoteStatus("sending");
                  setQuoteMessage("");

                  try {
                    const response = await fetch("/api/sendQuote", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(payload),
                    });

                    if (!response.ok) {
                      const data = await response.json();
                      throw new Error(data.error || "Error enviando cotización");
                    }

                    persistQuoteLog("success", payload);
                    setQuoteStatus("success");
                    setQuoteMessage("Tu solicitud ha sido enviada. Nos comunicaremos pronto.");
                    setQuoteSubject("");
                    setQuoteEmail("");
                    setQuoteName("");
                    setQuoteDetails("");

                    window.setTimeout(() => {
                      setIsQuoteClosing(true);
                      window.setTimeout(() => {
                        setShowQuoteForm(false);
                        setIsQuoteClosing(false);
                      }, 300);
                    }, 3000);
                  } catch (error) {
                    persistQuoteLog("error", {
                      error: error instanceof Error ? error.message : "No se pudo enviar la solicitud",
                      payload,
                    });
                    setQuoteStatus("error");
                    setQuoteMessage(
                      error instanceof Error
                        ? error.message
                        : "No se pudo enviar la solicitud. Intenta nuevamente."
                    );
                  }
                }}
                className="mt-6 space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-200">Asunto</label>
                  <input
                    value={quoteSubject}
                    onChange={(e) => setQuoteSubject(e.target.value)}
                    placeholder="Asunto de la cotización"
                    className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-200">Correo cliente</label>
                    <input
                      type="email"
                      value={quoteEmail}
                      onChange={(e) => setQuoteEmail(e.target.value)}
                      placeholder="tucorreo@dominio.com"
                      className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-200">Nombre</label>
                    <input
                      value={quoteName}
                      onChange={(e) => setQuoteName(e.target.value)}
                      placeholder="Nombre del cliente"
                      className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-200">Detalle</label>
                  <textarea
                    value={quoteDetails}
                    onChange={(e) => setQuoteDetails(e.target.value)}
                    placeholder="Describe tu solicitud o los datos de tu carga"
                    rows={5}
                    className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
                  />
                </div>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setIsQuoteClosing(true);
                      window.setTimeout(() => {
                        setShowQuoteForm(false);
                        setIsQuoteClosing(false);
                      }, 300);
                    }}
                    className="rounded-2xl border border-slate-700 bg-transparent px-5 py-3 text-sm text-slate-200 transition hover:bg-slate-800"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={quoteStatus === "sending"}
                    className="rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {quoteStatus === "sending" ? "Enviando..." : "Enviar solicitud"}
                  </button>
                </div>
                {quoteMessage && (
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm ${
                      quoteStatus === "success"
                        ? "bg-emerald-500/15 text-emerald-200"
                        : "bg-rose-500/10 text-rose-200"
                    }`}
                  >
                    {quoteMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        )}

        <section id="ubicaciones" className="grid scroll-mt-28 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-700 bg-slate-950/85 p-8 shadow-lg shadow-slate-950/50">
            <h2 className="text-2xl font-semibold text-sky-100">Nuestros servicios</h2>
            <ul className="mt-6 space-y-3 text-slate-200">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-3 rounded-2xl bg-slate-800/80 px-4 py-3 text-slate-100">
                  <span className="text-xl text-sky-300">•</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-sky-500/30 bg-slate-900/90 p-8 shadow-lg shadow-sky-500/20">
            <h2 className="text-2xl font-semibold text-sky-100">¿Por qué elegirnos?</h2>
            <div className="mt-6 space-y-5">
              {highlights.map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold text-sky-100">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="rounded-3xl border border-slate-700 bg-slate-950/90 p-8 text-white shadow-xl shadow-slate-950/50"
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
            <button
              onClick={() => {
                setIsQuoteClosing(false);
                setShowQuoteForm(true);
              }}
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Solicitar cotización
            </button>
          </div>
        </section>
      </section>
      <a
        href="https://wa.me/55886804"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-500/30 transition hover:bg-emerald-400"
      >
        <span className="text-lg">💬</span>
        WhatsApp
      </a>
    </main>
  );
}
