// src/app/page.tsx
import Link from "next/link";

const COLORS = {
  blue: "#0F2CE8",        // KHAS mavisine yakın bir ton
  gray100: "#f7f7f7",
  gray200: "#e6e6e6",
  gray600: "#6b7280",
  black: "#000000",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* === NAVBAR (nm.khas.edu.tr benzeri: beyaz zemin + ince alt çizgi) === */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b" style={{ borderColor: COLORS.gray200 }}>
        <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight" style={{ color: COLORS.blue }}>
            KHAS Media All
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-[15px]">
            <Link className="hover:opacity-80" href="/hakkimizda">Hakkımızda</Link>
            <Link className="hover:opacity-80" href="/ekibimiz">Ekibimiz</Link>
            <Link className="hover:opacity-80" href="/kategoriler">Kategoriler</Link>
            <Link className="hover:opacity-80" href="/iletisim">İletişim</Link>
          </nav>
        </div>
      </header>

      {/* === HERO (sola hizalı başlık + kısa paragraf + birincil/ikincil butonlar) === */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs"
             style={{ borderColor: COLORS.gray200, color: COLORS.gray600 }}>
          Kadir Has Üniversitesi • Yeni Medya Kulübü
        </div>

        <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight"
            style={{ color: COLORS.blue }}>
          Media All Ödül Töreni
        </h1>

        <p className="mt-4 max-w-3xl text-[15px]" style={{ color: COLORS.gray600 }}>
          Kadir Has Üniversitesi Yeni Medya Kulübü&apos;nün öncülüğünde düzenlenen, üniversite tarihindeki ilk
          kapsamlı ödül töreni. Yılın &quot;en&quot;lerini belirleyerek başarıyı onurlandırmayı ve medya dünyasına
          ilham kaynağı olmayı amaçlar.
        </p>

        <div className="mt-6 flex flex-wrap gap-10 text-[15px]">
          <div className="flex gap-3">
            <Link
              href="/kategoriler"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 font-medium border"
              style={{ borderColor: COLORS.blue, color: COLORS.blue }}
            >
              Kategoriler
            </Link>
            <Link
              href="/hakkimizda"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 font-medium border"
              style={{ borderColor: COLORS.gray200 }}
            >
              Hakkımızda
            </Link>
          </div>
        </div>
      </section>

      {/* === İKİ SÜTUN BİLGİ BLOĞU (nm.khas.edu.tr’deki içerik yoğunluğu gibi) === */}
      <section className="border-y py-12" style={{ borderColor: COLORS.gray200, background: COLORS.gray100 }}>
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Hakkımızda</h2>
            <p className="text-[15px]" style={{ color: COLORS.gray600 }}>
              KHAS Media All Ödülleri, Kadir Has Üniversitesi Yeni Medya Kulübü&apos;nün öncülüğünde,
              İletişim Fakültesi bünyesinde düzenlenen, üniversite tarihindeki bu amaçla yapılacak olan ilk
              kapsamlı ödül törenidir. Bu özel etkinlik, yılın &quot;en&quot;lerini belirleyerek hem başarıyı
              onurlandırmayı hem de medya ve iletişim dünyasında bir ilham kaynağı oluşturmayı amaçlamaktadır.
            </p>
            <Link href="/hakkimizda" className="inline-flex items-center gap-1 text-[15px] font-medium"
                  style={{ color: COLORS.blue }}>
              Daha fazla bilgi →
            </Link>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Ekibimiz</h2>
            <p className="text-[15px]" style={{ color: COLORS.gray600 }}>
              Yeni Medya Kulübü; medya ve iletişim dünyasındaki yenilikleri takip eden, yaratıcı projelere imza atan
              seçkin bir öğrenci topluluğudur. 2024–2025 itibarıyla 11 kişilik yönetim kurulu ve 160 üyeden oluşmaktadır.
            </p>
            <Link href="/ekibimiz" className="inline-flex items-center gap-1 text-[15px] font-medium"
                  style={{ color: COLORS.blue }}>
              Ekibi gör →
            </Link>
          </div>
        </div>
      </section>

      {/* === KATEGORİLER (liste, sade kartlar) === */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Kategoriler</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[15px]">
          {[
            "EN İYİ DİZİ","EN İYİ KADIN OYUNCU","EN İYİ ERKEK OYUNCU","EN İYİ DİZİ ÇİFTİ",
            "EN İYİ YÖNETMEN","EN İYİ SENARİST","EN İYİ DİJİTAL DİZİ","EN İYİ SUNUCU",
            "EN İYİ KADIN ŞARKICI","EN İYİ ERKEK ŞARKICI","EN İYİ ŞARKI","EN İYİ MÜZİK GRUBU",
            "EN İYİ KADIN INFLUENCER","EN İYİ ERKEK INFLUENCER","EN İYİ YOUTUBE KANALI",
            "EN İYİ YAYINCI","EN İYİ DİJİTAL YAYIN PLATFORMU","EN İYİ MARKA İŞ BİRLİĞİ",
            "EN İYİ E-TİCARET SİTESİ","EN İYİ MEDYA/REKLAM AJANSI",
          ].map((x) => (
            <li key={x}
                className="rounded-md border bg-white px-4 py-2"
                style={{ borderColor: COLORS.gray200, color: COLORS.black }}>
              {x}
            </li>
          ))}
        </ul>
      </section>

      {/* === İLETİŞİM (nm.khas.edu.tr’nin footer bilgisini andıran blok) === */}
      <section className="border-t" style={{ borderColor: COLORS.gray200 }}>
        <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-[15px]" style={{ color: COLORS.gray600 }}>
              Kadir Has Üniversitesi, Cibali, Kadir Has Cd., 34083 Fatih / İstanbul
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">İletişim</h3>
            <p className="text-[15px]" style={{ color: COLORS.gray600 }}>
              mediaall@khas.edu.tr
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Sosyal Medya</h3>
            <div className="flex gap-3 text-[15px]">
              <a className="underline hover:no-underline" href="#">Instagram</a>
              <a className="underline hover:no-underline" href="#">LinkedIn</a>
              <a className="underline hover:no-underline" href="#">YouTube</a>
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="border-t" style={{ borderColor: COLORS.gray200 }}>
        <div className="max-w-6xl mx-auto px-6 py-8 text-xs"
             style={{ color: COLORS.gray600 }}>
          © {new Date().getFullYear()} KHAS Yeni Medya Kulübü • Media All Ödül Töreni
        </div>
      </footer>
    </div>


        )return (
    <main className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
          <Link href="/" className="font-semibold text-blue-700">KHAS Media All</Link>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/hakkimizda" className="hover:text-blue-700">Hakkımızda</Link>
            <Link href="/ekibimiz" className="hover:text-blue-700">Ekibimiz</Link>
            <Link href="/kategoriler" className="hover:text-blue-700">Kategoriler</Link>
            <Link href="/iletisim" className="hover:text-blue-700">İletişim</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700">
          Media All Ödül Töreni
        </h1>
        <p className="mt-4 max-w-3xl text-gray-700 text-[15px]">
          KHAS Media All Ödülleri, Kadir Has Üniversitesi Yeni Medya Kulübü’nün
          öncülüğünde düzenlenen, üniversite tarihindeki ilk kapsamlı ödül törenidir.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/hakkimizda" className="px-4 py-2 border rounded-md text-sm font-medium border-gray-300 hover:border-blue-700">Hakkımızda</Link>
          <Link href="/kategoriler" className="px-4 py-2 border rounded-md text-sm font-medium border-blue-700 text-blue-700">Kategoriler</Link>
        </div>
      </section>
    </main>
  );
}