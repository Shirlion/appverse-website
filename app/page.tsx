// app/page.tsx
export const metadata = {
  title: "AppVerse Privacy Center",
  description: "Official privacy & legal pages for AppVerse apps.",
};

export default function HomePage() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 text-white">AppVerse Privacy Center</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Transparency and trust are the foundation of our products. Here you’ll find all privacy and legal information for AppVerse apps.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <a href="/en/legal/privacy" className="block rounded-xl border border-white/10 bg-black/30 p-6 hover:border-sky-400 transition">
          <h3 className="font-semibold text-white">Privacy Policy (EN)</h3>
          <p className="text-sm text-gray-400">Master policy for all AppVerse products.</p>
        </a>
        <a href="/en/legal/terms" className="block rounded-xl border border-white/10 bg-black/30 p-6 hover:border-sky-400 transition">
          <h3 className="font-semibold text-white">Terms of Service</h3>
          <p className="text-sm text-gray-400">Legal terms for using AppVerse apps.</p>
        </a>
        <a href="/en/legal/cookies" className="block rounded-xl border border-white/10 bg-black/30 p-6 hover:border-sky-400 transition">
          <h3 className="font-semibold text-white">Cookies Policy</h3>
          <p className="text-sm text-gray-400">Information on how AppVerse uses cookies.</p>
        </a>
        <a href="/en/legal/data-request" className="block rounded-xl border border-white/10 bg-black/30 p-6 hover:border-sky-400 transition">
          <h3 className="font-semibold text-white">DSAR Form</h3>
          <p className="text-sm text-gray-400">Request access or deletion of your data.</p>
        </a>
        <a href="/en/legal/delete-account" className="block rounded-xl border border-white/10 bg-black/30 p-6 hover:border-sky-400 transition">
          <h3 className="font-semibold text-white">Delete Account</h3>
          <p className="text-sm text-gray-400">How to permanently delete your AppVerse account and data.</p>
        </a>
        <a href="/en/legal/typingo" className="block rounded-xl border border-white/10 bg-black/30 p-6 hover:border-sky-400 transition">
          <h3 className="font-semibold text-white">Typingo</h3>
          <p className="text-sm text-gray-400">App-specific privacy notice.</p>
        </a>
        <a href="/en/legal/emoji-ai" className="block rounded-xl border border-white/10 bg-black/30 p-6 hover:border-sky-400 transition">
          <h3 className="font-semibold text-white">Emoji.ai</h3>
          <p className="text-sm text-gray-400">App-specific privacy notice.</p>
        </a>
      </div>

      <section aria-label="Update notice" className="text-center text-gray-500 text-sm mt-16">
        <p>
          Last updated:{" "}
          <time dateTime="2025-10-07"><strong>October 2025</strong></time>
        </p>
        <p>
          For questions or data inquiries:{" "}
          <a href="mailto:privacy@appverse.com" className="text-sky-400 hover:underline">
            privacy@appverse.com
          </a>
        </p>
        Contact: <a href="mailto:contact@appverse.com" className="text-sky-400 hover:underline">contact@appverse.com</a>
      </section>
    </section>
  );
}
