"use client";

import { useState } from "react";
import { Field, TextArea, Select, Checkbox, Fieldset } from "./Field";
import { packages } from "@/lib/packages";

type Status = "idle" | "submitting" | "success" | "error";

export default function SurveyRequestForm({ defaultPackage }: { defaultPackage?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "survey", ...data }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Sorry — something went wrong submitting your request. Please email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-stone-300 bg-paper p-8 sm:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Request received</p>
        <h3 className="mt-3 font-serif text-3xl tracking-tighter2 text-stone-900">
          Thank you — we&rsquo;ll be in touch.
        </h3>
        <p className="mt-4 text-stone-600 max-w-prose2 leading-relaxed">
          We respond to qualified enquiries within one working day. If your project looks like a fit, we&rsquo;ll suggest a survey slot. If not, we&rsquo;ll let you know honestly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-12" noValidate>
      <Fieldset legend="Your details">
        <Field id="name" label="Full name" required autoComplete="name" placeholder="Jane Smith" />
        <Field id="email" label="Email" type="email" required autoComplete="email" placeholder="jane@example.co.uk" />
        <Field id="phone" label="Phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="07000 000000" />
        <Field id="postcode" label="Postcode" required autoComplete="postal-code" placeholder="RG1 1AA" hint="So we can confirm we cover your area." />
      </Fieldset>

      <Fieldset legend="Your property">
        <Select id="propertyType" label="Property type" required options={[
          { value: "house", label: "House" }, { value: "flat", label: "Flat / apartment" },
          { value: "maisonette", label: "Maisonette" }, { value: "bungalow", label: "Bungalow" },
          { value: "other", label: "Other" },
        ]} />
        <Select id="bathroomType" label="Bathroom type" required options={[
          { value: "main", label: "Main / family bathroom" }, { value: "ensuite", label: "En-suite" },
          { value: "cloakroom", label: "Cloakroom / WC" }, { value: "shower-room", label: "Shower room" },
          { value: "other", label: "Other" },
        ]} />
        <Select id="bathroomSize" label="Approximate size" options={[
          { value: "small", label: "Small (under 4 m²)" }, { value: "medium", label: "Medium (4–7 m²)" },
          { value: "large", label: "Large (7 m² +)" }, { value: "unsure", label: "Not sure" },
        ]} />
        <Select id="currentCondition" label="Current condition" options={[
          { value: "dated", label: "Dated but functional" }, { value: "needs-work", label: "Needs work" },
          { value: "poor", label: "Poor / unusable" }, { value: "recent", label: "Recently renovated, want changes" },
        ]} />
      </Fieldset>

      <Fieldset legend="Your project">
        <Select id="preferredPackage" label="Preferred package" defaultValue={defaultPackage} options={[
          ...packages.map((p) => ({ value: p.slug, label: p.name })),
          { value: "unsure", label: "Not sure yet" },
        ]} />
        <Select id="budget" label="Estimated budget" required hint="Honest budget bands help us be straight with you." options={[
          { value: "small", label: "Small project" }, { value: "medium", label: "Medium project" },
          { value: "large", label: "Large project" }, { value: "major", label: "Major project" },
          { value: "very-large", label: "Very large project" }, { value: "unsure", label: "Just researching / not sure yet" },
        ]} />
        <Select id="timeline" label="Desired timeline" required options={[
          { value: "asap", label: "As soon as possible" }, { value: "1-3m", label: "Within 1–3 months" },
          { value: "3-6m", label: "Within 3–6 months" }, { value: "6m+", label: "6 months +" },
          { value: "researching", label: "Just researching" },
        ]} />
        <Select id="layoutChanges" label="Layout changes required?" options={[
          { value: "none", label: "None — like-for-like" }, { value: "minor", label: "Minor — small adjustments" },
          { value: "major", label: "Major — significant re-plan" }, { value: "unsure", label: "Not sure" },
        ]} />
      </Fieldset>

      <Fieldset legend="On-site logistics">
        <Field id="parkingAccess" label="Parking / access notes" placeholder="Driveway, on-street, restrictions, lift, stairs…" />
        <Field id="propertyAge" label="Approx. property age (optional)" placeholder="e.g. 1930s, new build" />
        <div className="sm:col-span-2">
          <TextArea id="notes" label="Anything else we should know"
            placeholder="Photos / videos help a lot — please email them to us once we reply, or mention how you'd like to share them."
            hint="Photo / video upload coming soon. For now, please email media after first response. (Needs founder approval to confirm intake method.)" />
        </div>
      </Fieldset>

      <div className="space-y-4 border-t border-stone-200 pt-10">
        <Checkbox id="decisionMaker" required label="I confirm I am a decision maker (or working with one) for this project." />
        <Checkbox id="consent" required label="I'm happy for Artheon LTD to contact me about my enquiry." />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button type="submit" disabled={status === "submitting"}
          className="inline-flex items-center justify-center px-7 py-4 bg-stone-900 text-canvas hover:bg-stone-700 transition-colors rounded-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed">
          {status === "submitting" ? "Sending…" : "Send survey request"}
        </button>
        <p className="text-xs text-stone-500 max-w-prose2">
          We respond to qualified enquiries within one working day. Submitting this form is not a commitment.
        </p>
      </div>

      {status === "error" && error && (
        <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-100 px-4 py-3 rounded-sm">{error}</p>
      )}
    </form>
  );
}
