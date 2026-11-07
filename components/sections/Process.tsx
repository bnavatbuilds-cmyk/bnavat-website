"use client";

import { useState } from "react";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="protocol"
      className="relative z-10 border-b border-bnavat-border/70 bg-bnavat-base/80 backdrop-blur-[2px] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-bnavat-shadow">
            04 // EXECUTION PROTOCOL
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-[-0.02em] text-bnavat-primary sm:text-5xl">
            Clear scope. Controlled milestones.{" "}
            <span className="text-bnavat-shadow">No ambiguity.</span>
          </h2>
          <p className="text-base leading-relaxed text-bnavat-muted">
            Every engagement follows a structured six-stage delivery path—from initial discovery to
            final deployment and handover.
          </p>
        </div>

        {/* Clean Horizontal Timeline Track */}
        <div className="mt-16 border-t border-bnavat-border pt-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {PROCESS_STEPS.map((item, idx) => {
              const active = activeStep === idx;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="group text-left focus:outline-none"
                >
                  <div
                    className={`h-0.5 w-full transition-colors ${
                      active ? "bg-bnavat-primary" : "bg-bnavat-border group-hover:bg-bnavat-shadow"
                    }`}
                  />
                  <p className="mt-4 font-mono text-xs text-bnavat-shadow">{item.step}</p>
                  <h3
                    className={`mt-1 font-heading text-xl font-bold transition-colors ${
                      active
                        ? "text-bnavat-primary"
                        : "text-bnavat-muted group-hover:text-bnavat-primary"
                    }`}
                  >
                    {item.phase}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active Step Editorial Spotlight */}
          <div className="mt-12 grid gap-8 border-y border-bnavat-border py-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-bnavat-shadow">
                STAGE {PROCESS_STEPS[activeStep].step}
              </span>
              <h3 className="mt-2 font-heading text-3xl font-bold text-bnavat-primary sm:text-4xl">
                {PROCESS_STEPS[activeStep].phase}
              </h3>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-2xl text-lg leading-relaxed text-bnavat-primary">
                {PROCESS_STEPS[activeStep].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
