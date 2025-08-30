// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Quicksand } from "next/font/google";
import Navbar from "../components/Navbar";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });
const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "KHAS Media All — Yeni Medya Kulübü",
  description: "Kadir Has Üniversitesi Yeni Medya Kulübü'nün Media All Ödül Töreni web sitesi.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${spaceGrotesk.className} bg-white text-black antialiased`}>
        <Providers>
          <Navbar />
          <main className={quicksand.className}>{children}</main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}