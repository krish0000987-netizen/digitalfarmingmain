"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/plantation", label: "Plantation" },
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(14,46,31,0.08)] border-b border-stone-100" : "bg-white border-b border-stone-100 lg:bg-white/0 lg:bg-gradient-to-b lg:from-black/30 lg:to-transparent lg:border-transparent"} `}>
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[68px] lg:h-[84px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/digitalagro/logo.png" alt="Digital Agro Logo" className="w-10 h-10 object-contain rounded-full" />
            <div className="leading-tight">
              <div className={`font-bold text-[15px] tracking-tight leading-none ${scrolled ? "text-[#0e2e1f]" : "text-[#0e2e1f] lg:text-white"}`}>Digital Agro</div>
              <div className={`text-[11px] tracking-[0.18em] font-semibold uppercase ${scrolled ? "text-[#5a6b5a]" : "text-[#5a6b5a] lg:text-white/80"}`}>Farming Services</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={`px-3.5 py-2 rounded-full text-[13.5px] font-medium tracking-wide transition-all ${scrolled ? "text-[#2a3a2e] hover:bg-[#f4f1ea] hover:text-[#14532d]" : "text-white/90 hover:bg-white/15 hover:text-white"}`}>
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+919593069126" className="hidden lg:flex items-center gap-2 text-sm font-medium text-white/90">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center ${scrolled ? "bg-[#f4f1ea] text-[#14532d]" : "bg-white/15 text-white"}`}>☎</span>
              <span className={`${scrolled ? "text-[#0e2e1f]" : "text-white"} hidden xl:inline`}>+91 95930 69126</span>
            </a>
            <Link href="/contact" className="hidden md:inline-flex items-center gap-2 bg-[#14532d] hover:bg-[#0e3a1f] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all shadow-lg shadow-green-900/20">
              Contact Us
              <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">→</span>
            </Link>
            <a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20would%20like%20to%20know%20more%20about%20your%20agricultural%20services." target="_blank" className="hidden md:inline-flex w-11 h-11 rounded-full bg-[#25D366] text-white items-center justify-center hover:scale-105 transition-transform shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2C6.59 2 2.15 6.42 2.15 10.85c0 1.56.41 3.08 1.19 4.42L2 22l6.9-1.81a9.82 9.82 0 0 0 4.7 1.2h.01c5.45 0 9.89-4.42 9.89-9.85 0-2.63-1.03-5.1-2.9-6.97l.45.32Zm-7.01 15.24h-.01a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-4.1 1.07 1.1-3.99-.2-.4a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.26.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.54-3.7 8.23-8.25 8.23Zm6.88-6.17c-.37-.19-2.2-1.09-2.54-1.21-.34-.12-.59-.19-.84.19-.25.37-.97 1.21-1.19 1.46-.22.25-.45.28-.82.09-.37-.19-1.57-.58-2.99-1.85-1.11-.99-1.86-2.21-2.08-2.58-.22-.37-.02-.57.17-.76.17-.17.37-.45.56-.67.19-.22.25-.37.37-.62.12-.25.06-.47-.03-.66-.09-.19-.84-2.02-1.15-2.77-.3-.72-.61-.62-.84-.63l-.72-.01c-.25 0-.66.09-1 .47-.34.37-1.31 1.28-1.31 3.12s1.34 3.62 1.53 3.87c.19.25 2.64 4.03 6.4 5.65.89.38 1.59.61 2.13.78.9.28 1.71.24 2.36.15.72-.11 2.2-.9 2.51-1.77.31-.87.31-1.62.22-1.77-.09-.15-.34-.24-.71-.42Z"/></svg>
            </a>
            {/* Mobile hamburger */}
            <button onClick={() => setOpen(!open)} className={`xl:hidden w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.5 ${scrolled ? "bg-[#0e2e1f] text-white" : "bg-[#0e2e1f] text-white lg:bg-white/15 lg:text-white lg:backdrop-blur-md"}`}>
              <span className={`w-4 h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`w-4 h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-1" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`xl:hidden overflow-hidden transition-all duration-500 border-t border-stone-100 bg-white ${open ? "max-h-[520px] shadow-2xl" : "max-h-0"}`}>
        <nav className="px-4 py-6 grid grid-cols-2 gap-2">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="px-4 py-3.5 rounded-2xl bg-[#f8f5ee] hover:bg-[#14532d] hover:text-white text-sm font-medium text-[#0e2e1f] transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="px-4 pb-6 flex gap-2">
          <a href="tel:+919593069126" className="flex-1 bg-[#0e2e1f] text-white rounded-full py-3.5 text-center font-semibold">Call +91 95930 69126</a>
          <a href="https://wa.me/919593069126" target="_blank" className="flex-1 bg-[#25D366] text-white rounded-full py-3.5 text-center font-semibold">WhatsApp</a>
        </div>
      </div>
    </header>
  );
}
