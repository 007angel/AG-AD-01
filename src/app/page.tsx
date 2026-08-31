"use client";

import { useState } from "react";
import { ContactSection } from "../components/ContactSection";
import { CompanyValues } from "../components/CompanyValues";
import { FloatingActions } from "../components/FloatingActions";
import { HeroVideo } from "../components/HeroVideo";
import { MissionVision } from "../components/MissionVision";
import { QuoteForm } from "../components/QuoteForm";
import { ServiceCarousel } from "../components/ServiceCarousel";
import { ServicesDetail } from "../components/ServicesDetail";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { useTheme } from "../hooks/useTheme";
import { getThemeStyles } from "../lib/theme";
import { companyInfo } from "../lib/content";

const WHATSAPP_URL = `https://wa.me/${companyInfo.phoneRaw}?text=${encodeURIComponent(companyInfo.whatsappText)}`;

export default function Home() {
  const { isDarkMode } = useTheme();
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const themeStyles = getThemeStyles(isDarkMode);

  return (
    <main className={`min-h-screen relative transition-colors duration-300 ${themeStyles.main}`}>
      <div className="fixed inset-0 -z-10">
        <div className={`absolute inset-0 ${isDarkMode ? "bg-slate-950/65" : "bg-white"}`} />
      </div>

      <HeroVideo />

      <section className="mx-auto flex max-w-screen-2xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-10 lg:py-16">
        <header className="mx-auto flex w-full max-w-4xl scroll-mt-28 flex-col items-center text-center gap-6">
          <div className="flex items-center gap-3">
            <span className={`h-px w-8 sm:w-12 ${isDarkMode ? "bg-sky-400/40" : "bg-sky-500/50"}`} />
            <span className={`text-xs font-semibold uppercase tracking-[0.25em] sm:text-sm ${isDarkMode ? "text-sky-300" : "text-sky-600"}`}>
              Aduanas y Logística Internacional
            </span>
            <span className={`h-px w-8 sm:w-12 ${isDarkMode ? "bg-sky-400/40" : "bg-sky-500/50"}`} />
          </div>

          <h1 className={`text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[0.95] ${isDarkMode ? "text-slate-100" : "text-slate-950"}`}>
            Soluciones aduaneras{" "}
            <span className={isDarkMode ? "text-sky-300" : "text-sky-600"}>ágiles</span>
            {" "}para tu empresa
          </h1>

          <p className={`max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${themeStyles.mutedText}`}>
            Acompañamos importaciones, exportaciones y operaciones logísticas con
            cumplimiento, agilidad y asesoría estratégica en toda Honduras.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-2">
            <button
              onClick={() => setShowQuoteForm(true)}
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
            >
              Solicitar cotización
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 ${
                isDarkMode
                  ? "border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                  : "border border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
              }`}
            >
              Contactar por WhatsApp
            </a>
          </div>
        </header>

        <ServiceCarousel isDarkMode={isDarkMode} />
        <ServicesDetail isDarkMode={isDarkMode} />
        <WhyChooseUs isDarkMode={isDarkMode} />
        <CompanyValues isDarkMode={isDarkMode} />
        <MissionVision isDarkMode={isDarkMode} />
        <ContactSection onOpenQuote={() => setShowQuoteForm(true)} isDarkMode={isDarkMode} />
      </section>

      <FloatingActions onOpenQuote={() => setShowQuoteForm(true)} />
      <QuoteForm open={showQuoteForm} onClose={() => setShowQuoteForm(false)} />
    </main>
  );
}
