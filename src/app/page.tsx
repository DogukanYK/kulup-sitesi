/* eslint-disable react/no-unescaped-entities */
// src/app/page.tsx
import Image from "next/image";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* === HERO (full-bleed bg + centered glass card) === */}
      <section className="relative w-full -mt-[6px] pt-[6px] md:-mt-[145px] md:pt-[14px]">
        {/* Background image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/site-bg1@2x.png"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 28%" }}
          />
        </div>

        {/* Size & vertical centering */}
        <div className="relative z-30 h-[70vh] min-h-[300px] md:h-[99vh] md:min-h-[380px] max-h-[1920px] flex items-center">
          <div className="mx-auto max-w-6xl w-full px-4 sm:px-6">
            {/* Readable glass card */}
            <div className="w-full max-w-full sm:md:max-w-4xl rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-md ring-1 ring-black/10 shadow-lg p-4 sm:p-6 md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border px-2 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs border-gray-200 text-gray-700 bg-white/85">
                Kadir Has Üniversitesi • Yeni Medya Kulübü
              </div>

              <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-blue-700">
                Media All Ödül Töreni
              </h1>

              <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                <Button href="/kategoriler" variant="primary">
                  Kategoriler
                </Button>
                <Button href="/oylama" variant="gold">
                  OYLAMA
                </Button>
              </div>

              <p className="mt-3 sm:mt-4 text-[13px] sm:text-[15px] text-gray-700 leading-relaxed">
                KHAS Media All Ödülleri, Kadir Has Üniversitesi Yeni Medya Kulübü&apos;nün
                öncülüğünde, üniversite tarihindeki ilk kapsamlı ödül törenidir. Yılın
                &quot;en&quot;lerini belirleyerek başarıyı onurlandırmayı ve medya dünyasına
                ilham olmayı amaçlar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === İLETİŞİM BLOĞU === */}
      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid gap-6 sm:gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">Adres</h3>
            <p className="text-[13px] sm:text-[15px] text-gray-700">
              Kadir Has Üniversitesi, Cibali, Kadir Has Cd., 34083 Cibali / Fatih / İstanbul
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">E posta</h3>
            <p className="text-[13px] sm:text-[15px]">
              <a
                className="text-blue-700 underline hover:no-underline"
                href="mailto:khasyenimedya@khas.edu.tr"
              >
                khasyenimedya@khas.edu.tr
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">Sosyal Medya</h3>
            <div className="flex flex-col gap-1 sm:gap-2 text-[13px] sm:text-[15px]">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-[11px] sm:text-xs text-gray-600 text-center sm:text-left">
          © {new Date().getFullYear()} KHAS Yeni Medya Kulübü • Media All Ödül Töreni
        </div>
      </footer>
    </main>
  );
}