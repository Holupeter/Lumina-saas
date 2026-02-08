import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <BentoGrid />
      {/* This spacer helps us test the Navbar scroll effect */}
      <div className="h-screen bg-brand-dark" />
    </main>
  );
}
