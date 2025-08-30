const KATEGORILER = [
  "EN İYİ DİZİ",
  "EN İYİ KADIN OYUNCU",
  "EN İYİ ERKEK OYUNCU",
  "EN İYİ DİZİ ÇİFTİ",
  "EN İYİ YÖNETMEN",
  "EN İYİ SENARİST",
  "EN İYİ DİJİTAL DİZİ",
  "EN İYİ SUNUCU",
  "EN İYİ KADIN ŞARKICI",
  "EN İYİ ERKEK ŞARKICI",
  "EN İYİ ŞARKI",
  "EN İYİ MÜZİK GRUBU",
  "EN İYİ KADIN INFLUENCER",
  "EN İYİ ERKEK INFLUENCER",
  "EN İYİ YOUTUBE KANALI",
  "EN İYİ YAYINCI",
  "EN İYİ DİJİTAL YAYIN PLATFORMU",
  "EN İYİ MARKA İŞ BİRLİĞİ",
  "EN İYİ E-TİCARET SİTESİ",
  "EN İYİ MEDYA/REKLAM AJANSI",
];

export const metadata = {
  title: "Oylama • KHAS Media All",
  description: "Oylama sayfası ve kategoriler",
};

export default function OylamaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 bg-white text-black">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F2CE8]">
        Oylama
      </h1>

      <p className="mt-3 text-neutral-700">
        Oylamalar açık olduğunda bu sayfadan katılabilirsiniz.
      </p>

      <section id="kategoriler" className="mt-10">
        <h2 className="text-2xl font-bold text-black">Kategoriler</h2>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {KATEGORILER.map((label) => (
            <button
              key={label}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-left text-black hover:bg-gray-50"
            >
              {label}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}