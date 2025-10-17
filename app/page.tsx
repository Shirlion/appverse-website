export const metadata = {
  title: "AppVerse — AI apps that respect your privacy",
  description: "Minimal, privacy-respecting AI apps.",
};

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4
                     bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        AI apps that respect your privacy
      </h1>

      <p className="text-slate-600 max-w-2xl mb-8">
        AppVerse is a tiny studio building fast, useful apps. No tracking. No ads. Just clean tools.
      </p>

      <a href="/en/legal/privacy"
         className="inline-block rounded-xl px-5 py-2.5 text-white font-medium shadow
                    bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 transition">
        Privacy Center
      </a>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
          <h3 className="text-lg font-semibold">Typingo</h3>
          <p className="text-slate-500 text-sm mt-1">
            Minimal typing practice app that stores data only on-device.
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
          <h3 className="text-lg font-semibold">Emoji.ai</h3>
          <p className="text-slate-500 text-sm mt-1">
            Playful emoji tools powered by local/edge AI.
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
          <h3 className="text-lg font-semibold">MeowWoof AI</h3>
          <p className="text-slate-500 text-sm mt-1">
            Smart animal sound translator — understand your pets instantly.
          </p>
        </div>
      </div>
    </section>
  );
}
