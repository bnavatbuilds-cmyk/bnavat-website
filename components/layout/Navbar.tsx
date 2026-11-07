"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function BnavatMonogram({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M52 50H62C74.1503 50 84 59.8497 84 72C84 84.1503 74.1503 94 62 94H34V78H60C64.4183 78 68 74.4183 68 70C68 65.5817 64.4183 62 60 62H46L52 50Z"
        fill="#5F6872"
      />
      <path d="M36 94L55 64L58 75L44 94H36Z" fill="#5F6872" opacity="0.85" />
      <path
        d="M18 6H58C71.2548 6 82 16.7452 82 30C82 43.2548 71.2548 54 58 54H45C36.7157 54 30 60.7157 30 69V94H18V64C18 52.402 26.402 43 38 43H56C62.6274 43 68 37.6274 68 31C68 24.3726 62.6274 19 56 19H32V44L18 54V6Z"
        fill="#F4F3EE"
      />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Manifesto", href: "/#manifesto" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Standard", href: "/#engineering" },
  { label: "Protocol", href: "/#protocol" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleStartProjectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileOpen(false);
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      e.preventDefault();
      contactEl.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const inputEl = document.getElementById("client-name");
        inputEl?.focus();
      }, 450);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-bnavat-border bg-bnavat-base/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3.5 focus:outline-none"
          aria-label="BNAVAT Home"
        >
          <BnavatMonogram className="h-9 w-9 transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold uppercase tracking-[0.16em] text-bnavat-primary leading-none">
              BNAVAT
            </span>
            <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-bnavat-shadow">
              SYS.VER // 1.0
            </span>
          </div>
        </Link>

        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative font-mono text-xs uppercase tracking-[0.12em] text-bnavat-muted transition hover:text-bnavat-primary after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-bnavat-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 border border-bnavat-border bg-bnavat-surface/70 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-bnavat-muted">
              GATEWAY: ONLINE
            </span>
          </div>

          <Link
            href={pathname === "/" ? "#contact" : "/contact"}
            onClick={handleStartProjectClick}
            className="group inline-flex items-center gap-2 border border-bnavat-primary bg-bnavat-primary px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-bnavat-base transition hover:bg-transparent hover:text-bnavat-primary"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center border border-bnavat-border p-2 text-bnavat-primary md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-b border-bnavat-border bg-bnavat-surface px-6 py-6 md:hidden">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.14em] text-bnavat-primary py-1"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={pathname === "/" ? "#contact" : "/contact"}
              onClick={handleStartProjectClick}
              className="mt-2 inline-flex items-center justify-center gap-2 border border-bnavat-primary bg-bnavat-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-bnavat-base"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
