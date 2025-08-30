"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Quicksand } from "next/font/google";

// Quiche* bold yerine: Quicksand 700 (yuvarlak, okunaklı, butonlarda güçlü görünür)
const navFont = Quicksand({ subsets: ["latin"], weight: ["700"] });

const nav = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/ekibimiz", label: "Ekibimiz" },
  { href: "/kategoriler", label: "Kategoriler" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/oylama", label: "OYLAMA" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Kulup-logo-siyah.png" // public/ altındaki siyah logo
            alt="KHAS Media All"
            width={800}
            height={300}
            priority
            className="max-h-16 md:max-h-20 h-auto w-auto object-contain"
          />
        </Link>

        {/* Desktop Menü */}
        <nav className={`hidden md:flex gap-4 text-sm ${navFont.className}`}>
          <Link
            href="/hakkimizda"
            className="px-3 py-1 rounded-md bg-[#8D2538] text-white hover:bg-[#731d2d]"
          >
            Hakkımızda
          </Link>
          <Link
            href="/ekibimiz"
            className="px-3 py-1 rounded-md bg-[#8D2538] text-white hover:bg-[#731d2d]"
          >
            Ekibimiz
          </Link>
          <Link
            href="/kategoriler"
            className="px-3 py-1 rounded-md bg-[#0F2CE8] text-white hover:bg-[#0d26c7]"
          >
            Kategoriler
          </Link>
          <Link
            href="/iletisim"
            className="px-3 py-1 rounded-md bg-[#C4C2C2] text-black hover:bg-[#a7a5a5]"
          >
            İletişim
          </Link>
          <Link
            href="/oylama"
            className="px-3 py-1 rounded-md bg-[#E1BF30] text-black hover:bg-[#caa628] font-semibold"
          >
            OYLAMA
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-300 px-3 py-2 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menü
        </button>
      </div>

      {/* Mobile Menü */}
      {open && (
        <div id="mobile-menu" className={`md:hidden border-t border-gray-200 ${navFont.className}`}>
          <div className="px-6 py-3 flex flex-col gap-2 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-1 ${isActive(item.href) ? "text-blue-700" : "text-black"}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}