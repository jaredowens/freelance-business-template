"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-4">
          <img
            src="/logo.jpg"
            alt={`${siteConfig.businessName} logo`}
            className="h-12 w-auto rounded object-contain"
          />
          <div className="hidden sm:block">
            <p className="text-lg font-bold tracking-wide text-white">
              {siteConfig.businessName}
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Plumbing • Heating • Air
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-sm font-medium text-white/90 transition hover:text-red-500">
            Home
          </a>
          <a href="/services" className="text-sm font-medium text-white/90 transition hover:text-red-500">
            Services
          </a>
          <a href="/about" className="text-sm font-medium text-white/90 transition hover:text-red-500">
            About
          </a>
          <a href="/contact" className="text-sm font-medium text-white/90 transition hover:text-red-500">
            Contact
          </a>
          <a href="/quote" className="text-sm font-medium text-white/90 transition hover:text-red-500">
            Quote
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/30 transition hover:bg-red-500 sm:inline-block"
          >
            Call Now
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            <a
              href="/"
              className="border-b border-white/10 py-3 text-white"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
            <a
              href="/services"
              className="border-b border-white/10 py-3 text-white"
              onClick={() => setOpen(false)}
            >
              Services
            </a>
            <a
              href="/about"
              className="border-b border-white/10 py-3 text-white"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              href="/contact"
              className="border-b border-white/10 py-3 text-white"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
            <a
              href="/quote"
              className="border-b border-white/10 py-3 text-white"
              onClick={() => setOpen(false)}
            >
              Get a Free Quote
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-4 rounded-lg bg-red-600 px-4 py-3 text-center font-bold text-white"
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