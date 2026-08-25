"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80&auto=format&fit=crop",
    imageMobile: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=75&auto=format&fit=crop",
    title: "Growing Better.",
    highlight: "Farming Smarter.",
    sub: "Building a Greener Future.",
    desc: "Professional agro farming and plantation solutions designed to cultivate healthy, productive and sustainable agricultural environments.",
  },
  {
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80&auto=format&fit=crop",
    imageMobile: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=75&auto=format&fit=crop",
    title: "Creating Green",
    highlight: "Spaces That Last.",
    sub: "Plantation for Generations.",
    desc: "From planning to nurturing — we help you build thriving plantations and green belts that grow for decades.",
  },
  {
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80&auto=format&fit=crop",
    imageMobile: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=75&auto=format&fit=crop",
    title: "Modern Farming",
    highlight: "Rooted in Nature.",
    sub: "Driven by Expertise.",
    desc: "Practical, responsible agricultural solutions blending traditional wisdom with modern sustainable practices.",
  },
  {
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80&auto=format&fit=crop",
    imageMobile: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=75&auto=format&fit=crop",
    title: "Cultivating",
    highlight: "Healthy Harvests.",
    sub: "Sustainably & Responsibly.",
    desc: "Soil care, water-conscious farming and long-term productivity — for farms that thrive today and tomorrow.",
  },
  {
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80&auto=format&fit=crop",
    imageMobile: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=75&auto=format&fit=crop",
    title: "Sunrise Over",
    highlight: "Greener Fields.",
    sub: "Your Farm, Our Passion.",
    desc: "Let's grow something that lasts. Talk to our team about your agricultural requirements today.",
  },
];

export default function HeroSlideshow() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 3000);
    return () => clearInterval(t);
  }, []);
  const s = slides[idx];
  return (
    <section className="relative min-h-[600px] sm:h-[78vh] sm:min-h-[560px] sm:max-h-[880px] overflow-hidden bg-[#0e2e1f]">
      {/* Images - eager loaded to prevent blank slides on mobile transitions */}
      {slides.map((slide, i) => (
        <div key={i} className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${i === idx ? "opacity-100 scale-100" : "opacity-0 scale-[1.04] pointer-events-none"}`}>
          <picture>
            <source media="(max-width: 640px)" srcSet={slide.imageMobile} />
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover object-center"
              loading="eager"
              decoding="async"
              fetchPriority={i === idx ? "high" : "low"}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f12]/90 via-[#0a1f12]/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f12]/70 via-transparent to-transparent hidden sm:block" />
        </div>
      ))}

      {/* Content - mobile optimized */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-24 sm:pt-16 pb-16 sm:pb-0">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#7bc47f] rounded-full animate-pulse" />
            <span className="text-white/90 text-[10px] sm:text-xs tracking-[0.14em] sm:tracking-[0.16em] uppercase font-semibold">Digital Agro Farming Services</span>
          </div>

          <h1 className="font-display font-bold leading-[0.95] tracking-tight text-white">
            <span className="block text-[30px] xs:text-[34px] sm:text-[48px] lg:text-[72px]">{s.title}</span>
            <span className="block text-[30px] xs:text-[34px] sm:text-[48px] lg:text-[72px] text-[#a8e0a8] italic font-normal">{s.highlight}</span>
            <span className="block text-[22px] xs:text-[26px] sm:text-[36px] lg:text-[52px] font-light opacity-90 mt-1">{s.sub}</span>
          </h1>

          <p className="text-white/80 text-[13px] sm:text-[15px] lg:text-[17px] leading-relaxed mt-4 sm:mt-6 max-w-xl text-balance line-clamp-3 sm:line-clamp-none">{s.desc}</p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8">
            <Link href="/services" className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#1a5c2a] hover:bg-[#144523] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide transition-colors shadow-xl shadow-black/20 min-h-[48px]">
              Explore Our Services <span className="w-7 h-7 bg-white/20 rounded-full hidden sm:flex items-center justify-center text-sm">→</span>
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#0e2e1f] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide hover:bg-[#f4f1ea] transition-colors min-h-[48px]">
              Contact Us
            </Link>
          </div>

          <div className="mt-5 sm:mt-8 hidden sm:block">
            <a href="tel:+919593069126" className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-white hover:bg-white hover:text-[#0e2e1f] transition-colors w-full sm:w-auto justify-center sm:justify-start">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white text-xs sm:text-sm shrink-0">☎</span>
              <span className="text-xs sm:text-sm font-semibold truncate">Call / WhatsApp: +91 95930 69126</span>
            </a>
          </div>

          {/* Dots - in-flow pagination so they can NEVER overlap with text/buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 mt-6 sm:mt-8 z-20">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`transition-all duration-500 rounded-full min-h-0 h-1.5 sm:h-2 ${i === idx ? "w-6 sm:w-8 bg-white" : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/80"}`} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator - desktop only */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-3 z-20">
        <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-semibold rotate-90 origin-center whitespace-nowrap">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>

      {/* Bottom fade - smaller on mobile */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-24 bg-gradient-to-t from-[#fdfcf8] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
