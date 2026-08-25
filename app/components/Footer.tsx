import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a1f12] text-white relative overflow-hidden">
      {/* subtle pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 lg:gap-8 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/digitalagro/logo.png" alt="Digital Agro Logo" className="w-11 h-11 object-contain rounded-full bg-white/10 p-0.5" />
              <div>
                <div className="font-bold leading-none">Digital Agro</div>
                <div className="text-xs tracking-[0.18em] uppercase text-white/60">Farming Services</div>
              </div>
            </div>
            <p className="text-white/65 leading-relaxed text-sm max-w-sm">
              Professional agro farming and plantation solutions designed to help cultivate healthy, productive and sustainable agricultural environments. Growing better, farming smarter.
            </p>
            <div className="flex gap-3 mt-6">
              {["F", "In", "Ig", "Yt"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1a5c2a] flex items-center justify-center text-xs font-semibold transition-colors">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-5 tracking-wide text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/65">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Plantation", "/plantation"],
                ["Products", "/products"],
                ["Gallery", "/gallery"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([l, h]) => (
                <li key={l}><Link href={h} className="hover:text-white hover:pl-1 transition-all">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 tracking-wide text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li><Link href="/services" className="hover:text-white">Agro Farming</Link></li>
              <li><Link href="/plantation" className="hover:text-white">Plantation</Link></li>
              <li><Link href="/services" className="hover:text-white">Farm Development</Link></li>
              <li><Link href="/sustainability" className="hover:text-white">Sustainable Agriculture</Link></li>
              <li><Link href="/solutions" className="hover:text-white">Farming Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 tracking-wide text-sm">Contact</h4>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-white/50 text-xs uppercase tracking-widest mb-1">Phone / WhatsApp</div>
                <a href="tel:+919593069126" className="text-lg font-semibold text-white hover:text-[#7bc47f]">+91 95930 69126</a>
              </div>
              <div>
                <div className="text-white/50 text-xs uppercase tracking-widest mb-1">Business Enquiry</div>
                <p className="text-white/70">Available for consultation and project discussions</p>
              </div>
              <div className="flex gap-2 pt-2">
                <a href="tel:+919593069126" className="flex-1 bg-white text-[#0a1f12] rounded-full py-3 text-center font-semibold text-sm hover:bg-[#f4f1ea]">Call Now</a>
                <a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20would%20like%20to%20know%20more%20about%20your%20agricultural%20services." target="_blank" className="flex-1 bg-[#25D366] text-white rounded-full py-3 text-center font-semibold text-sm">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm text-white/50">
          <p>© 2026 Digital Agro Farming Services. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#7bc47f] rounded-full animate-pulse" /> Growing Better. Farming Smarter.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
