export const metadata = { title: "Apps — AppVerse" };

const apps = [
  { slug: "typingo", name: "Typingo", desc: "Minimal typing practice — on-device data." },
  { slug: "emoji-ai", name: "Emoji.ai", desc: "Playful emoji tools powered by local/edge AI." },
];

export default function AppsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold">Apps</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((a) => (
          <a key={a.slug} href={`/apps/${a.slug}`} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold">{a.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{a.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
