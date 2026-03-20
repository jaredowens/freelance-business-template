import { siteConfig } from "@/lib/siteConfig";

export default function Contact() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black text-white mb-6">
          Contact Us
        </h1>

        <p className="text-slate-400 mb-10">
          Reach out today for service or a quote.
        </p>

        <div className="space-y-4 text-lg">
          <p>
            📞{" "}
            <a href={`tel:${siteConfig.phone}`} className="text-red-400">
              {siteConfig.phone}
            </a>
          </p>

          <p>
            📧{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-red-400">
              {siteConfig.email}
            </a>
          </p>

          <p>📍 {siteConfig.city}</p>
        </div>
      </div>
    </div>
  );
}