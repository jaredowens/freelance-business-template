import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/siteConfig";

const reasons = [
  "Fast response times",
  "Honest, dependable service",
  "Residential and commercial work",
  "Local service you can trust",
];

const testimonials = [
  {
    name: "Local Homeowner",
    text: "Quick response, professional work, and everything was handled the right way. Would absolutely call again.",
  },
  {
    name: "Business Owner",
    text: "Very reliable and easy to work with. The kind of company you want to keep on call when something goes wrong.",
  },
  {
    name: "Property Customer",
    text: "Showed up on time, explained everything clearly, and got the job done without any hassle.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
              Our Services
            </p>
            <h2 className="mt-3 text-4xl font-black text-white">Built for trust. Designed to convert.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              A strong service site should clearly show what the business does, where it
              works, and how fast customers can get in touch.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {siteConfig.services.map((service, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/15 text-xl font-black text-red-400">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold text-white">{service}</h3>
                <p className="mt-3 leading-7 text-slate-400">
                  Professional {service.toLowerCase()} for homeowners and businesses in{" "}
                  {siteConfig.city} and surrounding areas.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-blue-950/30 to-black p-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-4xl font-black text-white">
                A stronger first impression for local service businesses
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                This template is built to make a company feel established, reliable, and
                premium from the first glance. Clear messaging and strong calls to action
                help turn visitors into leads.
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
              Proudly Serving {siteConfig.city} and Nearby Communities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              {siteConfig.businessName} serves homes and businesses throughout the area,
              including the communities below.
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
              Testimonials
            </p>
            <h2 className="mt-3 text-4xl font-black text-white">
              A premium feel customers can trust
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <p className="text-lg leading-8 text-slate-300">“{item.text}”</p>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}