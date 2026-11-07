import { NextRequest, NextResponse } from "next/server";

// TRACEN Topic 01 & 14: In-Memory Edge Token Bucket & Idempotency Store
const rateLimitBucket = new Map<string, { tokens: number; lastRefill: number }>();
const idempotencyStore = new Map<
  string,
  { referenceId: string; timestamp: string; payloadSummary: string }
>();

const MAX_TOKENS = 5;
const REFILL_WINDOW_MS = 60_000; // 1 minute window

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimitBucket.get(ip) || { tokens: MAX_TOKENS, lastRefill: now };

  const elapsed = now - entry.lastRefill;
  if (elapsed > REFILL_WINDOW_MS) {
    entry.tokens = MAX_TOKENS;
    entry.lastRefill = now;
  }

  if (entry.tokens <= 0) {
    rateLimitBucket.set(ip, entry);
    return { allowed: false, remaining: 0 };
  }

  entry.tokens -= 1;
  rateLimitBucket.set(ip, entry);
  return { allowed: true, remaining: entry.tokens };
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    // 1. Check Token Bucket Rate Limit
    const rateStatus = checkRateLimit(ip);
    if (!rateStatus.allowed) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded",
          message: "Too many dispatch requests from this network node. Please wait 45 seconds.",
          retry_after_seconds: 45,
        },
        { status: 429 }
      );
    }

    // 2. Check Idempotency-Key Header (Prevent duplicate submissions)
    const idempotencyKey = req.headers.get("Idempotency-Key");
    if (idempotencyKey && idempotencyStore.has(idempotencyKey)) {
      const cached = idempotencyStore.get(idempotencyKey)!;
      return NextResponse.json({
        status: "DISPATCH_VERIFIED",
        idempotentReplay: true,
        referenceId: cached.referenceId,
        timestamp: cached.timestamp,
        payloadSummary: cached.payloadSummary,
      });
    }

    const body = await req.json();
    const { name, email, scope, budget, objective } = body;

    if (!name || !email || !objective) {
      return NextResponse.json(
        { error: "Validation Error", message: "Name, Official Email, and System Objective are required." },
        { status: 400 }
      );
    }

    // Generate deterministic BNAVAT Reference ID
    const hashSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    const dateStamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const referenceId = `BNV-${dateStamp}-${hashSuffix}`;
    const timestamp = new Date().toISOString();

    const payloadSummary = [
      `REFERENCE ID: ${referenceId}`,
      `TIMESTAMP (UTC): ${timestamp}`,
      `CLIENT / VENTURE: ${name}`,
      `OFFICIAL EMAIL: ${email}`,
      `CAPABILITY TRACK: ${scope}`,
      `ALLOCATION TIER: ${budget}`,
      `----------------------------------------`,
      `SYSTEM OBJECTIVE & REQUIREMENTS:`,
      `${objective}`,
    ].join("\n");

    if (idempotencyKey) {
      idempotencyStore.set(idempotencyKey, {
        referenceId,
        timestamp,
        payloadSummary,
      });
    }

    return NextResponse.json({
      status: "DISPATCH_VERIFIED",
      idempotentReplay: false,
      referenceId,
      timestamp,
      remainingQuota: rateStatus.remaining,
      payloadSummary,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal Gateway Error", message: "Unable to process architectural brief." },
      { status: 500 }
    );
  }
}
