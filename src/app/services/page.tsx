import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

const serviceDescriptions: Record<string, string> = {
  "Plumbing and HVAC":
    "Dependable service for plumbing, heating, and air needs in homes, businesses, and service properties.",
  "Drain Cleaning":
    "Main lines, individual drains, and roof vents when lines are slow, clogged, or backing up.",
  "New Construction":
    "Plumbing and HVAC work for new builds, custom homes, additions, and larger projects.",
  "Water Heater Service":
    "Water heater repair, replacement, installation, and service for residential and commercial needs.",
  "Gas Line Repair & Installation":
    "Safe, professional gas line repair and installation when gas work is needed.",
  "General Repair Work":
    "Everyday plumbing and HVAC repairs, service calls, and property maintenance.",
};

export default function Services() {
  return (
    <main className="relative overflow-hidden px-6 py-20">
      <div className="absolute left-[-160px] top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-[-160px] top-80 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="relative mx-auto mb-10 flex max-w-2xl justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/25 via-white/10 to-blue-500/25 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/40 backdrop-blur">
              <Image
                src="/white-lonestar.png"
                alt="Lone Star Plumbing, Heating and Air"
                width={560}
                height={560}
                className="h-auto w-full max-w-[480px] drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <div className="mb-5 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-red-300">
            Our Services
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            Plumbing, Heating & Air Built Around Dependable Service
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {siteConfig.businessName} provides reliable plumbing, heating, and
            air services for homes, businesses, custom homes, and new
            construction projects in {siteConfig.city} and nearby counties.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {siteConfig.services.map((service, i) => (
            <div
              key={service}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-7 shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.08]"
            >
              <div className="absolute right-[-30px] top-[-30px] h-28 w-28 rounded-full bg-gradient-to-br from-red-500/20 to-blue-500/20 blur-2xl transition group-hover:scale-125" />

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/20 bg-red-600/15 text-xl font-black text-red-400">
                  {i + 1}
                </div>

                <h2 className="text-2xl font-bold text-white">{service}</h2>

                <p className="mt-4 leading-7 text-slate-400">
                  {serviceDescriptions[service] ??
                    `Professional ${service.toLowerCase()} done right the first time.`}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-950/45 via-black/60 to-red-950/35 p-8 shadow-2xl shadow-black/35 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
                Need service?
              </p>

              <h2 className="mt-3 text-3xl font-black text-white">
                Get dependable help from a local team.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                From emergency repairs to new construction projects, Lone Star
                makes it easy to get professional plumbing, heating, and air
                service in Lubbock and nearby counties.
              </p>
            </div>

            <a
              href={`tel:${siteConfig.phone}`}
              className="rounded-full bg-red-600 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-red-950/40 transition hover:bg-red-500"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}