import { NextResponse } from "next/server";

/**
 * Lead intake stub.
 *
 * Accepts three lead kinds in V2:
 *   - "consultation" — multi-step consultation form
 *   - "contact"      — quick contact form (legacy)
 *   - "survey"       — survey request form (legacy)
 *
 * NEEDS FOUNDER APPROVAL on delivery method:
 *   1. Email forwarding via Resend / Postmark / SES
 *   2. Forwarding to a Google Sheet (Apps Script webhook)
 *   3. Forwarding to Notion / Airtable
 *   4. Plain SMTP via Nodemailer
 *
 * Replace `handleLead` once a delivery channel is agreed.
 */

type LeadKind = "consultation" | "contact" | "survey";
type Lead = Record<string, unknown> & { kind: LeadKind };

function isEmail(v: unknown): v is string {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

/** Lightweight per-IP rate limiter — in-memory, resets on cold start. */
const RATE_BUCKET = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 6;          // requests
const RATE_WINDOW = 60_000;    // per minute
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

async function handleLead(lead: Lead) {
  // TODO: wire delivery channel once chosen.
  // Tier hint: consultation + contactPreference === "contact-me" is the hottest.
  console.log(`[lead:${lead.kind}]`, JSON.stringify(lead, null, 2));
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }

  let body: Record<string, unknown> & { kind?: LeadKind };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Bad JSON" }, { status: 400 });
  }

  if (!body || (body.kind !== "consultation" && body.kind !== "contact" && body.kind !== "survey")) {
    return NextResponse.json({ ok: false, error: "Unknown lead kind" }, { status: 400 });
  }
  if (!body.name || !isEmail(body.email)) {
    return NextResponse.json({ ok: false, error: "Missing name or valid email" }, { status: 422 });
  }
  if (body.kind === "consultation") {
    if (!body.phone || !body.postcode || !body.projectType || !body.timeline || !body.budget) {
      return NextResponse.json({ ok: false, error: "Missing required consultation fields" }, { status: 422 });
    }
    if (!body.consent) {
      return NextResponse.json({ ok: false, error: "Consent required" }, { status: 422 });
    }
  }

  try {
    await handleLead(body as Lead);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Internal error" }, { status: 500 });
  }
}
