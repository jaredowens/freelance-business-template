import { siteConfig } from "@/lib/siteConfig";

export default function CTASection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-r from-red-800 via-red-700 to-blue-900 p-10 shadow-2xl shadow-red-950/30 md:p-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-100/80">
              Need service now?
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Get dependable plumbing and HVAC service from {siteConfig.businessName}
            </h2>
            <p className="mt-4 text-lg text-red-50/90">
              From drain cleaning and general repairs to heating, air, gas lines, water heaters,
              and new construction, we help homes and businesses throughout Lubbock and nearby counties.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="rounded-lg bg-black px-6 py-4 font-bold text-white shadow-xl shadow-black/40 transition hover:scale-[1.02] hover:bg-neutral-800">
              Contact Us
            </a>
            <a href={`tel:${siteConfig.phone}`} className="rounded-lg border border-white/30 px-6 py-4 font-bold text-white transition hover:bg-white/10">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}