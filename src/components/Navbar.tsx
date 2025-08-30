"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/ekibimiz", label: "Ekibimiz" },
  { href: "/kategoriler", label: "Kategoriler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-blue-700">
          KHAS Media All
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-blue-700 ${
                isActive(item.href) ? "text-blue-700" : "text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-300 px-3 py-2 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menü
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-200">
          <div className="px-6 py-3 flex flex-col gap-2 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-1 ${
                  isActive(item.href) ? "text-blue-700" : "text-black"
                }`}
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