// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://appverse.technology"),
  title: {
    default: "AppVerse – AI Apps",
    template: "%s – AppVerse",
  },
  description: "Official website for AppVerse apps and privacy center.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "AppVerse",
    title: "AppVerse",
    description: "AI-powered apps for learning and creativity.",
    url: "https://appverse.technology",
  },
  alternates: {
    canonical: "https://appverse.technology/",
    languages: {
      en: "https://appverse.technology/",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0b0c0f] text-white antialiased">
        <header className="border-b border-white/10 bg-black/30 backdrop-blur">
          <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <a href="/" className="font-semibold tracking-wide hover:text-sky-400 transition">
              AppVerse
            </a>
            <nav className="text-sm text-gray-400 flex flex-wrap items-center gap-x-3 gap-y-2">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/apps" className="hover:text-white">Apps</a>
              <a href="/contact" className="hover:text-white">Contact</a>
              <span className="opacity-50">|</span>
              <a href="/en/legal/privacy" className="hover:text-white">Privacy</a>
              <a href="/en/legal/terms" className="hover:text-white">Terms</a>
              <a href="/en/legal/cookies" className="hover:text-white">Cookies</a>
            </nav>
          </div>
        </header>
        <main id="content" className="max-w-6xl mx-auto w-full px-5 py-10 flex-1">
          <div className="prose prose-invert prose-a:text-sky-400 max-w-none">{children}</div>
        </main>
      </body>
    </html>
  );
}
