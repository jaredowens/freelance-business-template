"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Typhanee Graves",
    location: "Lubbock",
    text: "Lone Star Plumbing is awesome. Quick, reliable, and super easy to work with. Friendly service and they got the job done right the first time.",
  },
  {
    name: "Linsey Milligan",
    location: "Lubbock County",
    text: "They showed up right on time, explained everything clearly, and fixed the issue quickly. The whole process was stress-free and professional.",
  },
  {
    name: "Jake Chester",
    location: "West Texas",
    text: "Very professional, timely, and great work at a great price. I highly recommend giving them a call.",
  },
  {
    name: "Margaret Shipley",
    location: "Lubbock",
    text: "They came out quickly on a very cold weekend and fixed the issue fast. Pricing was very fair, especially for weekend service.",
  },
  {
    name: "Kelley Hunter",
    location: "Lubbock County",
    text: "Alex responded the same day and diagnosed the issue quickly. I was impressed with the knowledge and efficiency.",
  },
  {
    name: "Stephan Martinez",
    location: "Lubbock",
    text: "Professional, courteous, and fairly priced. We were taken care of right away and will definitely use Lone Star again.",
  },
  {
    name: "Joshua Salazar",
    location: "West Texas",
    text: "Needed a new gas line at our rental property and Lone Star replaced it quickly at a fair price.",
  },
  {
    name: "Nolan Davis",
    location: "Lubbock",
    text: "Professional and efficient is the best way to describe their service. Same-day faucet replacement and everything was handled perfectly.",
  },
];

export default function ReviewsCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goBack = () => {
    setActive((current) => (current === 0 ? reviews.length - 1 : current - 1));
  };

  const goForward = () => {
    setActive((current) => (current + 1) % reviews.length);
  };

  const review = reviews[active];

  return (
    <section className="relative overflow-hidden px-6 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_right,rgba(220,38,38,0.14),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Google Reviews
          </p>

          <h2 className="mt-3 text-4xl font-black text-white">
            Trusted By Homeowners Across West Texas
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Real customer experiences from plumbing, HVAC, drain cleaning,
            water heater, and gas line service calls.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <button
            type="button"
            onClick={goBack}
            className="absolute left-0 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 px-5 py-4 text-2xl font-black text-white shadow-xl backdrop-blur transition hover:scale-105 hover:bg-red-600 md:block"
            aria-label="Previous review"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={goForward}
            className="absolute right-0 top-1/2 z-20 hidden translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 px-5 py-4 text-2xl font-black text-white shadow-xl backdrop-blur transition hover:scale-105 hover:bg-red-600 md:block"
            aria-label="Next review"
          >
            ›
          </button>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur">
            <div
              key={active}
              className="min-h-[330px] rounded-3xl border border-white/10 bg-black/20 p-8 shadow-xl shadow-black/20 backdrop-blur transition-all duration-500"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-2xl tracking-wide text-yellow-300">
                  ★★★★★
                </p>

                <p className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                  Google Review
                </p>
              </div>

              <p className="mt-8 text-2xl font-medium leading-10 text-slate-100">
                “{review.text}”
              </p>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-xl font-black text-white">{review.name}</p>

                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-400">
                  {review.location}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 md:hidden">
              <button
                type="button"
                onClick={goBack}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white"
              >
                Previous
              </button>

              <button
                type="button"
                onClick={goForward}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white"
              >
                Next
              </button>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-3 rounded-full transition-all ${
                    active === index
                      ? "w-8 bg-red-500"
                      : "w-3 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <p className="mt-8 text-center text-sm font-semibold text-slate-400">
              Leave a Google review for $25 off your next service call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}