// src/app/page.tsx
import Link from "next/link";

// Sabit renk paleti (görselde verilenler)
const COLORS = {
  blue: "#0F2CE8", // giriş sayfası
  gold: "#E1BF30", // oylama butonu
  maroon: "#8D2538", // hakkımızda/biz kimiz
  gray: "#C4C2C2",
  black: "#000000",
  white: "#FFFFFF",
};

export default function Home() {
  // OYLAMA MODU (Vercel → Project → Settings → Environment Variables)
  const votingRaw = process.env.NEXT_PUBLIC_VOTING ?? "";
  const votingOn = votingRaw.toLowerCase() === "on";
  const formUrl = process.env.NEXT_PUBLIC_VOTING_FORM_URL ?? "";
  const votingName = process.env.NEXT_PUBLIC_VOTING_NAME ?? "Oylama";

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg,#000 0%,#0b0c0f 100%)", color: COLORS.white }}
    >
      {/* NAVBAR (sabit) */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight" style={{ color: COLORS.blue }}>
            KHAS Media All
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <Link href="/hakkimizda" className="opacity-80 hover:opacity-100">Hakkımızda</Link>
            <Link href="/ekibimiz" className="opacity-80 hover:opacity-100">Ekibimiz</Link>
            <Link href="/kategoriler" className="opacity-80 hover:opacity-100">Kategoriler</Link>
            <Link href="/iletisim" className="opacity-80 hover:opacity-100">İletişim</Link>
            <Link
              href="/oylama"
              className="hidden lg:inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium"
              style={{ background: COLORS.gold, color: COLORS.black }}
            >
              OYLAMA
            </Link>
          </nav>
        </div>
      </header>

      {/* OYLAMA MODU BANNER */}
      {votingOn && (
        <section className="px-6">
          <div className="max-w-6xl mx-auto mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              Media All Ödül Töreni — <span style={{ color: COLORS.blue }}>{votingName}</span> Açık 🎉
            </h1>
            <p className="mt-3 text-neutral-300 max-w-2xl">
              Adaylara oy vermek için aşağıdaki butonları kullanın. Oylama bittiğinde site otomatik olarak
              normal ana sayfaya döner.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/oylama"
                className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-medium"
                style={{ background: COLORS.gold, color: COLORS.black }}
              >
                Oylamaya Git
              </Link>
              {formUrl && (
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-medium border border-white/15 hover:border-white/25 transition"
                  style={{ background: "rgba(255,255,255,0.05)", color: COLORS.white }}
                >
                  Formu Aç
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-12 sm:pt-14 sm:pb-20">
        <div
          className="inline-block rounded-full px-3 py-1 text-xs font-medium"
          style={{ background: COLORS.gray, color: COLORS.black }}
        >
          Kadir Has Üniversitesi • Yeni Medya Kulübü
        </div>

        <h1
          className="mt-4 text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]"
          style={{ color: COLORS.blue }}
        >
          Media All Ödül Töreni
        </h1>

        <p className="mt-4 text-neutral-300 max-w-2xl">
          Üniversitemizin medya ve iletişim alanındaki en iyilerini onurlandırıyoruz. Oylama dönemlerinde site
          otomatik olarak “oylama moduna” geçer. Hakkımızda, Ekibimiz ve Kategoriler sayfalarından ayrıntılara
          ulaşabilirsiniz.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/hakkimizda"
            className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-medium hover:opacity-90 transition"
            style={{ background: COLORS.maroon, color: COLORS.white }}
          >
            Hakkımızda
          </Link>
          <Link
            href="/kategoriler"
            className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-medium hover:opacity-90 transition"
            style={{ background: COLORS.blue, color: COLORS.white }}
          >
            Kategoriler
          </Link>
          <Link
            href="/ekibimiz"
            className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-medium border border-white/15 hover:border-white/25 transition"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            Ekibimiz
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-medium border border-white/15 hover:border-white/25 transition"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            İletişim
          </Link>
        </div>
      </section>

      {/* ALT KARTLAR */}
      <section className="max-w-6xl mx-auto px-6 grid gap-4 sm:grid-cols-3 pb-16">
        <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
          <h3 className="text-lg font-semibold">Etkinlikler</h3>
          <p className="text-neutral-300 text-sm mt-2">Yaklaşan etkinlikleri ve arşivi görüntüleyin.</p>
          <Link
            href="/etkinlikler"
            className="inline-flex mt-3 items-center justify-center rounded-xl px-4 py-2 font-medium hover:opacity-90 transition"
            style={{ background: COLORS.blue, color: COLORS.white }}
          >
            Etkinlikler
          </Link>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
          <h3 className="text-lg font-semibold">Kulübe Katıl</h3>
          <p className="text-neutral-300 text-sm mt-2">Aramıza katılın ve projelerde yer alın.</p>
          <Link
            href="/katil"
            className="inline-flex mt-3 items-center justify-center rounded-xl px-4 py-2 font-medium hover:opacity-90 transition"
            style={{ background: COLORS.maroon, color: COLORS.white }}
          >
            Katıl
          </Link>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
          <h3 className="text-lg font-semibold">Duyurular</h3>
          <p className="text-neutral-300 text-sm mt-2">Haberler, kurallar ve güncellemeler.</p>
          <Link
            href="/blog"
            className="inline-flex mt-3 items-center justify-center rounded-xl px-4 py-2 font-medium border border-white/15 hover:border-white/25 transition"
            style={{ background: "rgba(255,255,255,0.05)", color: COLORS.white }}
          >
            Duyurular
          </Link>
        </article>
      </section>

      <footer className="max-w-6xl mx-auto px-6 pb-10 text-xs opacity-70">
        © {new Date().getFullYear()} KHAS Yeni Medya Kulübü • Media All Ödül Töreni
      </footer>
    </div>
  );
}