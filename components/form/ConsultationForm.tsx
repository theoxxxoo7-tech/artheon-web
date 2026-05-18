"use client";

import { useState } from "react";
import { projectTypes } from "@/lib/content";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

const STEPS = [
  { n: 1, label: "Your details" },
  { n: 2, label: "Your project" },
  { n: 3, label: "How can we help" },
] as const;

type FormState = {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  projectType: string;
  timeline: string;
  budget: string;
  contactPreference: string;
  notes: string;
  consent: boolean;
};

const EMPTY: FormState = {
  name: "", email: "", phone: "", postcode: "",
  projectType: "", timeline: "", budget: "",
  contactPreference: "", notes: "", consent: false,
};

const baseInput =
  "block w-full bg-canvas border border-stone-300 rounded-sm px-4 py-3 text-base text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors";

const SELECT_BG_IMAGE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8' width='12' height='8'><path d='M1 1l5 5 5-5' stroke='%231A1A1A' stroke-width='1.2' fill='none' stroke-linecap='round'/></svg>\")";

/**
 * Three-step consultation form.
 *
 * Step 1 — low-friction lead capture (name, email).
 * Step 2 — qualification (phone, postcode, project type, timeline, budget).
 * Step 3 — soft qualifier + consent. Either answer captures the lead;
 *           the answer affects follow-up tier.
 *
 * Submits a flat object to /api/lead with kind="consultation".
 */
export default function ConsultationForm({
  defaultProjectType,
}: {
  defaultProjectType?: string;
}) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [data, setData] = useState<FormState>({
    ...EMPTY,
    projectType: defaultProjectType ?? "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function set<K extends keyof FormState>(name: K, value: FormState[K]) {
    setData((d) => ({ ...d, [name]: value }));
    setErrors((e) => ({ ...e, [name]: undefined }));
  }

  function validate(s: number): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (s === 1) {
      if (!data.name.trim()) e.name = "Please enter your name.";
      if (!data.email.trim()) e.email = "Please enter your email.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        e.email = "Please enter a valid email.";
    } else if (s === 2) {
      if (!data.phone.trim()) e.phone = "Please enter a phone number.";
      if (!data.postcode.trim()) e.postcode = "Please enter a postcode.";
      if (!data.projectType.trim()) e.projectType = "Please choose a project type.";
      if (!data.timeline.trim()) e.timeline = "Please choose a timeline.";
      if (!data.budget.trim()) e.budget = "Please choose a budget band.";
    } else if (s === 3) {
      if (!data.contactPreference) e.contactPreference = "Please choose an option.";
      if (!data.consent) e.consent = "Please confirm consent to continue.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (validate(step)) setStep((s) => (Math.min(3, s + 1) as 1 | 2 | 3));
  }
  function back() {
    setStep((s) => (Math.max(1, s - 1) as 1 | 2 | 3));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate(3)) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "consultation", ...data }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-stone-300 bg-paper p-8 sm:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
          <span className="brass-dot mr-2 align-middle" aria-hidden />
          Consultation request received
        </p>
        <h3 className="mt-3 font-serif text-3xl sm:text-4xl tracking-tighter2 text-stone-900">
          Thank you — we&rsquo;ll be in touch.
        </h3>
        <p className="mt-4 text-stone-600 max-w-prose2 leading-relaxed">
          We respond to qualified enquiries within one working day. We&rsquo;ll
          send a short note suggesting a consultation slot, and you&rsquo;ll
          receive a written summary after we talk. No sales follow-up calls.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {/* Progress */}
      <ol className="mb-10 grid grid-cols-3 gap-3" aria-label="Form progress">
        {STEPS.map((s) => {
          const isActive = s.n === step;
          const isDone = s.n < step;
          return (
            <li key={s.n} className="flex flex-col gap-2">
              <span
                aria-current={isActive ? "step" : undefined}
                className={cn(
                  "h-1 rounded-full transition-colors",
                  isDone || isActive ? "bg-stone-900" : "bg-stone-200"
                )}
              />
              <span className="text-[10px] uppercase tracking-[0.22em] tabular-nums text-stone-500">
                Step {s.n} of 3
              </span>
              <span className={cn(
                "text-sm tracking-tightish",
                isActive ? "text-stone-900 font-medium" : "text-stone-500"
              )}>
                {s.label}
              </span>
            </li>
          );
        })}
      </ol>

      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-6">
          <Header
            title="Start the conversation."
            body="We'll never share your details. This first step takes ten seconds."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <Text
              id="name" label="Your name" required autoComplete="name"
              placeholder="Jane Smith"
              value={data.name} onChange={(v) => set("name", v)} error={errors.name}
            />
            <Text
              id="email" label="Email" required type="email" autoComplete="email"
              placeholder="jane@example.co.uk"
              value={data.email} onChange={(v) => set("email", v)} error={errors.email}
            />
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-6">
          <Header
            title="A little about your project."
            body="Honest answers help us be useful. None of this commits you to anything."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <Text
              id="phone" label="Phone" required type="tel" autoComplete="tel"
              placeholder="07000 000000"
              value={data.phone} onChange={(v) => set("phone", v)} error={errors.phone}
            />
            <Text
              id="postcode" label="Postcode / project address" required
              autoComplete="postal-code" placeholder="RG1 1AA"
              value={data.postcode} onChange={(v) => set("postcode", v)} error={errors.postcode}
            />
            <SelectBox
              id="projectType" label="Project type" required
              value={data.projectType} onChange={(v) => set("projectType", v)} error={errors.projectType}
              options={projectTypes.items.map((p) => ({ value: p.slug, label: p.name }))}
            />
            <SelectBox
              id="timeline" label="Estimated timeline" required
              value={data.timeline} onChange={(v) => set("timeline", v)} error={errors.timeline}
              options={[
                { value: "asap", label: "As soon as possible" },
                { value: "1-3m", label: "Within 1–3 months" },
                { value: "3-6m", label: "Within 3–6 months" },
                { value: "6m+", label: "6 months +" },
                { value: "researching", label: "Just researching" },
              ]}
            />
            <SelectBox
              id="budget" label="Estimated budget" required
              hint="Honest bands help us be straight with you."
              value={data.budget} onChange={(v) => set("budget", v)} error={errors.budget}
              options={[
                { value: "small", label: "Small project" },
                { value: "medium", label: "Medium project" },
                { value: "large", label: "Large project" },
                { value: "major", label: "Major project" },
                { value: "very-large", label: "Very large project" },
                { value: "unsure", label: "Just researching / not sure yet" },
              ]}
            />
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="space-y-6">
          <Header
            title="How can we help next?"
            body="If you're actively planning a renovation, would you like someone from Artheon to contact you regarding your project?"
          />
          <fieldset>
            <legend className="sr-only">Contact preference</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <Choice
                checked={data.contactPreference === "contact-me"}
                onChange={() => set("contactPreference", "contact-me")}
                title="Yes, please get in touch"
                body="We'll suggest a consultation slot within one working day."
              />
              <Choice
                checked={data.contactPreference === "researching"}
                onChange={() => set("contactPreference", "researching")}
                title="Not yet — just researching"
                body="We'll save your details and only send the renovation guide. No follow-up calls."
              />
            </div>
            {errors.contactPreference && (
              <p className="mt-2 text-sm text-red-700" role="alert">{errors.contactPreference}</p>
            )}
          </fieldset>

          <div className="space-y-2">
            <label htmlFor="notes" className="block text-sm font-medium text-stone-800 tracking-tightish">
              Anything else we should know (optional)
            </label>
            <textarea
              id="notes" name="notes" rows={4}
              value={data.notes}
              onChange={(e) => set("notes", e.target.value)}
              placeholder="Layout changes, particular materials in mind, access notes, deadlines…"
              className={cn(baseInput, "resize-y")}
            />
          </div>

          <div className="pt-2">
            <label htmlFor="consent" className="flex items-start gap-3 cursor-pointer group">
              <input
                id="consent" name="consent" type="checkbox"
                checked={data.consent}
                onChange={(e) => set("consent", e.target.checked)}
                className="mt-1 h-4 w-4 accent-stone-900 border-stone-300 focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 focus:ring-offset-canvas rounded-sm"
              />
              <span className="text-sm text-stone-700 leading-relaxed">
                I&rsquo;m happy for Artheon LTD to contact me about my enquiry.
              </span>
            </label>
            {errors.consent && (
              <p className="mt-2 text-sm text-red-700" role="alert">{errors.consent}</p>
            )}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 border-t border-stone-200 pt-8">
        {step > 1 && (
          <button
            type="button"
            onClick={back}
            className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-stone-900 border border-stone-300 hover:border-stone-900 rounded-sm transition-colors"
          >
            ← Back
          </button>
        )}
        {step < 3 && (
          <button
            type="button"
            onClick={next}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-stone-900 text-canvas hover:bg-stone-700 rounded-sm transition-colors"
          >
            Continue →
          </button>
        )}
        {step === 3 && (
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-stone-900 text-canvas hover:bg-stone-700 rounded-sm transition-colors disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Send my details"}
          </button>
        )}
        <p className="text-xs text-stone-500 max-w-prose2">
          Submitting is not a commitment. We respond within one working day.
        </p>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-red-700 bg-red-50 border border-red-100 px-4 py-3 rounded-sm">
          Something went wrong sending your details. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}

/* ---------- small inline subcomponents ---------- */

function Header({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-serif text-2xl sm:text-3xl tracking-tighter2 text-stone-900">
        {title}
      </h3>
      <p className="mt-2 text-sm text-stone-600 max-w-prose2">{body}</p>
    </div>
  );
}

function Text({
  id, label, value, onChange, error, required, type = "text",
  placeholder, autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-stone-800 tracking-tightish">
        {label}
        {required && <span className="text-stone-500 ml-1">*</span>}
      </label>
      <input
        id={id} name={id} type={type} required={required}
        value={value} onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder} autoComplete={autoComplete}
        className={baseInput}
      />
      {error && <p className="text-sm text-red-700" role="alert">{error}</p>}
    </div>
  );
}

function SelectBox({
  id, label, value, onChange, error, options, required, hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  hint?: string;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block">
        <span className="block text-sm font-medium text-stone-800 tracking-tightish">
          {label}{required && <span className="text-stone-500 ml-1">*</span>}
        </span>
        {hint && <span className="block mt-1 text-xs text-stone-500">{hint}</span>}
      </label>
      <select
        id={id} name={id} required={required}
        value={value} onChange={(e) => onChange(e.target.value)}
        className={cn(baseInput, "appearance-none pr-10 bg-no-repeat bg-[right_1rem_center]")}
        style={{ backgroundImage: SELECT_BG_IMAGE }}
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {error && <p className="text-sm text-red-700" role="alert">{error}</p>}
    </div>
  );
}

function Choice({
  checked, onChange, title, body,
}: {
  checked: boolean;
  onChange: () => void;
  title: string;
  body: string;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      aria-pressed={checked}
      className={cn(
        "text-left border p-5 sm:p-6 rounded-sm transition-colors",
        checked
          ? "border-stone-900 bg-paper"
          : "border-stone-200 bg-canvas hover:border-stone-400"
      )}
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className={cn(
            "mt-1 inline-flex w-4 h-4 rounded-full border transition-colors",
            checked ? "border-stone-900 bg-stone-900" : "border-stone-300 bg-canvas"
          )}
        >
          {checked && (
            <span className="block w-1.5 h-1.5 m-auto rounded-full bg-canvas" />
          )}
        </span>
        <span className="flex-1">
          <span className="block font-serif text-lg tracking-tightish text-stone-900">
            {title}
          </span>
          <span className="mt-1 block text-sm text-stone-600 leading-relaxed">
            {body}
          </span>
        </span>
      </div>
    </button>
  );
}

