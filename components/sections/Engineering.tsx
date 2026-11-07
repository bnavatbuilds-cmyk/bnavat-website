import { ENGINEERING_STANDARDS } from "@/lib/constants";

export default function Engineering() {
  return (
    <section
      id="engineering"
      className="relative z-10 border-b border-bnavat-border/70 bg-bnavat-base/75 backdrop-blur-[2px] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-bnavat-shadow">
            03 // ENGINEERING STANDARD
          </p>
          <h2 className="font-heading text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-bnavat-primary sm:text-5xl">
            A build is not finished when it looks finished.
          </h2>
          <p className="text-base leading-relaxed text-bnavat-muted">
            Visual polish without structural integrity creates technical debt. Every BNAVAT system
            is verified against six engineering standards before release.
          </p>
        </div>

        {/* Clean Architectural Hairline Matrix (Zero Box Repetition) */}
        <div className="mt-16 grid border-t border-l border-bnavat-border sm:grid-cols-2 lg:grid-cols-3">
          {ENGINEERING_STANDARDS.map((item, idx) => (
            <div
              key={item.title}
              className="group border-r border-b border-bnavat-border bg-bnavat-base/50 p-8 lg:p-10 transition duration-300 hover:bg-bnavat-surface/70"
            >
              <span className="font-mono text-xs text-bnavat-shadow group-hover:text-bnavat-primary transition-colors">
                0{idx + 1}
              </span>
              <h3 className="mt-6 font-heading text-2xl font-bold text-bnavat-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-bnavat-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
