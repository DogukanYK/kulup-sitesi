export default function Katil(){
  const formUrl = process.env.NEXT_PUBLIC_JOIN_FORM_URL ?? "";
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold">Kulübe Katıl</h1>
        <div className="mt-6 rounded-md border border-gray-200 p-4">
          {formUrl ? (
            <iframe src={formUrl} width="100%" height={720} style={{ border: 0 }} title="Üyelik Formu">Yükleniyor…</iframe>
          ) : (
            <p className="text-[15px] text-gray-700">Başvuru formu yakında.</p>
          )}
        </div>
      </section>
    </main>
  );
}