import React from "react";
import Terminal from "./Terminal";

const BentoCard = ({ 
  title, 
  description, 
  className = "", 
  children 
}: { 
  title: string; 
  description: string; 
  className?: string; 
  children?: React.ReactNode 
}) => (
  <div className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 ${className}`}>
    <div className="relative z-10">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
    </div>
    {children}
    {/* Subtle Gradient Glow on Hover */}
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
  </div>
);

export default function BentoGrid() {
  return (
    <section id="features" className="bg-brand-dark py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-3xl font-bold text-white md:text-5xl">
          Engineered for <span className="text-brand-primary">Precision.</span>
        </h2>
        
        {/* The Magic Grid Container */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          
          {/* Card 1: Large (Spans 2 columns) */}
          <BentoCard 
            title="Real-time Analytics" 
            description="Track every request, latency spike, and error as they happen with millisecond precision."
            className="lg:col-span-2 lg:row-span-1"
          >
            <Terminal />
          </BentoCard>

          {/* Card 2: Tall (Spans 2 rows) */}
          <BentoCard 
            title="AI Insights" 
            description="Our LLM-powered engine detects anomalies before they affect your users."
            className="lg:col-span-1 lg:row-span-2"
          >
             <div className="mt-12 flex justify-center text-6xl opacity-20">🤖</div>
          </BentoCard>

          {/* Card 3: Standard */}
          <BentoCard 
            title="Global Edge" 
            description="Deploy observability nodes in over 100 regions worldwide."
            className="lg:col-span-1"
          />

          {/* Card 4: Standard */}
          <BentoCard 
            title="Type-Safe" 
            description="Full TypeScript support out of the box for your telemetry data."
            className="lg:col-span-1"
          />

        </div>
      </div>
    </section>
  );
}