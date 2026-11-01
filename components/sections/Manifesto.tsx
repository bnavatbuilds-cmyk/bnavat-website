import { PRINCIPLES, GEO_STATEMENTS } from "@/lib/constants";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="border-b border-bnavat-border bg-bnavat-base py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left Column: Core Manifesto Copy */}
          <div className="lg:col-span-6 space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
              01 // MANIFESTO & ETHOS
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-[-0.01em] text-bnavat-primary sm:text-4xl">
              Less noise. More architecture.
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

            {/* Founder Statement Box */}
            <div className="border-l-2 border-bnavat-primary bg-bnavat-surface p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bnavat-shadow">
                FOUNDER STANDARD
              </p>
              <p className="mt-2 font-heading text-base font-medium leading-relaxed text-bnavat-primary">
                &ldquo;Founded by NAMAH and OM, BNAVAT is built around a simple standard: design
                with intent, engineer with discipline, and execute with accountability.&rdquo;
              </p>
            </div>

            {/* Semantic Entity Clarity (GEO / AEO Visible Facts) */}
            <div className="space-y-2 pt-2">
              {GEO_STATEMENTS.map((statement, idx) => (
                <p key={idx} className="text-xs leading-relaxed text-bnavat-muted">
                  • {statement}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Core Principles Grid */}
          <div className="lg:col-span-6 grid gap-6 sm:grid-cols-2">
            {PRINCIPLES.map((item) => (
              <div
                key={item.code}
                className="flex flex-col justify-between border border-bnavat-border bg-bnavat-surface p-6 transition hover:border-bnavat-primary/60"
              >
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
                  PRINCIPLE // {item.code}
                </span>
                <div className="mt-8 space-y-2.5">
                  <h3 className="font-heading text-xl font-semibold text-bnavat-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-bnavat-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
