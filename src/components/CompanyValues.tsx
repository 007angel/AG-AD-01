import { getThemeStyles } from "../lib/theme";

const values = [
  {
    title: "Integridad",
    text: "Actuamos con ética, honestidad y coherencia en cada decisión y operación.",
  },
  {
    title: "Transparencia",
    text: "Mantenemos una comunicación clara, abierta y responsable con nuestros clientes y aliados.",
  },
  {
    title: "Precisión",
    text: "Ejecutamos cada proceso con rigor técnico y atención al detalle para garantizar resultados confiables.",
  },
  {
    title: "Eficiencia",
    text: "Optimizamos recursos y tiempos para ofrecer soluciones ágiles y de alto valor.",
  },
  {
    title: "Compromiso",
    text: "Asumimos cada operación con responsabilidad y dedicación, buscando superar las expectativas de nuestros clientes.",
  },
  {
    title: "Orientación al cliente",
    text: "Comprendemos las necesidades de cada empresa para brindar soluciones personalizadas y generar relaciones de largo plazo.",
  },
  {
    title: "Innovación",
    text: "Promovemos la mejora continua mediante la incorporación de tecnología y nuevas prácticas que fortalezcan nuestros servicios.",
  },
  {
    title: "Trabajo en equipo",
    text: "Fomentamos la colaboración y el respeto para alcanzar objetivos comunes y ofrecer un servicio integral.",
  },
  {
    title: "Responsabilidad social y desarrollo económico",
    text: "Contribuimos al fortalecimiento del comercio internacional y al crecimiento económico de Honduras mediante prácticas responsables y sostenibles.",
  },
];

export function CompanyValues({ isDarkMode }: { isDarkMode: boolean }) {
  const themeStyles = getThemeStyles(isDarkMode);

  return (
    <section id="valores" className="scroll-mt-28">
      <div className={`rounded-3xl border p-8 ${isDarkMode ? "border-slate-700/70 bg-slate-950/85" : "border-slate-200/80 bg-white/90"}`}>
        <h2 className={`text-2xl font-semibold sm:text-3xl ${themeStyles.accent}`}>Valores Organizacionales</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className={`rounded-2xl border p-5 ${isDarkMode ? "border-slate-700 bg-slate-900/70" : "border-slate-200 bg-slate-50/80"}`}
            >
              <h3 className={`text-lg font-semibold ${themeStyles.accent}`}>{value.title}</h3>
              <p className={`mt-2 text-sm leading-6 ${themeStyles.mutedText}`}>{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
