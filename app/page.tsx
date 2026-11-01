"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Services from "@/components/sections/Services";
import Engineering from "@/components/sections/Engineering";
import Process from "@/components/sections/Process";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Hero />
      <Manifesto />
      <Services />
      <Engineering />
      <Process />
      <Work />
      <Contact />
    </>
  );
}
