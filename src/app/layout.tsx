import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Agencia Aduanera L & A | Agencia Aduanera",
  description: "Agencia aduanera especializada en importación, exportación y trámites internacionales.",
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
            <a href="#" className="flex items-center gap-3 text-xl font-bold text-white">
              <svg className="h-8 w-8 text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
              </svg>
              Agencia Aduanera L & A
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#" className="hover:text-amber-300">Inicio</a>
              <a href="#servicios" className="hover:text-amber-300">Servicios</a>
              <a href="#ubicaciones" className="hover:text-amber-300">Ubicaciones</a>
              <a href="#contacto" className="hover:text-amber-300">Contacto</a>
            </nav>

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
