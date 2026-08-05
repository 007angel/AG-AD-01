import { getThemeStyles } from "../lib/theme";

const mission =
  "Facilitamos el comercio internacional mediante soluciones aduaneras eficientes y personalizadas, impulsando la competitividad de importadores y exportadores con precisión, integridad y transparencia.";

const vision =
  "Consolidarnos como el aliado estratégico del comercio internacional en Honduras, reconocidos por nuestra innovación, integridad y compromiso con el desarrollo empresarial y económico del país.";

export function MissionVision({ isDarkMode }: { isDarkMode: boolean }) {
  const themeStyles = getThemeStyles(isDarkMode);

  return (
    <section id="mision-vision" className="grid scroll-mt-28 gap-6 md:grid-cols-2">
      <article
        className={`rounded-3xl border p-8 ${isDarkMode ? "border-slate-700/70 bg-slate-950/85" : "border-slate-200/80 bg-white/90"}`}
      >
        <h2 className={`text-2xl font-semibold sm:text-3xl ${themeStyles.accent}`}>Misión</h2>
        <p className={`mt-4 leading-7 ${themeStyles.mutedText}`}>{mission}</p>
      </article>
      <article
        className={`rounded-3xl border p-8 ${isDarkMode ? "border-sky-500/30 bg-slate-900/90" : "border-sky-200 bg-sky-50/60"}`}
      >
        <h2 className={`text-2xl font-semibold sm:text-3xl ${themeStyles.accent}`}>Visión</h2>
        <p className={`mt-4 leading-7 ${themeStyles.mutedText}`}>{vision}</p>
      </article>
    </section>
  );
}
