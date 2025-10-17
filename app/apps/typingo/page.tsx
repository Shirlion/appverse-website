export const metadata = { title: "Typingo — AppVerse" };

export default function TypingoPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">Typingo</h1>
      <p className="mt-2 text-slate-600">Minimal typing practice that stores data only on-device.</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl bg-white border border-gray-200 p-6">Screenshot / Demo</div>
        <div className="rounded-xl bg-white border border-gray-200 p-6">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Practice modes</li><li>Progress tracking</li><li>Privacy-first</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a className="rounded-lg bg-[#0078D4] text-white px-4 py-2" href="#">Get Web</a>
            <a className="rounded-lg border border-gray-300 px-4 py-2" href="/en/legal/typingo">Privacy</a>
          </div>
        </div>
      </div>
    </section>
  );
}
