"use client";

import { useState } from "react";
import { WORK_SHOWCASE } from "@/lib/constants";
import { Eye, Code2 } from "lucide-react";

function WorkSchematicPreview({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="border border-bnavat-border bg-bnavat-base p-5 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-bnavat-border pb-3 text-[10px] text-bnavat-shadow">
          <span>UI_SYSTEM_GRID // 12-COLUMN DETERMINISTIC</span>
          <span className="text-bnavat-primary">FCP: 0.62s</span>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-2">
          <div className="col-span-4 border border-bnavat-border bg-bnavat-surface p-3 space-y-2">
            <div className="h-2 w-16 bg-bnavat-primary" />
            <div className="h-1.5 w-24 bg-bnavat-shadow" />
            <div className="h-10 border border-bnavat-border bg-bnavat-base" />
          </div>
          <div className="col-span-8 border border-bnavat-border bg-bnavat-surface p-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-[10px] text-bnavat-primary">TOKEN_MATRIX.TS</span>
              <span className="text-[10px] text-emerald-400">VERIFIED</span>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="border border-bnavat-border bg-bnavat-base p-2 text-[10px] text-bnavat-muted">
                #121212
              </div>
              <div className="border border-bnavat-border bg-bnavat-base p-2 text-[10px] text-bnavat-primary">
                #F4F3EE
              </div>
              <div className="border border-bnavat-border bg-bnavat-base p-2 text-[10px] text-bnavat-shadow">
                #5F6872
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="border border-bnavat-border bg-bnavat-base p-5 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-bnavat-border pb-3 text-[10px] text-bnavat-shadow">
          <span>WEBGL_VIEWPORT // ADAPTIVE DPR CAP [1, 1.5]</span>
          <span className="text-bnavat-primary">60 FPS LOCKED</span>
        </div>
        <div className="mt-4 flex items-center justify-between border border-bnavat-border bg-bnavat-surface p-4">
          <div className="space-y-1.5">
            <p className="text-[11px] text-bnavat-primary">OCTAHEDRON WIREFRAME PIPELINE</p>
            <p className="text-[10px] text-bnavat-muted">Fallback: Static SVG Geometry Ready</p>
          </div>
          <div className="h-12 w-12 rotate-45 border border-bnavat-primary flex items-center justify-center">
            <div className="h-6 w-6 border border-bnavat-shadow" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-bnavat-border bg-bnavat-base p-5 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-bnavat-border pb-3 text-[10px] text-bnavat-shadow">
        <span>ZERO_TRUST_PORTAL // RLS + AUDIT LEDGER</span>
        <span className="text-bnavat-primary">ACID COMPLIANT</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="border border-bnavat-border bg-bnavat-surface p-3 text-bnavat-primary">
          AUTH GATEWAY
          <span className="block mt-1 text-[9px] text-bnavat-muted">JWT + MFA</span>
        </div>
        <div className="border border-bnavat-border bg-bnavat-surface p-3 text-bnavat-primary">
          SAGA ENGINE
          <span className="block mt-1 text-[9px] text-bnavat-muted">Idempotent</span>
        </div>
        <div className="border border-bnavat-border bg-bnavat-surface p-3 text-bnavat-primary">
          AUDIT LOG
          <span className="block mt-1 text-[9px] text-emerald-400">Immutable</span>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [viewMode, setViewMode] = useState<Record<string, "visual" | "spec">>({});

  const toggleMode = (id: string, mode: "visual" | "spec") => {
    setViewMode((prev) => ({ ...prev, [id]: mode }));
  };

  return (
    <section id="work" className="border-b border-bnavat-border bg-bnavat-base py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-wrap items-center justify-between gap-4 border-b border-bnavat-border pb-5">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 bg-bnavat-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-bnavat-primary">
              05 // SELECTED ARCHITECTURES & CAPABILITY BENCHMARKS
            </span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-bnavat-shadow">
            AUTHORIZED REFERENCE SYSTEMS
          </span>
        </div>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-heading text-4xl font-bold tracking-[-0.02em] text-bnavat-primary sm:text-5xl">
            Production Reference{" "}
            <span className="text-bnavat-shadow">Systems.</span>
          </h2>
          <p className="max-w-md text-xs leading-relaxed text-bnavat-muted">
            We strictly honor client non-disclosure agreements. Below are our verifiable
            architectural reference systems with interactive topology previews.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {WORK_SHOWCASE.map((item, idx) => {
            const currentMode = viewMode[item.id] || "visual";
            return (
              <article
                key={item.id}
                className="border border-bnavat-border bg-bnavat-surface transition hover:border-bnavat-shadow"
              >
                {/* Top Case Study Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-bnavat-border bg-bnavat-base/60 px-8 py-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-bnavat-primary">
                      {item.id}
                    </span>
                    <span className="text-bnavat-border">/</span>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-bnavat-shadow">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => toggleMode(item.id, "visual")}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider border ${
                        currentMode === "visual"
                          ? "border-bnavat-primary bg-bnavat-primary text-bnavat-base"
                          : "border-bnavat-border bg-bnavat-base text-bnavat-muted"
                      }`}
                    >
                      <Eye className="h-3 w-3" />
                      <span>Topology</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleMode(item.id, "spec")}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider border ${
                        currentMode === "spec"
                          ? "border-bnavat-primary bg-bnavat-primary text-bnavat-base"
                          : "border-bnavat-border bg-bnavat-base text-bnavat-muted"
                      }`}
                    >
                      <Code2 className="h-3 w-3" />
                      <span>Spec JSON</span>
                    </button>
                  </div>
                </div>

                {/* Main Case Study Body */}
                <div className="grid gap-8 p-8 lg:grid-cols-12">
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-bnavat-primary sm:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-mono text-xs text-bnavat-shadow">{item.scope}</p>
                    </div>

                    {currentMode === "visual" ? (
                      <WorkSchematicPreview index={idx} />
                    ) : (
                      <pre className="overflow-x-auto border border-bnavat-border bg-bnavat-base p-4 font-mono text-[11px] leading-relaxed text-bnavat-primary">
                        {JSON.stringify(
                          {
                            id: item.id,
                            status: item.status,
                            stack: item.stack,
                            verification: "DETERMINISTIC_BUILD",
                          },
                          null,
                          2
                        )}
                      </pre>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="border border-bnavat-border bg-bnavat-base px-3 py-1 font-mono text-[11px] text-bnavat-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:border-l lg:border-bnavat-border lg:pl-8">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="border border-bnavat-border bg-bnavat-base/60 p-5">
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-bnavat-shadow">
                          01 // ARCHITECTURAL CHALLENGE
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-bnavat-muted">
                          {item.challenge}
                        </p>
                      </div>

                      <div className="border border-bnavat-border bg-bnavat-base/60 p-5">
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-bnavat-primary">
                          02 // ENGINEERED OUTCOME
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-bnavat-primary">
                          {item.outcome}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 border-t border-bnavat-border pt-4 font-mono text-[11px] uppercase tracking-[0.14em]">
                      <span className="text-bnavat-muted">
                        PUBLICATION CLASSIFICATION: {item.status}
                      </span>
                      <span className="text-emerald-400">● BENCHMARK VERIFIED</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
