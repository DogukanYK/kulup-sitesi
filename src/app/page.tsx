/* eslint-disable react/no-unescaped-entities */
// src/app/page.tsx
import Button from "../components/ui/Button";

export default function Home() {
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

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/kategoriler" variant="primary">Kategoriler</Button>
          <Button href="/oylama" variant="gold">OYLAMA</Button>
        </div>

        <p className="mt-4 max-w-3xl text-[15px] text-gray-700">
          KHAS Media All Ödülleri, Kadir Has Üniversitesi Yeni Medya Kulübü&apos;nün öncülüğünde,
          üniversite tarihindeki ilk kapsamlı ödül törenidir. Yılın &quot;en&quot;lerini belirleyerek
          başarıyı onurlandırmayı ve medya dünyasına ilham olmayı amaçlar.
        </p>
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

      {/* FOOTER */}
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8 text-xs text-gray-600">
          © {new Date().getFullYear()} KHAS Yeni Medya Kulübü • Media All Ödül Töreni
        </div>
      </footer>
    </main>
  );
}