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
  "How do I get a quote?",
  "Can I call now?",
];

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: `Hi! I’m the ${siteConfig.businessName} assistant. I can help with services, service areas, quotes, and contact info.`,
    },
  ]);
  const [input, setInput] = useState("");

  const serviceList = useMemo(() => siteConfig.services.join(", "), []);
  const areaList = useMemo(() => siteConfig.serviceAreas.join(", "), []);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage: Message = { role: "user", text: trimmed };
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
        className="fixed bottom-6 right-6 z-50 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition hover:bg-red-500"
        aria-label="Open chat assistant"
      >
        {open ? "Close Chat" : "Chat"}
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-[22rem] max-w-[calc(100vw-2rem)] rounded-2xl border border-white/10 bg-neutral-950 p-4 shadow-2xl shadow-black/50">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                Assistant
              </p>
              <p className="text-lg font-bold text-white">
                {siteConfig.businessName}
              </p>
            </div>
          </div>

          <div className="mb-3 flex flex-wrap gap-2">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                type="button"
                onClick={() => sendMessage(reply)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
              >
                {reply}
              </button>
            ))}
          </div>

          <div className="h-72 space-y-3 overflow-y-auto rounded-xl border border-white/10 bg-black/30 p-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 ${
                  msg.role === "user"
                    ? "ml-auto bg-red-600 text-white"
                    : "bg-white/10 text-slate-100"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="mt-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none placeholder:text-slate-500 focus:border-red-500"
              placeholder="Ask about services, quotes, areas..."
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-xl bg-red-600 px-4 py-3 font-bold text-white transition hover:bg-red-500"
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

  if (
    lower.includes("hi") ||
    lower.includes("hello") ||
    lower.includes("hey")
  ) {
    return "Hey! I can help with services, quotes, service areas, and contact info. What do you need?";
  }

  if (
    lower.includes("quote") ||
    lower.includes("estimate") ||
    lower.includes("pricing") ||
    lower.includes("price") ||
    lower.includes("cost")
  ) {
    return "Pricing depends on the job, but the fastest way to get started is to fill out the quote form on the site. You can also call directly for faster help.";
  }

  if (
    lower.includes("service") ||
    lower.includes("offer") ||
    lower.includes("do you do") ||
    lower.includes("help with")
  ) {
    return `We offer ${serviceList}. If you tell me what kind of issue you have, I can point you in the right direction.`;
  }

  if (
    lower.includes("water heater") ||
    lower.includes("heater")
  ) {
    return "Yes — water heater service and installation can be requested through the quote form or by calling directly.";
  }

  if (
    lower.includes("drain") ||
    lower.includes("clog") ||
    lower.includes("backed up")
  ) {
    return "Drain and clog issues are the kind of thing you’d want to request quickly. You can submit a quote request or call directly for faster help.";
  }

  if (
    lower.includes("leak") ||
    lower.includes("pipe") ||
    lower.includes("burst")
  ) {
    return "Leak and pipe issues should be handled quickly. The best next step is to call directly or submit the quote form with the details.";
  }

  if (
    lower.includes("fixture") ||
    lower.includes("faucet") ||
    lower.includes("sink") ||
    lower.includes("toilet")
  ) {
    return "Yes — fixture-related work like faucets, sinks, toilets, and similar plumbing issues can be requested through the site.";
  }

  if (
    lower.includes("repair") ||
    lower.includes("install") ||
    lower.includes("installation") ||
    lower.includes("replace")
  ) {
    return "Repairs and installations are both handled. Share the job details through the quote form and someone can follow up with you.";
  }

  if (
    lower.includes("where") ||
    lower.includes("area") ||
    lower.includes("location") ||
    lower.includes("serve") ||
    lower.includes("serving")
  ) {
    return `We serve ${areaList}. If you're nearby but don’t see your city listed, it’s still worth reaching out.`;
  }

  if (
    lower.includes("phone") ||
    lower.includes("call") ||
    lower.includes("number") ||
    lower.includes("contact")
  ) {
    return `You can call ${siteConfig.phone} or use the contact and quote forms on the site.`;
  }

  if (
    lower.includes("email")
  ) {
    return `You can reach out through the site or by email at ${siteConfig.email}.`;
  }

  if (
    lower.includes("hour") ||
    lower.includes("open") ||
    lower.includes("closed") ||
    lower.includes("availability")
  ) {
    return "Hours and scheduling can be customized on the full site, but for now the best way to check availability is by calling or sending a quote request.";
  }

  if (
    lower.includes("emergency") ||
    lower.includes("urgent") ||
    lower.includes("asap") ||
    lower.includes("right now")
  ) {
    return "For urgent plumbing issues, the fastest option is to call directly so someone can respond as quickly as possible.";
  }

  if (
    lower.includes("appointment") ||
    lower.includes("schedule") ||
    lower.includes("book")
  ) {
    return "Scheduling can start through the quote form or by phone. Submit the job details and someone can follow up with next steps.";
  }

  if (
    lower.includes("thank")
  ) {
    return "You’re welcome. Let me know if you want help with services, quotes, or contact info.";
  }

  return "I can help with services, quotes, service areas, scheduling, and contact info. You can also use the quote form if you already know what you need.";
}