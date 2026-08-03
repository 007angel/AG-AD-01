import { highlights } from "../lib/content";
import { getThemeStyles } from "../lib/theme";

export function ServiceHighlights({ isDarkMode }: { isDarkMode: boolean }) {
  const themeStyles = getThemeStyles(isDarkMode);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {highlights.map((item) => (
        <article
          key={item.title}
          className={`rounded-2xl border p-5 ${isDarkMode ? "border-slate-700 bg-slate-900/70" : "border-slate-200 bg-slate-50/80"}`}
        >
          <div
            className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full ${
              isDarkMode ? "bg-sky-500/15 text-sky-200" : "bg-sky-100 text-sky-700"
            }`}
          >
            ✓
          </div>
          <h3 className={`text-lg font-semibold ${themeStyles.accent}`}>{item.title}</h3>
          <p className={`mt-2 text-sm leading-6 ${themeStyles.mutedText}`}>{item.text}</p>
        </article>
      ))}
    </div>
  );
}
