export const metadata = { title: "Contact — AppVerse" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Contact</h1>
      <p className="text-slate-600 mb-6">We usually reply within 2–3 business days.</p>

      <div className="rounded-2xl bg-white border border-gray-200 p-6">
        <p>Email: <a className="text-[#0078D4] hover:underline" href="mailto:contact@appverse.com">contact@appverse.com</a></p>
        <p className="mt-2">Support: <a className="text-[#0078D4] hover:underline" href="mailto:support@appverse.com">support@appverse.com</a></p>
        <p className="mt-2">Twitter/X: <a className="text-[#0078D4] hover:underline" href="#">@appverse</a></p>
      </div>
    </section>
  );
}
