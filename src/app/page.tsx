import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* This spacer helps us test the Navbar scroll effect */}
      <div className="h-screen bg-brand-dark" />
    </main>
  );
}
