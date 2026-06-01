import { siteConfig } from "@/lib/siteConfig";

export default function QuotePage() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
            Free Estimate
          </p>
          <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">
            Request a Quote
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Tell us a little about the job and {siteConfig.businessName} will get
            back to you as soon as possible.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30">
          <form
            action="https://formspree.io/f/xaqkgryv"
            method="POST"
            className="space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold uppercase tracking-[0.15em] text-slate-300"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-red-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold uppercase tracking-[0.15em] text-slate-300"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-red-500"
                  placeholder="(806) 555-0123"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold uppercase tracking-[0.15em] text-slate-300"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-red-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-bold uppercase tracking-[0.15em] text-slate-300"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-red-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {siteConfig.services.map((service) => (
                    <option key={service} value={service} className="text-black">
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-bold uppercase tracking-[0.15em] text-slate-300"
              >
                Job Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-red-500"
                placeholder="Street address"
              />
            </div>

            <div>
              <label
                htmlFor="details"
                className="mb-2 block text-sm font-bold uppercase tracking-[0.15em] text-slate-300"
              >
                Project Details
              </label>
              <textarea
                id="details"
                name="details"
                rows={6}
                required
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-red-500"
                placeholder="Tell us what’s going on, what service you need, and anything else we should know."
              />
            </div>

            <input
              type="hidden"
              name="_subject"
              value={`New quote request for ${siteConfig.businessName}`}
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-red-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-red-900/30 transition hover:bg-red-500"
            >
              Submit Quote Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}