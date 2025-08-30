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

      {/* KATEGORİLER */}
      <section className="max-w-6xl mx-auto px-6 py-12">
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
            <p className="text-[15px] text-blue-700 underline"><a href="mailto:khasyenimedya@khas.edu.tr">khasyenimedya@khas.edu.tr</a></p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Sosyal Medya</h3>
            <div className="flex flex-col gap-2 text-[15px]">
              <a className="underline text-blue-700 hover:no-underline" href="https://www.instagram.com/khasyenimedyakulubu/" target="_blank" rel="noreferrer">Instagram: @khasyenimedyakulubu</a>
              <a className="underline text-blue-700 hover:no-underline" href="https://tr.ee/xHticeUEf6" target="_blank" rel="noreferrer">Üyelik Başvuru Formu</a>
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