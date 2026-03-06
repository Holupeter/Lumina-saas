export default function LogoCloud() {
  const logos = ["Vercel", "Stripe", "Airbnb", "GitHub", "Linear", "Netflix"];

  const logoGroup = logos.map((logo, i) => (
    <span
      key={i}
      className="text-2xl font-bold text-slate-600 grayscale hover:grayscale-0 transition cursor-default whitespace-nowrap"
    >
      {logo}
    </span>
  ));

  return (
    <div className="w-full border-y border-white/5 bg-brand-dark/50 py-10 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
        Trusted by the world&apos;s most innovative teams
      </p>
      <div className="flex animate-[scroll_20s_linear_infinite]">
        <div className="flex shrink-0 min-w-full justify-around gap-20 px-10">
          {logoGroup}
        </div>
        <div className="flex shrink-0 min-w-full justify-around gap-20 px-10">
          {logoGroup}
        </div>
      </div>
    </div>
  );
}