"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? "bg-brand-dark/50 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto flex justify-between px-6">
        <span className="text-xl font-bold tracking-tighter">LUMINA</span>
        <button className="rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold hover:bg-brand-accent transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}