"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import HeroScene from "@/components/three/HeroScene";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-reveal]",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-bnavat-border pt-20"
    >
      {/* Subtle Architectural Grid Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#2B2E33_1px,transparent_1px),linear-gradient(to_bottom,#2B2E33_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-20"
      />

      {/* Interactive 3D WebGL Monolith */}
      <HeroScene />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-4xl space-y-8">
          {/* Technical Microcopy Tag */}
          <div
            data-hero-reveal
            className="inline-flex items-center gap-3 border border-bnavat-border bg-bnavat-surface/80 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="h-2 w-2 bg-bnavat-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-bnavat-primary">
              Digital architecture. Web engineering. Interface systems.
            </span>
          </div>

          {/* Main H1 Headline */}
          <h1
            data-hero-reveal
            className="font-heading text-5xl font-bold leading-[1.08] tracking-[-0.02em] text-bnavat-primary sm:text-6xl lg:text-[72px]"
          >
            We engineer what the internet runs on.
          </h1>

          {/* Sub-headline */}
          <p
            data-hero-reveal
            className="max-w-2xl text-base leading-relaxed text-bnavat-muted sm:text-lg"
          >
            High-performance websites, scalable web applications and digital systems—engineered
            with precision, designed with intent, and built to move businesses forward.
          </p>

          {/* Primary & Secondary CTAs */}
          <div data-hero-reveal className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-bnavat-primary bg-bnavat-primary px-7 py-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-bnavat-base transition hover:bg-transparent hover:text-bnavat-primary"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="#capabilities"
              className="inline-flex items-center gap-2 border border-bnavat-border bg-bnavat-surface/80 px-7 py-4 font-mono text-xs uppercase tracking-[0.12em] text-bnavat-primary transition hover:border-bnavat-primary"
            >
              <span>Explore Our Capabilities</span>
              <ChevronDown className="h-4 w-4 text-bnavat-muted" />
            </Link>
          </div>

          {/* System Telemetry Bar */}
          <div
            data-hero-reveal
            className="grid grid-cols-2 gap-6 border-t border-bnavat-border pt-8 sm:grid-cols-3"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bnavat-shadow">
                DISCIPLINE
              </p>
              <p className="mt-1 font-heading text-sm font-semibold text-bnavat-primary">
                Geometric Precision
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bnavat-shadow">
                ARCHITECTURE
              </p>
              <p className="mt-1 font-heading text-sm font-semibold text-bnavat-primary">
                Zero-Bloat Systems
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bnavat-shadow">
                GOVERNANCE
              </p>
              <p className="mt-1 font-heading text-sm font-semibold text-bnavat-primary">
                Written Scope & Clear IP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
