import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeToggle } from "../components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agenciaaduaneralya.com"),
  title: "Agencia Aduanera L & A | Agencia Aduanera",
  description: "Agencia aduanera especializada en importación, exportación, transporte marítimo, carga aérea, trámites aduaneros y logística internacional.",
  applicationName: "Agencia Aduanera L & A",
  authors: [{ name: "Agencia Aduanera L & A" }],
  publisher: "Agencia Aduanera L & A",
  category: "Aduanas y logística internacional",
  classification: "Aduana, transporte, carga, logística internacional",
  keywords: [
    "aduana",
    "transporte",
    "marítimo",
    "carga",
    "aéreo",
    "confianza",
    "rápido",
    "trámites",
    "agencia aduanera",
    "logística internacional",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://agenciaaduaneralya.com",
  },
  openGraph: {
    title: "Agencia Aduanera L & A",
    description: "Soluciones rápidas, confiables y especializadas en aduanas, transporte marítimo, carga aérea y trámites internacionales.",
    type: "website",
    locale: "es_HN",
    siteName: "Agencia Aduanera L & A",
    url: "https://agenciaaduaneralya.com",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 360,
        alt: "Agencia Aduanera L & A",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia Aduanera L & A",
    description: "Aduana, transporte, marítimo, carga, aéreo, confianza y trámites internacionales.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="fixed inset-x-0 top-0 z-50 w-full bg-slate-900/95 text-white shadow-lg shadow-slate-950/20 backdrop-blur-lg">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a
              href="#"
              className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-3 py-2 shadow-sm shadow-slate-950/20 ring-1 ring-white/5"
            >
              <img
                src="/logo.png"
                alt="Agencia Aduanera L & A"
                className="h-14 w-auto object-contain md:h-16"
                style={{ filter: "drop-shadow(0 0 6px rgba(15, 23, 42, 0.35))" }}
              />
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#" className="hover:text-amber-300">Inicio</a>
              <a href="#servicios" className="hover:text-amber-300">Servicios</a>
              <a href="#ubicaciones" className="hover:text-amber-300">Ubicaciones</a>
              <a href="#contacto" className="hover:text-amber-300">Contacto</a>
            </nav>

            <div className="ml-auto flex items-center gap-3">
              <ThemeToggle />
            </div>

            <div className="md:hidden">
              <button aria-label="Abrir menú" className="inline-flex items-center justify-center rounded-md border border-slate-700 px-3 py-2 text-sm">
                ☰
              </button>
            </div>
          </div>
        </header>

        <div className="pt-[88px] w-full">{children}</div>
      </body>
    </html>
  );
}
