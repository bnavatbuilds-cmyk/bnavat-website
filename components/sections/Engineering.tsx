import { ENGINEERING_STANDARDS } from "@/lib/constants";

export default function Engineering() {
  return (
    <section
      id="engineering"
      className="border-b border-bnavat-border bg-bnavat-base py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
            03 // ENGINEERING STANDARD
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-[-0.01em] text-bnavat-primary sm:text-4xl">
            A build is not finished when it looks finished.
          </h2>
          <p className="text-base leading-relaxed text-bnavat-muted">
            Visual polish without structural integrity creates technical debt. Every BNAVAT system
            is verified against six mandatory engineering benchmarks prior to release.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ENGINEERING_STANDARDS.map((item, idx) => (
            <div
              key={item.title}
              className="border border-bnavat-border bg-bnavat-surface p-7 transition hover:border-bnavat-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
                  STD-0{idx + 1}
                </span>
                <span className="font-mono text-[11px] uppercase text-bnavat-primary">
                  MANDATORY
                </span>
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-bnavat-primary">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-bnavat-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
