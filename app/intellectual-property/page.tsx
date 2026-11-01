import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Intellectual Property Notice",
  description:
    "Copyright, brand assets, open-source attribution and project IP assignment notice for BNAVAT.",
  alternates: { canonical: "/intellectual-property" },
};

export default function IntellectualPropertyPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 pt-32 pb-24 lg:px-8">
      <div className="border-b border-bnavat-border pb-8">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-shadow">
          LEGAL & GOVERNANCE // COPYRIGHT & OWNERSHIP NOTICE
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-bnavat-primary">
          Intellectual Property Notice
        </h1>
        <p className="mt-2 font-mono text-xs text-bnavat-muted">
          © 2026 BNAVAT. All Rights Reserved.
        </p>
      </div>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-bnavat-muted">
        <section className="space-y-3 border border-bnavat-border bg-bnavat-surface p-6">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            1. Brand Identity & Website Assets
          </h2>
          <p>
            © 2026 BNAVAT. All rights reserved. Unless expressly stated otherwise, the BNAVAT name,
            geometric &lsquo;B&rsquo; monogram, wordmark, original website copy, visual design
            systems, design tokens, 3D geometries and proprietary materials displayed on this
            website are owned by or lawfully used by BNAVAT. No right to reproduce, distribute,
            modify or commercially exploit these materials is granted by mere access to this
            website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            2. Client Deliverables & Assignment Conditions
          </h2>
          <p>
            Project-specific deliverables are governed exclusively by the relevant signed Master
            Services Agreement (MSA) and Statement of Work (SOW). Where that agreement provides for
            assignment of copyright or other intellectual-property rights in custom Work Product,
            the assignment becomes effective only on the conditions and at the time specified in
            that agreement, including the realization of 100% Cleared Funds.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            3. Pre-Existing Tools & Open-Source Software
          </h2>
          <p>
            Pre-existing BNAVAT engineering tools, boilerplate utilities, reusable design matrices,
            third-party materials and open-source software (such as Next.js, React, Three.js and
            Tailwind CSS) remain subject to their applicable ownership and licence terms. We do not
            claim universal ownership over open-source dependencies integrated into client builds.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold text-bnavat-primary">
            4. Reporting Infringement or Enquiries
          </h2>
          <p>
            For permissions, licensing verification or intellectual-property enquiries, please
            contact{" "}
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
