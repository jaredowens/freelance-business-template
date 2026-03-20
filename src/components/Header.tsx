import { siteConfig } from "@/lib/siteConfig";

export default function Header() {
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
          <a
            href="/services"
            className="text-sm font-medium text-white/90 transition hover:text-red-500"
          >
            Services
          </a>
          <a href="/about" className="text-sm font-medium text-white/90 transition hover:text-red-500">
            About
          </a>
          <a
            href="/contact"
            className="text-sm font-medium text-white/90 transition hover:text-red-500"
          >
            Contact
          </a>
        </nav>

        <a
          href={`tel:${siteConfig.phone}`}
          className="rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/30 transition hover:bg-red-500"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}