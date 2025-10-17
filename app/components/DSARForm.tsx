"use client";
import { useState } from "react";

export default function DSARForm({
  dir = "ltr",
  submitLabel,
}: {
  dir?: "rtl" | "ltr";
  submitLabel?: string;
}) {
  const isFa = dir === "rtl"; // تشخیص زبان
  const [ok, setOk] = useState<null | boolean>(null);
  const [sending, setSending] = useState(false);

  const labels = {
    name: isFa ? "نام کامل" : "Full name",
    email: isFa ? "ایمیل" : "Email",
    type: isFa ? "نوع درخواست…" : "Request type…",
    details: isFa ? "جزئیات (اختیاری)" : "Details (optional)",
    send: isFa ? "ارسال" : "Send",
    sending: isFa ? "ارسال…" : "Sending…",
    success: isFa
      ? "✅ درخواست دریافت شد. پاسخ تا ۳۰ روز ارسال می‌شود."
      : "✅ Request received. A reply will be sent within 30 days.",
    error: isFa
      ? "❌ خطا در ارسال. لطفاً دوباره تلاش کنید یا ایمیل بزنید."
      : "❌ Failed to send. Please try again or contact by email.",
    options: isFa
      ? [
          "دسترسی به داده",
          "حذف داده",
          "اصلاح داده",
          "محدودسازی پردازش",
          "اعتراض",
          "انتقال‌پذیری",
        ]
      : [
          "Data access",
          "Data deletion",
          "Data correction",
          "Processing restriction",
          "Objection",
          "Portability",
        ],
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const f = e.currentTarget;
    const body = {
      name: (f.elements.namedItem("name") as HTMLInputElement).value,
      email: (f.elements.namedItem("email") as HTMLInputElement).value,
      requestType: (f.elements.namedItem("requestType") as HTMLSelectElement).value,
      details: (f.elements.namedItem("details") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: body.name,
          email: body.email,
          message: `DSAR (${body.requestType})\n\n${body.details}`,
        }),
      });
      setOk(res.ok);
    } catch {
      setOk(false);
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      dir={dir}
      onSubmit={onSubmit}
      className={`space-y-3 max-w-xl ${isFa ? "text-right" : "text-left"}`}
    >
      <input
        name="name"
        required
        placeholder={labels.name}
        className="border px-3 py-2 w-full"
      />
      <input
        name="email"
        type="email"
        required
        placeholder={labels.email}
        className="border px-3 py-2 w-full"
      />
      <select name="requestType" required className="border px-3 py-2 w-full">
        <option value="">{labels.type}</option>
        {labels.options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
      <textarea
        name="details"
        placeholder={labels.details}
        className="border px-3 py-2 w-full h-28"
      />
      <button disabled={sending} className="bg-black text-white px-4 py-2 rounded">
        {sending ? labels.sending : submitLabel || labels.send}
      </button>
      {ok === true && <p className="text-green-700">{labels.success}</p>}
      {ok === false && <p className="text-red-600">{labels.error}</p>}
    </form>
  );
}
