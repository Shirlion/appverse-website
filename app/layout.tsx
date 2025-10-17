// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://privacy.appverse.com"), // ✅ دامنه‌ی واقعی‌ات
  title: {
    default: "AppVerse Privacy Center",
    template: "%s – AppVerse",
  },
  description: "Official privacy & legal pages for AppVerse apps.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://privacy.appverse.com",
    siteName: "AppVerse Privacy Center",
    title: "AppVerse Privacy Center",
    description: "Official privacy & legal pages for AppVerse apps.",
  },
  alternates: {
    canonical: "https://privacy.appverse.com/",
    languages: {
      en: "https://privacy.appverse.com/",
      fa: "https://privacy.appverse.com/fa",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0b0c0f] text-white antialiased">
        {/* HEADER (بدون تغییر) */}
        <header className="border-b border-white/10 bg-black/30 backdrop-blur">
          <div className="max-w-5xl mx-auto px-5 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <a href="/" className="font-semibold tracking-wide text-white hover:text-sky-400 transition">
              AppVerse Privacy Center
            </a>
            <nav className="text-sm text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-1">
              <a href="/en/legal/privacy" className="hover:text-white transition">Privacy</a><span>|</span>
              <a href="/en/legal/terms" className="hover:text-white transition">Terms</a><span>|</span>
              <a href="/en/legal/cookies" className="hover:text-white transition">Cookies</a><span>|</span>
              <a href="/en/legal/data-request" className="hover:text-white transition">DSAR</a><span>|</span>
              <a href="/en/legal/delete-account" className="hover:text-white transition">Delete Account</a><span>|</span>
              <a href="/fa" className="hover:text-white transition">FA</a><span>|</span>
              <a href="/en" className="hover:text-white transition">EN</a>
            </nav>
          </div>
        </header>

        {/* MAIN سراسری: ارتفاع‌پذیر برای چسبیدن فوتر لوکال به پایین */}
        <main id="content" className="flex-1">
          <div className="max-w-5xl mx-auto w-full px-5 py-10">
            {/* این children همان لایهٔ زبانی است که فوتر خودش را اضافه می‌کند */}
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
