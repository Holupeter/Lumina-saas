import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import LogoCloud from "@/components/LogoCloud";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";


export default function Home() {
  return (
    <main>
      <Hero />
      <LogoCloud />
      <BentoGrid />
      <Pricing />
      <FAQ />
    </main>
  );
}