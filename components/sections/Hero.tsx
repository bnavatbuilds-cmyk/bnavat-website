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
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Global Scroll-Reactive 3D WebGL Sculpture across the whole page */}
      <HeroScene />

      <section
        ref={containerRef}
        className="relative z-10 flex min-h-screen items-center border-b border-bnavat-border/70 pt-20"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl space-y-8">
            <div
              data-hero-reveal
              className="inline-flex items-center gap-3 border border-bnavat-border bg-bnavat-surface/70 px-4 py-1.5 backdrop-blur-sm"
            >
              <span className="h-2 w-2 bg-bnavat-primary" />
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-bnavat-primary">
                Digital architecture. Web engineering. Interface systems.
              </span>
            </div>

            <h1
              data-hero-reveal
              className="font-heading text-5xl font-bold leading-[1.06] tracking-[-0.02em] text-bnavat-primary sm:text-6xl lg:text-[76px]"
            >
              We engineer what the internet runs on.
            </h1>

            <p
              data-hero-reveal
              className="max-w-2xl text-base leading-relaxed text-bnavat-muted sm:text-lg"
            >
              High-performance websites, scalable web applications and digital systems—engineered
              with precision, designed with intent, and built to move businesses forward.
            </p>

            <div data-hero-reveal className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 border border-bnavat-primary bg-bnavat-primary px-7 py-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-bnavat-base transition hover:bg-transparent hover:text-bnavat-primary"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="#capabilities"
                className="inline-flex items-center gap-2 border border-bnavat-border bg-bnavat-surface/60 px-7 py-4 font-mono text-xs uppercase tracking-[0.12em] text-bnavat-primary backdrop-blur-sm transition hover:border-bnavat-primary"
              >
                <span>Explore Our Capabilities</span>
                <ChevronDown className="h-4 w-4 text-bnavat-muted" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
