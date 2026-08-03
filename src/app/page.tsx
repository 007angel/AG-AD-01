"use client";

import { useState } from "react";
import { ContactSection } from "../components/ContactSection";
import { FloatingActions } from "../components/FloatingActions";
import { QuoteForm } from "../components/QuoteForm";
import { ServiceCarousel } from "../components/ServiceCarousel";
import { ServiceHighlights } from "../components/ServiceHighlights";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { useTheme } from "../hooks/useTheme";
import { getThemeStyles } from "../lib/theme";

export default function Home() {
  const { isDarkMode } = useTheme();
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const themeStyles = getThemeStyles(isDarkMode);

  return (
    <main className={`min-h-screen relative transition-colors duration-300 ${themeStyles.main}`}>
      <div className="fixed inset-0 -z-10">
        {isDarkMode && (
          <video
            src="/earth.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        )}
        <div className={`absolute inset-0 ${isDarkMode ? "bg-slate-950/65" : "bg-white"}`} />
      </div>

      <section className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:px-8 lg:py-16">
        <header
          id="inicio"
          className={`${themeStyles.cardSection} mx-auto flex w-full max-w-[1600px] scroll-mt-28 flex-col gap-8 p-8 lg:p-10`}
        >
          <div className="flex justify-center">
            <p className={`w-fit rounded-full px-6 py-3 text-2xl font-semibold sm:text-3xl ${themeStyles.pill}`}>
              Agencia Aduanera especializada
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="w-full">
              <h1 className={`max-w-7xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[0.95] ${isDarkMode ? "text-slate-100" : "text-slate-950"}`}>
                Soluciones aduaneras ágiles para tu comercio internacional
              </h1>
              <p className={`mt-6 max-w-4xl text-base leading-7 sm:text-lg sm:leading-8 ${themeStyles.mutedText}`}>
                Acompañamos importaciones, exportaciones y operaciones logísticas con
                cumplimiento, agilidad y asesoría estratégica.
              </p>
            </div>
          </div>

          <ServiceHighlights isDarkMode={isDarkMode} />
        </header>

        <ServiceCarousel isDarkMode={isDarkMode} />
        <WhyChooseUs />
        <ContactSection onOpenQuote={() => setShowQuoteForm(true)} />
      </section>

      <FloatingActions onOpenQuote={() => setShowQuoteForm(true)} />
      <QuoteForm open={showQuoteForm} onClose={() => setShowQuoteForm(false)} />
    </main>
  );
}
