"use client";
import { useState } from "react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    { name: "Starter", price: billingCycle === "monthly" ? 0 : 0, desc: "For hobbyists" },
    { name: "Pro", price: billingCycle === "monthly" ? 29 : 24, desc: "For scaling teams" },
    { name: "Enterprise", price: "Custom", desc: "For global scale" },
  ];

  return (
    <section id="pricing" className="py-24 text-center">
      <div className="mb-10 inline-flex items-center rounded-full bg-white/5 p-1 border border-white/10">
        <button 
          onClick={() => setBillingCycle("monthly")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition ${billingCycle === "monthly" ? "bg-brand-primary text-white" : "text-slate-400"}`}
        >Monthly</button>
        <button 
          onClick={() => setBillingCycle("yearly")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition ${billingCycle === "yearly" ? "bg-brand-primary text-white" : "text-slate-400"}`}
        >Yearly (20% off)</button>
      </div>

      <div className="container mx-auto grid gap-8 px-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-brand-primary/50 transition">
            <h3 className="text-lg font-medium text-slate-400">{plan.name}</h3>
            <div className="mt-4 text-5xl font-bold">
              ${plan.price}<span className="text-lg text-slate-500">{typeof plan.price === 'number' && "/mo"}</span>
            </div>
            <p className="mt-4 text-sm text-slate-500">{plan.desc}</p>
            <button className="mt-8 w-full rounded-xl bg-white py-3 font-bold text-black hover:bg-brand-primary hover:text-white transition">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}