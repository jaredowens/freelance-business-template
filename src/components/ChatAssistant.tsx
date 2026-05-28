"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

type Message = {
  role: "assistant" | "user";
  text: string;
};

const quickReplies = [
  "What services do you offer?",
  "Do you service my area?",
  "How much does it cost?",
  "Tell me about drain cleaning",
];

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: `Hi! I’m the Lone Star assistant. I can help with plumbing, heating, air, drain cleaning, new construction, pricing, service areas, scheduling, water heaters, gas lines, and general questions.`,
    },
  ]);

  const [input, setInput] = useState("");

  const serviceList = useMemo(() => siteConfig.services.join(", "), []);
  const areaList = useMemo(() => siteConfig.serviceAreas.join(", "), []);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();

    if (!trimmed) return;

    const userMessage: Message = {
      role: "user",
      text: trimmed,
    };

    const reply: Message = {
      role: "assistant",
      text: getReply(trimmed, serviceList, areaList),
    };

    setMessages((prev) => [...prev, userMessage, reply]);
    setInput("");
  };

  const handleSubmit = () => {
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-red-900/30 transition hover:scale-[1.03] hover:bg-red-500"
      >
        {open ? "Close Chat" : "Need Help?"}
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-[34rem] max-w-[calc(100vw-2rem)] rounded-3xl border border-white/10 bg-neutral-950/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl">
          <div className="mb-4 border-b border-white/10 pb-4">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
              Lone Star Assistant
            </p>

            <p className="mt-1 text-2xl font-black text-white">
              Plumbing • Heating • Air
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Ask about services, pricing, drain cleaning, HVAC, water heaters,
              new construction, service areas, scheduling, and more.
            </p>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => sendMessage(reply)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
              >
                {reply}
              </button>
            ))}
          </div>

          <div className="h-[26rem] space-y-4 overflow-y-auto rounded-2xl border border-white/10 bg-black/30 p-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[92%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-7 ${
                  msg.role === "user"
                    ? "ml-auto bg-red-600 text-white"
                    : "bg-white/10 text-slate-100"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question..."
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-red-500"
            />

            <button
              onClick={handleSubmit}
              className="rounded-2xl bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-500"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function getReply(text: string, serviceList: string, areaList: string) {
  const lower = text.toLowerCase();

  // SERVICE AREAS
  if (
    lower.includes("area") ||
    lower.includes("serve") ||
    lower.includes("serving") ||
    lower.includes("county") ||
    lower.includes("location") ||
    lower.includes("near me") ||
    lower.includes("my area")
  ) {
    return `Lone Star serves:
• ${areaList}

If you are nearby but do not see your area listed, it is still worth calling ${siteConfig.phone} to ask about service availability.`;
  }

  // PRICING
  if (
    lower.includes("price") ||
    lower.includes("cost") ||
    lower.includes("quote") ||
    lower.includes("estimate")
  ) {
    return `Pricing depends on the type of service, materials, labor, accessibility, and the size of the job.

Many services are flat-rate priced whenever possible, while some work may be based around an hourly rate near $175 depending on the project.

For the most accurate quote, call ${siteConfig.phone} or use the quote form and include:
• what service is needed
• where the property is located
• photos if available
• whether the issue is urgent`;
  }

  // SERVICES
  if (
    lower.includes("service") ||
    lower.includes("offer") ||
    lower.includes("what do you do")
  ) {
    return `Lone Star provides:
• ${serviceList}

This includes plumbing and HVAC service, drain cleaning, new construction work, water heaters, gas lines, and general repair work for homes and businesses.`;
  }

  // DRAIN CLEANING
  if (
    lower.includes("drain") ||
    lower.includes("clog") ||
    lower.includes("backed up")
  ) {
    return `Lone Star handles drain cleaning for:
• main lines
• individual drains
• roof vents
• clogged drains
• slow drains
• recurring backups

If multiple drains are backing up at once, it may be a larger line issue.`;
  }

  // WATER HEATERS
  if (
    lower.includes("water heater") ||
    lower.includes("hot water")
  ) {
    return `Lone Star can help with water heater service, repair, replacement, and installation.

Helpful details include:
• leaking or not leaking
• gas or electric
• age of the unit
• whether you have no hot water or inconsistent hot water`;
  }

  // HVAC
  if (
    lower.includes("hvac") ||
    lower.includes("air") ||
    lower.includes("ac") ||
    lower.includes("heating")
  ) {
    return `Yes — Lone Star provides heating and air service along with plumbing.

That can include:
• cooling issues
• heating issues
• airflow problems
• thermostat concerns
• system replacement
• repair and service work`;
  }

  // NEW CONSTRUCTION
  if (
    lower.includes("new construction") ||
    lower.includes("custom home")
  ) {
    return `Lone Star works on new construction and custom home projects.

That can include plumbing and HVAC work for homes, additions, remodels, and larger construction projects.`;
  }

  // GAS LINES
  if (
    lower.includes("gas") ||
    lower.includes("gas line")
  ) {
    return `Lone Star can help with gas line repair and installation.

If you smell active gas or believe there may be a dangerous leak, contact emergency services or your gas provider immediately.`;
  }

  // PHONE / CONTACT
  if (
    lower.includes("phone") ||
    lower.includes("call") ||
    lower.includes("contact")
  ) {
    return `You can contact Lone Star directly at:
${siteConfig.phone}`;
  }

  // SCHEDULING
  if (
    lower.includes("schedule") ||
    lower.includes("appointment") ||
    lower.includes("book")
  ) {
    return `To schedule service, call ${siteConfig.phone} or use the contact/quote form.

Including photos and details about the issue can help speed things up.`;
  }

  // REVIEWS
  if (
    lower.includes("review") ||
    lower.includes("google")
  ) {
    return `Lone Star appreciates customer feedback and Google reviews.

Customers may also qualify for:
• $25 off their next service call after leaving a Google review`;
  }

  // EMERGENCY
  if (
    lower.includes("emergency") ||
    lower.includes("urgent") ||
    lower.includes("asap")
  ) {
    return `For urgent plumbing or HVAC issues, calling is the fastest option.

Please explain:
• what is happening
• whether water is leaking or backing up
• whether heat or air is out
• your location`;
  }

  // HOURS
  if (
    lower.includes("hours") ||
    lower.includes("open")
  ) {
    return `Hours and scheduling availability can vary depending on the workload and type of service needed.

For the fastest response, call ${siteConfig.phone}.`;
  }

  // DEFAULT
  return `I can help with:
• plumbing and HVAC
• drain cleaning
• water heaters
• gas lines
• new construction
• pricing questions
• service areas
• scheduling
• general repair questions

You can also call ${siteConfig.phone} for direct assistance.`;
}




