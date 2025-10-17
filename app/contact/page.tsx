export const metadata = { title: "Contact — AppVerse" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-slate-600">
        Questions, partnerships, press? We’d love to hear from you.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <form
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          action="mailto:contact@appverse.com"
          method="post"
          encType="text/plain"
        >
          <label className="block text-sm font-medium">Name</label>
          <input name="name" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" required />

          <label className="mt-4 block text-sm font-medium">Email</label>
          <input type="email" name="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" required />

          <label className="mt-4 block text-sm font-medium">Message</label>
          <textarea name="message" rows={5} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" required />

          <button className="mt-6 w-full rounded-lg bg-[#0078D4] px-4 py-2 text-white">Send</button>
        </form>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold">Direct</h3>
          <p className="mt-2 text-sm text-slate-600">
            Email: <a className="text-[#0078D4]" href="mailto:contact@appverse.com">contact@appverse.com</a>
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Privacy: <a className="text-[#0078D4]" href="mailto:privacy@appverse.com">privacy@appverse.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
