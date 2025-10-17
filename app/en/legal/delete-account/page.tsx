export const metadata = {
  title: "Delete Your Data / Account – AppVerse",
  description: "Official AppVerse guide for deleting user data and accounts across all apps.",
};

function L({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-blue-600 hover:underline">
      {children}
    </a>
  );
}

export default function DeleteEN() {
  return (
    <article className="prose max-w-none leading-relaxed">
      <header className="not-prose mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Delete Your Data / Account</h1>
          <p className="text-gray-600 mt-1">
            <strong>Effective date:</strong> 2025-10-07 • <strong>Version:</strong> 1.0.0
          </p>
        </div>
      </header>

      <nav className="not-prose border rounded p-4 mb-8 bg-gray-50">
        <strong className="block mb-2">Contents</strong>
        <ol className="list-decimal ml-5 space-y-1">
          <li><L href="#typingo">Typingo</L></li>
          <li><L href="#emoji">Emoji.ai</L></li>
          <li><L href="#server">Server-side deletion requests</L></li>
          <li><L href="#contact">Contact</L></li>
        </ol>
      </nav>

      <h2 id="typingo">1) Typingo</h2>
      <p>
        User progress and settings are stored locally on your device.
        To delete all data, clear the app’s storage or uninstall the app.
      </p>

      <h2 id="emoji">2) Emoji.ai</h2>
      <p>
        Content entered into Emoji.ai is processed transiently by our secure AI service.
        No permanent logs are stored, and temporary cache data is routinely deleted.
      </p>

      <h2 id="server">3) Server-side deletion requests</h2>
      <p>
        If you believe any data is stored on our servers, please submit a formal request using the{" "}
        <a href="/en/legal/data-request" className="text-blue-600 hover:underline">
          DSAR form
        </a>{" "}
        or contact us directly via email.
      </p>

      <h2 id="contact">4) Contact</h2>
      <p>
        Email:{" "}
        <a href="mailto:privacy@appverse.com" className="text-blue-600 hover:underline">
          privacy@appverse.com
        </a>{" "}
        /{" "}
        <a href="mailto:contact@appverse.com" className="text-blue-600 hover:underline">
          contact@appverse.com
        </a>
      </p>

      <hr />
      <section className="text-sm text-gray-600 mt-4">
        <strong>Changelog:</strong>
        <ul className="list-disc ml-5 mt-2">
          <li>1.0 — 2025-10-07: Initial deletion and data-handling guide published.</li>
        </ul>
      </section>
    </article>
  );
}
