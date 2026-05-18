import { NextResponse } from "next/server";

/**
 * Lead-magnet endpoint.
 *
 * Captures an email address in exchange for the renovation guide.
 * NEEDS FOUNDER APPROVAL on delivery:
 *   - Email forwarding service (Resend / Postmark) is the simplest path.
 *     Send the PDF link or attach the PDF; subscribe the email to a calm
 *     follow-up list (Mailchimp / ConvertKit / Buttondown).
 *
 * For now we validate, log, and return OK so the UI flow is testable.
 * The PDF itself is `public/guides/artheon-renovation-guide.pdf` — replace
 * with the real document once written.
 */

type GuideRequest = {
  name?: string;
  email?: string;
  consent?: string | boolean;
  source?: string;
};

function isEmail(v: unknown): v is string {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

const RATE_BUCKET = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 6;
const RATE_WINDOW = 60_000;
function rateLimited(ip: string) {
  const now = Date.now();
  const entry = RATE_BUCKET.get(ip);
  if (!entry || entry.reset < now) {
    RATE_BUCKET.set(ip, { count: 1, reset: now + RATE_WINDOW });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

async function handleGuideRequest(req: GuideRequest) {
  // TODO: hand off to the chosen email provider.
  console.log("[guide-request]", JSON.stringify(req, null, 2));
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }

  let body: GuideRequest;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Bad JSON" }, { status: 400 });
  }

  if (!isEmail(body.email)) {
    return NextResponse.json({ ok: false, error: "Missing or invalid email" }, { status: 422 });
  }
  if (!body.consent) {
    return NextResponse.json({ ok: false, error: "Consent required" }, { status: 422 });
  }

  try {
    await handleGuideRequest(body);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Internal error" }, { status: 500 });
  }
}
