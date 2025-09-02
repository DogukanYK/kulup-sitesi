// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Variant = "primary" | "vote" | "about" | "outline";

const items: Array<{ href: string; label: string; variant: Variant }> = [
  { href: "/hakkimizda", label: "Hakkımızda", variant: "about" },
  { href: "/iletisim",   label: "İletişim ve Katılım", variant: "outline" },
  { href: "/oylama",     label: "OYLAMA", variant: "vote" },
];

function classes(variant: Variant) {
  const glass = "px-3 py-1.5 rounded-md text-sm font-semibold transition-colors border backdrop-blur-sm ring-1";
  switch (variant) {
    case "primary": return `${glass} bg-[#0F2CE8] text-white hover:bg-[#0c23b7] border-transparent ring-black/0`;
    case "vote":    return `${glass} bg-[#E1BF30] text-black hover:bg-[#cda72a] border-transparent ring-black/0`;
    case "about":   return `${glass} bg-[#8D2538] text-white hover:bg-[#731f2e] border-transparent ring-black/0`;
    case "outline": return `${glass} bg-white/90 text-black hover:bg-white ring-black/5 border-white/60 shadow-sm`;
    default:        return glass;
  }
}

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    // Desktop’ta örümcek ağı (mobil kapalı)
    if (window.innerWidth < 768) return;

    const canvas = document.getElementById("spider-bg") as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const header = canvas.closest("header") as HTMLElement | null;
      const w = window.innerWidth;
      const h = header?.clientHeight ?? 160;
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // parçacıklar
    const P: { x: number; y: number; vx: number; vy: number }[] = [];
    const COUNT = 70;
    const MAX = 130;

    const seed = () => {
      P.length = 0;
      for (let i = 0; i < COUNT; i++) {
        P.push({
          x: Math.random() * (canvas.clientWidth || 1),
          y: Math.random() * (canvas.clientHeight || 1),
          vx: (Math.random() - 0.5) * 0.55,
          vy: (Math.random() - 0.5) * 0.55,
        });
      }
    };
    seed();

    const mouse = { x: -9999, y: -9999, active: false };
    const rect = () => canvas.getBoundingClientRect();
    const onMove = (e: MouseEvent) => {
      const r = rect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    };
    const onLeave = () => (mouse.active = false);
    const onClick = (e: MouseEvent) => {
      const r = rect(), cx = e.clientX - r.left, cy = e.clientY - r.top;
      for (let i = 0; i < 8; i++) {
        const a = (Math.PI * 2 * i) / 8;
        const R = 12 + Math.random() * 18;
        P.push({ x: cx + Math.cos(a) * R, y: cy + Math.sin(a) * R, vx: (Math.random()-0.5), vy:(Math.random()-0.5) });
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("click", onClick);

    const tick = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      // stiller
      ctx.lineWidth = 0.8;
      const dotFill = "rgba(255,255,255,0.75)";

      // noktalar
      for (const p of P) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.clientWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.clientHeight) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = dotFill;
        ctx.fill();
      }

      // çizgiler (beyaz, screen blend sayesinde neonun üstünde parlıyor)
      for (let i = 0; i < P.length; i++) {
        for (let j = i + 1; j < P.length; j++) {
          const dx = P[i].x - P[j].x, dy = P[i].y - P[j].y;
          const d = Math.hypot(dx, dy);
          if (d < MAX) {
            ctx.strokeStyle = `rgba(255,255,255,${1 - d / MAX})`;
            ctx.beginPath();
            ctx.moveTo(P[i].x, P[i].y);
            ctx.lineTo(P[j].x, P[j].y);
            ctx.stroke();
          }
        }
        if (mouse.active) {
          const dxm = P[i].x - mouse.x, dym = P[i].y - mouse.y;
          const dm = Math.hypot(dxm, dym);
          if (dm < MAX) {
            ctx.strokeStyle = `rgba(255,255,255,${1 - dm / MAX})`;
            ctx.beginPath();
            ctx.moveTo(P[i].x, P[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <header className="sticky top-0 w-full z-50">
      <div className="relative">
        {/* hero paletiyle birebir degrade + altta transparan eriyen maske */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg,#ff55cc 0%,#9b5cf6 48%,#38bdf8 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
            opacity: 0.92,
          }}
        />

        {/* örümcek ağı */}
        <canvas
          id="spider-bg"
          className="absolute inset-0 -z-10 hidden md:block mix-blend-screen opacity-70"
        />

        {/* içerik */}
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-[1fr_auto_1fr] items-center gap-4 !h-28 lg:!h-36">
          {/* Sol logo (boyut sabit) */}
          <Link href="https://www.khas.edu.tr" target="_blank" aria-label="Kadir Has Üniversitesi"
                className="justify-self-start flex items-center">
            <div className="relative shrink-0 !h-20 !w-20 lg:!h-32 lg:!w-32">
              <Image src="/khas-logo1.png" alt="Kadir Has Üniversitesi logosu" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Orta logo (boyut sabit) */}
          <div className="justify-self-center">
            <div className="relative shrink-0 !h-24 lg:!h-24 !w-[360px] lg:!w-[360px]">
              <Link href="/" aria-label="Anasayfa" className="block h-full w-full">
                <Image src="/kulup-logo-siyah1.png" alt="KHAS Yeni Medya Kulübü logosu" fill className="object-contain" priority />
              </Link>
            </div>
          </div>

          {/* Sağ menüler */}
          <nav className="hidden md:flex items-center gap-3 justify-self-end">
            {items.map(({ href, label, variant }) => {
              const active = pathname === href;
              return (
                <Link key={href} href={href} aria-current={active ? "page" : undefined} className={classes(variant)}>
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}