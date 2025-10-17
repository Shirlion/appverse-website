export const metadata = {
  title: "AppVerse — AI apps that respect your privacy",
  description: "Minimal, privacy-respecting AI apps by AppVerse.",
};

export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 text-center">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        AI apps that respect your privacy
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        AppVerse is a tiny studio building fast, useful apps. No tracking. No ads. Just clean tools.
      </p>

      <a href="/en/legal/privacy" className="btn mb-16">Privacy Center</a>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold mb-2">Typingo</h3>
          <p className="text-gray-500 text-sm">
            Minimal typing practice app that stores data only on-device.
          </p>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-2">Emoji.ai</h3>
          <p className="text-gray-500 text-sm">
            Playful emoji tools powered by local/edge AI.
          </p>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-2">MeowWoof AI</h3>
          <p className="text-gray-500 text-sm">
            Smart animal sound translator — understand your pets instantly.
          </p>
        </div>
      </div>
    </section>
  );
}
