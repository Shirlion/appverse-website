import PrintButton from "@/components/PrintButton";
export const metadata = { title: "Terms of Service – AppVerse", description: "Terms governing the use of AppVerse services." };

function L({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="text-blue-600 hover:underline">{children}</a>;
}

export default function TermsEN() {
  return (
    <article className="prose max-w-none leading-relaxed">
      <header className="not-prose mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Terms of Service</h1>
          <p className="text-gray-600 mt-1"><strong>Effective date:</strong> 2025-10-07 • <strong>Version:</strong> 1.0</p>
        </div>
      </header>

      <nav className="not-prose border rounded p-4 mb-8 bg-gray-50">
        <strong className="block mb-2">Contents</strong>
        <ol className="list-decimal ml-5 space-y-1">
          <li><L href="#accept">Acceptable Use</L></li>
          <li><L href="#ip">Intellectual Property</L></li>
          <li><L href="#liability">Limitation of Liability</L></li>
          <li><L href="#law">Governing Law</L></li>
          <li><L href="#contact">Contact</L></li>
        </ol>
      </nav>

      <h2 id="accept">1) Acceptable Use</h2>
      <p>By using AppVerse services, you agree to these Terms. Illegal, abusive, or reverse-engineering activities are prohibited.</p>

      <h2 id="ip">2) Intellectual Property</h2>
      <p>Trademarks, logos, and content belong to AppVerse or their respective owners. No unauthorized use.</p>

      <h2 id="liability">3) Limitation of Liability</h2>
      <p>Services are provided “as is.” AppVerse is not liable for indirect or incidental damages.</p>

      <h2 id="law">4) Governing Law</h2>
      <p>French & EU law; exclusive venue: Paris, France.</p>

      <h2 id="contact">5) Contact</h2>
      <p>Email: <a href="mailto:contact@appverse.com">contact@appverse.com</a></p>

      <hr />
      <section className="text-sm text-gray-600">
        <strong>Changelog:</strong>
        <ul className="list-disc ml-5 mt-2"><li>1.0 — 2025-10-07: Initial Terms published.</li></ul>
      </section>
    </article>
  );
}
