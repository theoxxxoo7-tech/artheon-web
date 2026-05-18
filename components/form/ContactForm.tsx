"use client";

import { useState } from "react";
import { Field, TextArea, Checkbox } from "./Field";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "contact", ...data }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-stone-300 bg-paper p-8">
        <h3 className="font-serif text-2xl tracking-tightish text-stone-900">Thanks — we&rsquo;ll be in touch.</h3>
        <p className="mt-3 text-stone-600">We aim to respond within one working day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Full name" required autoComplete="name" />
        <Field id="email" label="Email" type="email" required autoComplete="email" />
        <Field id="phone" label="Phone (optional)" type="tel" autoComplete="tel" />
        <Field id="postcode" label="Postcode (optional)" autoComplete="postal-code" />
      </div>
      <TextArea id="message" label="Message" required rows={6}
        placeholder="Tell us briefly about your project or question." />
      <Checkbox id="consent" required label="I'm happy for Artheon LTD to contact me about my enquiry." />
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button type="submit" disabled={status === "submitting"}
          className="inline-flex items-center justify-center px-6 py-3 bg-stone-900 text-canvas hover:bg-stone-700 transition-colors rounded-sm font-medium disabled:opacity-60">
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm text-red-700">Something went wrong. Please email us directly.</p>
        )}
      </div>
    </form>
  );
}
