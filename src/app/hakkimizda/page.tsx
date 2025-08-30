export const metadata = {
  title: "Hakkımızda • KHAS Media All",
  description: "KHAS Media All Ödülleri hakkında",
};

export default function HakkimizdaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 bg-white text-black">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F2CE8]">
        Hakkımızda
      </h1>

      <section className="mt-6 leading-relaxed space-y-4 text-neutral-800">
        <p>
          KHAS Media All Ödülleri, Kadir Has Üniversitesi Yeni Medya Kulübü’nün
          öncülüğünde, İletişim Fakültesi bünyesinde düzenlenen, üniversite
          tarihindeki bu amaçla yapılacak olan ilk kapsamlı ödül törenidir.
        </p>
        <p>
          Bu özel etkinlik, yılın “en”lerini belirleyerek hem başarıyı
          onurlandırmayı hem de medya ve iletişim dünyasında ilham kaynağı
          oluşturmayı amaçlar.
        </p>
      </section>

      <section id="ekibimiz" className="mt-12">
        <h2 className="text-2xl font-bold text-black">Ekibimiz</h2>
        <p className="text-neutral-700 mt-2">
          2024–2025 eğitim-öğretim yılında 11 kişilik yönetim kurulu ve 160+ üye.
        </p>
      </section>
    </main>
  );
}