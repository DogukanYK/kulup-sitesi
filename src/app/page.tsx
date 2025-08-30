import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight text-blue-700">
            KHAS Media All
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/hakkimizda" className="hover:text-blue-700">Hakkımızda</Link>
            <Link href="/ekibimiz" className="hover:text-blue-700">Ekibimiz</Link>
            <Link href="/kategoriler" className="hover:text-blue-700">Kategoriler</Link>
            <Link href="/iletisim" className="hover:text-blue-700">İletişim</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700">Media All Ödül Töreni</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">
          Kadir Has Üniversitesi Yeni Medya Kulübü&apos;nün öncülüğünde düzenlenen, üniversite tarihindeki ilk
          kapsamlı ödül töreni. Yılın &quot;en&quot;lerini belirleyerek başarıyı onurlandırmayı ve medya dünyasına
          ilham kaynağı olmayı amaçlar.
        </p>
      </section>

      {/* HAKKIMIZDA */}
      <section id="hakkimizda" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Hakkımızda</h2>
        <p className="text-gray-700 mb-4">
          KHAS Media All Ödülleri, Kadir Has Üniversitesi Yeni Medya Kulübü&apos;nün öncülüğünde, İletişim Fakültesi
          bünyesinde düzenlenen, üniversite tarihindeki bu amaçla yapılacak olan ilk kapsamlı ödül törenidir. Bu özel
          etkinlik, yılın &quot;en&quot;lerini belirleyerek hem başarıyı onurlandırmayı hem de medya ve iletişim dünyasında bir
          ilham kaynağı oluşturmayı amaçlamaktadır.
        </p>
        <p className="text-gray-700 mb-4">
          Kadir Has Üniversitesi çağdaş eğitimi ve yenilikçi vizyonuyla Türkiye&apos;nin öncü eğitim kurumlarından biridir.
          İletişim Fakültesi&apos;nin güçlü akademik temelleri ve Yeni Medya Kulübü&apos;nün dinamik yapısı sayesinde, öğrenciler
          çağın gereksinimlerine uygun bir şekilde yetiştirilmektedir. KHAS Media All Ödülleri bu vizyonun bir uzantısı
          olarak topluluğa ve sektöre katkı sunmayı hedefler.
        </p>
        <p className="text-gray-700">
          Bu yıl ilk kez düzenlenen ödül törenimiz, bir geleneğin başlangıcını müjdeliyor. Gelecek yıllarda medya
          dünyasından ilham verici figürleri ödüllendirerek büyümeyi ve üniversitemiz ile sektör arasında köprü kurmayı
          hedefliyoruz.
        </p>
      </section>

      {/* EKİBİMİZ */}
      <section id="ekibimiz" className="max-w-6xl mx-auto px-6 py-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Ekibimiz</h2>
        <p className="text-gray-700 mb-4">
          Yeni Medya Kulübü, medya ve iletişim dünyasındaki yenilikleri takip eden, yaratıcı projelere imza atan seçkin
          bir öğrenci topluluğudur. 2024-2025 eğitim-öğretim yılı itibarıyla 11 kişilik yönetim kurulu ve 160 üyeden
          oluşmaktadır.
        </p>
        <p className="text-gray-700">
          KHAS Media All Ödülleri, ekibimizin yaratıcılığını, iş birliğini ve yenilikçi yaklaşımını yansıtan en prestijli
          projelerimizden biridir.
        </p>
      </section>

      {/* KATEGORİLER */}
      <section id="kategoriler" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Kategoriler</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 text-sm">
          {[
            "EN İYİ DİZİ","EN İYİ KADIN OYUNCU","EN İYİ ERKEK OYUNCU","EN İYİ DİZİ ÇİFTİ",
            "EN İYİ YÖNETMEN","EN İYİ SENARİST","EN İYİ DİJİTAL DİZİ","EN İYİ SUNUCU",
            "EN İYİ KADIN ŞARKICI","EN İYİ ERKEK ŞARKICI","EN İYİ ŞARKI","EN İYİ MÜZİK GRUBU",
            "EN İYİ KADIN INFLUENCER","EN İYİ ERKEK INFLUENCER","EN İYİ YOUTUBE KANALI",
            "EN İYİ YAYINCI","EN İYİ DİJİTAL YAYIN PLATFORMU","EN İYİ MARKA İŞ BİRLİĞİ",
            "EN İYİ E-TİCARET SİTESİ","EN İYİ MEDYA/REKLAM AJANSI",
          ].map(x => (
            <li key={x} className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2">{x}</li>
          ))}
        </ul>
      </section>

      {/* İLETİŞİM */}
      <section id="iletisim" className="max-w-6xl mx-auto px-6 py-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">İletişim</h2>
        <p className="text-gray-700 text-sm mb-2">ADRES: Kadir Has Üniversitesi, Cibali, Kadir Has Cd., 34083 Fatih / İstanbul</p>
        <p className="text-gray-700 text-sm mb-2">E-posta: mediaall@khas.edu.tr</p>
        <div className="flex gap-3 mt-4">
          <a href="#" className="px-3 py-1.5 rounded-md border border-gray-300 bg-white text-sm hover:bg-gray-100">Instagram</a>
          <a href="#" className="px-3 py-1.5 rounded-md border border-gray-300 bg-white text-sm hover:bg-gray-100">LinkedIn</a>
          <a href="#" className="px-3 py-1.5 rounded-md border border-gray-300 bg-white text-sm hover:bg-gray-100">YouTube</a>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-10 text-xs text-gray-500">
        © {new Date().getFullYear()} KHAS Yeni Medya Kulübü • Media All Ödül Töreni
      </footer>
    </div>
  );
}