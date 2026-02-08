"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Is there a setup fee?", a: "No. Lumina is free to start and scales with your usage." },
    { q: "How secure is my telemetry data?", a: "We use AES-256 encryption at rest and TLS 1.3 in transit." }
  ];

  return (
    <section className="py-24 container mx-auto px-6 max-w-3xl">
      <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-white/10 pb-4">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="font-medium">{faq.q}</span>
              <ChevronDown className={`transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ${openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden text-slate-400 text-sm">{faq.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}