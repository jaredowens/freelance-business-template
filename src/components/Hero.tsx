import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(29,78,216,0.12),transparent_30%),radial-gradient(circle_at_right,rgba(214,40,40,0.18),transparent_25%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            Trusted Local Service in {siteConfig.city}
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-tight text-white md:text-6xl">
            Plumbing, Heating & Air Service You Can Count On
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            {siteConfig.businessName} provides dependable service, fast response times,
            and honest work for homeowners and businesses in {siteConfig.city} and
            surrounding areas.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/quote"
              className="rounded-lg bg-red-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-red-900/30 transition hover:bg-red-500"
            >
              Get a Free Quote
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              className="rounded-lg border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Call {siteConfig.phone}
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-black text-white">Fast</p>
              <p className="mt-1 text-sm text-slate-400">Responsive service when you need it</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-black text-white">Honest</p>
              <p className="mt-1 text-sm text-slate-400">Straight answers and dependable work</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-black text-white">Local</p>
              <p className="mt-1 text-sm text-slate-400">Proudly serving Slaton and nearby areas</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl shadow-black/40">
            <img
              src="/logo.jpg"
              alt={`${siteConfig.businessName} logo`}
              className="mx-auto mb-6 h-auto w-full max-w-md rounded-xl object-contain"
            />

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                Why Homeowners Choose Us
              </p>
              <ul className="mt-4 space-y-4 text-slate-300">
                <li>• Reliable plumbing repairs and installations</li>
                <li>• Service for homes and businesses</li>
                <li>• Strong local presence and recognizable branding</li>
                <li>• Professional, clean, trustworthy service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}