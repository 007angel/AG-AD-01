import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#071a35",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://agenciaaduaneralya.com"),
  title: {
    default: "Agencia Aduanera L & A | Aduanas y Logística Internacional en Honduras",
    template: "%s | Agencia Aduanera L & A",
  },
  description:
    "Agencia aduanera en Honduras. Importación, exportación, trámites aduaneros, transporte marítimo, carga aérea y logística internacional con cumplimiento y agilidad.",
  applicationName: "Agencia Aduanera L & A",
  authors: [{ name: "Agencia Aduanera L & A" }],
  publisher: "Agencia Aduanera L & A",
  category: "Aduanas y logística internacional",
  classification: "Aduana, transporte, carga, logística internacional",
  keywords: [
    "agencia aduanera",
    "aduana",
    "agencia aduanal",
    "transporte marítimo",
    "carga aérea",
    "trámites aduaneros",
    "logística internacional",
    "importación",
    "exportación",
    "Honduras",
    "servicios aduaneros",
  ],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logopre.png", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://agenciaaduaneralya.com",
  },
  openGraph: {
    title: "Agencia Aduanera L & A | Aduanas y Logística Internacional en Honduras",
    description:
      "Agencia aduanera en Honduras. Importación, exportación, trámites aduaneros, transporte marítimo, carga aérea y logística internacional.",
    type: "website",
    locale: "es_HN",
    siteName: "Agencia Aduanera L & A",
    url: "https://agenciaaduaneralya.com",
    images: [
      {
        url: "https://agenciaaduaneralya.com/logopre.png",
        secureUrl: "https://agenciaaduaneralya.com/logopre.png",
        width: 1232,
        height: 848,
        alt: "Agencia Aduanera L & A",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia Aduanera L & A | Aduanas y Logística Internacional",
    description:
      "Importación, exportación, trámites aduaneros, transporte marítimo, carga aérea y logística internacional en Honduras.",
    images: ["https://agenciaaduaneralya.com/logopre.png"],
  },
  other: {
    "fb:app_id": "TU_FACEBOOK_APP_ID",
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
