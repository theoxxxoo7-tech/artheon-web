import { cn } from "@/lib/cn";

const baseInput =
  "block w-full bg-canvas border border-stone-300 rounded-sm px-4 py-3 text-base text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors";

export function Label({
  htmlFor,
  children,
  required,
  hint,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  hint?: string;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="block text-sm font-medium text-stone-800 tracking-tightish">
        {children}
        {required && <span className="text-stone-500 ml-1">*</span>}
      </span>
      {hint && <span className="block mt-1 text-xs text-stone-500">{hint}</span>}
    </label>
  );
}

export function Field({
  id, label, type = "text", required, placeholder, hint, autoComplete, inputMode, pattern, defaultValue,
}: {
  id: string; label: string; type?: string; required?: boolean; placeholder?: string; hint?: string;
  autoComplete?: string; inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"]; pattern?: string; defaultValue?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} required={required} hint={hint}>{label}</Label>
      <input id={id} name={id} type={type} required={required} placeholder={placeholder}
        autoComplete={autoComplete} inputMode={inputMode} pattern={pattern} defaultValue={defaultValue}
        className={baseInput} />
    </div>
  );
}

export function TextArea({
  id, label, required, placeholder, hint, rows = 5, defaultValue,
}: {
  id: string; label: string; required?: boolean; placeholder?: string; hint?: string; rows?: number; defaultValue?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} required={required} hint={hint}>{label}</Label>
      <textarea id={id} name={id} rows={rows} required={required} placeholder={placeholder}
        defaultValue={defaultValue} className={cn(baseInput, "resize-y")} />
    </div>
  );
}

export function Select({
  id, label, required, options, hint, defaultValue,
}: {
  id: string; label: string; required?: boolean;
  options: Array<{ value: string; label: string }>;
  hint?: string; defaultValue?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} required={required} hint={hint}>{label}</Label>
      <select id={id} name={id} required={required} defaultValue={defaultValue ?? ""}
        className={cn(baseInput, "appearance-none pr-10 bg-no-repeat bg-[right_1rem_center]")}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8' width='12' height='8'><path d='M1 1l5 5 5-5' stroke='%231A1A1A' stroke-width='1.2' fill='none' stroke-linecap='round'/></svg>\")",
        }}>
        <option value="" disabled>Select…</option>
        {options.map((o) => (<option key={o.value} value={o.value}>{o.label}</option>))}
      </select>
    </div>
  );
}

export function Checkbox({ id, label, required }: { id: string; label: string; required?: boolean }) {
  return (
    <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group">
      <input id={id} name={id} type="checkbox" required={required}
        className="mt-1 h-4 w-4 accent-stone-900 border-stone-300 focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 focus:ring-offset-canvas rounded-sm" />
      <span className="text-sm text-stone-700 leading-relaxed group-hover:text-stone-900 transition-colors">{label}</span>
    </label>
  );
}

export function Fieldset({ legend, description, children }: { legend: string; description?: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t border-stone-200 pt-10">
      <legend className="float-none w-full">
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{legend}</p>
        {description && <p className="mt-2 text-sm text-stone-600 max-w-prose2">{description}</p>}
      </legend>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}
