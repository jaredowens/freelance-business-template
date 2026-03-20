import { siteConfig } from "@/lib/siteConfig";

export default function Services() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-black text-white mb-6">
          Our Services
        </h1>

        <p className="text-slate-400 mb-10">
          {siteConfig.businessName} provides reliable plumbing services for
          homes and businesses in {siteConfig.city}.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {siteConfig.services.map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white/10 bg-white/5"
            >
              <h2 className="text-xl font-bold text-white">
                {service}
              </h2>
              <p className="text-slate-400 mt-2">
                Professional {service.toLowerCase()} done right the first time.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}