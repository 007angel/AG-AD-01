export type ThemeStyles = {
  main: string;
  cardSection: string;
  toggleButton: string;
  serviceCardWrapper: string;
  serviceOverlay: string;
  accent: string;
  mutedText: string;
  bodyText: string;
  pill: string;
};

export function getThemeStyles(isDarkMode: boolean): ThemeStyles {
  return {
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
}
