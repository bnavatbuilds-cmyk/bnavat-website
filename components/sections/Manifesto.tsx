"use client";

import { PRINCIPLES } from "@/lib/constants";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative z-10 border-b border-bnavat-border/70 bg-bnavat-base/75 backdrop-blur-[2px] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left Sticky Editorial Column */}
          <div className="lg:col-span-5 space-y-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-bnavat-shadow">
              01 // MANIFESTO
            </p>

            <h2 className="font-heading text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-bnavat-primary sm:text-5xl">
              Less noise.
              <br />
              <span className="text-bnavat-shadow">More architecture.</span>
            </h2>

            <p className="text-base leading-relaxed text-bnavat-muted">
              A digital product is only as strong as the system beneath it. We approach every build
              as an engineered asset: clear structure, deliberate interfaces, maintainable code and
              performance measured in the real world.
            </p>

            <p className="text-base leading-relaxed text-bnavat-muted">
              We do not add complexity to make a project look advanced. We remove what does not
              serve the product, strengthen what does, and document the decisions that keep the
              system reliable.
            </p>

            <div className="border-l-2 border-bnavat-primary pl-6 py-1">
              <p className="font-heading text-base font-medium leading-relaxed text-bnavat-primary">
                &ldquo;Founded by NAMAH and OM, BNAVAT is built around a simple standard: design
                with intent, engineer with discipline, and execute with accountability.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Architectural Pillars (Open Hairline Layout, Not Boxes) */}
          <div className="lg:col-span-7 lg:pl-10">
            <div className="divide-y divide-bnavat-border border-y border-bnavat-border">
              {PRINCIPLES.map((item) => (
                <div
                  key={item.code}
                  className="group py-9 transition-all duration-300 hover:pl-3"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="flex items-baseline gap-5">
                      <span className="font-mono text-xs text-bnavat-shadow group-hover:text-bnavat-primary transition-colors">
                        {item.code}
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-bnavat-primary sm:text-3xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 max-w-xl sm:pl-9 text-sm leading-relaxed text-bnavat-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
