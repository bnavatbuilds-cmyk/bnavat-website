"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight, Mail, CheckCircle2 } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("Web Engineering");
  const [budget, setBudget] = useState("INR 50,000 – 1,50,000");
  const [objective, setObjective] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    trackEvent("project_inquiry_initiated", { scope });

    const subject = encodeURIComponent(`[BNAVAT Build Inquiry] ${scope} — ${name}`);
    const body = encodeURIComponent(
      `Name / Organization: ${name}\nEmail: ${email}\nPrimary Capability: ${scope}\nEstimated Budget Tier: ${budget}\n\nProject Objective & System Requirements:\n${objective}`
    );

    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-bnavat-base py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left Column: Direct Conversion Pitch */}
          <div className="lg:col-span-5 space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
              06 // INITIATE BUILD
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-[-0.01em] text-bnavat-primary sm:text-5xl">
              Have a serious build in mind?
            </h2>
            <p className="text-base leading-relaxed text-bnavat-muted">
              Bring the objective. We will help define the system. Every project begins with a
              structured discovery review and a written Statement of Work.
            </p>

            <div className="space-y-4 border-t border-bnavat-border pt-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
                  DIRECT ELECTRONIC MAIL
                </p>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="mt-1 inline-flex items-center gap-2 font-mono text-sm text-bnavat-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  <span>{BRAND.email}</span>
                </a>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
                  SOCIAL CHANNELS
                </p>
                <div className="mt-2 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.12em]">
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

          {/* Right Column: Project Scope Terminal Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="border border-bnavat-border bg-bnavat-surface p-8 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-bnavat-border pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-primary">
                  PROJECT DISCOVERY DISPATCH
                </span>
                <span className="font-mono text-[11px] text-bnavat-shadow">STATUS: READY</span>
              </div>

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
                Submitting an enquiry does not create a formal engagement; project work begins only
                after written scope acceptance and signed commercial terms.
              </p>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 border border-bnavat-primary bg-bnavat-primary px-6 py-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-bnavat-base transition hover:bg-transparent hover:text-bnavat-primary"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              {submitted && (
                <div className="flex items-center gap-2 border border-bnavat-border bg-bnavat-base p-3 text-xs text-bnavat-primary">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>
                    Your email client has been opened with your structured brief addressed to{" "}
                    {BRAND.email}.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
