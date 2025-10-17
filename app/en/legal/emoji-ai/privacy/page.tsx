export const metadata = {
  title: "Emoji.ai – Privacy Policy",
  description: "Official privacy policy for the Emoji.ai app within the AppVerse ecosystem.",
};

export default function EmojiAiPrivacyEN() {
  return (
    <article className="prose prose-invert max-w-none leading-relaxed text-gray-200">
      <header className="not-prose mb-8 border-b border-white/10 pb-4">
        <h1 className="text-3xl font-bold text-white">Emoji.ai – Privacy Policy</h1>
        <p className="text-sm text-gray-400">
          <strong>Effective date:</strong> 2025-10-07 • <strong>Version:</strong> 1.0.0
        </p>
      </header>

      <h2>Data Processing</h2>
      <p>
        User text is processed temporarily via a secure AI API to generate responses. No permanent
        storage occurs.
      </p>

      <h2>Permissions</h2>
      <ul>
        <li><strong>Internet:</strong> connect to AI service</li>
        <li><strong>Storage:</strong> optional local preferences/results</li>
      </ul>

      <h2>Data Deletion</h2>
      <p>
        All temporary data is automatically cleared. To request deletion or ask about privacy,
        contact:
      </p>
      <p>
        <a href="mailto:privacy@appverse.com" className="text-sky-400 hover:underline">
          privacy@appverse.com
        </a>
      </p>

      <footer className="not-prose border-t border-white/10 mt-10 pt-4 text-sm text-gray-500 text-center">

      </footer>
    </article>
  );
}
