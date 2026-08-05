import { news } from "../lib/content";
import { getThemeStyles } from "../lib/theme";

export function NewsSection({ isDarkMode }: { isDarkMode: boolean }) {
  const themeStyles = getThemeStyles(isDarkMode);

  return (
    <section id="noticias" className="scroll-mt-28">
      <div
        className={`rounded-3xl border p-8 ${isDarkMode ? "border-slate-700/70 bg-slate-950/85" : "border-slate-200/80 bg-white/90"}`}
      >
        <h2 className={`text-2xl font-semibold sm:text-3xl ${themeStyles.accent}`}>
          Noticias y Avisos
        </h2>
        <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-2">
          {news.map((item) => (
            <article
              key={item.title}
              className={`flex flex-col rounded-2xl border p-5 ${
                isDarkMode ? "border-slate-700 bg-slate-900/70" : "border-slate-200 bg-slate-50/80"
              }`}
            >
              <p className={`text-xs font-medium uppercase tracking-widest ${themeStyles.mutedText}`}>
                {item.date}
              </p>
              <h3 className={`mt-2 text-lg font-semibold ${themeStyles.accent}`}>{item.title}</h3>
              <p className={`mt-2 text-sm leading-6 ${themeStyles.mutedText}`}>{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
