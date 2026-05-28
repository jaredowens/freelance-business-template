import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div className="text-center md:text-left">
          <div className="mb-6 inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300 backdrop-blur">
            Serving Lubbock and Nearby Counties
          </div>

          <div className="mb-5 text-center md:text-left">
            <p className="text-5xl font-black leading-none text-white md:text-7xl">
              {siteConfig.businessName}
            </p>
            <p className="mt-3 text-xl font-bold uppercase tracking-[0.22em] text-blue-300">
              {siteConfig.businessSubtitle}
            </p>
          </div>

          <h1 className="max-w-2xl text-4xl font-black leading-tight text-white md:text-5xl">
            Plumbing, Heating & Air Service You Can Count On
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 md:mx-0 mx-auto">
            Dependable plumbing and HVAC service for homeowners, businesses, custom homes,
            and new construction projects throughout Lubbock and nearby counties.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
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

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3 md:mx-0 mx-auto">
            <div className="rounded-xl border border-white/15 bg-black/10 p-4 backdrop-blur-[2px]">
              <p className="text-2xl font-black text-white">Fast</p>
              <p className="mt-1 text-sm text-slate-300">Responsive service when you need it</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-black/10 p-4 backdrop-blur-[2px]">
              <p className="text-2xl font-black text-white">Honest</p>
              <p className="mt-1 text-sm text-slate-300">Straight answers and dependable work</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-black/10 p-4 backdrop-blur-[2px]">
              <p className="text-2xl font-black text-white">Local</p>
              <p className="mt-1 text-sm text-slate-300">Proudly serving Lubbock and nearby counties</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-transparent p-6">
            <img
              src="/logo.jpg"
              alt={`${siteConfig.businessName} logo`}
              className="mx-auto mb-6 h-auto w-full max-w-md rounded-xl object-contain"
            />

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                Why Homeowners Choose Us
              </p>
              <ul className="mt-4 space-y-4 text-slate-300">
                <li>• Reliable plumbing and HVAC service</li>
                <li>• Drain cleaning for main lines, individual drains, and roof vents</li>
                <li>• New construction, custom homes, and service work</li>
                <li>• Professional, clean, trustworthy local service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}