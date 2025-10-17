export const metadata = { title: "Emoji.ai — AppVerse" };

export default function EmojiAIPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">Emoji.ai</h1>
      <p className="mt-2 text-slate-600">Playful emoji tools powered by local/edge AI.</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl bg-white border border-gray-200 p-6">Screens / Demo</div>
        <div className="rounded-xl bg-white border border-gray-200 p-6">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Offline-first</li><li>Creative emoji packs</li><li>Edge-accelerated</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a className="rounded-lg bg-[#0078D4] text-white px-4 py-2" href="#">Get Web</a>
            <a className="rounded-lg border border-gray-300 px-4 py-2" href="/en/legal/emoji-ai">Privacy</a>
          </div>
        </div>
      </div>
    </section>
  );
}
