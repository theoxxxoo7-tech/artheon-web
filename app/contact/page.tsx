import { redirect } from "next/navigation";

/**
 * V2 funnel consolidates contact into the consultation flow.
 * Preserve any inbound bookmarks/links to /contact with a permanent redirect.
 *
 * Query params (e.g. ?package=…) are preserved by the redirect helper.
 */
export default function ContactRedirect({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const params = new URLSearchParams();

  // Legacy ?package=… now maps to consultation projectType=bathroom
  if (searchParams?.package) {
    params.set("projectType", "bathroom");
  }
  for (const [k, v] of Object.entries(searchParams ?? {})) {
    if (k === "package") continue;
    if (typeof v === "string") params.set(k, v);
  }
  const qs = params.toString();
  redirect(qs ? `/consultation?${qs}` : "/consultation");
}
