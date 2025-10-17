export const metadata = {
  title: "AppVerse — Modern multi-app studio",
  description: "Discover Typingo, Emoji.ai, MeowWoof.AI — privacy-respecting AI apps."
};

function Card({ title, desc, href }: { title:string; desc:string; href:string }) {
  return (
    <a href={href} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition block">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-slate-500 mt-1">{desc}</p>
    </a>
  );
}

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {/* Hero */}
      <div className="mb-10">
        <span className="inline-block text-xs font-medium bg-[#0078D4]/10 text-[#0078D4] px-2 py-1 rounded">New</span>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
          AI apps that respect your privacy
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl">
          AppVerse is a tiny studio building fast, useful apps. No tracking. No ads. Just clean tools.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="/apps" className="rounded-xl bg-[#0078D4] px-5 py-2.5 text-white font-medium hover:brightness-110">Discover Apps</a>
          <a href="/en/legal/privacy" className="rounded-xl px-5 py-2.5 border border-gray-300 text-slate-700 bg-white hover:bg-gray-100">Privacy Center</a>
        </div>
      </div>

      {/* Apps grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Typingo" desc="Minimal typing practice. On-device data." href="/apps/typingo" />
        <Card title="Emoji.ai" desc="Playful emoji tools powered by local/edge AI." href="/apps/emoji-ai" />
        <Card title="MeowWoof.AI" desc="Smart animal sound translation (demo)." href="/apps/meowwoof-ai" />
      </div>

      {/* Why AppVerse */}
      <div className="mt-16 grid gap-10 lg:grid-cols-2 items-center">
        <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-3">Why AppVerse?</h2>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li>No tracking — privacy-first by design</li>
            <li>Fast, minimal UI, accessible</li>
            <li>Transparent policies & open docs</li>
          </ul>
          <a href="/en/legal/privacy" className="inline-block mt-6 text-[#0078D4] hover:underline">Read our Privacy Policy →</a>
        </div>
        <div className="h-64 rounded-2xl bg-gradient-to-br from-[#0078D4]/20 to-purple-300/30 border border-gray-200" />
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-2xl bg-[#0078D4] text-white p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold">Ready to try?</h3>
          <p className="text-white/80">Join AppVerse today.</p>
        </div>
        <div className="flex gap-3">
          <a href="/apps" className="rounded-xl bg-white/10 px-5 py-2.5 hover:bg-white/20">Get Started Free</a>
          <a href="/support" className="rounded-xl bg-white px-5 py-2.5 text-[#0078D4]">Learn More</a>
        </div>
      </div>
    </section>
  );
}
