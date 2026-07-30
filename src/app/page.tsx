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
  const [editedBoxes, setEditedBoxes] = useState(boxes);
  const [useVideo, setUseVideo] = useState(() => {
    try {
      return typeof window !== "undefined" ? localStorage.getItem("useVideo") !== "false" : true;
    } catch (e) {
      return true;
    }
  });

  const defaultVideoUrl = "/earth.mp4";

  useEffect(() => {
    try {
      localStorage.setItem("useVideo", useVideo ? "true" : "false");
    } catch (e) {
      // ignore
    }
  }, [useVideo]);

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
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#0c1a34,_#081523_55%,_#081523)] text-slate-100 relative">
      <div className="fixed inset-0 -z-10">
        {useVideo && (
          <video
            src={defaultVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-slate-950/55" />
      </div>
      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 lg:px-8 lg:py-28">
        <header className="flex flex-col gap-4 rounded-3xl border border-slate-700 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/60 backdrop-blur">
          <p className="w-fit rounded-full bg-cyan-500/15 px-3 py-1 text-sm font-semibold text-cyan-200">
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

        <section className="rounded-3xl border border-slate-700 bg-slate-950/95 p-8 shadow-xl shadow-slate-950/50">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-cyan-100">¿Qué Hacemos?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              Servicios aduanales y logísticos integrales para tu negocio
            </p>
          </div>

          <div className="mt-10">
            <div
              className="relative overflow-hidden rounded-3xl border border-slate-700 shadow-sm shadow-slate-950/40 transition-shadow hover:shadow-lg"
              style={{
                backgroundImage: `url(${boxes[activeIndex].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-slate-950/50" />
              <div className="relative space-y-8 p-8 text-white transition-all duration-700 ease-out">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-3xl shadow-sm backdrop-blur-sm">
                      {boxes[activeIndex].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-cyan-100">{boxes[activeIndex].title}</h3>
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

                <ul className="mt-8 space-y-3 text-sm md:max-w-md">
                  {boxes[activeIndex].points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-slate-100">
                      <span className="mt-1 text-cyan-300">✓</span>
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
            className="mt-4 rounded-md bg-cyan-500 px-3 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-400"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-6 sm:px-6">
            <div className="w-full max-w-2xl rounded-3xl bg-slate-900 p-6 text-slate-100 shadow-2xl shadow-slate-950/60">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Formulario de cotización
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">Envíanos tu solicitud</h3>
                </div>
                <button
                  onClick={() => setShowQuoteForm(false)}
                  className="rounded-full bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-700"
                >
                  Cerrar
                </button>
              </div>

              <form
                onSubmit={async (event) => {
                  event.preventDefault();
                  setQuoteStatus("sending");
                  setQuoteMessage("");

                  try {
                    const response = await fetch("/api/sendQuote", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        subject: quoteSubject || "Solicitud de cotización",
                        email: quoteEmail,
                        name: quoteName,
                        details: quoteDetails,
                      }),
                    });

                    if (!response.ok) {
                      const data = await response.json();
                      throw new Error(data.error || "Error enviando cotización");
                    }

                    setQuoteStatus("success");
                    setQuoteMessage("Tu solicitud ha sido enviada. Nos comunicaremos pronto.");
                    setQuoteSubject("");
                    setQuoteEmail("");
                    setQuoteName("");
                    setQuoteDetails("");
                  } catch (error) {
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
                    className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
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
                      className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-200">Nombre</label>
                    <input
                      value={quoteName}
                      onChange={(e) => setQuoteName(e.target.value)}
                      placeholder="Nombre del cliente"
                      className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
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
                    className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
                  />
                </div>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setShowQuoteForm(false)}
                    className="rounded-2xl border border-slate-700 bg-transparent px-5 py-3 text-sm text-slate-200 transition hover:bg-slate-800"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={quoteStatus === "sending"}
                    className="rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
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

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-700 bg-slate-950/85 p-8 shadow-lg shadow-slate-950/50">
            <h2 className="text-2xl font-semibold text-cyan-100">Nuestros servicios</h2>
            <ul className="mt-6 space-y-3 text-slate-200">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-3 rounded-2xl bg-slate-800/80 px-4 py-3 text-slate-100">
                  <span className="text-xl text-cyan-300">•</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-cyan-500/30 bg-slate-900/90 p-8 shadow-lg shadow-cyan-500/20">
            <h2 className="text-2xl font-semibold text-cyan-100">¿Por qué elegirnos?</h2>
            <div className="mt-6 space-y-5">
              {highlights.map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold text-cyan-100">{item.title}</h3>
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
              onClick={() => setShowQuoteForm(true)}
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
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
