import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Information on essential and optional cookies and local storage used by BNAVAT.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 pt-32 pb-24 lg:px-8">
      <div className="border-b border-bnavat-border pb-8">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
          LEGAL & PRIVACY // STORAGE & TELEMETRY DISCLOSURE
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-bnavat-primary">
          Cookie Policy
        </h1>
        <p className="mt-2 font-mono text-xs text-bnavat-muted">
          Effective Date: 30 October 2026 • Version 1.0
        </p>
      </div>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-bnavat-muted">
        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            1. How We Use Cookies and Local Storage
          </h2>
          <p>
            BNAVAT follows a strict minimalism standard in both engineering and telemetry. We use
            browser local storage (`bnavat_cookie_consent_v1`) to remember your privacy choices so
            you are not repeatedly prompted on every visit.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            2. Essential vs. Optional Technologies
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-bnavat-primary">Essential Technologies:</strong> Strictly
              necessary for core page delivery, security and recording your consent state. These
              do not track you across third-party sites.
            </li>
            <li>
              <strong className="text-bnavat-primary">Optional Analytics:</strong> Used only if you
              explicitly click &ldquo;Accept optional cookies&rdquo; or enable Analytics in Cookie
              Settings. Optional telemetry helps us measure aggregate page performance and load
              times.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            3. Managing or Withdrawing Consent
          </h2>
          <p>
            You can modify or withdraw your consent at any time using the &ldquo;Cookie
            Preferences&rdquo; button in the website footer, or by clearing your browser&apos;s
            site storage. Questions may be directed to{" "}
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
