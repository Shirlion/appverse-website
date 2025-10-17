export const metadata = { title: "Apps — AppVerse" };

const apps = [
  { slug: "typingo", name: "Typingo", desc: "Typing practice on-device." },
  { slug: "emoji-ai", name: "Emoji.ai", desc: "Emoji tools with local/edge AI." },
  { slug: "meowwoof-ai", name: "MeowWoof.AI", desc: "Animal sound translator (demo)." },
];

export default function AppsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Our Apps</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map(a => (
          <a key={a.slug} href={`/apps/${a.slug}`} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
            <h3 className="text-lg font-semibold">{a.name}</h3>
            <p className="text-slate-500 text-sm mt-1">{a.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
