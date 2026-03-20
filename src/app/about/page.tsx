import { siteConfig } from "@/lib/siteConfig";

export default function About() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black text-white mb-6">
          About {siteConfig.businessName}
        </h1>

        <p className="text-slate-300 text-lg leading-8">
          {siteConfig.businessName} is a trusted local company serving{" "}
          {siteConfig.city} and surrounding areas. We focus on dependable
          service, honest communication, and getting the job done right the
          first time.
        </p>

        <p className="text-slate-400 mt-6">
          Whether it’s a small repair or a larger installation, we take pride in
          providing quality work that customers can rely on.
        </p>
      </div>
    </div>
  );
}