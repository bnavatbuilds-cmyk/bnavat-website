import { SERVICES, TECH_STACK } from "@/lib/constants";

export default function Services() {
  return (
    <section
      id="capabilities"
      className="border-b border-bnavat-border bg-bnavat-surface/40 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
              02 // CAPABILITIES & SERVICE MATRIX
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-[-0.01em] text-bnavat-primary sm:text-4xl">
              Engineered Systems. Deliberate Interfaces.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-bnavat-muted">
            Every engagement is scoped around measurable technical outcomes, clean maintainability
            and long-term operational resilience.
          </p>
        </div>

        {/* 3 Core Service Pillars */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="flex flex-col justify-between border border-bnavat-border bg-bnavat-surface p-8 transition hover:border-bnavat-primary"
            >
              <div>
                <div className="flex items-center justify-between border-b border-bnavat-border pb-4">
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
                    {service.id}
                  </span>
                  <span className="h-2 w-2 bg-bnavat-primary" />
                </div>

                <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight text-bnavat-primary">
                  {service.title}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
                  {service.subtitle}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-bnavat-muted">
                  {service.description}
                </p>
              </div>

              <ul className="mt-8 space-y-2.5 border-t border-bnavat-border pt-6">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 font-mono text-xs text-bnavat-primary"
                  >
                    <span className="text-bnavat-shadow">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Technology Matrix Bar */}
        <div className="mt-12 border border-bnavat-border bg-bnavat-base p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="space-y-1">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-primary">
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
                  className="border border-bnavat-border bg-bnavat-surface px-3 py-1.5 font-mono text-xs text-bnavat-primary"
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
