import { WORK_SHOWCASE } from "@/lib/constants";

export default function Work() {
  return (
    <section id="work" className="border-b border-bnavat-border bg-bnavat-base py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
              05 // SELECTED ARCHITECTURES & CAPABILITY BENCHMARKS
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-[-0.01em] text-bnavat-primary sm:text-4xl">
              Production Reference Systems.
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-bnavat-muted">
            We respect client confidentiality obligations. Below are our internal capability
            benchmarks and architectural reference blueprints.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {WORK_SHOWCASE.map((item) => (
            <div
              key={item.id}
              className="grid gap-8 border border-bnavat-border bg-bnavat-surface p-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-5 flex flex-col justify-between border-b border-bnavat-border pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
                      {item.id} // {item.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-bnavat-primary">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-bnavat-primary">{item.scope}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-bnavat-border bg-bnavat-base px-2.5 py-1 font-mono text-[11px] text-bnavat-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bnavat-shadow">
                      ARCHITECTURAL CHALLENGE
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-bnavat-muted">
                      {item.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bnavat-shadow">
                      ENGINEERED OUTCOME
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-bnavat-primary">
                      {item.outcome}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-bnavat-border pt-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-bnavat-muted">
                    PUBLICATION STATUS: {item.status}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-primary">
                    VERIFIED SPEC
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
