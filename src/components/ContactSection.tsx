export function ContactSection({ onOpenQuote }: { onOpenQuote: () => void }) {
  return (
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
          onClick={onOpenQuote}
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-xl shadow-emerald-500/30 transition hover:bg-emerald-400"
        >
          Solicitar cotización
        </button>
      </div>
    </section>
  );
}
