"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Card = {
  src: string;
  alt: string;
  caption: string;
};

const grid: Card[] = [
  { src: "/meet-the-team.jpg", alt: "Meet The Team", caption: "Meet The Team" },
  { src: "/baskan.jpg",        alt: "Başkanlık",      caption: "Başkanlık" },
  { src: "/yardimci.jpg",      alt: "Başkan Yardımcısı", caption: "Başkan Yardımcısı" },
  { src: "/temsilci.jpg",      alt: "Kulüp Temsilcisi",  caption: "Kulüp Temsilcisi" },
  { src: "/sosyal.jpg",        alt: "Sosyal Medya",      caption: "Sosyal Medya" },
  { src: "/sekreter.jpg",      alt: "Sekreter",          caption: "Sekreter" },
  { src: "/sponsor.jpg",       alt: "Sponsorluk",        caption: "Sponsorluk" },
  { src: "/sayman.jpg",        alt: "Mali İşler",        caption: "Mali İşler" },
  { src: "/koordinator.jpg",   alt: "Koordinatör",       caption: "Koordinatör" },
  { src: "/organizasyon.jpg",  alt: "Organizasyon",      caption: "Organizasyon" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TeamSection() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-black">Ekibimiz</h2>
      <p className="text-neutral-700 mt-2">
        2025–2026 yönetim kurulu görselleri. Aşağı kaydırdıkça kartlar görünür.
      </p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {grid.map((card, i) => (
          <motion.figure
            key={card.src}
            variants={itemVariants}
            transition={{ delay: i * 0.06 }}
            className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm"
          >
            <Image
              src={card.src}
              alt={card.alt}
              width={1200}
              height={1600}
              className="w-full h-auto object-cover"
              priority={i < 2}
            />
            <figcaption className="px-4 py-3 text-sm text-center text-neutral-800">
              {card.caption}
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}