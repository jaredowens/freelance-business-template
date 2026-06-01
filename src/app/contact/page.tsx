import { siteConfig } from "@/lib/siteConfig";

export default function Contact() {
return ( <div className="px-6 py-20"> <div className="mx-auto max-w-4xl"> <h1 className="mb-6 text-4xl font-black text-white">
Contact Us </h1>

```
    <p className="mb-10 text-slate-400">
      Reach out today for service, repairs, installations, or a free quote.
    </p>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30">
      <div className="space-y-6 text-lg">
        <p>
          📞{" "}
          <a
            href={`tel:${siteConfig.phone}`}
            className="font-semibold text-red-400 hover:text-red-300"
          >
            {siteConfig.phone}
          </a>
        </p>

       <div>
  <p className="font-semibold text-slate-300">
    📧 Email Us
  </p>

  <div className="mt-2 space-y-1">
    <a
      href="mailto:matthew@lonestartx.co"
      className="block text-red-400 hover:text-red-300"
    >
      matthew@lonestartx.co
    </a>

    <a
      href="mailto:alex@lonestartx.co"
      className="block text-red-400 hover:text-red-300"
    >
      alex@lonestartx.co
    </a>
  </div>
</div>

        <p className="text-slate-300">
          📍 {siteConfig.city}
        </p>
      </div>
    </div>

    <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-blue-500/20 bg-blue-500/5 p-5 shadow-lg shadow-blue-950/20">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
        Website Questions?
      </p>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        If you notice any website issues, broken links, form submission
        problems, or incorrect information, please contact the website
        developer directly.
      </p>

      <div className="mt-4 space-y-1 text-sm text-slate-500">
        <p>
          <span className="font-semibold text-white">Developer:</span>{" "}
          Jared Owens • (806) 507-1973
        </p>

        <p>
          <span className="font-semibold text-white">Email:</span>{" "}
          jaredowens4@gmail.com
        </p>
      </div>
    </div>
  </div>
</div>
)}