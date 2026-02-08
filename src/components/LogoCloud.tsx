export default function LogoCloud() {
  const logos = ["Vercel", "Stripe", "Airbnb", "GitHub", "Linear", "Netflix"];
  
  return (
    <div className="w-full border-y border-white/5 bg-brand-dark/50 py-10 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
        Trusted by the world's most innovative teams
      </p>
      <div className="flex w-[200%] animate-[scroll_20s_linear_infinite] gap-20">
        {[...logos, ...logos].map((logo, i) => (
          <span key={i} className="text-2xl font-bold text-slate-600 grayscale hover:grayscale-0 transition cursor-default">
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}