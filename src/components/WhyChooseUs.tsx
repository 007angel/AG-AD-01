import { highlights } from "../lib/content";
import { getThemeStyles } from "../lib/theme";

export function WhyChooseUs({ isDarkMode }: { isDarkMode: boolean }) {
  const themeStyles = getThemeStyles(isDarkMode);

  return (
    <section id="por-que-elegirnos" className="scroll-mt-28">
      <div
        className={`rounded-3xl border p-8 ${isDarkMode ? "border-slate-700/70 bg-slate-950/85" : "border-slate-200/80 bg-white/90"}`}
      >
        <h2 className={`text-2xl font-semibold sm:text-3xl ${themeStyles.accent}`}>
          ¿Por qué elegirnos?
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className={`rounded-2xl border p-5 ${isDarkMode ? "border-slate-700 bg-slate-900/70" : "border-slate-200 bg-slate-50/80"}`}
            >
              <h3 className={`text-lg font-semibold ${themeStyles.accent}`}>{item.title}</h3>
              <p className={`mt-2 text-sm leading-6 ${themeStyles.mutedText}`}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
