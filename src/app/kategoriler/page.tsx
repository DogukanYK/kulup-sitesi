const items = [
  "EN İYİ DİZİ","EN İYİ KADIN OYUNCU","EN İYİ ERKEK OYUNCU","EN İYİ DİZİ ÇİFTİ",
  "EN İYİ YÖNETMEN","EN İYİ SENARİST","EN İYİ DİJİTAL DİZİ","EN İYİ SUNUCU",
  "EN İYİ KADIN ŞARKICI","EN İYİ ERKEK ŞARKICI","EN İYİ ŞARKI","EN İYİ MÜZİK GRUBU",
  "EN İYİ KADIN INFLUENCER","EN İYİ ERKEK INFLUENCER","EN İYİ YOUTUBE KANALI",
  "EN İYİ YAYINCI","EN İYİ DİJİTAL YAYIN PLATFORMU","EN İYİ MARKA İŞ BİRLİĞİ",
  "EN İYİ E-TİCARET SİTESİ","EN İYİ MEDYA/REKLAM AJANSI",
];

export default function Kategoriler(){
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold">Kategoriler</h1>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[15px]">
          {items.map((x) => (
            <li key={x} className="rounded-md border bg-white px-4 py-2 border-gray-200">{x}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}