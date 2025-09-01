"use client";

import type { Variants } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";

type Card = { src: string; alt: string; w: number; h: number };

// Public/ altındaki görsellerle birebir aynı olmalı
const photos: Card[] = [
  { src: "/meet-the-team.jpg", alt: "Meet the Team kapak", w: 1080, h: 1350 },
  { src: "/baskan.jpg",        alt: "Başkanlık",            w: 1080, h: 1350 },
  { src: "/yardimci.jpg",      alt: "Başkan Yardımcısı",    w: 1080, h: 1350 },
  { src: "/temsilci.jpg",      alt: "Kulüp Temsilcisi",     w: 1080, h: 1350 },
  { src: "/organizasyon.jpg",  alt: "Organizasyon ekibi",   w: 1080, h: 1350 },
  { src: "/koordinator.jpg",   alt: "Sosyal Medya ekibi",   w: 1080, h: 1350 },
  { src: "/sekreter.jpg",      alt: "Sekreter",             w: 1080, h: 1350 },
  { src: "/sponsor.jpg",       alt: "Sponsorluk ekibi",     w: 1080, h: 1350 },
  { src: "/sayman.jpg",        alt: "Mali İşler / Sayman",  w: 1080, h: 1350 },
];

const container: Variants = {
  hidden: {}, // boş bırak, opaklık verme
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      // string yerine cubic-bezier dizi kullan
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function TeamStrip() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="mt-6 space-y-8 sm:space-y-12"
    >
      {photos.map((p, i) => (
        <motion.figure key={p.src} variants={item} className="w-full flex justify-center">
          <div className="w-full max-w-[900px] overflow-hidden rounded-xl shadow-lg">
            <Image
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
              sizes="(max-width: 1024px) 100vw, 900px"
              className="h-auto w-full object-cover select-none"
            />
          </div>
          <figcaption className="sr-only">{p.alt}</figcaption>
        </motion.figure>
      ))}
    </motion.div>
  );
}