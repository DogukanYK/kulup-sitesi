export default function Oylama(){
  const votingRaw = process.env.NEXT_PUBLIC_VOTING ?? "";
  const votingOn = votingRaw.toLowerCase() === "on";
  const formUrl = process.env.NEXT_PUBLIC_VOTING_FORM_URL ?? "";

  if (!votingOn) {
    return (
      <main className="min-h-screen bg-white text-black">
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-semibold">Oylama</h1>
          <p className="mt-4 text-[15px] text-gray-700">Şu anda oylama açık değil.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold">Oylama</h1>
        <div className="mt-6 rounded-md border border-gray-200 p-2">
          {formUrl ? (
            <iframe src={formUrl} width="100%" height={760} style={{ border: 0 }} title="Oylama Formu">Yükleniyor…</iframe>
          ) : (
            <p className="text-[15px] text-gray-700">Form adresi tanımlı değil. Yönetim: Vercel → Environment Variables → NEXT_PUBLIC_VOTING_FORM_URL ekleyin.</p>
          )}
        </div>
      </section>
    </main>
  );
}