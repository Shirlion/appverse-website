"use client";

import { useState } from "react";

export const metadata = {
  title: "Contact",
  description: "Get in touch with AppVerse.",
};

export default function ContactPage() {
  const [ok, setOk] = useState<null | boolean>(null);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const f = e.currentTarget;
    const name = (f.elements.namedItem("name") as HTMLInputElement).value;
    const email = (f.elements.namedItem("email") as HTMLInputElement).value;
    const message = (f.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      setOk(res.ok);
    } catch {
      setOk(false);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="max-w-xl">
      <h1 className="text-3xl font-bold mb-2">Contact</h1>
      <p className="text-gray-400 mb-6">
        For press, support, or partnerships. You can also email{" "}
        <a className="text-sky-400" href="mailto:contact@appverse.com">contact@appverse.com</a>.
      </p>

      <form onSubmit={onSubmit} className="space-y-3">
        <input name="name" required placeholder="Full name" className="border border-white/15 bg-black/30 px-3 py-2 w-full rounded" />
        <input name="email" type="email" required placeholder="Email" className="border border-white/15 bg-black/30 px-3 py-2 w-full rounded" />
        <textarea name="message" required placeholder="Your message..." className="border border-white/15 bg-black/30 px-3 py-2 w-full h-32 rounded" />
        <button disabled={sending} className="bg-sky-500/90 hover:bg-sky-400 px-4 py-2 rounded text-white">
          {sending ? "Sending..." : "Send"}
        </button>
        {ok === true && <p className="text-green-500">Thanks! We’ll get back to you soon.</p>}
        {ok === false && <p className="text-red-500">Error sending message. Please try again.</p>}
      </form>
    </section>
  );
}
