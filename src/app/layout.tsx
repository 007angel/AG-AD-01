import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "../components/SiteHeader";
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
    "Honduras",
    "servicios aduaneros",
    "importación",
    "exportación",
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
        url: "/logopre.png",
        width: 1200,
        height: 630,
        alt: "Agencia Aduanera L & A",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia Aduanera L & A",
    description: "Aduana, transporte, marítimo, carga, aéreo, confianza y trámites internacionales.",
    images: ["/logopre.png"],
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
        <SiteHeader />

        <div className="pt-[88px] w-full flex-1">{children}</div>
      </body>
    </html>
  );
}
