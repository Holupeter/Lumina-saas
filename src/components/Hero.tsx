export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center px-6">
      <h1 className="animate-reveal text-6xl font-black md:text-8xl lg:text-9xl">
        Build <span className="text-brand-primary">Faster.</span>
      </h1>
      <p className="animate-reveal [animation-delay:200ms] opacity-0 mt-6 max-w-xl text-lg text-slate-400">
        The 2026 standard for observability. Monitor your Next.js apps with zero overhead and beautiful analytics.
      </p>
      <div className="animate-reveal [animation-delay:400ms] opacity-0 mt-10 flex gap-4">
        <button className="rounded-full bg-white px-8 py-4 font-bold text-black hover:bg-slate-200 transition">
          Deploy Now
        </button>
      </div>
    </section>
  );
}