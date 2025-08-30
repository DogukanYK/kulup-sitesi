import Link from "next/link";

export default function Home() {
  // Oylama modu: Vercel → Project → Settings → Environment Variables
  // NEXT_PUBLIC_VOTING = on/off
  // NEXT_PUBLIC_VOTING_FORM_URL = https://... (Google Forms/Tally)
  // NEXT_PUBLIC_VOTING_NAME = 2025 Güz Dönemi oylaması (opsiyonel)
  const votingOn = process.env.NEXT_PUBLIC_VOTING?.toLowerCase() === "on";
  const formUrl = process.env.NEXT_PUBLIC_VOTING_FORM_URL || "";
  const votingName = process.env.NEXT_PUBLIC_VOTING_NAME || "Oylama";

  if (votingOn) {
    // OYLAMA MODU
    return (
      <div className="min-h-screen grid place-items-center p-8 sm:p-16">
        <main className="w-full max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold">Oylama Açık 🎉</h1>
          <p className="text-neutral-400">
            KHAS Yeni Medya Kulübü {votingName} şu anda aktif. Oy kullanmak için
            aşağıdaki seçeneklerden birini kullanabilirsin.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/oylama"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 bg-indigo-600 hover:bg-indigo-500 transition text-white"
            >
              Oylamaya Git
            </Link>
            {formUrl && (
              <a
                href={formUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 bg-neutral-800 hover:bg-neutral-700 transition text-white"
              >
                Formu Aç
              </a>
            )}
          </div>
          <p className="text-xs text-neutral-500">
            Not: Oylama dönemi bitince site otomatik olarak normal ana sayfaya döner.
          </p>
        </main>
      </div>
    );
  }

  // NORMAL KULÜP MODU
  return (
    <div className="min-h-screen p-8 sm:p-16">
      <main className="max-w-5xl mx-auto space-y-10">
        <section>
          <h1 className="text-3xl sm:text-4xl font-bold">
            KHAS Yeni Medya Kulübü’ne Hoş Geldiniz 👋
          </h1>
          <p className="mt-3 text-neutral-400 max-w-2xl">
            Etkinlikler, duyurular ve üyelik bilgileri burada. Oylama tarihleri
            geldiğinde ana sayfa otomatik olarak "oylama modu"na geçer.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
            <h3 className="text-lg font-medium">Etkinlikler</h3>
            <p className="text-neutral-400 text-sm mt-2">
              Yaklaşan etkinlikleri ve arşivi görüntüle.
            </p>
            <Link
              href="/etkinlikler"
              className="inline-flex mt-3 items-center justify-center rounded-xl px-4 py-2 bg-indigo-600 hover:bg-indigo-500 transition text-white"
            >
              Etkinlikler
            </Link>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
            <h3 className="text-lg font-medium">Kulübe Katıl</h3>
            <p className="text-neutral-400 text-sm mt-2">
              Aramıza katıl ve etkinliklerden haberdar ol.
            </p>
            <Link
              href="/katil"
              className="inline-flex mt-3 items-center justify-center rounded-xl px-4 py-2 bg-indigo-600 hover:bg-indigo-500 transition text-white"
            >
              Katıl
            </Link>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
            <h3 className="text-lg font-medium">Duyurular</h3>
            <p className="text-neutral-400 text-sm mt-2">
              Kulüp içi haberler ve blog yazıları.
            </p>
            <Link
              href="/blog"
              className="inline-flex mt-3 items-center justify-center rounded-xl px-4 py-2 bg-indigo-600 hover:bg-indigo-500 transition text-white"
            >
              Duyurular
            </Link>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
            <h3 className="text-lg font-medium">İletişim</h3>
            <p className="text-neutral-400 text-sm mt-2">
              Sosyal medya ve e-posta kanallarımız.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex mt-3 items-center justify-center rounded-xl px-4 py-2 bg-indigo-600 hover:bg-indigo-500 transition text-white"
            >
              İletişim
            </Link>
          </article>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
          <p className="text-sm text-neutral-400">
            Yönetim için not: Oylamayı erken aç/kapatmak istersen Vercel →
            <span className="mx-1 rounded bg-black/30 px-1.5 py-0.5">NEXT_PUBLIC_VOTING=on</span>
            veya <span className="mx-1 rounded bg-black/30 px-1.5 py-0.5">off</span> ortam değişkenini kullan.
          </p>
        </section>
      </main>
    </div>
  );
}
