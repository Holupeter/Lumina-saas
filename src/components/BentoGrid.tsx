import React from "react";
import Terminal from "./Terminal";
import { Feature } from "@/types"; 

const featureData: Feature[] = [
  {
    id: "feat-1",
    title: "Real-time Analytics",
    description: "Track every request, latency spike, and error as they happen with millisecond precision.",
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    id: "feat-2",
    title: "AI Insights",
    description: "Our LLM-powered engine detects anomalies before they affect your users.",
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    id: "feat-3",
    title: "Global Edge",
    description: "Deploy observability nodes in over 100 regions worldwide.",
    className: "lg:col-span-1",
  },
  {
    id: "feat-4",
    title: "Type-Safe",
    description: "Full TypeScript support out of the box for your telemetry data.",
    className: "lg:col-span-1",
  }
];

const BentoCard = ({ 
  feature, 
  children 
}: { 
  feature: Feature; 
  children?: React.ReactNode 
}) => (
  <div className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 dark:hover:bg-white/5 light:bg-slate-50 light:border-slate-200 ${feature.className}`}>
    <div className="relative z-10">
      <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">{feature.title}</h3>
      <p className="mt-2 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">{feature.description}</p>
    </div>
    {children}
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
  </div>
);

export default function BentoGrid() {
  return (
    <section id="features" className="bg-brand-dark dark:bg-brand-dark light:bg-white py-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-3xl font-bold text-white dark:text-white light:text-slate-900 md:text-5xl">
          Engineered for <span className="text-brand-primary">Precision.</span>
        </h2>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          
          
          <BentoCard feature={featureData[0]}>
            <Terminal />
          </BentoCard>

          {/* Card 2 has the Robot Emoji */}
          <BentoCard feature={featureData[1]}>
             <div className="mt-12 flex justify-center text-6xl opacity-20">🤖</div>
          </BentoCard>

          
          <BentoCard feature={featureData[2]} />
          <BentoCard feature={featureData[3]} />

        </div>
      </div>
    </section>
  );
}