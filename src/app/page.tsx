import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/siteConfig";

const reasons = [
  "Plumbing and HVAC service",
  "Drain cleaning for main lines, individual drains, and roof vents",
  "New construction and custom home work",
  "Serving Lubbock and nearby counties",
];

const testimonials = [
  {
    name: "Google Review",
    text: "Real customer reviews will go here once they are collected. This section is built to showcase trust, service quality, and local reputation.",
  },
  {
    name: "Google Review",
    text: "Customer feedback can highlight fast response times, clean work, honest communication, and dependable service.",
  },
  {
    name: "Google Review",
    text: "Once real reviews are added, this section will help visitors feel more confident before calling or requesting a quote.",
  },
];

const serviceDetails: Record<string, string> = {
  "Plumbing and HVAC":
    "Dependable service for plumbing, heating, and air needs in homes, businesses, and service properties.",
  "Drain Cleaning":
    "Drain cleaning for main lines, individual drains, and roof vents when lines are slow, clogged, or backing up.",
  "New Construction":
    "Plumbing and HVAC work for new builds, custom homes, additions, and projects of different sizes.",
  "Water Heater Service":
    "Water heater service, repair, replacement, and installation help for residential and commercial needs.",
  "Gas Line Repair & Installation":
    "Gas line repair and installation for safe, professional service when gas work is needed.",
  "General Repair Work":
    "General plumbing and HVAC repair work for everyday issues, service calls, and property maintenance.",
};

export default function Home() {
  return (
    <>
      <Hero />

      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(29,78,216,0.14),transparent_28%),radial-gradient(circle_at_right,rgba(214,40,40,0.14),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
              Our Services
            </p>
            <h2 className="mt-3 text-4xl font-black text-white">
              Plumbing, Heating & Air Built Around Dependable Service
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-400">
              Lone Star helps homeowners, businesses, custom homes, and new construction
              projects with dependable plumbing and HVAC service.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {siteConfig.services.map((service, i) => (
              <div
                key={service}
                className="group rounded-2xl border border-white/10 bg-white/[0.055] p-7 shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.08]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/15 text-xl font-black text-red-400">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold text-white">{service}</h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {serviceDetails[service]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-950/40 via-black to-red-950/25 p-10 shadow-2xl shadow-black/30">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-4xl font-black text-white">
                Local service that feels professional from the first call
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Whether it is drain cleaning, new construction, heating and air, water
                heaters, gas lines, or general repair work, the site should make it easy
                for customers to understand the service and quickly get in touch.
              </p>
            </div>

            <div className="grid gap-4">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-lg font-semibold text-white"
                >
                  {reason}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
              Service Area
            </p>
            <h2 className="mt-3 text-4xl font-black text-white">
              Serving Lubbock and Nearby Counties
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-400">
              {siteConfig.businessName} provides plumbing, heating, and air service
              across Lubbock and nearby counties, including the areas below.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.serviceAreas.map((area) => (
              <div
                key={area}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Reviews
            </p>
            <h2 className="mt-3 text-4xl font-black text-white">
              Real customer reviews will help build trust fast
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-400">
              Once real Google reviews are added, this section can showcase customer
              experiences, local reputation, and the quality of Lone Star’s work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-xl shadow-black/20"
              >
                <p className="text-xl text-yellow-300">★★★★★</p>
                <p className="mt-4 text-lg leading-8 text-slate-300">“{item.text}”</p>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm font-semibold text-slate-400">
              Leave a Google review for $25 off your next service call.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}