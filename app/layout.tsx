import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "AppVerse — AI apps that respect your privacy",
  description: "Minimal, useful apps. No tracking. Clear policies.",
  openGraph: { title: "AppVerse", description: "AI apps that respect your privacy" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
