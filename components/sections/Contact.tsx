"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight, Mail, CheckCircle2, Copy, Check, ExternalLink } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

interface DispatchReceipt {
  referenceId: string;
  payloadSummary: string;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("Web Engineering");
  const [budget, setBudget] = useState("INR 50,000 – 1,50,000");
  const [objective, setObjective] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [receipt, setReceipt] = useState<DispatchReceipt | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackEvent("project_inquiry_initiated", { scope });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, scope, budget, objective }),
      });
      const data = await res.json();

      if (res.ok && data.referenceId) {
        setReceipt({
          referenceId: data.referenceId,
          payloadSummary: data.payloadSummary,
        });
      }
    } catch {
      // Fallback summary if offline
      setReceipt({
        referenceId: "BNV-DIRECT",
        payloadSummary: `Name: ${name}\nEmail: ${email}\nScope: ${scope}\nBudget: ${budget}\n\nObjective:\n${objective}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyBrief = async () => {
    if (!receipt) return;
    await navigator.clipboard.writeText(receipt.payloadSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const gmailComposeUrl = receipt
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        BRAND.email
      )}&su=${encodeURIComponent(`BNAVAT Project Inquiry — ${name}`)}&body=${encodeURIComponent(
        receipt.payloadSummary
      )}`
    : "#";

  return (
    <section
      id="contact"
      className="relative z-10 bg-bnavat-base/85 backdrop-blur-[2px] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-bnavat-shadow">
              06 // START A PROJECT
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-[-0.02em] text-bnavat-primary sm:text-5xl">
              Have a serious build in mind?
            </h2>
            <p className="text-base leading-relaxed text-bnavat-muted">
              Bring the objective. We will help define the system. Every project begins with a
              structured discovery review and a written Statement of Work.
            </p>

            <div className="space-y-6 border-t border-bnavat-border pt-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-bnavat-shadow">
                  DIRECT EMAIL
                </p>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="mt-2 inline-flex items-center gap-2 font-mono text-sm text-bnavat-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  <span>{BRAND.email}</span>
                </a>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-bnavat-shadow">
                  SOCIAL CHANNELS
                </p>
                <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.12em]">
                  <a
                    href={BRAND.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bnavat-primary hover:text-bnavat-muted underline underline-offset-4"
                  >
                    Instagram
                  </a>
                  <a
                    href={BRAND.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bnavat-primary hover:text-bnavat-muted underline underline-offset-4"
                  >
                    X
                  </a>
                  <a
                    href={BRAND.socials.threads}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bnavat-primary hover:text-bnavat-muted underline underline-offset-4"
                  >
                    Threads
                  </a>
                  <a
                    href={BRAND.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bnavat-primary hover:text-bnavat-muted underline underline-offset-4"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {!receipt ? (
              <form
                onSubmit={handleSubmit}
                className="border border-bnavat-border bg-bnavat-surface/90 p-8 sm:p-10 space-y-6"
              >
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
                      placeholder="Aryan Verma / Apex Labs"
                      className="mt-2 w-full border border-bnavat-border bg-bnavat-base px-4 py-3.5 text-sm text-bnavat-primary placeholder:text-bnavat-shadow focus:border-bnavat-primary focus:outline-none"
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
                      className="mt-2 w-full border border-bnavat-border bg-bnavat-base px-4 py-3.5 text-sm text-bnavat-primary placeholder:text-bnavat-shadow focus:border-bnavat-primary focus:outline-none"
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
                      className="mt-2 w-full border border-bnavat-border bg-bnavat-base px-4 py-3.5 text-sm text-bnavat-primary focus:border-bnavat-primary focus:outline-none"
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
                      Estimated Budget
                    </label>
                    <select
                      id="project-budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="mt-2 w-full border border-bnavat-border bg-bnavat-base px-4 py-3.5 text-sm text-bnavat-primary focus:border-bnavat-primary focus:outline-none"
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
                    Project Objective & Timeline *
                  </label>
                  <textarea
                    id="project-objective"
                    rows={4}
                    required
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    placeholder="Tell us about what you are building, your target timeline, and key goals..."
                    className="mt-2 w-full border border-bnavat-border bg-bnavat-base px-4 py-3.5 text-sm text-bnavat-primary placeholder:text-bnavat-shadow focus:border-bnavat-primary focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 border border-bnavat-primary bg-bnavat-primary px-6 py-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-bnavat-base transition hover:bg-transparent hover:text-bnavat-primary disabled:opacity-50"
                >
                  <span>{isSubmitting ? "Preparing Brief..." : "Start a Project"}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <div className="border border-bnavat-primary bg-bnavat-surface p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-3 text-bnavat-primary">
                  <CheckCircle2 className="h-5 w-5" />
                  <h3 className="font-heading text-xl font-bold">Project Brief Ready</h3>
                </div>

                <p className="text-sm leading-relaxed text-bnavat-muted">
                  Send your structured brief directly via Gmail Web or copy it below:
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-bnavat-primary bg-bnavat-primary px-5 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-bnavat-base transition hover:bg-transparent hover:text-bnavat-primary"
                  >
                    <span>Send via Gmail Web</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center justify-center gap-2 border border-bnavat-border bg-bnavat-base px-5 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-bnavat-primary transition hover:border-bnavat-primary"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span>{copied ? "Copied!" : "Copy Brief Text"}</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setReceipt(null)}
                  className="font-mono text-xs uppercase tracking-wider text-bnavat-shadow underline underline-offset-4 hover:text-bnavat-primary"
                >
                  ← Edit Details
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
