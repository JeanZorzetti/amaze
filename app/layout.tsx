import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
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

const BASE_URL = "https://amazeballoons.com.br";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: {
    default: "Amaze Balloons — Mais que Infláveis. Presença de Alta Performance.",
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
    "inflável para evento",
    "inflável para feira",
    "balonismo publicitário",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
    languages: {
      "pt-BR": BASE_URL,
      "en-US": "https://amazeballoons.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: BASE_URL,
    siteName: "Amaze Balloons",
    title: "Amaze Balloons — Mais que Infláveis. Presença de Alta Performance.",
    description:
      "Infláveis personalizados premium e soluções publicitárias gigantes. Mais de 40 anos de experiência atendendo as principais marcas.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Amaze Balloons – Infláveis Personalizados de Alta Performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaze Balloons — Mais que Infláveis. Presença de Alta Performance.",
    description:
      "Infláveis personalizados premium e soluções publicitárias gigantes. Mais de 40 anos de experiência.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    // google: process.env.GOOGLE_SITE_VERIFICATION,
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
      <body className="min-h-full flex flex-col">
        {children}

        {/* Google Analytics 4 — só carrega se NEXT_PUBLIC_GA_ID estiver definido */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
