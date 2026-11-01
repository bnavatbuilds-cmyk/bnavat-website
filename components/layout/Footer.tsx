"use client";

import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { BnavatMonogram } from "./Navbar";

export default function Footer() {
  const openCookiePreferences = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("bnavat:open-cookie-settings"));
    }
  };

  return (
    <footer className="border-t border-bnavat-border bg-bnavat-base text-bnavat-muted">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <BnavatMonogram className="h-9 w-9" />
              <span className="font-display text-xl font-bold uppercase tracking-[0.16em] text-bnavat-primary">
                BNAVAT
              </span>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-primary">
              {BRAND.tagline}
            </p>
            <p className="max-w-md text-sm leading-relaxed text-bnavat-muted">
              Built with intent. Engineered for what comes next. High-performance websites,
              scalable web applications and disciplined interface systems.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${BRAND.email}`}
                className="font-mono text-xs tracking-[0.12em] text-bnavat-primary underline underline-offset-4 hover:text-bnavat-muted"
              >
                {BRAND.email}
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-primary">
              Architecture
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#manifesto" className="hover:text-bnavat-primary transition">
                  Manifesto & Ethos
                </Link>
              </li>
              <li>
                <Link href="/#capabilities" className="hover:text-bnavat-primary transition">
                  Capabilities Matrix
                </Link>
              </li>
              <li>
                <Link href="/#engineering" className="hover:text-bnavat-primary transition">
                  Engineering Standard
                </Link>
              </li>
              <li>
                <Link href="/#protocol" className="hover:text-bnavat-primary transition">
                  Execution Protocol
                </Link>
              </li>
              <li>
                <Link href="/#work" className="hover:text-bnavat-primary transition">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-bnavat-primary transition">
                  Initiate Build
                </Link>
              </li>
            </ul>
          </div>

          {/* Channels & Governance Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-primary">
                Verified Channels
              </p>
              <div className="flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.12em]">
                <a
                  href={BRAND.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-bnavat-border px-3 py-1.5 hover:border-bnavat-primary hover:text-bnavat-primary transition"
                >
                  Instagram
                </a>
                <a
                  href={BRAND.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-bnavat-border px-3 py-1.5 hover:border-bnavat-primary hover:text-bnavat-primary transition"
                >
                  X / Twitter
                </a>
                <a
                  href={BRAND.socials.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-bnavat-border px-3 py-1.5 hover:border-bnavat-primary hover:text-bnavat-primary transition"
                >
                  Threads
                </a>
                <a
                  href={BRAND.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-bnavat-border px-3 py-1.5 hover:border-bnavat-primary hover:text-bnavat-primary transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="space-y-2 border-t border-bnavat-border pt-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bnavat-primary">
                Legal & Governance
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
                <Link href="/privacy-policy" className="hover:text-bnavat-primary transition">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-bnavat-primary transition">
                  Terms & Conditions
                </Link>
                <Link
                  href="/intellectual-property"
                  className="hover:text-bnavat-primary transition"
                >
                  Intellectual Property
                </Link>
                <Link href="/cookie-policy" className="hover:text-bnavat-primary transition">
                  Cookie Policy
                </Link>
                <button
                  type="button"
                  onClick={openCookiePreferences}
                  className="text-left hover:text-bnavat-primary transition underline underline-offset-4"
                >
                  Cookie Preferences
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Entity Legal Disclosure Box */}
        <div className="mt-12 border border-bnavat-border bg-bnavat-surface/60 p-4 text-xs leading-relaxed text-bnavat-muted">
          <span className="font-mono uppercase tracking-[0.12em] text-bnavat-primary mr-2">
            Entity Disclosure:
          </span>
          {BRAND.entityNotice}
        </div>

        {/* Bottom Bar + Developer Signature ("BUILT BY BNAVAT") */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-bnavat-border pt-8 sm:flex-row">
          <p className="text-xs text-bnavat-muted">
            © {BRAND.established} {BRAND.name}. All rights reserved.
          </p>

          <div className="flex flex-col items-center sm:items-end">
            <span className="font-display text-sm font-bold uppercase tracking-[0.16em] text-bnavat-primary">
              BNAVAT
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bnavat-shadow">
              — BUILT BY —
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
