import { highlights, services } from "../lib/content";

export function WhyChooseUs() {
  return (
    <section id="ubicaciones" className="grid scroll-mt-28 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-3xl border border-slate-700 bg-slate-950/85 p-8 shadow-lg shadow-slate-950/50">
        <h2 className="text-2xl font-semibold text-sky-100">Nuestros servicios</h2>
        <ul className="mt-6 space-y-3 text-slate-200">
          {services.map((service) => (
            <li
              key={service}
              className="flex items-center gap-3 rounded-2xl bg-slate-800/80 px-4 py-3 text-slate-100"
            >
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
  );
}
