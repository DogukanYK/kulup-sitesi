export default function Iletisim() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <h1 className="text-3xl font-semibold">İletişim</h1>
        <div>
          <h2 className="font-medium">Adres</h2>
          <p className="text-[15px] text-gray-700">
            Kadir Has Üniversitesi, Cibali, Kadir Has Cd., 34083 Cibali / Fatih / İstanbul
          </p>
        </div>
        <div>
          <h2 className="font-medium">E-posta</h2>
          <p className="text-[15px] text-gray-700">mediaall@khas.edu.tr</p>
        </div>
        <div>
          <h2 className="font-medium">Telefon</h2>
          <p className="text-[15px] text-gray-700">+90 (___) ___ __ __</p>
        </div>
        <div>
          <h2 className="font-medium">Sosyal Medya</h2>
          <div className="flex gap-3 text-[15px] mt-2">
            <a className="px-3 py-1 border rounded-md border-gray-300 hover:bg-gray-100" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a className="px-3 py-1 border rounded-md border-gray-300 hover:bg-gray-100" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="px-3 py-1 border rounded-md border-gray-300 hover:bg-gray-100" href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </section>
    </main>
  );
}