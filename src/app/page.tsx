/* eslint-disable react/no-unescaped-entities */
// src/app/page.tsx
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* === HERO (full-bleed bg + centered glass card) === */}
      <section className="relative w-full">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/site-bg.png')" }}
        />
        {/* NOTE: overlay fade removed so background is clearly visible */}

        {/* Size & vertical centering */}
        <div className="relative z-10 h-[84vh] min-h-[380px] max-h-[1920px] flex items-center">
          <div className="mx-auto max-w-6xl w-full px-3">
            {/* Readable glass card */}
            <div className="w-full md:max-w-4xl rounded-2xl bg-white/80 backdrop-blur-md ring-1 ring-black/10 shadow-lg p-6 md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs border-gray-200 text-gray-700 bg-white/85">
                Kadir Has Üniversitesi • Yeni Medya Kulübü
              </div>

              <h1 className="mt-3 md:mt-4 text-3xl sm:text-5xl font-bold leading-tight text-blue-700">
                Media All Ödül Töreni
              </h1>

              <div className="mt-4 flex flex-wrap gap-3">
                <Button href="/kategoriler" variant="primary">Kategoriler</Button>
                <Button href="/oylama" variant="gold">OYLAMA</Button>
              </div>

              <p className="mt-3 md:mt-4 text-[15px] text-gray-700">
                KHAS Media All Ödülleri, Kadir Has Üniversitesi Yeni Medya Kulübü&apos;nün
                öncülüğünde, üniversite tarihindeki ilk kapsamlı ödül törenidir. Yılın
                &quot;en&quot;lerini belirleyerek başarıyı onurlandırmayı ve medya dünyasına
                ilham olmayı amaçlar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === İLETİŞİM BLOĞU (no background) === */}
      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-[15px] text-gray-700">
              Kadir Has Üniversitesi, Cibali, Kadir Has Cd., 34083 Cibali / Fatih / İstanbul
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">E posta</h3>
            <p className="text-[15px]">
              <a
                className="text-blue-700 underline hover:no-underline"
                href="mailto:khasyenimedya@khas.edu.tr"
              >
                khasyenimedya@khas.edu.tr
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Sosyal Medya</h3>
            <div className="flex flex-col gap-2 text-[15px]">
              <a
                className="underline text-blue-700 hover:no-underline"
                href="https://www.instagram.com/khasyenimedyakulubu/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram: @khasyenimedyakulubu
              </a>
              <a
                className="underline text-blue-700 hover:no-underline"
                href="https://tr.ee/xHticeUEf6"
                target="_blank"
                rel="noreferrer"
              >
                Üyelik Başvuru Formu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 text-xs text-gray-600">
          © {new Date().getFullYear()} KHAS Yeni Medya Kulübü • Media All Ödül Töreni
        </div>
      </footer>
    </main>
  );
}