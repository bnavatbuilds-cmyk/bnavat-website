import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy and Digital Personal Data Protection Act (DPDP Act, 2023) notice for BNAVAT.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 pt-32 pb-24 lg:px-8">
      <div className="border-b border-bnavat-border pb-8">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
          LEGAL & COMPLIANCE // DPDP ACT 2023 & GLOBAL STANDARDS
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-bnavat-primary">
          Privacy Policy
        </h1>
        <p className="mt-2 font-mono text-xs text-bnavat-muted">
          Effective Date: 30 October 2026 • Version 1.0
        </p>
      </div>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-bnavat-muted">
        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            1. Who Operates This Website
          </h2>
          <p>
            This website is operated by <strong>BNAVAT</strong>, currently an unincorporated
            technology venture founded by NAMAH and OM in India. For all privacy, data protection
            and grievance enquiries, the responsible contact channel is{" "}
            <a href={`mailto:${BRAND.email}`} className="text-bnavat-primary underline">
              {BRAND.email}
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            2. Personal Data Collected
          </h2>
          <p>
            We collect only the minimum personal data necessary to operate this website and respond
            to business enquiries:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact details (name, official email address, organization name).</li>
            <li>Enquiry content, project scope requirements, allocation ranges and timelines.</li>
            <li>
              Basic technical device/log data (IP address, browser type, timestamps) required for
              security and fraud prevention.
            </li>
            <li>Optional analytics identifiers, strictly subject to your prior cookie consent.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            3. Purposes and Lawful Basis
          </h2>
          <p>
            In accordance with the Digital Personal Data Protection Act, 2023 (India) and, where
            applicable, GDPR principles, we process personal data solely for: (a) responding to
            your project enquiries and preparing Statements of Work; (b) executing signed client
            contracts; (c) maintaining website security and preventing abuse; and (d) complying
            with applicable Indian statutory and taxation obligations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            4. Data Sharing and Subprocessors
          </h2>
          <p>
            We do not sell personal data. Data may be processed through trusted infrastructure
            vendors strictly to host and operate our services (such as Vercel for cloud deployment,
            Google Workspace for official email communication, and database/storage providers
            specified in project agreements). Each vendor operates under its respective security
            and data protection terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            5. Retention and Deletion
          </h2>
          <p>
            Enquiry records that do not result in a commercial engagement are reviewed and deleted
            or anonymized within twelve (12) months, unless retention is required for legal defence
            or statutory compliance. Project records governed by an executed agreement are retained
            in accordance with the applicable contract and Indian taxation laws.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            6. Security Safeguards
          </h2>
          <p>
            We enforce encrypted transport (HTTPS/TLS), strict access controls, least-privilege
            credential management, and environment isolation to protect personal data against
            unauthorized access, alteration or disclosure.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            7. Cross-Border Processing
          </h2>
          <p>
            Our cloud hosting and communication infrastructure may process data on servers located
            inside or outside India, subject to standard contractual and technical safeguards
            permitted under Indian law.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            8. Your Rights & Grievance Redressal
          </h2>
          <p>
            You may request access to, correction of, or erasure of your personal data, or withdraw
            your consent at any time by writing to{" "}
            <a href={`mailto:${BRAND.email}`} className="text-bnavat-primary underline">
              {BRAND.email}
            </a>{" "}
            with the subject line <code>[Privacy Grievance / Data Request]</code>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            9. Children&apos;s Privacy
          </h2>
          <p>
            Our B2B engineering services and website are intended for business professionals and
            are not directed at children. We do not knowingly collect personal data from children
            without verifiable parental consent where required by applicable law.
          </p>
        </section>
      </div>
    </article>
  );
}
