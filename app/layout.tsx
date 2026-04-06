import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { OrganizationSchema } from "@/components/SchemaOrg";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const BASE_URL = "https://amazeballoons.com";

export const metadata: Metadata = {
  title: {
    default: "Amaze Balloons - Mais que Infláveis. Presença de Alta Performance.",
    template: "%s | Amaze Balloons",
  },
  description:
    "Infláveis personalizados premium, infláveis publicitários gigantes, arcos, mascotes e formatos especiais. Mais de 40 anos de experiência. Atendendo marcas em todo o continente americano.",
  keywords: [
    "infláveis personalizados",
    "infláveis publicitários",
    "inflável gigante",
    "mascotes infláveis",
    "infláveis promocionais",
    "arcos infláveis personalizados",
    "balão publicitário gigante",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": BASE_URL,
      "pt-BR": "https://amazeballoons.com.br",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: BASE_URL,
    siteName: "Amaze Balloons",
    title: "Amaze Balloons - Mais que Infláveis. Presença de Alta Performance.",
    description:
      "Infláveis personalizados premium e soluções publicitárias gigantes. Mais de 40 anos de experiência atendendo as principais marcas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amaze Balloons – Infláveis Personalizados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaze Balloons - Mais que Infláveis. Presença de Alta Performance.",
    description:
      "Infláveis personalizados premium e soluções publicitárias gigantes. Mais de 40 anos de experiência.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    // google: "YOUR_GOOGLE_VERIFICATION_CODE",
    // yandex: "YOUR_YANDEX_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${inter.variable} h-full`}>
      <head>
        <OrganizationSchema />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
