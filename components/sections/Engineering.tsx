"use client";

import { useState } from "react";
import { ENGINEERING_STANDARDS } from "@/lib/constants";
import { ShieldCheck, Activity, Terminal } from "lucide-react";

const TELEMETRY_METRICS = [
  { label: "FIRST CONTENTFUL PAINT", value: "< 0.8s", bar: "w-[94%]", code: "PERF-01" },
  { label: "MONOCHROME CONTRAST RATIO", value: "15.4 : 1 (AAA)", bar: "w-[98%]", code: "A11Y-02" },
  { label: "EDGE RATE-LIMIT SHIELD", value: "TOKEN BUCKET ACTIVE", bar: "w-[100%]", code: "SEC-03" },
  { label: "TYPESCRIPT STRICTNESS", value: "ZERO IMPLICIT ANY", bar: "w-[100%]", code: "CODE-04" },
];

export default function Engineering() {
  const [selectedStandard, setSelectedStandard] = useState(0);

  return (
    <section
      id="engineering"
      className="border-b border-bnavat-border bg-bnavat-base py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-wrap items-center justify-between gap-4 border-b border-bnavat-border pb-5">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 bg-bnavat-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-bnavat-primary">
              03 // ENGINEERING STANDARD & TELEMETRY
            </span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-bnavat-shadow">
            CI/CD VERIFICATION PIPELINE
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Live System Diagnostic Console */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-bnavat-primary sm:text-5xl">
                A build is not finished when it looks finished.
              </h2>
              <p className="text-base leading-relaxed text-bnavat-muted">
                Visual polish without structural integrity creates technical debt. Every BNAVAT
                system passes through automated build verification, strict performance budgets and
                security hardening before release.
              </p>
            </div>

            {/* TRACEN-Style CI/CD Pipeline Terminal Window */}
            <div className="border border-bnavat-border bg-bnavat-surface">
              <div className="flex items-center justify-between border-b border-bnavat-border bg-bnavat-base px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-bnavat-primary" />
                  <span className="h-2.5 w-2.5 rounded-full bg-bnavat-shadow" />
                  <span className="h-2.5 w-2.5 rounded-full bg-bnavat-border" />
                  <span className="ml-2 font-mono text-[11px] text-bnavat-muted">
                    bnavat-ci-pipeline.yml
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                  ● ALL GATES PASSED
                </span>
              </div>

              <div className="p-6 space-y-5">
                {/* Pipeline Stage Nodes */}
                <div className="grid grid-cols-3 gap-2 text-center font-mono text-[10px]">
                  <div className="border border-bnavat-primary/60 bg-bnavat-base p-2.5 text-bnavat-primary">
                    1. TYPECHECK
                    <span className="block mt-1 text-[9px] text-emerald-400">PASSED (0.4s)</span>
                  </div>
                  <div className="border border-bnavat-primary/60 bg-bnavat-base p-2.5 text-bnavat-primary">
                    2. AUDIT & BUILD
                    <span className="block mt-1 text-[9px] text-emerald-400">PASSED (1.9s)</span>
                  </div>
                  <div className="border border-bnavat-primary bg-bnavat-primary p-2.5 text-bnavat-base font-bold">
                    3. PRODUCTION
                    <span className="block mt-1 text-[9px] text-bnavat-base">VERIFIED EDGE</span>
                  </div>
                </div>

                {/* Telemetry Bars */}
                <div className="space-y-3 pt-2">
                  {TELEMETRY_METRICS.map((metric) => (
                    <div key={metric.code} className="space-y-1.5">
                      <div className="flex items-center justify-between font-mono text-[11px]">
                        <span className="text-bnavat-muted">{metric.label}</span>
                        <span className="text-bnavat-primary">{metric.value}</span>
                      </div>
                      <div className="h-1.5 w-full bg-bnavat-base overflow-hidden">
                        <div className={`h-full bg-bnavat-primary ${metric.bar}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 6-Gate Architectural Benchmark Matrix */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid gap-4 sm:grid-cols-2">
              {ENGINEERING_STANDARDS.map((item, idx) => {
                const isSelected = selectedStandard === idx;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setSelectedStandard(idx)}
                    className={`group flex flex-col justify-between border p-6 text-left transition ${
                      isSelected
                        ? "border-bnavat-primary bg-bnavat-surface"
                        : "border-bnavat-border bg-bnavat-surface/40 hover:border-bnavat-shadow"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-bnavat-shadow">
                        BENCHMARK // 0{idx + 1}
                      </span>
                      <ShieldCheck
                        className={`h-4 w-4 ${
                          isSelected ? "text-bnavat-primary" : "text-bnavat-shadow"
                        }`}
                      />
                    </div>

                    <div className="mt-6">
                      <h3 className="font-heading text-xl font-bold text-bnavat-primary">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-bnavat-muted">
                        {item.detail}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-bnavat-border pt-3 font-mono text-[10px] uppercase tracking-[0.14em]">
                      <span className="text-bnavat-shadow">RELEASE GATE</span>
                      <span className="text-bnavat-primary">MANDATORY</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Standard Inspector Footer */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border border-bnavat-border bg-bnavat-surface px-6 py-4">
              <div className="flex items-center gap-3">
                <Activity className="h-4 w-4 text-bnavat-primary" />
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-primary">
                  INSPECTING GATE 0{selectedStandard + 1}:{" "}
                  {ENGINEERING_STANDARDS[selectedStandard].title}
                </span>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] text-bnavat-muted">
                <Terminal className="h-3.5 w-3.5" />
                ENFORCED PRE-DEPLOYMENT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
