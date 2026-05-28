
"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Quote" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 shadow-xl shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="/" className="group flex items-center gap-4">
          <div className="rounded-xl border border-white/10 bg-white/10 p-1 shadow-lg shadow-black/20 backdrop-blur transition group-hover:border-red-400/40">
            <img
              src="/logo.jpg"
              alt={`${siteConfig.businessName} logo`}
              className="h-12 w-auto rounded-lg object-contain"
            />
          </div>

          <div className="hidden leading-tight sm:block">
            <p className="text-xl font-black tracking-wide text-white drop-shadow">
              {siteConfig.businessName}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.24em] text-blue-200">
              Plumbing • Heating • Air
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-900/30 transition hover:scale-[1.03] hover:bg-red-500 sm:inline-block"
          >
            Call Now
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-black/20 backdrop-blur transition hover:bg-white/15 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/80 shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-bold text-white transition hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {link.label === "Quote" ? "Get a Free Quote" : link.label}
              </a>
            ))}

            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-2 rounded-xl bg-red-600 px-4 py-3 text-center font-black text-white shadow-lg shadow-red-900/30"
              onClick={() => setOpen(false)}
            >
              Call {siteConfig.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

