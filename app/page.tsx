import Link from "next/link";
import HeroSlideshow from "./components/HeroSlideshow";
import HappyFarmers from "./components/HappyFarmers";

export default function Home() {
  return (
    <div className="bg-[#fdfcf8]">
      <HeroSlideshow />

      {/* Trust Introduction */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#e8f5e9] rounded-full px-4 py-2 mb-5">
              <span className="w-1.5 h-1.5 bg-[#2e7d32] rounded-full" />
              <span className="text-[#14532d] text-xs font-semibold tracking-widest uppercase">Who We Are</span>
            </div>
            <h2 className="font-display text-[34px] lg:text-[48px] font-bold leading-[1.05] tracking-tight text-[#0e2e1f]">
              Professional Agro Farming <br />
              <span className="text-[#1a5c2a] italic font-normal">Solutions With a</span> <br />
              Passion for Growth
            </h2>
            <p className="text-[#5a6b5a] leading-relaxed mt-6 text-[15px] lg:text-[16px]">
              Digital Agro Farming Services is dedicated to helping cultivate healthy, productive and sustainable agricultural environments. We bring together practical expertise in agriculture, plantation, farm development and green space creation — delivering quality-focused solutions tailored to your land and vision.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                ["🌱", "Sustainable Practices", "Environment-first farming methods"],
                ["🌾", "Quality Focused", "Attention to every detail"],
                ["🤝", "Reliable Service", "Committed to your success"],
                ["🌳", "Green Development", "Building greener futures"],
              ].map(([icon, title, desc]) => (
                <div key={title} className="bg-white border border-stone-100 rounded-2xl p-5 card-hover">
                  <div className="text-xl mb-2">{icon}</div>
                  <div className="font-semibold text-sm text-[#0e2e1f]">{title}</div>
                  <div className="text-xs text-[#6b7c6b] mt-1 leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 mt-8 bg-[#0e2e1f] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-black transition-colors">Learn More About Us →</Link>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-green-900/10">
              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" alt="Premium farm" className="w-full h-[520px] lg:h-[640px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl p-6 shadow-xl border border-stone-100 max-w-[300px] hidden lg:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#e8f5e9] flex items-center justify-center">🌿</div>
                <div className="text-sm font-bold text-[#0e2e1f]">Cultivating Excellence</div>
              </div>
              <p className="text-xs text-[#6b7c6b] leading-relaxed">Professional agricultural solutions designed around your soil, climate and goals.</p>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#c9a86a]/10 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f8f5ee] py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-2 mb-4">
                <span className="w-1.5 h-1.5 bg-[#c9a86a] rounded-full" />
                <span className="text-xs font-semibold tracking-widest uppercase text-[#5a6b5a]">What We Do</span>
              </div>
              <h2 className="font-display text-[32px] lg:text-[44px] font-bold leading-none text-[#0e2e1f]">Comprehensive <span className="text-[#1a5c2a] italic font-normal">Agricultural</span> Services</h2>
            </div>
            <p className="max-w-md text-[#6b7c6b] text-sm leading-relaxed">From farm development to plantation management — practical solutions for every stage of your agricultural journey.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {[
              { title: "Agro Farming", desc: "Complete farming solutions from planning to harvest.", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80", icon: "🌾" },
              { title: "Plantation Services", desc: "Creating thriving green spaces that last generations.", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80", icon: "🌳" },
              { title: "Farm Development", desc: "Transforming land into productive agricultural spaces.", img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80", icon: "🏞️" },
              { title: "Tree Plantation", desc: "Large-scale plantation and green belt development.", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80", icon: "🌱" },
              { title: "Agricultural Solutions", desc: "Tailored strategies for your unique requirements.", img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80", icon: "⚙️" },
              { title: "Sustainable Farming", desc: "Responsible practices for long-term productivity.", img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80", icon: "♻️" },
              { title: "Farm Maintenance", desc: "Ongoing care to keep your farm at its best.", img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80", icon: "🔧" },
              { title: "Custom Solutions", desc: "Bespoke agricultural projects built around you.", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80", icon: "✨" },
            ].map((c) => (
              <div key={c.title} className="group bg-white rounded-[24px] overflow-hidden border border-stone-100 card-hover flex flex-col justify-between">
                <div>
                  <div className="h-28 sm:h-44 overflow-hidden relative">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-7 h-7 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center text-xs sm:text-sm shadow-md">{c.icon}</div>
                  </div>
                  <div className="p-3 sm:p-6">
                    <h3 className="font-semibold text-xs sm:text-base text-[#0e2e1f] truncate">{c.title}</h3>
                    <p className="text-[10px] sm:text-sm text-[#6b7c6b] leading-relaxed mt-1 sm:mt-2 min-h-[36px] sm:min-h-[40px] line-clamp-3 sm:line-clamp-none">{c.desc}</p>
                  </div>
                </div>
                <div className="p-3 pt-0 sm:p-6 sm:pt-0">
                  <Link href="/services" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1a5c2a] group-hover:gap-2.5 transition-all">Learn More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HappyFarmers />

      {/* Featured Products — Real Pricing */}
      <section className="bg-white py-16 lg:py-20 border-y border-stone-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#e8f5e9] rounded-full px-4 py-2 mb-4">
                <span className="w-1.5 h-1.5 bg-[#1a5c2a] rounded-full" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#14532d]">Products • Real Pricing</span>
              </div>
              <h2 className="font-display text-[32px] lg:text-[44px] font-bold leading-none text-[#0e2e1f]">Our Best-Selling <span className="italic font-normal text-[#1a5c2a]">Products</span></h2>
              <p className="text-[#6b7c6b] text-sm mt-3">From your <b>products</b> folder — pricing exactly as per file names, now live with real bottle images.</p>
            </div>
            <Link href="/products" className="inline-flex items-center gap-2 border border-stone-200 bg-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#0e2e1f] hover:text-white">View All Products →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
            {[
              { name: "ACTIVE-80", var: "100 ml", price: "₹140", img: "/products/active-80-100ml-140.jpg", tag: "100ml" },
              { name: "ACTIVMAX", var: "100 ml", price: "₹180", img: "/products/activmax-100ml-180.jpg", tag: "100ml" },
              { name: "ACTIVE-80 GOLD", var: "500 ml", price: "₹700", img: "/products/active-80-gold-500ml-700.jpg", tag: "GOLD" },
              { name: "ACTIVMAX", var: "500 ml", price: "₹800", img: "/products/activmax-500ml-800.jpg", tag: "Best Seller" },
              { name: "ACTIVE-80", var: "5 Ltr", price: "₹4,500", img: "/products/active-80-5ltr-4500.jpg", tag: "5 LTR" },
            ].map((p) => (
              <Link key={p.name + p.var} href="/products" className="group bg-[#fdfcf8] rounded-[24px] border border-stone-100 overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between">
                <div className="bg-white p-4 sm:p-6 flex flex-col items-center h-44 sm:h-56 justify-between">
                  <span className="self-start bg-[#0e2e1f] text-white text-[9px] sm:text-[10px] font-bold tracking-widest px-2 py-1 rounded-full">{p.tag}</span>
                  <img src={p.img} alt={p.name} className="w-20 h-24 sm:w-28 sm:h-32 object-contain mt-1 group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-3 sm:p-4 bg-white border-t border-stone-100 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-[#0e2e1f] leading-tight truncate">{p.name}</div>
                    <div className="text-[10px] sm:text-xs text-[#6b7c6b] mt-0.5">{p.var}</div>
                  </div>
                  <div className="flex items-center justify-between mt-2.5 sm:mt-3">
                    <span className="bg-[#e8f5e9] text-[#0e2e1f] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-bold text-xs sm:text-sm">{p.price}</span>
                    <span className="text-[10px] sm:text-xs font-bold text-[#1a5c2a] group-hover:gap-1 flex items-center gap-0.5">Order →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 bg-[#0e2e1f] rounded-2xl px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-white">
            <span className="text-sm">💬 Order any product on WhatsApp — instant price confirmation at <b>+91 95930 69126</b></span>
            <a href="https://wa.me/919593069126?text=Hello%20I%20want%20product%20price%20list" target="_blank" className="bg-[#25D366] text-white px-6 py-2.5 rounded-full font-bold text-sm whitespace-nowrap">Get Price List</a>
          </div>

          {/* ACTIVMAX 100ml • ₹180 — Full Details on Homepage */}
          <div className="mt-8 bg-gradient-to-br from-[#e3f2fd] to-white rounded-[28px] border-2 border-[#90caf9] overflow-hidden">
            <div className="grid lg:grid-cols-[360px_1fr] gap-0">
              <div className="bg-white p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-stone-100">
                <div className="bg-[#0e2e1f] text-white text-[11px] font-bold tracking-widest px-3 py-1.5 rounded-full mb-4">FEATURED • 100ML • ₹180</div>
                <img src="/products/activmax-100ml-180.jpg" alt="ACTIVMAX 100ml" className="w-40 h-52 object-contain" />
                <h3 className="font-display text-xl font-bold text-[#0e2e1f] mt-4">ACTIVMAX</h3>
                <p className="text-xs font-bold tracking-widest uppercase text-[#1a5c2a]">Seaweed Extract Biostimulant</p>
                <div className="mt-3 bg-[#c9a86a] text-[#0e2e1f] px-6 py-2 rounded-full font-bold text-sm">100 ml — ₹180</div>
                <a href="https://wa.me/919593069126?text=Hello%20I%20want%20to%20order%20ACTIVMAX%20100ml%20at%20Rs.180" target="_blank" className="mt-4 w-full bg-[#1a5c2a] text-white rounded-full py-3 font-bold text-sm text-center hover:bg-black">Order Now →</a>
                <Link href="/products" className="mt-2 text-xs font-bold text-[#1a5c2a]">View All Details →</Link>
              </div>
              <div className="p-6 lg:p-8">
                <div className="inline-flex items-center gap-2 bg-[#e8f5e9] rounded-full px-3 py-1.5 mb-3">
                  <span className="w-1.5 h-1.5 bg-[#1a5c2a] rounded-full" />
                  <span className="text-xs font-bold tracking-widest uppercase text-[#0e2e1f]">Seaweed Extract • Safe & Organic</span>
                </div>
                <h4 className="font-display text-lg font-bold text-[#0e2e1f] leading-tight">ACTIVMAX — Derived from Seaweed Extracts</h4>
                <p className="text-sm text-[#0e2e1f] leading-relaxed mt-3">Promotes plant growth, improves photosynthetic activity, protects from environmental stress, improves absorption & transport of nutrients. <b>Safe & non-toxic</b> — maximizes growth, yield, germination, root growth, flowering & fruiting.</p>
                <div className="grid md:grid-cols-2 gap-3 mt-5">
                  <ul className="space-y-1.5 text-xs text-[#0e2e1f] bg-white rounded-2xl p-4 border border-stone-100">
                    <li className="flex gap-2"><span className="text-[#1a5c2a]">✓</span> Better fruit quality & soil micro flora</li>
                    <li className="flex gap-2"><span className="text-[#1a5c2a]">✓</span> 60+ minerals & 21 amino acids</li>
                    <li className="flex gap-2"><span className="text-[#1a5c2a]">✓</span> Hydrolyzed Proteins, Humic Acid</li>
                    <li className="flex gap-2"><span className="text-[#1a5c2a]">✓</span> Polysaccharides, Oceanic Extract</li>
                  </ul>
                  <div className="bg-white rounded-2xl p-4 border border-stone-100">
                    <div className="text-xs font-bold tracking-widest uppercase text-[#5a6b5a]">Used For</div>
                    <p className="text-xs text-[#1a5c2a] font-medium leading-relaxed mt-1">Paddy, Wheat, Sugarcane, Cotton, Chilli, Potato, Tomato, Soyabean, Onion, Garlic, Apple, Banana, Grapes, Tea + all field & horticulture crops</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agriculture Showcase Masonry */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#e8f5e9] rounded-full px-4 py-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#2e7d32] rounded-full" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#14532d]">Our World</span>
          </div>
          <h2 className="font-display text-[32px] lg:text-[44px] font-bold leading-none text-[#0e2e1f]">Agriculture <span className="italic font-normal text-[#1a5c2a]">in Focus</span></h2>
          <p className="text-[#6b7c6b] text-sm mt-4">A glimpse into the fields, plantations and landscapes we help cultivate.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[200px]">
          <div className="rounded-[24px] overflow-hidden row-span-2">
            <img src="/digitalagro/farmer-1.jpg" alt="Happy Farmer — Ridge Gourd" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[24px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80" alt="Plantation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[24px] overflow-hidden row-span-2">
            <img src="/digitalagro/farmer-4.jpg" alt="Sapan Sarkar — Chilli & Ginger" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[24px] overflow-hidden">
            <img src="/digitalagro/farmer-5.jpg" alt="Paddy Field BioVera" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[24px] overflow-hidden">
            <img src="/digitalagro/farmer-7.jpg" alt="Brinjal Farmer" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[24px] overflow-hidden">
            <img src="/digitalagro/farmer-6.jpg" alt="Independence Day Farmer" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[24px] overflow-hidden lg:col-span-2">
            <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1000&q=80" alt="Agriculture" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[24px] overflow-hidden hidden lg:block">
            <img src="/digitalagro/farmer-2.jpg" alt="Ridge Gourd Farmer" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/gallery" className="inline-flex items-center gap-2 border border-stone-200 bg-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#0e2e1f] hover:text-white hover:border-[#0e2e1f] transition-colors">View Full Gallery →</Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0e2e1f] relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80")`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-[#0e2e1f]/90" />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-4">
                <span className="w-1.5 h-1.5 bg-[#7bc47f] rounded-full" />
                <span className="text-xs font-semibold tracking-widest uppercase text-white/80">Why Choose Us</span>
              </div>
              <h2 className="font-display text-[32px] lg:text-[44px] font-bold leading-none text-white">Built on Trust. <br /><span className="italic font-normal text-[#a8e0a8]">Grown with Care.</span></h2>
            </div>
            <p className="max-w-md text-white/60 text-sm leading-relaxed">We combine agricultural insight with a commitment to quality, sustainability and customer-focused service.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Quality Focused", desc: "Every project receives meticulous attention to detail and a commitment to lasting results.", icon: "◆" },
              { title: "Professional Approach", desc: "Structured planning, clear communication and reliable execution at every stage.", icon: "⬢" },
              { title: "Sustainable Practices", desc: "Responsible farming methods that protect soil, water and biodiversity.", icon: "✦" },
              { title: "Reliable Service", desc: "Dependable support from consultation through implementation and maintenance.", icon: "◈" },
              { title: "Agriculture Expertise", desc: "Practical knowledge across farming, plantation and land development.", icon: "❖" },
              { title: "Customer-Focused", desc: "Solutions adapted to your land, climate and agricultural goals.", icon: "⟡" },
            ].map((c) => (
              <div key={c.title} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-7 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#1a5c2a] flex items-center justify-center text-white text-sm mb-5">{c.icon}</div>
                <h3 className="font-semibold text-white">{c.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plantation Banner */}
      <section className="relative h-[420px] lg:h-[520px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80" alt="Plantation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0e2e1f]/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="font-display text-[36px] lg:text-[56px] font-bold text-white leading-none">Let’s Grow Something <br /><span className="italic font-normal text-[#a8e0a8]">That Lasts.</span></h2>
          <p className="text-white/80 text-sm lg:text-base mt-4 max-w-xl">Whether it’s a farm, plantation or green belt — let’s create landscapes that thrive for generations.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-3 bg-white text-[#0e2e1f] px-8 py-4 rounded-full font-semibold hover:bg-[#f4f1ea] transition-colors">Talk to Our Team <span className="w-7 h-7 bg-[#0e2e1f] text-white rounded-full flex items-center justify-center text-xs">→</span></Link>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#f8f5ee] border border-stone-200 rounded-full px-4 py-2 mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#5a6b5a]">How We Work</span>
          </div>
          <h2 className="font-display text-[32px] lg:text-[44px] font-bold leading-none text-[#0e2e1f]">From Vision <span className="italic font-normal text-[#1a5c2a]">to Harvest</span></h2>
          <p className="text-[#6b7c6b] text-sm mt-4">A clear, structured process that ensures every project is planned and executed with precision.</p>
        </div>

        {/* Desktop horizontal */}
        <div className="hidden lg:grid grid-cols-5 gap-6 relative">
          <div className="absolute top-[42px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#c9a86a]/40 to-transparent" />
          {[
            { n: "01", t: "Consultation", d: "Understand your goals, land and requirements in detail." },
            { n: "02", t: "Site Assessment", d: "Evaluate soil, water, climate and site conditions." },
            { n: "03", t: "Planning", d: "Create a tailored agricultural and plantation plan." },
            { n: "04", t: "Implementation", d: "Execute with professional care and precision." },
            { n: "05", t: "Maintenance", d: "Ongoing support to ensure long-term success." },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-white border-2 border-[#e8f5e9] flex flex-col items-center justify-center shadow-lg relative">
                <span className="text-xs font-bold tracking-widest text-[#1a5c2a]">{s.n}</span>
                <span className="w-1 h-1 bg-[#c9a86a] rounded-full mt-1" />
              </div>
              <h3 className="font-semibold text-[#0e2e1f] mt-4">{s.t}</h3>
              <p className="text-xs text-[#6b7c6b] leading-relaxed mt-2">{s.d}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden relative">
          <div className="absolute left-[22px] top-4 bottom-4 w-px bg-[#e8e8e0]" />
          <div className="space-y-6">
            {[
              { n: "01", t: "Consultation", d: "Understand your goals, land and requirements in detail." },
              { n: "02", t: "Site Assessment", d: "Evaluate soil, water, climate and site conditions." },
              { n: "03", t: "Planning", d: "Create a tailored agricultural and plantation plan." },
              { n: "04", t: "Implementation", d: "Execute with professional care and precision." },
              { n: "05", t: "Maintenance", d: "Ongoing support to ensure long-term success." },
            ].map((s) => (
              <div key={s.n} className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-[#0e2e1f] text-white flex items-center justify-center text-xs font-bold shrink-0 z-10">{s.n}</div>
                <div className="bg-white border border-stone-100 rounded-2xl p-5 flex-1">
                  <h3 className="font-semibold text-[#0e2e1f] text-sm">{s.t}</h3>
                  <p className="text-xs text-[#6b7c6b] mt-1">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-4 lg:mx-8 mb-8">
        <div className="max-w-[1440px] mx-auto bg-gradient-to-br from-[#0e2e1f] via-[#14532d] to-[#1a5c2a] rounded-[32px] overflow-hidden relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80")`, backgroundSize: "cover" }} />
          <div className="relative grid lg:grid-cols-2 gap-8 px-8 lg:px-12 py-12 lg:py-16 items-center">
            <div>
              <h2 className="font-display text-[30px] lg:text-[42px] font-bold leading-none text-white">Ready to Build a <br /><span className="italic font-normal text-[#a8e0a8]">Healthier, Greener Farm?</span></h2>
              <p className="text-white/70 text-sm leading-relaxed mt-4 max-w-md">Contact Digital Agro Farming Services today to discuss your agricultural requirements. We’re ready to help you grow.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <a href="tel:+919593069126" className="inline-flex items-center justify-center gap-2 bg-white text-[#0e2e1f] px-8 py-4 rounded-full font-bold hover:bg-[#f4f1ea] transition-colors">📞 Call Now</a>
              <a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20would%20like%20to%20know%20more%20about%20your%20agricultural%20services." target="_blank" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1fb255] transition-colors">💬 WhatsApp Us</a>
            </div>
          </div>
          <div className="relative border-t border-white/10 px-8 lg:px-12 py-4 flex flex-wrap items-center justify-between gap-3 text-sm text-white/60">
            <span>📞 +91 95930 69126 — Available for consultations</span>
            <Link href="/contact" className="text-white font-semibold hover:text-[#a8e0a8]">Get in touch →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
