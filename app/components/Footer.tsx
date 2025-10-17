export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-600 grid gap-3 sm:flex sm:items-center sm:justify-between">
        <p>© 2025 AppVerse — All rights reserved.</p>
        <nav className="flex gap-5">
          <a href="/about" className="hover:text-slate-900">About</a>
          <a href="/en/legal/privacy" className="hover:text-slate-900">Privacy</a>
          <a href="/en/legal/terms" className="hover:text-slate-900">Terms</a>
          <a href="/contact" className="hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
