"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Variant = "primary" | "vote" | "about" | "outline";

const items: Array<{ href: string; label: string; variant: Variant }> = [
  { href: "/hakkimizda", label: "Hakkımızda", variant: "about" }, // bordo
  { href: "/iletisim",   label: "İletişim ve Katılım", variant: "outline" }, // beyaz/çizgili
  { href: "/oylama",      label: "OYLAMA",      variant: "vote"    }, // altın
];

function classes(variant: Variant, active: boolean) {
  const base =
    "px-3 py-1.5 rounded-md text-sm font-semibold transition-colors border";
  switch (variant) {
    case "primary": // #0F2CE8
      return `${base} bg-[#0F2CE8] text-white hover:bg-[#0c23b7] border-transparent`;
    case "vote": // #E1BF30
      return `${base} bg-[#E1BF30] text-black hover:bg-[#cda72a] border-transparent`;
    case "about": // #8D2538
      return `${base} bg-[#8D2538] text-white hover:bg-[#731f2e] border-transparent`;
    case "outline":
      return `${base} bg-white text-black hover:bg-gray-50 border-gray-300`;
    default:
      return base;
  }
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="mx-auto max-w-6xl px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/kulup-logo-siyah.png" // prod’da küçük/harf dosya adı!
            alt="KHAS Yeni Medya Kulübü"
            width={120}
            height={48}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Nav (desktop) */}
        <nav className="hidden md:flex items-center gap-2">
          {items.map(({ href, label, variant }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} className={classes(variant, active)}>
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}