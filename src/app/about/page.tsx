import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function About() {
  return (
    <main className="relative overflow-hidden px-6 py-20">
      <div className="absolute right-[-180px] top-10 opacity-[0.06]">
        <Image
          src="/texas-logo.png"
          alt=""
          width={700}
          height={700}
          className="h-auto w-auto"
        />
      </div>

      <div className="absolute left-[-120px] top-32 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute bottom-10 right-[-120px] h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-red-500/25 via-white/5 to-blue-500/25 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/40 backdrop-blur">
              <Image
                src="/matt-alex.png"
                alt="Matt and Alex from Lone Star Plumbing"
                width={800}
                height={800}
                className="h-auto w-full rounded-[1.5rem] object-cover"
                priority
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur-md">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-400">
                  Local • Reliable • Professional
                </p>
                <p className="mt-2 text-xl font-black text-white">
                  Built on family values and dependable service.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="mb-5 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-red-300">
              About Lone Star
            </div>

            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
              Family Owned.
              <span className="block text-red-400">Family Operated.</span>
              <span className="block text-blue-400">Proudly Texan.</span>
            </h1>

            <p className="mt-7 text-lg leading-8 text-slate-300">
              {siteConfig.businessName} is a trusted local company serving{" "}
              {siteConfig.city} and surrounding areas. We focus on dependable
              service, honest communication, and getting the job done right the
              first time.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Whether it’s a small repair, drain cleaning, water heater service,
              gas line work, HVAC service, or a larger new construction project,
              we take pride in providing quality work that customers can rely on.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {["Plumbing", "Heating & Air", "New Construction"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 text-center shadow-xl shadow-black/20"
                >
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-950/35 via-white/[0.04] to-red-950/35 p-6 shadow-2xl shadow-black/25">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
                Serving Lubbock & Nearby Counties
              </p>
              <p className="mt-3 leading-7 text-slate-300">
                Professional service for homeowners, businesses, custom homes,
                remodels, and new construction projects across the area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}