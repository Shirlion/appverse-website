export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-slate-600">Page not found.</p>
      <a href="/" className="mt-6 inline-block rounded-lg bg-[#0078D4] px-5 py-3 text-white">
        Back to Home
      </a>
    </section>
  );
}
