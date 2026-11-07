"use client";

import { useState } from "react";
import { PROCESS_STEPS } from "@/lib/constants";
import { ArrowRight, Lock, FileCheck2 } from "lucide-react";

const GATE_ARTIFACTS = [
  "Requirements Brief & Objective Matrix",
  "System Architecture Blueprint & SOW",
  "Figma Token System & Responsive Wireframes",
  "Git Repository Commits & Staging URL",
  "Core Web Vitals, QA & Security Audit Log",
  "Production Deployment & Cleared-Funds IP Handover",
];

export default function Process() {
  const [activeGate, setActiveGate] = useState(0);

  return (
    <section
      id="protocol"
      className="border-b border-bnavat-border bg-bnavat-surface/30 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-wrap items-center justify-between gap-4 border-b border-bnavat-border pb-5">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 bg-bnavat-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-bnavat-primary">
              04 // EXECUTION PROTOCOL & GOVERNANCE
            </span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-bnavat-shadow">
            6-STAGE DETERMINISTIC SAGA
          </span>
        </div>

        <div className="max-w-3xl space-y-4">
          <h2 className="font-heading text-4xl font-bold tracking-[-0.02em] text-bnavat-primary sm:text-5xl">
            Clear scope. Controlled milestones.{" "}
            <span className="text-bnavat-shadow">No ambiguity.</span>
          </h2>
          <p className="text-base leading-relaxed text-bnavat-muted">
            Inspired by fault-tolerant distributed systems, our delivery pipeline runs through six
            sequential verification gates. No stage advances without written sign-off.
          </p>
        </div>

        {/* Connected Pipeline Stepper Track */}
        <div className="mt-14">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {PROCESS_STEPS.map((item, idx) => {
              const isCurrent = activeGate === idx;
              const isCompleted = idx <= activeGate;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveGate(idx)}
                  className={`relative flex flex-col justify-between border p-5 text-left transition ${
                    isCurrent
                      ? "border-bnavat-primary bg-bnavat-base"
                      : isCompleted
                      ? "border-bnavat-border bg-bnavat-surface/90 hover:border-bnavat-shadow"
                      : "border-bnavat-border/60 bg-bnavat-base/40 opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-bnavat-shadow">
                      GATE {item.step}
                    </span>
                    <span
                      className={`h-2 w-2 ${
                        isCurrent
                          ? "bg-bnavat-primary animate-ping"
                          : isCompleted
                          ? "bg-bnavat-primary"
                          : "bg-bnavat-border"
                      }`}
                    />
                  </div>
                  <div className="mt-6">
                    <p className="font-heading text-lg font-bold tracking-tight text-bnavat-primary">
                      {item.phase}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-bnavat-muted">
                      {isCurrent ? "ACTIVE INSPECTOR" : "CLICK TO INSPECT"}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Blueprint Console */}
          <div className="mt-6 border border-bnavat-primary bg-bnavat-base p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 border border-bnavat-border bg-bnavat-surface px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-bnavat-primary">
                  <span>STAGE {PROCESS_STEPS[activeGate].step}</span>
                  <ArrowRight className="h-3 w-3" />
                  <span>{PROCESS_STEPS[activeGate].phase} PROTOCOL</span>
                </div>
                <h3 className="font-heading text-3xl font-bold text-bnavat-primary">
                  {PROCESS_STEPS[activeGate].step} — {PROCESS_STEPS[activeGate].phase}
                </h3>
                <p className="text-base leading-relaxed text-bnavat-muted">
                  {PROCESS_STEPS[activeGate].description}
                </p>
              </div>

              <div className="lg:col-span-5 border border-bnavat-border bg-bnavat-surface p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-bnavat-border pb-3">
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
                    GATE OUTPUT ARTIFACT
                  </span>
                  <FileCheck2 className="h-4 w-4 text-bnavat-primary" />
                </div>
                <p className="font-mono text-sm text-bnavat-primary">
                  {GATE_ARTIFACTS[activeGate]}
                </p>
                <div className="flex items-center justify-between pt-2 font-mono text-[11px] text-bnavat-muted">
                  <span>STATE: DOCUMENTED APPROVAL</span>
                  <button
                    type="button"
                    onClick={() => setActiveGate((prev) => (prev + 1) % PROCESS_STEPS.length)}
                    className="text-bnavat-primary underline underline-offset-4 hover:text-bnavat-muted"
                  >
                    Next Gate →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Governance Assurance Block */}
        <div className="mt-12 grid gap-8 border border-bnavat-border bg-bnavat-surface p-8 lg:grid-cols-12">
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-bnavat-primary">
              <Lock className="h-4 w-4" />
              <span>CONTRACTUAL & IP HANDOVER CLARITY</span>
            </div>
            <p className="text-sm leading-relaxed text-bnavat-muted">
              Every engagement is governed by written scope, milestone controls and
              intellectual-property terms. Where the signed agreement provides for assignment of
              project-specific rights, that assignment takes effect strictly at the time and on the
              conditions stated in that agreement—conditioned on the realization of 100% Cleared
              Funds.
            </p>
          </div>

          <div className="lg:col-span-6 grid gap-3 sm:grid-cols-2 border-t border-bnavat-border pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            <div className="border border-bnavat-border bg-bnavat-base p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bnavat-primary">
                DOMAIN SOVEREIGNTY
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-bnavat-muted">
                Client-registered domain names and client-owned cloud accounts remain unencumbered.
              </p>
            </div>
            <div className="border border-bnavat-border bg-bnavat-base p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bnavat-primary">
                CHANGE CONTROL
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-bnavat-muted">
                No unapproved scope expansion. Every change is documented and priced prior to
                execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
