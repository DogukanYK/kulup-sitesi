export const metadata = {
  title: "İletişim ve Katılım • KHAS Media All",
  description: "KHAS Media All iletişim ve kulüp üyelik bilgileri",
};

export default function IletisimPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 bg-white text-black">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F2CE8]">
        İletişim ve Katılım
      </h1>

      <p className="mt-3 text-neutral-700">
        Kulübümüzle iletişime geçmek veya üyelik başvurusu yapmak için aşağıdaki
        bilgileri kullanabilirsiniz.
      </p>

      <section className="mt-10 grid gap-8 md:grid-cols-3 text-neutral-800">
        <div>
          <h2 className="text-xl font-semibold">Adres</h2>
          <p className="mt-2">
            Kadir Has Üniversitesi <br />
            Cibali, Kadir Has Cd., 34083 <br />
            Fatih / İstanbul
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">E-posta</h2>
          <a
            href="mailto:khasyenimedya@khas.edu.tr"
            className="mt-2 block text-[#0F2CE8] hover:underline"
          >
            khasyenimedya@khas.edu.tr
          </a>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Sosyal Medya & Katılım</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="https://www.instagram.com/khasyenimedyakulubu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F2CE8] hover:underline"
              >
                Instagram: @khasyenimedyakulubu
              </a>
            </li>
            <li>
              <a
                href="https://tr.ee/xHticeUEf6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8D2538] hover:underline font-semibold"
              >
                Üyelik Başvuru Formu
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}