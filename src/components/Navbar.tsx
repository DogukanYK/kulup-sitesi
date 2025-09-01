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
  const base =
    "px-3 py-1.5 rounded-md text-sm font-semibold transition-colors border";
  switch (variant) {
    case "primary":
      return `${base} bg-[#0F2CE8] text-white hover:bg-[#0c23b7] border-transparent`;
    case "vote":
      return `${base} bg-[#E1BF30] text-black hover:bg-[#cda72a] border-transparent`;
    case "about":
      return `${base} bg-[#8D2538] text-white hover:bg-[#731f2e] border-transparent`;
    case "outline":
      return `${base} bg-white text-black hover:bg-gray-50 border-gray-300 whitespace-nowrap`;
    default:
      return base;
  }
}

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    // 🔕 Mobilde hiç çalıştırma
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

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

    const headerRect = () =>
      (canvas.getBoundingClientRect());

    const seed = () => {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.clientWidth,
          y: Math.random() * canvas.clientHeight,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
        });
      }
    };
    seed();

    // Fare
    const mouse = { x: -9999, y: -9999, active: false };
    const onMove = (e: MouseEvent) => {
      const rect = headerRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; };

    // 💥 Tıklayınca ağı çoğalt: tıklanan noktaya yakın 8 yeni parça ekle
    const onClick = (e: MouseEvent) => {
      const rect = headerRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
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

      // Noktalar (siyah)
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.clientWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.clientHeight) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#000";
        ctx.fill();
      }

      // Çizgiler (siyah tonlu)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.hypot(dx, dy);
          if (d < MAX_DIST) {
            ctx.strokeStyle = `rgba(0,0,0,${1 - d / MAX_DIST})`;
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
          if (dm < MAX_DIST) {
            ctx.strokeStyle = `rgba(0,0,0,${1 - dm / MAX_DIST})`;
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

  return (
    <header className="sticky top-0 w-full z-50 relative text-black shadow-lg bg-white">
      {/* Mobilde gizle, desktop’ta göster */}
      <canvas
        id="spider-bg"
        className="absolute inset-0 w-full h-full -z-10 hidden md:block"
      ></canvas>

      <div className="mx-auto max-w-6xl px-4 grid grid-cols-[1fr_auto_1fr] items-center gap-4 !h-32 lg:!h-40 min-h-32 lg:min-h-40">
        {/* Sol: KHAS logo */}
        <Link
          href="https://www.khas.edu.tr"
          target="_blank"
          aria-label="Kadir Has Üniversitesi ana sitesi"
          className="justify-self-start flex items-center"
        >
          <div className="relative shrink-0 max-h-none !h-28 !w-28 lg:!h-36 lg:!w-36">
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
        <div className="justify-self-center">
          <div className="relative shrink-0 max-h-none !h-40 lg:!h-32 !w-[420px] lg:!w-[560px]">
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

        {/* Sağ: menüler */}
        <nav className="hidden md:flex items-center gap-3 justify-self-end whitespace-nowrap" aria-label="Ana menü">
          {items.map(({ href, label, variant }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} aria-current={active ? 'page' : undefined} className={classes(variant)}>
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}