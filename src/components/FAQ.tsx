"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Individual Accordion Item for better modularity
const AccordionItem = ({ question, answer, isOpen, onClick }: any) => (
  <div className="border-b border-white/10">
    <button 
      onClick={onClick}
      className="flex w-full items-center justify-between py-6 text-left transition-all hover:opacity-70"
    >
      <span className="text-lg font-medium">{question}</span>
      <ChevronDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
    </button>
    
    {/* The "Magic" Accordion Animation */}
    <div className={`grid transition-all duration-300 ease-in-out ${
      isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
    }`}>
      <div className="overflow-hidden">
        <p className="text-slate-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  </div>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first one open

  const faqs = [
    { q: "How does the 14-day trial work?", a: "You get full access to all Pro features. No credit card required. At the end of 14 days, you can choose a plan or stay on the Free tier." },
    { q: "Can I export my analytics data?", a: "Yes, all data can be exported via CSV, JSON, or our automated S3 integration." },
    { q: "Is Lumina GDPR compliant?", a: "Absolutely. We are SOC2 Type II certified and fully GDPR compliant, with data residency options in the EU." }
  ];

  return (
    <section className="py-24 bg-brand-dark/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Questions? <span className="text-brand-primary">Answers.</span></h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}