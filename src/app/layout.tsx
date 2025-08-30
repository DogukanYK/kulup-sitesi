// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/react";

/**
 * Local brand fonts — use CSS vars to access everywhere
 * Explicit weights improve rasterization/antialiasing quality
 */
const agrandir = localFont({
  src: "../fonts/Agrandir-Wide.otf",
  variable: "--font-agrandir",
  weight: "700",
  display: "swap",
});

const quiche = localFont({
  src: "../fonts/Fontspring-DEMO-quichesans-medium.otf",
  variable: "--font-quiche",
  weight: "500",
  display: "swap",
});

const tanBuster = localFont({
  src: "../fonts/BUSTER.otf",
  variable: "--font-tanbuster",
  weight: "700",
  display: "swap",
});

// Body/default text font
const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "600"], display: "swap" });

export const metadata: Metadata = {
  title: "KHAS Media All — Yeni Medya Kulübü",
  description:
    "Kadir Has Üniversitesi Yeni Medya Kulübü'nün Media All Ödül Töreni web sitesi.",
  metadataBase: new URL("https://kulup-sitesi.vercel.app"),
  openGraph: {
    title: "KHAS Media All — Yeni Medya Kulübü",
    description: "Media All Ödül Töreni hakkında bilgiler, kategoriler ve iletişim.",
    url: "/",
    siteName: "KHAS Media All",
    locale: "tr_TR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${agrandir.variable} ${quiche.variable} ${tanBuster.variable}`}
    >
      {/* Keep page light theme & crisp text regardless of user/system prefs */}
      <body className={`${quicksand.className} bg-white text-black antialiased min-h-screen`}> 
        <Providers>
          <Navbar />
          {/* Main always white to avoid theme bleed on 404 etc. */}
          <main className="bg-white text-black isolate">{children}</main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}