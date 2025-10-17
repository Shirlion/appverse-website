import DSARForm from "@/app/components/DSARForm";
import PrintButton from "@/app/components/PrintButton";

export const metadata = {
  title: "Data Request (DSAR) – AppVerse",
  description: "Official form to request access/deletion/correction.",
};

export default function DSAREN() {
  return (
    <article className="prose max-w-none leading-relaxed">
      <header className="not-prose mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Data Request (DSAR)</h1>
          <p className="text-gray-600 mt-1">
            <strong>Response time:</strong> up to 30 business days
          </p>
        </div>
        <PrintButton label="Print / Save PDF" />
      </header>

      <nav className="not-prose border rounded p-4 mb-8 bg-gray-50">
        <strong className="block mb-2">Contents</strong>
        <ol className="list-decimal ml-5 space-y-1">
          <li><a href="#rights" className="text-blue-600 hover:underline">Your rights</a></li>
          <li><a href="#form" className="text-blue-600 hover:underline">Request form</a></li>
          <li><a href="#contact" className="text-blue-600 hover:underline">Contact</a></li>
        </ol>
      </nav>

      <h2 id="rights">1) Your rights</h2>
      <p>
        Under GDPR, you may request access, deletion, correction, restriction,
        objection, and data portability.
      </p>

      <h2 id="form">2) Request form</h2>
      <div className="not-prose">
        <DSARForm dir="ltr" submitLabel="Submit" />
      </div>

      <h2 id="contact">3) Contact</h2>
      <p>
        Email:{" "}
        <a href="mailto:privacy@appverse.com">privacy@appverse.com</a> /{" "}
        <a href="mailto:contact@appverse.com">contact@appverse.com</a>
      </p>

      <hr />
      <section className="text-sm text-gray-600">
        <strong>Changelog:</strong>
        <ul className="list-disc ml-5 mt-2">
          <li>1.0 — 2025-10-07: DSAR workflow published.</li>
        </ul>
      </section>
    </article>
  );
}
