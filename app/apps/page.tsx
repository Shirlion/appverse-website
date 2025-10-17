// app/apps/page.tsx
export const metadata = {
  title: "Apps",
  description: "Discover AppVerse apps.",
};

export default function AppsPage() {
  return (
    <section className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold">Apps</h1>
        <p className="text-gray-400">Simple tools. Clear privacy. Built with care.</p>
      </header>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Typingo */}
        <article id="typingo" className="rounded-xl border border-white/10 bg-black/30 p-6">
          <h2 className="text-xl font-semibold">Typingo</h2>
          <p className="text-gray-400 text-sm mb-3">
            Minimal typing practice with progress stored locally on your device.
          </p>
          <div className="flex gap-3">
            {/* لینک‌های استور را بعدا جایگزین کن */}
            <a className="rounded-lg border border-white/20 px-3 py-1.5 hover:border-sky-400" href="#">
              Get the app
            </a>
            <a className="rounded-lg border border-white/20 px-3 py-1.5 hover:border-sky-400" href="/en/legal/typingo">
              Privacy
            </a>
          </div>
        </article>

        {/* Emoji.ai */}
        <article id="emoji-ai" className="rounded-xl border border-white/10 bg-black/30 p-6">
          <h2 className="text-xl font-semibold">Emoji.ai</h2>
          <p className="text-gray-400 text-sm mb-3">
            Fun emoji utilities. Lightweight and privacy-first.
          </p>
          <div className="flex gap-3">
            <a className="rounded-lg border border-white/20 px-3 py-1.5 hover:border-sky-400" href="#">
              Get the app
            </a>
            <a className="rounded-lg border border-white/20 px-3 py-1.5 hover:border-sky-400" href="/en/legal/emoji-ai">
              Privacy
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
