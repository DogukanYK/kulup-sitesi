"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Button } from "./ui/Button";

const nav = [
  { href: "/hakkimizda", label: "Hakkımızda", variant: "maroon" as const },
  { href: "/ekibimiz", label: "Ekibimiz", variant: "maroon" as const },
  { href: "/kategoriler", label: "Kategoriler", variant: "primary" as const },
  { href: "/iletisim", label: "İletişim", variant: "gray" as const },
  { href: "/oylama", label: "OYLAMA", variant: "warning" as const },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo: sabit alan ayırıp menünün sola kaymasını engeller */}
        <Link href="/" className="flex items-center gap-2 w-40">
          <Image
            src="/kulup-logo-siyah.png"
            alt="KHAS Media All"
            width={400}
            height={160}
            priority
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menü */}
        <nav className="hidden md:flex gap-4 text-sm ml-auto">
          {nav.map((item) => (
            <Button
              key={item.href}
              href={item.href}
              variant={item.variant}
              className={isActive(item.href) ? "ring-2 ring-offset-2 ring-blue-600" : ""}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden h-9 w-9 rounded-md border border-gray-300 grid place-items-center"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Menüyü aç/kapat"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-3 flex flex-col gap-2 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 ${isActive(item.href) ? "text-blue-700" : "text-black"}`}
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