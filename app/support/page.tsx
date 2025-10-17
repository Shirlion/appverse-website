export const metadata = { title: "Support — AppVerse" };

const faqs = [
  { q: "Where is my data stored?", a: "Primarily on-device. See each app’s privacy note for details." },
  { q: "Do you use trackers?", a: "No third-party analytics/trackers on consumer apps." },
  { q: "How do I delete my data?", a: "Use the in-app option or submit a DSAR via the Privacy Center." },
];

export default function SupportPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">Support</h1>
      <p className="mt-2 text-slate-600">We’re here to help.</p>

      <div className="mt-8 space-y-4">
        {faqs.map(({ q, a }) => (
          <details key={q} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer list-none text-sm font-semibold">{q}</summary>
            <p className="mt-2 text-sm text-slate-600">{a}</p>
          </details>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">
          Didn’t find your answer? Email{" "}
          <a className="text-[#0078D4]" href="mailto:support@appverse.com">support@appverse.com</a>.
        </p>
      </div>
    </section>
  );
}
