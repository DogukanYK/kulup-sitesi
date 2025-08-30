/* eslint-disable react/no-unescaped-entities */
// src/app/page.tsx
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  // Kategoriler listesi
  const categories = [
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

  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs border-gray-200 text-gray-600">
          Kadir Has Üniversitesi • Yeni Medya Kulübü
        </div>

        <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-blue-700">
          Media All Ödül Töreni
        </h1>
          <div className="mt-6 flex gap-3">
        <Link href="/hakkimizda" className="px-4 py-2 rounded-md bg-[#8D2538] text-white hover:bg-[#731d2d]">
          Hakkımızda
         </Link>
        <Link href="/kategoriler" className="px-4 py-2 rounded-md bg-[#0F2CE8] text-white hover:bg-[#0d26c7]">
          Kategoriler
         </Link>
         <Link href="/oylama" className="px-4 py-2 rounded-md bg-[#E1BF30] text-black hover:bg-[#caa628] font-semibold">
          OYLAMA
         </Link>
          </div>
        <p className="mt-4 max-w-3xl text-[15px] text-gray-700">
          KHAS Media All Ödülleri, Kadir Has Üniversitesi Yeni Medya Kulübü&apos;nün öncülüğünde,
          üniversite tarihindeki ilk kapsamlı ödül törenidir. Yılın &quot;en&quot;lerini belirleyerek
          başarıyı onurlandırmayı ve medya dünyasına ilham olmayı amaçlar.
        </p>
      </section>

      {/* İKİ SÜTUN: Hakkımızda / Ekibimiz */}
      <section className="border-y border-gray-200 bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Hakkımızda</h2>
            <p className="text-[15px] text-gray-700">
              KHAS Media All Ödülleri, Kadir Has Üniversitesi Yeni Medya Kulübü&apos;nün öncülüğünde,
              İletişim Fakültesi bünyesinde düzenlenen; yılın &quot;en&quot;lerini belirleyerek hem başarıyı
              onurlandırmayı hem de medya ve iletişim dünyasında ilham oluşturmayı amaçlayan bir organizasyondur.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Ekibimiz</h2>
            <p className="text-[15px] text-gray-700">
              Yeni Medya Kulübü; yenilikleri takip eden, yaratıcı projeler üreten bir öğrenci topluluğudur.
              2024–2025 itibarıyla 11 kişilik yönetim kurulu ve 160 üyeden oluşmaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* KATEGORİLER */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Kategoriler</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[15px]">
          {categories.map((x) => (
            <li key={x} className="rounded-md border border-gray-200 bg-white px-4 py-2">
              {x}
            </li>
          ))}
        </ul>
      </section>

      {/* İLETİŞİM BLOĞU */}
      <section className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-[15px] text-gray-700">
              Kadir Has Üniversitesi, Cibali, Kadir Has Cd., 34083 Cibali / Fatih / İstanbul
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">E-posta</h3>
            <p className="text-[15px] text-gray-700">mediaall@khas.edu.tr</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Sosyal Medya</h3>
            <div className="flex gap-3 text-[15px]">
              <a className="underline hover:no-underline" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a className="underline hover:no-underline" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="underline hover:no-underline" href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8 text-xs text-gray-600">
          © {new Date().getFullYear()} KHAS Yeni Medya Kulübü • Media All Ödül Töreni
        </div>
      </footer>
    </main>
  );
}