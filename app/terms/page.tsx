import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Website Terms and Conditions and commercial governance rules for BNAVAT.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 pt-32 pb-24 lg:px-8">
      <div className="border-b border-bnavat-border pb-8">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
          LEGAL & GOVERNANCE // WEBSITE & COMMERCIAL BASELINE
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-bnavat-primary">
          Terms & Conditions
        </h1>
        <p className="mt-2 font-mono text-xs text-bnavat-muted">
          Effective Date: 30 October 2026 • Version 1.0
        </p>
      </div>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-bnavat-muted">
        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            1. Website Purpose & Acceptance
          </h2>
          <p>
            By accessing this website, you agree to these Website Terms & Conditions. BNAVAT is
            currently an unincorporated venture. Where a client enters into a signed Master
            Services Agreement (MSA) and Statement of Work (SOW), the executed project agreement
            governs the commercial engagement and supersedes these general website terms in the
            event of any conflict.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            2. No Automatic Engagement
          </h2>
          <p>
            Information on this website is provided for general informational purposes and does not
            constitute legal or technical advice. Submitting an enquiry or project brief does not
            create a client relationship; work begins solely after written acceptance, signed
            contractual documentation and cleared initial milestone funds.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            3. Scope, Milestones & Change Control
          </h2>
          <p>
            Project deliverables, technical stack choices, timelines, exclusions and acceptance
            criteria are strictly defined in the applicable signed SOW. Any additional features or
            scope expansions require a written and mutually approved Change Order prior to
            execution.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            4. Intellectual Property & Handover Conditions
          </h2>
          <p>
            All BNAVAT brand marks, website copy, visual tokens and pre-existing frameworks remain
            the exclusive property of BNAVAT. For client engagements, transfer of
            Provider-controlled development credentials and commercial deployment rights to the
            project-specific Work Product is strictly conditioned on the realization of 100%
            Cleared Funds as specified in the executed agreement. Client-registered domain names
            and client-owned cloud accounts are never encumbered.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            5. Third-Party Infrastructure Exclusion
          </h2>
          <p>
            Digital systems frequently rely on third-party cloud providers and APIs (including
            Vercel, Supabase, AWS, Cloudflare, and payment gateways). Outages, downtime or changes
            originating from third-party platforms are governed by their respective terms and are
            excluded from BNAVAT&apos;s liability.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            6. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable Indian law, BNAVAT provides this website
            on an &ldquo;as-is&rdquo; basis without warranties of any kind. For commercial projects,
            aggregate liability is strictly governed and capped by the executed Master Services
            Agreement.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            7. Governing Law & Jurisdiction
          </h2>
          <p>
            These Terms are governed by the laws of the Republic of India (including the Indian
            Contract Act, 1872). Any disputes arising from website access or non-contractual
            enquiries shall be subject to the exclusive jurisdiction of the competent courts in
            Uttarakhand, India. Contact:{" "}
            <a href={`mailto:${BRAND.email}`} className="text-bnavat-primary underline">
              {BRAND.email}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
