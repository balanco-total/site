import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/primitives/SmoothScroll";
import { Noise } from "@/components/primitives/Noise";
import { CustomCursor } from "@/components/primitives/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://balancototal.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BalançoTotal — Saiba para onde o dinheiro vai",
    template: "%s · BalançoTotal",
  },
  description:
    "Controle de gastos pessoal e familiar, sem planilha e sem complicação. Importe extratos, conecte seu banco via Open Finance e veja para onde o dinheiro vai. 34 dias grátis.",
  keywords: [
    "controle de gastos",
    "finanças pessoais",
    "controle financeiro familiar",
    "importar extrato OFX",
    "Open Finance",
    "orçamento familiar",
    "app de finanças",
  ],
  authors: [{ name: "BalançoTotal" }],
  creator: "BalançoTotal",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "BalançoTotal",
    title: "BalançoTotal — Saiba para onde o dinheiro vai",
    description:
      "Controle de gastos pessoal e familiar, sem planilha e sem complicação. 34 dias grátis, sem cartão.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BalançoTotal — Saiba para onde o dinheiro vai",
    description:
      "Controle de gastos pessoal e familiar, sem planilha e sem complicação. 34 dias grátis, sem cartão.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#05070a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-dvh antialiased">
        <Noise />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
