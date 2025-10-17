"use client";

export default function PrintButton({
  label = "Print / Save PDF",
}: {
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
    >
      {label}
    </button>
  );
}
