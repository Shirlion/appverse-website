// app/page.tsx
export const metadata = {
  title: "Home",
  description: "AppVerse builds simple, privacy-first AI apps.",
};

export default function Home() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold">AI apps that respect your privacy</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          AppVerse is a tiny studio building focused, useful apps. No tracking. Clear policies.
        </p>
        <div className="flex gap-3 justify-center">
          <a href="/apps" className="inline-block rounded-lg bg-sky-500/90 px-5 py-2.5 text-white hover:bg-sky-400 transition">
            Explore Apps
          </a>
          <a href="/en/legal/privacy" className="inline-block rounded-lg border border-white/20 px-5 py-2.5 hover:border-sky-400 transition">
            Privacy Center
          </a>
        </div>
      </div>

      {/* Featured apps */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Featured</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          <a href="/apps#typingo" className="block rounded-xl border border-white/10 bg-black/30 p-6 hover:border-sky-400 transition">
            <h3 className="font-semibold">Typingo</h3>
            <p className="text-sm text-gray-400">Minimal typing practice that stores data on-device.</p>
          </a>
          <a href="/apps#emoji-ai" className="block rounded-xl border border-white/10 bg-black/30 p-6 hover:border-sky-400 transition">
            <h3 className="font-semibold">Emoji.ai</h3>
            <p className="text-sm text-gray-400">Playful emoji tools powered by local/edge AI.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
