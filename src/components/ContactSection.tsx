"use client";

export function ContactSection({ onOpenQuote, isDarkMode }: { onOpenQuote: () => void; isDarkMode: boolean }) {
  return (
    <section
      id="contacto"
      className={`rounded-3xl border p-8 shadow-xl transition-colors duration-300 ${
        isDarkMode
          ? "border-slate-700 bg-slate-950/90 text-white shadow-slate-950/50"
          : "border-slate-200 bg-white/90 text-slate-950 shadow-slate-950/5"
      }`}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${isDarkMode ? "text-amber-300" : "text-amber-600"}`}>
            Contáctanos
          </p>
          <h2 className={`mt-2 text-3xl font-semibold ${isDarkMode ? "text-white" : "text-slate-950"}`}>
            Tu operación internacional merece una gestión segura
          </h2>
        </div>
        <button
          onClick={onOpenQuote}
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-xl shadow-emerald-500/30 transition hover:bg-emerald-400"
        >
          Solicitar cotización
        </button>
      </div>
    </section>
  );
}
