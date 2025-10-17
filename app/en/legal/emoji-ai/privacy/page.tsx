export const metadata = {
  title: "Privacy Policy – AppVerse",
  description: "Official master privacy policy for all AppVerse apps.",
};

function LinkItem({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="text-blue-600 hover:underline" href={href}>{children}</a>;
}

export default function PrivacyEN() {
  return (
    <article className="prose max-w-none leading-relaxed">
      <header className="not-prose mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Privacy Policy – AppVerse</h1>
          <p className="text-gray-600 mt-1">
            <strong>Effective date:</strong> 2025-10-07 • <strong>Version:</strong> 1.0
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
        >
          Print / Save PDF
        </button>
      </header>

      {/* Table of Contents */}
      <nav aria-label="Table of contents" className="not-prose border rounded p-4 mb-8 bg-gray-50">
        <strong className="block mb-2">Contents</strong>
        <ol className="list-decimal ml-5 space-y-1">
          <li><LinkItem href="#scope">Scope</LinkItem></li>
          <li><LinkItem href="#data">Data categories & purposes</LinkItem></li>
          <li><LinkItem href="#legal-bases">Legal bases (GDPR)</LinkItem></li>
          <li><LinkItem href="#processors">Processors & sharing</LinkItem></li>
          <li><LinkItem href="#retention">Retention</LinkItem></li>
          <li><LinkItem href="#security">Security & location</LinkItem></li>
          <li><LinkItem href="#rights">Your rights</LinkItem></li>
          <li><LinkItem href="#children">Children</LinkItem></li>
          <li><LinkItem href="#changes">Changes</LinkItem></li>
          <li><LinkItem href="#contact">Contact</LinkItem></li>
        </ol>
      </nav>

      <h2 id="scope">1) Scope</h2>
      <p>
        This policy applies to all AppVerse websites and apps, including{" "}
        <a href="/en/legal/typingo">Typingo</a> and{" "}
        <a href="/en/legal/emoji-ai">Emoji.ai</a>. App-specific notices complement this master policy.
      </p>

      <h2 id="data">2) Data categories & purposes</h2>
      <ul>
        <li><strong>Technical/usage data</strong>: device/OS info and crash events to improve stability.</li>
        <li><strong>User settings & progress</strong>: stored <strong>locally on device</strong> for Typingo.</li>
        <li><strong>User-provided content</strong>: for Emoji.ai, text is processed transiently by a secure AI API; no permanent storage.</li>
      </ul>

      <h2 id="legal-bases">3) Legal bases (GDPR)</h2>
      <ul>
        <li><strong>Contract necessity</strong> (Art. 6(1)(b)) for core functionality.</li>
        <li><strong>Legitimate interests</strong> (Art. 6(1)(f)) for security and product improvement.</li>
        <li><strong>Consent</strong> (Art. 6(1)(a)) where applicable (e.g., optional analytics).</li>
      </ul>

      <h2 id="processors">4) Processors & sharing</h2>
      <p>We do not sell personal data. We may use trusted providers such as:</p>
      <ul>
        <li>Crash/diagnostics (e.g., Crashlytics) – anonymized error data.</li>
        <li>Email delivery (Resend) – contact/DSAR forms.</li>
        <li>Secure AI API for Emoji.ai – request content is processed transiently and not stored permanently.</li>
      </ul>

      <h2 id="retention">5) Retention</h2>
      <p>Data is retained only as long as necessary for the purposes described. Local app data is under the user’s control and can be deleted via app settings/uninstall. Technical logs are rotated and deleted periodically.</p>

      <h2 id="security">6) Security & location</h2>
      <p>Data in transit is protected with TLS. Access is restricted on a need-to-know basis. Processing may occur in the EU or US; when data is transferred internationally, we use appropriate safeguards (e.g., SCCs).</p>

      <h2 id="rights">7) Your rights</h2>
      <p>
        Depending on applicable laws (e.g., GDPR), you may request access, correction, deletion, restriction, objection, and data portability. We respond within 30 days. Use the{" "}
        <a href="/en/legal/data-request">DSAR form</a> or email us.
      </p>

      <h2 id="children">8) Children</h2>
      <p>Our services are not directed to children without verifiable parental consent.</p>

      <h2 id="changes">9) Changes</h2>
      <p>We may update this policy; the new effective date and version will be posted here.</p>

      <h2 id="contact">10) Contact</h2>
      <p>
        Email: <a href="mailto:privacy@appverse.com">privacy@appverse.com</a> &nbsp;/&nbsp;
        <a href="mailto:contact@appverse.com">contact@appverse.com</a>
      </p>

      <hr />
      <section className="text-sm text-gray-600">
        <strong>Changelog:</strong>
        <ul className="list-disc ml-5 mt-2">
          <li>1.0 — 2025-10-07: Initial release of AppVerse master privacy policy.</li>
        </ul>
      </section>
    </article>
  );
}
