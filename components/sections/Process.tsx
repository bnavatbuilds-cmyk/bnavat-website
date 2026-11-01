import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section
      id="protocol"
      className="border-b border-bnavat-border bg-bnavat-surface/40 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
            04 // EXECUTION PROTOCOL & GOVERNANCE
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-[-0.01em] text-bnavat-primary sm:text-4xl">
            Clear scope. Controlled milestones. No ambiguity.
          </h2>
          <p className="text-base leading-relaxed text-bnavat-muted">
            Professional delivery depends on clear responsibilities. We operate through written
            project scopes, documented approvals, controlled access and defined handover gates.
          </p>
        </div>

        {/* 6-Step Execution Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              className="border border-bnavat-border bg-bnavat-base p-7 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
                  {item.step} — {item.phase}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold text-bnavat-primary">
                  {item.phase}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bnavat-muted">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 border-t border-bnavat-border pt-3 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-bnavat-shadow">
                  GATE VERIFIED
                </span>
                <span className="h-1.5 w-1.5 bg-bnavat-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* Legal & Governance Assurance Block */}
        <div className="mt-12 grid gap-6 border border-bnavat-border bg-bnavat-surface p-8 lg:grid-cols-2">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-primary">
              CONTRACTUAL & IP CLARITY
            </p>
            <p className="text-sm leading-relaxed text-bnavat-muted">
              Every engagement is governed by written scope, payment and intellectual-property
              terms. Where the signed agreement provides for assignment of project-specific rights,
              that assignment takes effect at the time and on the conditions expressly stated in
              that agreement (including cleared-payment conditions).
            </p>
          </div>

          <div className="space-y-2 text-xs leading-relaxed text-bnavat-muted border-t border-bnavat-border pt-4 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            <p className="font-mono uppercase tracking-[0.12em] text-bnavat-primary">
              OPERATIONAL SAFEGUARDS
            </p>
            <p>• No unapproved scope expansion: changes are documented and priced before build.</p>
            <p>• Client-owned domains and cloud accounts remain registered to the client.</p>
            <p>• No credential sharing through public channels or unsecured repositories.</p>
            <p>• Third-party platforms and APIs remain subject to their respective service terms.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

