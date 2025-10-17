export const metadata = { title: "Cookie Policy – AppVerse", description: "Cookie usage on AppVerse website." };

function L({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="text-blue-600 hover:underline">{children}</a>;
}

export default function CookiesEN() {
  return (
    <article className="prose max-w-none leading-relaxed">
      <header className="not-prose mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Cookie Policy</h1>
          <p className="text-gray-600 mt-1"><strong>Effective date:</strong> 2025-10-07 • <strong>Version:</strong> 1.0</p>
        </div>
      </header>

      <nav className="not-prose border rounded p-4 mb-8 bg-gray-50">
        <strong className="block mb-2">Contents</strong>
        <ol className="list-decimal ml-5 space-y-1">
          <li><L href="#what">What are cookies</L></li>
          <li><L href="#use">How we use cookies</L></li>
          <li><L href="#control">Your controls</L></li>
          <li><L href="#changes">Changes</L></li>
          <li><L href="#contact">Contact</L></li>
        </ol>
      </nav>

      <h2 id="what">1) What are cookies</h2>
      <p>Small text files used for core functionality or improved experience.</p>

      <h2 id="use">2) How we use cookies</h2>
      <p>No non-essential cookies currently. Essential cookies may be used for site functionality.</p>

      <h2 id="control">3) Your controls</h2>
      <p>Manage cookies via your browser settings. If we introduce analytics/ads, we will request consent first.</p>

      <h2 id="changes">4) Changes</h2>
      <p>We will update this page with a new date/version when changes occur.</p>

      <h2 id="contact">5) Contact</h2>
      <p>Email: <a href="mailto:contact@appverse.com">contact@appverse.com</a></p>

      <hr />
      <section className="text-sm text-gray-600">
        <strong>Changelog:</strong>
        <ul className="list-disc ml-5 mt-2"><li>1.0 — 2025-10-07: Initial Cookie Policy published.</li></ul>
      </section>
    </article>
  );
}
