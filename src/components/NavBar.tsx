"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Changelog", href: "#changelog" },
    { name: "Docs", href: "/docs" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? "bg-brand-dark/50 backdrop-blur-md border-b border-white/10 py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tighter text-white dark:text-white light:text-slate-900 transition-colors"
                >
                    LUMINA
                </Link>

                <div className="hidden space-x-8 lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-400 hover:text-white dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <button className="rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white hover:bg-brand-accent transition shadow-lg shadow-brand-primary/20">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
