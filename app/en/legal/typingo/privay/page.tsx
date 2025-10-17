// app/en/legal/typingo/page.tsx
export const metadata = {
  title: "Typingo – Privacy Policy",
  description:
    "How Typingo collects, uses, and protects your data, plus your rights and contact options.",
};

export default function TypingoPrivacy() {
  return (
    <article className="prose prose-invert max-w-none border border-white/10 bg-black/30 p-6 rounded-xl">
      <header>
        <h1 className="text-3xl font-bold text-white">Typingo – Privacy Policy</h1>
        <p className="text-sm text-gray-400">
          <strong>Last updated:</strong> October 2, 2025 • <strong>Version:</strong> 1.0
        </p>
      </header>

      <nav aria-label="Contents">
        <h2>Contents</h2>
        <ol>
          <li><a href="#who-we-are">Who we are</a></li>
          <li><a href="#information-we-collect">Information we collect</a></li>
          <li><a href="#how-we-use">How we use your information</a></li>
          <li><a href="#storage-security">Data storage & security</a></li>
          <li><a href="#third-parties">Third-party services</a></li>
          <li><a href="#your-rights">Your rights</a></li>
          <li><a href="#children">Children’s privacy</a></li>
          <li><a href="#changes">Changes to this policy</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ol>
      </nav>

      <section id="who-we-are">
        <h2>1) Who we are</h2>
        <p>
          “Typingo” (“we”, “our”, “us”) is a typing practice app. This policy explains what
          data we handle and how. If anything here conflicts with platform-specific terms
          (e.g., App Store/Play), those terms may also apply.
        </p>
      </section>

      <section id="information-we-collect">
        <h2>2) Information we collect</h2>
        <ul>
          <li><strong>Practice data:</strong> scores, accuracy, session history.</li>
          <li><strong>Preferences:</strong> language and learning settings.</li>
          <li><strong>Basic device info:</strong> OS/version, app version, non-identifying diagnostics.</li>
          <li><strong>Usage data:</strong> features used and time spent (aggregated or local).</li>
        </ul>
      </section>

      <section id="how-we-use">
        <h2>3) How we use your information</h2>
        <ul>
          <li>Provide and maintain typing practice features.</li>
          <li>Personalize lessons and difficulty.</li>
          <li>Track your progress and show statistics.</li>
          <li>Improve functionality and support (bug fixing, quality).</li>
        </ul>
      </section>

      <section id="storage-security">
        <h2>4) Data storage & security</h2>
        <ul>
          <li><strong>Local first:</strong> Your practice data and settings are stored on your device.</li>
          <li><strong>Security:</strong> We apply industry-standard security for any limited telemetry/diagnostics.</li>
          <li><strong>No sale or third-party sharing</strong> without your consent.</li>
          <li>
            <strong>Control:</strong> You can clear your local data any time from in-app settings or by following
            our <a href="/en/legal/delete-account">Delete instructions</a>.
          </li>
          <li>
            <strong>Retention:</strong> If we ever process cloud diagnostics, we keep them only as long as needed
            for troubleshooting and then delete/aggregate.
          </li>
        </ul>
      </section>

      <section id="third-parties">
        <h2>5) Third-party services</h2>
        <p>Typingo may interact with:</p>
        <ul>
          <li><strong>Google Text-to-Speech</strong> (to voice prompts).</li>
          <li><strong>Translation APIs</strong> (to localize content).</li>
        </ul>
        <p>
          These services have their own privacy policies and may process limited technical data needed to operate.
        </p>
      </section>

      <section id="your-rights">
        <h2>6) Your rights</h2>
        <ul>
          <li>Access or delete your practice data.</li>
          <li>Correct preferences or settings.</li>
          <li>Restrict or object to certain processing (may limit features).</li>
          <li>Export progress data (where available).</li>
        </ul>
        <p>
          To make a request, use the in-app options or our{" "}
          <a href="/en/legal/data-request">DSAR form</a>.
        </p>
      </section>

      <section id="children">
        <h2>7) Children’s privacy</h2>
        <p>
          We do not knowingly collect personal data from children under 13 (or the age
          required by your region) without parental consent.
        </p>
      </section>

      <section id="changes">
        <h2>8) Changes to this policy</h2>
        <p>
          We may update this policy from time to time. We will post the new version with an updated date.
        </p>
      </section>

      <section id="contact">
        <h2>9) Contact us</h2>
        <p>
          Email: <a href="mailto:typingo.contact@gmail.com">typingo.contact@gmail.com</a><br />
          We aim to respond within 2–3 business days.
        </p>
      </section>
    </article>
  );
}
