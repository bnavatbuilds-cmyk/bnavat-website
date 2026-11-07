"use client";

import { useState } from "react";
import { SERVICES, TECH_STACK } from "@/lib/constants";
import { Cpu, Layers, LayoutGrid, Check } from "lucide-react";

function CapabilityDiagram({ index }: { index: number }) {
  if (index === 0) {
    // Web Engineering: Client -> Edge Gateway -> Next.js App Server -> Edge Cache
    return (
      <div className="border border-bnavat-border bg-bnavat-base p-6 space-y-5">
        <div className="flex items-center justify-between border-b border-bnavat-border pb-3 font-mono text-[11px] uppercase tracking-[0.14em]">
          <span className="text-bnavat-primary">TOPOLOGY // EDGE REQUEST PIPELINE</span>
          <span className="text-emerald-400">LATENCY: &lt;18ms</span>
        </div>

        <svg viewBox="0 0 600 170" className="w-full h-auto" aria-label="Web Engineering Architecture Diagram">
          {/* Connecting Lines */}
          <line x1="120" y1="85" x2="210" y2="85" stroke="#5F6872" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="350" y1="85" x2="440" y2="50" stroke="#F4F3EE" strokeWidth="1.5" />
          <line x1="350" y1="85" x2="440" y2="125" stroke="#5F6872" strokeWidth="1.5" />

          {/* Client Node */}
          <rect x="15" y="55" width="105" height="60" fill="#1E1F22" stroke="#F4F3EE" strokeWidth="1.5" />
          <text x="67" y="82" textAnchor="middle" fill="#F4F3EE" className="font-mono text-[11px]">CLIENT</text>
          <text x="67" y="98" textAnchor="middle" fill="#9DA3AE" className="font-mono text-[9px]">Browser / WebGL</text>

          {/* Edge Gateway Node */}
          <rect x="210" y="45" width="140" height="80" fill="#1E1F22" stroke="#F4F3EE" strokeWidth="1.5" />
          <text x="280" y="75" textAnchor="middle" fill="#F4F3EE" className="font-mono text-[11px] font-bold">EDGE GATEWAY</text>
          <text x="280" y="92" textAnchor="middle" fill="#9DA3AE" className="font-mono text-[9px]">Rate Limit + SSL</text>
          <text x="280" y="108" textAnchor="middle" fill="#5F6872" className="font-mono text-[8px]">RSC STREAMING</text>

          {/* App Server Node */}
          <rect x="440" y="20" width="145" height="55" fill="#1E1F22" stroke="#F4F3EE" strokeWidth="1.5" />
          <text x="512" y="45" textAnchor="middle" fill="#F4F3EE" className="font-mono text-[10px]">NEXT.JS ENGINE</text>
          <text x="512" y="60" textAnchor="middle" fill="#9DA3AE" className="font-mono text-[8px]">TypeScript Strict</text>

          {/* Static / ISR Cache Node */}
          <rect x="440" y="95" width="145" height="55" fill="#1E1F22" stroke="#5F6872" strokeWidth="1.5" />
          <text x="512" y="120" textAnchor="middle" fill="#F4F3EE" className="font-mono text-[10px]">CACHE LAYER</text>
          <text x="512" y="135" textAnchor="middle" fill="#9DA3AE" className="font-mono text-[8px]">1ms Cache Hit</text>
        </svg>
      </div>
    );
  }

  if (index === 1) {
    // Digital Architecture: API Gateway -> Auth / RLS -> Primary DB + Async Queue Worker
    return (
      <div className="border border-bnavat-border bg-bnavat-base p-6 space-y-5">
        <div className="flex items-center justify-between border-b border-bnavat-border pb-3 font-mono text-[11px] uppercase tracking-[0.14em]">
          <span className="text-bnavat-primary">TOPOLOGY // SOVEREIGN DATA & QUEUE BUS</span>
          <span className="text-emerald-400">ISOLATION: ZERO-TRUST</span>
        </div>

        <svg viewBox="0 0 600 170" className="w-full h-auto" aria-label="Digital Architecture Diagram">
          <line x1="145" y1="85" x2="230" y2="85" stroke="#F4F3EE" strokeWidth="1.5" />
          <line x1="370" y1="65" x2="445" y2="45" stroke="#F4F3EE" strokeWidth="1.5" />
          <line x1="370" y1="105" x2="445" y2="125" stroke="#5F6872" strokeWidth="1.5" strokeDasharray="4 4" />

          <rect x="15" y="50" width="130" height="70" fill="#1E1F22" stroke="#F4F3EE" strokeWidth="1.5" />
          <text x="80" y="78" textAnchor="middle" fill="#F4F3EE" className="font-mono text-[10px]">API GATEWAY</text>
          <text x="80" y="95" textAnchor="middle" fill="#9DA3AE" className="font-mono text-[8px]">JWT + Idempotency</text>

          <rect x="230" y="45" width="140" height="80" fill="#1E1F22" stroke="#F4F3EE" strokeWidth="1.5" />
          <text x="300" y="75" textAnchor="middle" fill="#F4F3EE" className="font-mono text-[10px]">SERVICE ROUTER</text>
          <text x="300" y="92" textAnchor="middle" fill="#9DA3AE" className="font-mono text-[8px]">Circuit Breaker</text>
          <text x="300" y="108" textAnchor="middle" fill="#5F6872" className="font-mono text-[8px]">Schema Validation</text>

          <rect x="445" y="18" width="140" height="55" fill="#1E1F22" stroke="#F4F3EE" strokeWidth="1.5" />
          <text x="515" y="43" textAnchor="middle" fill="#F4F3EE" className="font-mono text-[10px]">POSTGRES / RLS</text>
          <text x="515" y="58" textAnchor="middle" fill="#9DA3AE" className="font-mono text-[8px]">Encrypted State</text>

          <rect x="445" y="97" width="140" height="55" fill="#1E1F22" stroke="#5F6872" strokeWidth="1.5" />
          <text x="515" y="122" textAnchor="middle" fill="#F4F3EE" className="font-mono text-[10px]">ASYNC WORKER</text>
          <text x="515" y="137" textAnchor="middle" fill="#9DA3AE" className="font-mono text-[8px]">Retries + Backoff</text>
        </svg>
      </div>
    );
  }

  // UI/UX Systems: Token Matrix -> Atomic Primitives -> WCAG AAA Interface Grid
  return (
    <div className="border border-bnavat-border bg-bnavat-base p-6 space-y-5">
      <div className="flex items-center justify-between border-b border-bnavat-border pb-3 font-mono text-[11px] uppercase tracking-[0.14em]">
        <span className="text-bnavat-primary">TOPOLOGY // DESIGN SYSTEM & TOKEN ENGINE</span>
        <span className="text-emerald-400">CONTRAST: AAA VERIFIED</span>
      </div>

      <svg viewBox="0 0 600 170" className="w-full h-auto" aria-label="UI UX Systems Diagram">
        <line x1="150" y1="85" x2="230" y2="85" stroke="#F4F3EE" strokeWidth="1.5" />
        <line x1="375" y1="85" x2="450" y2="85" stroke="#F4F3EE" strokeWidth="1.5" />

        <rect x="15" y="45" width="135" height="80" fill="#1E1F22" stroke="#F4F3EE" strokeWidth="1.5" />
        <text x="82" y="74" textAnchor="middle" fill="#F4F3EE" className="font-mono text-[10px]">DESIGN TOKENS</text>
        <text x="82" y="91" textAnchor="middle" fill="#9DA3AE" className="font-mono text-[8px]">#121212 / #F4F3EE</text>
        <text x="82" y="106" textAnchor="middle" fill="#5F6872" className="font-mono text-[8px]">4px Spatial Grid</text>

        <rect x="230" y="45" width="145" height="80" fill="#1E1F22" stroke="#F4F3EE" strokeWidth="1.5" />
        <text x="302" y="74" textAnchor="middle" fill="#F4F3EE" className="font-mono text-[10px]">UI PRIMITIVES</text>
        <text x="302" y="91" textAnchor="middle" fill="#9DA3AE" className="font-mono text-[8px]">Keyboard Focus</text>
        <text x="302" y="106" textAnchor="middle" fill="#5F6872" className="font-mono text-[8px]">Reduced-Motion Safe</text>

        <rect x="450" y="45" width="135" height="80" fill="#F4F3EE" stroke="#F4F3EE" strokeWidth="1.5" />
        <text x="517" y="76" textAnchor="middle" fill="#121212" className="font-mono text-[10px] font-bold">PRODUCTION UI</text>
        <text x="517" y="94" textAnchor="middle" fill="#1E1F22" className="font-mono text-[8px]">60FPS Interaction</text>
      </svg>
    </div>
  );
}

export default function Services() {
  const [selectedTab, setSelectedTab] = useState(0);
  const icons = [Cpu, Layers, LayoutGrid];

  return (
    <section
      id="capabilities"
      className="border-b border-bnavat-border bg-bnavat-surface/30 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Header */}
        <div className="mb-14 flex flex-wrap items-center justify-between gap-4 border-b border-bnavat-border pb-5">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 bg-bnavat-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-bnavat-primary">
              02 // CAPABILITIES & ARCHITECTURAL MATRIX
            </span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-bnavat-shadow">
            INTERACTIVE SYSTEM BLUEPRINTS
          </span>
        </div>

        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="font-heading text-4xl font-bold tracking-[-0.02em] text-bnavat-primary sm:text-5xl">
            Engineered Systems.{" "}
            <span className="text-bnavat-shadow">Deliberate Interfaces.</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-bnavat-muted">
            Select a capability track below to inspect our architectural topology, deliverables and
            production stack.
          </p>
        </div>

        {/* Interactive Capability Selector Workbench */}
        <div className="mt-14 grid border border-bnavat-border bg-bnavat-surface lg:grid-cols-12">
          {/* Left Selector Rail */}
          <div className="border-b border-bnavat-border lg:col-span-4 lg:border-b-0 lg:border-r">
            {SERVICES.map((service, idx) => {
              const Icon = icons[idx] || Cpu;
              const active = selectedTab === idx;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedTab(idx)}
                  className={`flex w-full flex-col justify-between border-b border-bnavat-border p-7 text-left transition last:border-b-0 ${
                    active
                      ? "bg-bnavat-base text-bnavat-primary"
                      : "bg-bnavat-surface/50 text-bnavat-muted hover:bg-bnavat-base/40 hover:text-bnavat-primary"
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-bnavat-shadow">
                      {service.id}
                    </span>
                    <Icon
                      className={`h-4 w-4 ${
                        active ? "text-bnavat-primary" : "text-bnavat-shadow"
                      }`}
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="font-heading text-2xl font-bold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-bnavat-shadow">
                      {service.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Active Blueprint Specification */}
          <div className="p-8 lg:col-span-8 lg:p-10 flex flex-col justify-between space-y-8 bg-bnavat-surface">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="border border-bnavat-border bg-bnavat-base px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-bnavat-primary">
                  ACTIVE TRACK // {SERVICES[selectedTab].id}
                </span>
                <span className="font-mono text-xs text-bnavat-shadow">
                  SOW DELIVERABLE SPECIFICATION
                </span>
              </div>

              <h3 className="font-heading text-3xl font-bold text-bnavat-primary">
                {SERVICES[selectedTab].title}
              </h3>

              <p className="text-base leading-relaxed text-bnavat-muted">
                {SERVICES[selectedTab].description}
              </p>
            </div>

            {/* Live TRACEN-inspired Visual Diagram */}
            <CapabilityDiagram index={selectedTab} />

            {/* Deliverables Checklist */}
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-bnavat-shadow">
                INCLUDED ARCHITECTURAL DELIVERABLES
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {SERVICES[selectedTab].deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border border-bnavat-border bg-bnavat-base p-3.5"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-bnavat-primary" />
                    <span className="font-mono text-xs text-bnavat-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technology Matrix Ribbon */}
        <div className="mt-10 border border-bnavat-border bg-bnavat-base p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="space-y-1">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-bnavat-primary">
                PRODUCTION TECHNOLOGY MATRIX
              </p>
              <p className="text-xs text-bnavat-muted">
                The final stack is selected per project; tools are defined in the signed Statement
                of Work.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="border border-bnavat-border bg-bnavat-surface px-3.5 py-2 font-mono text-xs text-bnavat-primary transition hover:border-bnavat-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
