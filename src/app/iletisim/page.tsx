export default function Iletisim(){
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold">İletişim</h1>
        <div className="grid gap-8 md:grid-cols-3 mt-6">
          <div>
            <h2 className="font-medium mb-2">Adres</h2>
            <p className="text-[15px] text-gray-700">Kadir Has Üniversitesi, Cibali, Kadir Has Cd., 34083 Fatih / İstanbul</p>
          </div>
          <div>
            <h2 className="font-medium mb-2">E-posta</h2>
            <p className="text-[15px] text-gray-700">mediaall@khas.edu.tr</p>
          </div>
          <div>
            <h2 className="font-medium mb-2">Sosyal Medya</h2>
            <div className="flex gap-3 text-[15px]">
              <a className="underline hover:no-underline" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a className="underline hover:no-underline" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="underline hover:no-underline" href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}