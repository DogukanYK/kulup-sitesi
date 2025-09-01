"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

type Variant = "primary" | "vote" | "about" | "outline";

const items: Array<{ href: string; label: string; variant: Variant }> = [
  { href: "/hakkimizda", label: "Hakkımızda", variant: "about" },
  { href: "/iletisim",   label: "İletişim ve Katılım", variant: "outline" },
  { href: "/oylama",     label: "OYLAMA", variant: "vote" },
];

function classes(variant: Variant) {
  const base = "px-3 py-1.5 rounded-md text-sm font-semibold transition-colors border";
  switch (variant) {
    case "primary": return `${base} bg-[#0F2CE8] text-white hover:bg-[#0c23b7] border-transparent`;
    case "vote":    return `${base} bg-[#E1BF30] text-black hover:bg-[#cda72a] border-transparent`;
    case "about":   return `${base} bg-[#8D2538] text-white hover:bg-[#731f2e] border-transparent`;
    case "outline": return `${base} bg-white text-black hover:bg-gray-50 border-gray-300 whitespace-nowrap`;
    default:        return base;
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // 🔕 Mobilde örümcek ağı çalıştırma, md ve üstünde çalıştır
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const canvas = document.getElementById("spider-bg") as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const header = canvas.closest("header") as HTMLElement | null;
      const width = window.innerWidth;
      const height = header?.clientHeight ?? 200;
      const dpr = Math.max(window.devicePixelRatio || 1, 1);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Parçacıklar
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const COUNT = 70;
    const MAX_DIST = 130;

    const seed = () => {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * (canvas.clientWidth || 1),
          y: Math.random() * (canvas.clientHeight || 1),
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
        });
      }
    };
    seed();

    const rect = () => canvas.getBoundingClientRect();
    const mouse = { x: -9999, y: -9999, active: false };
    const onMove = (e: MouseEvent) => {
      const r = rect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; };

    // 💥 Tıklayınca ağı çoğalt
    const onClick = (e: MouseEvent) => {
      const r = rect();
      const cx = e.clientX - r.left;
      const cy = e.clientY - r.top;
      const EXTRA = 8;
      for (let i = 0; i < EXTRA; i++) {
        const angle = (Math.PI * 2 * i) / EXTRA;
        const radius = 10 + Math.random() * 20;
        particles.push({
          x: cx + Math.cos(angle) * radius,
          y: cy + Math.sin(angle) * radius,
          vx: (Math.random() - 0.5) * 1.0,
          vy: (Math.random() - 0.5) * 1.0,
        });
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("click", onClick);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      // Noktalar
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.clientWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.clientHeight) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#000";
        ctx.fill();
      }

      // Çizgiler
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 130) {
            ctx.strokeStyle = `rgba(0,0,0,${1 - d / 130})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        if (mouse.active) {
          const dxm = particles[i].x - mouse.x;
          const dym = particles[i].y - mouse.y;
          const dm = Math.hypot(dxm, dym);
          if (dm < 130) {
            ctx.strokeStyle = `rgba(0,0,0,${1 - dm / 130})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };
    const id = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("click", onClick);
      cancelAnimationFrame(id);
    };
  }, []);

  // 🔒 Menu açıkken body scroll kilidi + erişilebilirlik
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // odak ilk linkte
      setTimeout(() => firstLinkRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 w-full z-50 relative text-black shadow-lg bg-white">
      {/* Mobilde gizle, desktop’ta göster */}
      <canvas id="spider-bg" className="absolute inset-0 w-full h-full -z-10 hidden md:block" />

      <div className="mx-auto max-w-6xl px-3 md:px-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-4 !h-16 md:!h-28 lg:!h-40 min-h-16 md:min-h-28 lg:min-h-40 overflow-hidden">
        {/* Sol: KHAS logo */}
        <Link
          href="https://www.khas.edu.tr"
          target="_blank"
          aria-label="Kadir Has Üniversitesi ana sitesi"
          className="justify-self-start flex items-center"
        >
          <div className="relative shrink-0 max-h-none !h-10 !w-10 md:!h-16 md:!w-16 lg:!h-36 lg:!w-36">
            <Image
              src="/khas-logo1.png"
              alt="Kadir Has Üniversitesi logosu"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Orta: Kulüp logo */}
        <div className="justify-self-center max-w-full">
          <div className="relative shrink-0 max-h-none !h-12 md:!h-24 lg:!h-36 !w-[55vw] md:!w-[380px] lg:!w-[560px] max-w-[55vw] md:max-w-none">
            <Link href="/" aria-label="Anasayfa" className="block h-full w-full">
              <Image
                src="/kulup-logo-siyah1.png"
                alt="KHAS Yeni Medya Kulübü logosu"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
        </div>

        {/* Sağ: menüler (md ve üstü) */}
        <nav className="hidden md:flex items-center gap-3 justify-self-end whitespace-nowrap" aria-label="Ana menü">
          {items.map(({ href, label, variant }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} aria-current={active ? "page" : undefined} className={classes(variant)}>
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobil hamburger (md altı) */}
        <div className="justify-self-end md:hidden">
          <button
            type="button"
            aria-label="Menüyü aç"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 border border-gray-300 hover:bg-gray-50 active:scale-[0.98]"
          >
            {/* Hamburger icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        aria-hidden={!open}
        className={`md:hidden fixed inset-0 bg-black/40 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-over panel */}
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-sm font-semibold">Menü</span>
          <button
            type="button"
            aria-label="Menüyü kapat"
            onClick={() => setOpen(false)}
            className="rounded-md p-2 hover:bg-gray-50"
          >
            {/* X icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-3 p-4" onClick={() => setOpen(false)}>
          {items.map(({ href, label, variant }, idx) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={classes(variant)}
                ref={idx === 0 ? firstLinkRef : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </header>
  );
}