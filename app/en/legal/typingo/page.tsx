export const metadata = {
  title: "Typingo – Privacy Policy",
  description: "Official privacy policy for the Typingo app within the AppVerse ecosystem.",
};

export default function TypingoEN() {
  return (
    <article className="prose prose-invert max-w-none leading-relaxed text-gray-200">
      <header className="not-prose mb-8 border-b border-white/10 pb-4">
        <h1 className="text-3xl font-bold text-white">Typingo – Privacy Policy</h1>
        <p className="text-sm text-gray-400">
          <strong>Effective date:</strong> 2025-10-07 • <strong>Version:</strong> 1.0.1
        </p>
      </header>
      <h2>Data Deletion</h2>
<p>
  All temporary data is automatically cleared. To request deletion or ask about privacy,
  contact us at{" "}
  <a href="mailto:privacy@appverse.com" className="text-sky-400 hover:underline">
    privacy@appverse.com
  </a>.
</p>

<p>
  Progress and settings are stored <strong>locally on device</strong> and are not uploaded
  to our servers.
</p>

      <h2>Permissions</h2>
      <ul className="list-disc ml-6">
        <li><strong>Storage</strong> — save progress & preferences</li>
        <li><strong>Audio (TTS)</strong> — pronounce words and sentences on-device</li>
      </ul>

      <h2>Error analytics</h2>
      <p>Anonymous crash/performance diagnostics may be collected to improve stability.</p>

      <p>
        See the{" "}
        <a className="text-sky-400 hover:underline" href="/en/legal/privacy">
          AppVerse master privacy policy
        </a>{" "}
        for general terms.
      </p>

      <footer className="not-prose border-t border-white/10 mt-10 pt-4 text-sm text-gray-500 text-center">
      </footer>
    </article>
  );
}
