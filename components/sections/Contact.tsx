"use client";

import { useState, FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  ShieldAlert,
  RefreshCw,
} from "lucide-react";
import { BRAND } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

interface DispatchReceipt {
  referenceId: string;
  timestamp: string;
  payloadSummary: string;
  idempotentReplay?: boolean;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("Web Engineering");
  const [budget, setBudget] = useState("INR 50,000 – 1,50,000");
  const [objective, setObjective] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<DispatchReceipt | null>(null);
  const [copied, setCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // TRACEN Topic 12, 13 & 14: Idempotent Fetch with Exponential Backoff & Timeout
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsSubmitting(true);
    trackEvent("project_inquiry_initiated", { scope });

    const idempotencyKey = `${name.trim().toLowerCase()}-${email
      .trim()
      .toLowerCase()}-${objective.trim().slice(0, 24)}`;

    let attempt = 0;
    const maxAttempts = 3;

    while (attempt < maxAttempts) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Idempotency-Key": idempotencyKey,
          },
          body: JSON.stringify({ name, email, scope, budget, objective }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        const data = await res.json();

        if (!res.ok) {
          if (res.status >= 500 && attempt < maxAttempts - 1) {
            attempt++;
            const backoffMs = Math.pow(2, attempt) * 400 + Math.random() * 150;
            await new Promise((r) => setTimeout(r, backoffMs));
            continue;
          }
          setErrorMsg(data.message || "Unable to dispatch brief. Please check your inputs.");
          setIsSubmitting(false);
          return;
        }

        setReceipt({
          referenceId: data.referenceId,
          timestamp: data.timestamp,
          payloadSummary: data.payloadSummary,
          idempotentReplay: data.idempotentReplay,
        });
        setIsSubmitting(false);
        return;
      } catch {
        clearTimeout(timeoutId);
        if (attempt < maxAttempts - 1) {
          attempt++;
          const backoffMs = Math.pow(2, attempt) * 400 + Math.random() * 150;
          await new Promise((r) => setTimeout(r, backoffMs));
        } else {
          setErrorMsg("Network gateway timeout. Please copy your brief directly below.");
          setIsSubmitting(false);
          return;
        }
      }
    }
  };

  const handleCopyBrief = async () => {
    if (!receipt) return;
    try {
      await navigator.clipboard.writeText(receipt.payloadSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Ignore clipboard failure
    }
  };

  const handleCopyOfficialEmail = async () => {
    try {
      await navigator.clipboard.writeText(BRAND.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    } catch {
      // Ignore
    }
  };

  const gmailComposeUrl = receipt
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        BRAND.email
      )}&su=${encodeURIComponent(
        `[${receipt.referenceId}] BNAVAT Build Brief — ${name}`
      )}&body=${encodeURIComponent(receipt.payloadSummary)}`
    : "#";

  return (
    <section id="contact" className="bg-bnavat-base py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-wrap items-center justify-between gap-4 border-b border-bnavat-border pb-5">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 bg-bnavat-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-bnavat-primary">
              06 // INITIATE BUILD & DISPATCH PORTAL
            </span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-bnavat-shadow">
            IDEMPOTENT API GATEWAY // RATE-LIMITED
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left Column: Direct Conversion Pitch */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-4xl font-bold tracking-[-0.02em] text-bnavat-primary sm:text-5xl">
                Have a serious build in mind?
              </h2>
              <p className="text-base leading-relaxed text-bnavat-muted">
                Bring the objective. We will help define the system. Every project begins with a
                structured discovery review and a written Statement of Work.
              </p>
            </div>

            <div className="space-y-6 border-t border-bnavat-border pt-6">
              <div className="border border-bnavat-border bg-bnavat-surface p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-bnavat-shadow">
                  DIRECT ELECTRONIC MAIL
                </p>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 font-mono text-sm text-bnavat-primary">
                    <Mail className="h-4 w-4" />
                    <span>{BRAND.email}</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyOfficialEmail}
                    className="border border-bnavat-border bg-bnavat-base px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-bnavat-primary hover:border-bnavat-primary"
                  >
                    {emailCopied ? "COPIED" : "COPY"}
                  </button>
                </div>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-bnavat-shadow">
                  VERIFIED SOCIAL CHANNELS
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2.5 font-mono text-xs uppercase tracking-[0.12em]">
                  <a
                    href={BRAND.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-bnavat-border bg-bnavat-surface px-4 py-2.5 text-bnavat-primary transition hover:border-bnavat-primary"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-bnavat-shadow" />
                  </a>
                  <a
                    href={BRAND.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-bnavat-border bg-bnavat-surface px-4 py-2.5 text-bnavat-primary transition hover:border-bnavat-primary"
                  >
                    <span>X / Twitter</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-bnavat-shadow" />
                  </a>
                  <a
                    href={BRAND.socials.threads}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-bnavat-border bg-bnavat-surface px-4 py-2.5 text-bnavat-primary transition hover:border-bnavat-primary"
                  >
                    <span>Threads</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-bnavat-shadow" />
                  </a>
                  <a
                    href={BRAND.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-bnavat-border bg-bnavat-surface px-4 py-2.5 text-bnavat-primary transition hover:border-bnavat-primary"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-bnavat-shadow" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Scope Terminal Form OR Verified Dispatch Receipt */}
          <div className="lg:col-span-7">
            {!receipt ? (
              <form
                onSubmit={handleSubmit}
                className="border border-bnavat-border bg-bnavat-surface p-8 space-y-6"
              >
                <div className="flex items-center justify-between border-b border-bnavat-border pb-4">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-bnavat-primary">
                    PROJECT DISCOVERY DISPATCH
                  </span>
                  <span className="font-mono text-[11px] text-emerald-400">
                    ● GATEWAY READY
                  </span>
                </div>

                {errorMsg && (
                  <div className="flex items-center gap-3 border border-red-500/50 bg-bnavat-base p-4 text-xs text-red-300">
                    <ShieldAlert className="h-4 w-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block font-mono text-xs uppercase tracking-[0.12em] text-bnavat-muted"
                    >
                      Your Name / Venture *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aryan Verma / Apex Labs"
                      className="mt-2 w-full border border-bnavat-border bg-bnavat-base px-4 py-3 text-sm text-bnavat-primary placeholder:text-bnavat-shadow focus:border-bnavat-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-email"
                      className="block font-mono text-xs uppercase tracking-[0.12em] text-bnavat-muted"
                    >
                      Official Email *
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="mt-2 w-full border border-bnavat-border bg-bnavat-base px-4 py-3 text-sm text-bnavat-primary placeholder:text-bnavat-shadow focus:border-bnavat-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="project-scope"
                      className="block font-mono text-xs uppercase tracking-[0.12em] text-bnavat-muted"
                    >
                      Primary Capability
                    </label>
                    <select
                      id="project-scope"
                      value={scope}
                      onChange={(e) => setScope(e.target.value)}
                      className="mt-2 w-full border border-bnavat-border bg-bnavat-base px-4 py-3 text-sm text-bnavat-primary focus:border-bnavat-primary focus:outline-none"
                    >
                      <option value="Web Engineering">Web Engineering</option>
                      <option value="Digital Architecture">Digital Architecture</option>
                      <option value="UI/UX Systems">UI/UX Systems</option>
                      <option value="Full-Stack Product Build">Full-Stack Product Build</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="project-budget"
                      className="block font-mono text-xs uppercase tracking-[0.12em] text-bnavat-muted"
                    >
                      Allocation Range
                    </label>
                    <select
                      id="project-budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="mt-2 w-full border border-bnavat-border bg-bnavat-base px-4 py-3 text-sm text-bnavat-primary focus:border-bnavat-primary focus:outline-none"
                    >
                      <option value="INR 50,000 – 1,50,000">INR 50,000 – 1,50,000</option>
                      <option value="INR 1,50,000 – 3,50,000">INR 1,50,000 – 3,50,000</option>
                      <option value="INR 3,50,000+ / Custom">INR 3,50,000+ / Custom</option>
                      <option value="International (USD $1,500+)">
                        International (USD $1,500+)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project-objective"
                    className="block font-mono text-xs uppercase tracking-[0.12em] text-bnavat-muted"
                  >
                    System Objective & Timeline *
                  </label>
                  <textarea
                    id="project-objective"
                    rows={4}
                    required
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    placeholder="Describe the core problem, target launch window and any specific architectural requirements..."
                    className="mt-2 w-full border border-bnavat-border bg-bnavat-base px-4 py-3 text-sm text-bnavat-primary placeholder:text-bnavat-shadow focus:border-bnavat-primary focus:outline-none"
                  />
                </div>

                <p className="text-xs leading-relaxed text-bnavat-muted">
                  Submitting an enquiry generates a structured architectural brief and reference ID;
                  formal engagement begins only after written scope acceptance and signed commercial
                  terms.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 border border-bnavat-primary bg-bnavat-primary px-6 py-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-bnavat-base transition hover:bg-transparent hover:text-bnavat-primary disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      <span>ENCRYPTING & DISPATCHING BRIEF...</span>
                    </>
                  ) : (
                    <>
                      <span>Generate & Dispatch Project Brief</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* In-App Cryptographic Dispatch Receipt (No Forced Outlook Popup) */
              <div className="border border-bnavat-primary bg-bnavat-surface p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-bnavat-border pb-4">
                  <div className="flex items-center gap-2.5 text-bnavat-primary">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    <span className="font-mono text-xs uppercase tracking-[0.14em]">
                      ARCHITECTURAL BRIEF LOCKED // {receipt.referenceId}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-bnavat-shadow">
                    {receipt.idempotentReplay ? "IDEMPOTENT CACHE HIT" : "VERIFIED PAYLOAD"}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-bnavat-muted">
                  Your project brief has been structured with reference ID{" "}
                  <strong className="text-bnavat-primary">{receipt.referenceId}</strong>. Choose
                  your preferred transmission channel below (no desktop mail app required):
                </p>

                <pre className="max-h-56 overflow-y-auto border border-bnavat-border bg-bnavat-base p-4 font-mono text-xs leading-relaxed text-bnavat-primary whitespace-pre-wrap">
                  {receipt.payloadSummary}
                </pre>

                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center justify-center gap-2 border border-bnavat-primary bg-bnavat-primary px-5 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-bnavat-base transition hover:bg-transparent hover:text-bnavat-primary"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span>{copied ? "Brief Copied to Clipboard" : "1. Copy Structured Brief"}</span>
                  </button>

                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-bnavat-border bg-bnavat-base px-5 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-bnavat-primary transition hover:border-bnavat-primary"
                  >
                    <span>2. Send via Gmail Web</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                <div className="flex items-center justify-between border-t border-bnavat-border pt-4">
                  <span className="font-mono text-[11px] text-bnavat-muted">
                    RECIPIENT: {BRAND.email}
                  </span>
                  <button
                    type="button"
                    onClick={() => setReceipt(null)}
                    className="font-mono text-xs uppercase tracking-wider text-bnavat-shadow underline underline-offset-4 hover:text-bnavat-primary"
                  >
                    Edit Brief
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
