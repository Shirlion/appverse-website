export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-6xl px-6 py-3 flex items-center gap-6 text-sm">
        <a href="/" className="font-semibold text-slate-900">AppVerse</a>
        <a href="/" className="text-slate-600 hover:text-slate-900">Home</a>
        <a href="/apps" className="text-slate-600 hover:text-slate-900">Apps</a>
        <a href="/pricing" className="text-slate-600 hover:text-slate-900">Pricing</a>
        <a href="/support" className="text-slate-600 hover:text-slate-900">Support</a>
        <a href="/contact" className="ml-auto rounded-lg bg-[#0078D4] px-4 py-2 text-white hover:brightness-110">Get Started</a>
      </nav>
    </header>
  );
}
