// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";  // ✅ Navbar import

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        {/* ✅ Navbar artık her sayfada görünecek */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}