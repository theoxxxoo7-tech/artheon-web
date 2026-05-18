"use client";

import { useState } from "react";
import { Field, Checkbox } from "./form/Field";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Single-field lead magnet form. Submits to /api/guide and shows a calm
 * success state. The actual PDF delivery is wired up later — for now the
 * server simply logs the request and returns OK.
 */
export default function GuideForm({
  ctaLabel = "Send me the guide",
  privacyNote,
  successTitle,
  successBody,
  source = "lead-magnet",
}: {
  ctaLabel?: string;
  privacyNote?: string;
  successTitle: string;
  successBody: string;
  source?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-stone-300 bg-canvas p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
          <span className="brass-dot mr-2 align-middle" aria-hidden />
          Guide on its way
        </p>
        <h3 className="mt-3 font-serif text-2xl sm:text-3xl tracking-tighter2 text-stone-900">
          {successTitle}
        </h3>
        <p className="mt-3 text-stone-600 max-w-prose2 leading-relaxed">
          {successBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="First name" required autoComplete="given-name" placeholder="Jane" />
        <Field id="email" label="Email" type="email" required autoComplete="email" placeholder="jane@example.co.uk" />
      </div>
      <Checkbox
        id="consent"
        required
        label="Send me the guide and occasional, useful renovation notes. No sales calls."
      />
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center px-6 py-3 bg-stone-900 text-canvas hover:bg-stone-700 transition-colors rounded-sm font-medium disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : ctaLabel}
        </button>
        {privacyNote && (
          <p className="text-xs text-stone-500 max-w-prose2">{privacyNote}</p>
        )}
      </div>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
