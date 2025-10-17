export const metadata = { title: "About — AppVerse" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">About AppVerse</h1>
      <p className="mt-3 text-slate-600">
        AppVerse is a tiny studio building fast, useful AI apps with privacy by design.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold">Mission</h3>
          <p className="mt-2 text-sm text-slate-600">
            Make everyday tools delightful and respectful of users’ data.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold">Values</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
            <li>Privacy-first</li>
            <li>Useful over flashy</li>
            <li>Performance & accessibility</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
