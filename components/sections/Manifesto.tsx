"use client";

import { useState } from "react";
import { PRINCIPLES, GEO_STATEMENTS } from "@/lib/constants";
import { Plus, Minus, Terminal } from "lucide-react";

const ARCHITECTURAL_SPECS = [
  "RATIO: 1:1.618 GEOMETRIC LOCK",
  "PAYLOAD BUDGET: < 85KB GZIP JS",
  "CONTRAST STANDARD: WCAG AAA (15.4:1)",
  "CONTRACTUAL IP: WRITTEN DEED ONLY",
];

export default function Manifesto() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      id="manifesto"
      className="relative border-b border-bnavat-border bg-bnavat-base py-28 lg:py-36 overflow-hidden"
    >
      {/* Subtle vertical architectural ruler lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-bnavat-border/60 lg:block"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Section Index Bar */}
        <div className="mb-16 flex flex-wrap items-center justify-between gap-4 border-b border-bnavat-border pb-5">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 bg-bnavat-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-bnavat-primary">
              01 // MANIFESTO & ARCHITECTURAL DOCTRINE
            </span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-bnavat-shadow">
            SPECIFICATION: BNV-DOC-001
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Editorial Statement & Founder Standard */}
          <div className="lg:col-span-6 lg:pr-8 flex flex-col justify-between space-y-10">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-bnavat-primary sm:text-5xl">
                Less noise.
                <br />
                <span className="text-bnavat-shadow">More architecture.</span>
              </h2>

              <p className="text-base leading-relaxed text-bnavat-muted">
                A digital product is only as strong as the system beneath it. We approach every
                build as an engineered asset: clear structure, deliberate interfaces, maintainable
                code and performance measured in the real world.
              </p>

              <p className="text-base leading-relaxed text-bnavat-muted">
                We do not add complexity to make a project look advanced. We remove what does not
                serve the product, strengthen what does, and document the decisions that keep the
                system reliable.
              </p>
            </div>

            {/* Founder Architectural Stamp */}
            <div className="relative border border-bnavat-border bg-bnavat-surface/80 p-7">
              <div className="absolute -top-3 left-6 bg-bnavat-base px-2 font-mono text-[10px] uppercase tracking-[0.18em] text-bnavat-primary border border-bnavat-border">
                FOUNDER DIRECTIVE // NAMAH & OM
              </div>
              <p className="font-heading text-lg font-medium leading-relaxed text-bnavat-primary">
                &ldquo;Founded by NAMAH and OM, BNAVAT is built around a simple standard: design
                with intent, engineer with discipline, and execute with accountability.&rdquo;
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-bnavat-border pt-4 font-mono text-[11px] text-bnavat-shadow">
                <span>DOCTRINE: ZERO DECORATIVE BLOAT</span>
                <span className="text-bnavat-primary">EST. 2026 // INDIA</span>
              </div>
            </div>

            {/* Semantic Entity Verification Block */}
            <div className="border-t border-bnavat-border pt-6 space-y-2.5">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bnavat-shadow">
                <Terminal className="h-3.5 w-3.5 text-bnavat-primary" />
                <span>ENTITY INDEXING FACTS</span>
              </div>
              {GEO_STATEMENTS.map((statement, idx) => (
                <p key={idx} className="font-mono text-xs leading-relaxed text-bnavat-muted">
                  [{idx + 1}] {statement}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Architectural Blueprint Ledger (Replaces generic 2x2 boxes) */}
          <div className="lg:col-span-6 lg:pl-6 flex flex-col justify-between">
            <div className="divide-y divide-bnavat-border border-y border-bnavat-border">
              {PRINCIPLES.map((item, idx) => {
                const isOpen = activeIndex === idx;
                return (
                  <div key={item.code} className="transition-colors">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className="flex w-full items-center justify-between py-7 text-left group focus:outline-none"
                    >
                      <div className="flex items-baseline gap-5">
                        <span
                          className={`font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                            isOpen ? "text-bnavat-primary" : "text-bnavat-shadow"
                          }`}
                        >
                          /{item.code}
                        </span>
                        <h3
                          className={`font-heading text-2xl font-bold tracking-tight transition-colors sm:text-3xl ${
                            isOpen
                              ? "text-bnavat-primary"
                              : "text-bnavat-muted group-hover:text-bnavat-primary"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <span className="ml-4 flex h-8 w-8 items-center justify-center border border-bnavat-border bg-bnavat-surface text-bnavat-primary">
                        {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-8 pl-10 pr-4 space-y-4">
                        <p className="text-base leading-relaxed text-bnavat-muted">
                          {item.description}
                        </p>
                        <div className="inline-flex items-center gap-3 border border-bnavat-border bg-bnavat-surface px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-bnavat-primary">
                          <span className="h-1.5 w-1.5 bg-bnavat-primary" />
                          <span>{ARCHITECTURAL_SPECS[idx]}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Architectural Proportion Visualizer */}
            <div className="mt-10 border border-bnavat-border bg-bnavat-surface/50 p-6">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-bnavat-shadow">
                <span>STRUCTURAL RATIO TELEMETRY</span>
                <span className="text-bnavat-primary">100% DETERMINISTIC</span>
              </div>
              <div className="mt-4 grid grid-cols-12 gap-1.5 h-10">
                <div className="col-span-7 bg-bnavat-primary/90 flex items-center px-3 font-mono text-[10px] font-semibold text-bnavat-base">
                  ARCHITECTURE (61.8%)
                </div>
                <div className="col-span-3 bg-bnavat-shadow/80 flex items-center px-2 font-mono text-[10px] text-bnavat-primary">
                  SYSTEMS (23.6%)
                </div>
                <div className="col-span-2 border border-bnavat-border bg-bnavat-base flex items-center justify-center font-mono text-[10px] text-bnavat-muted">
                  UI (14.6%)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
