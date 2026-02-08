import Link from "next/link";
import { Github, Twitter, Linkedin, Send } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Changelog", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  Legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Security", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tighter text-white">
              LUMINA<span className="text-brand-primary">.</span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              Next-generation observability for modern web teams. Built for speed, engineered for precision.
            </p>
            <div className="mt-6 flex gap-4">
              <Github className="h-5 w-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {category}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-brand-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter / Bottom Section */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Lumina Analytics Inc. All rights reserved.
          </p>
          <div className="mt-4 flex w-full max-w-sm items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-1 md:mt-0">
            <input 
              type="email" 
              placeholder="Join our newsletter" 
              className="w-full bg-transparent px-3 py-1 text-sm text-white outline-none placeholder:text-slate-600"
            />
            <button className="rounded-md bg-white px-3 py-1 text-xs font-bold text-black hover:bg-brand-primary hover:text-white transition-all">
              <Send className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}