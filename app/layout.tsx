import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    default: "Digital Agro Farming Services — Growing Better. Farming Smarter.",
    template: "%s | Digital Agro Farming Services",
  },
  description: "Professional agro farming and plantation solutions designed to help cultivate healthy, productive and sustainable agricultural environments. Contact +91 95930 69126",
  keywords: ["agro farming services", "plantation services", "agriculture company", "farm development", "sustainable farming", "tree plantation"],
  openGraph: {
    title: "Digital Agro Farming Services — Growing Better. Farming Smarter.",
    description: "Professional agro farming and plantation solutions for a greener future.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#fdfcf8] text-[#0e2a1f] antialiased overflow-x-hidden">
        <Header />
        <main className="min-h-screen pt-[68px] lg:pt-0">{children}</main>
        <Footer />
        <div className="h-[84px] md:hidden" aria-hidden />
        <FloatingActions />
        {/* Mobile Bottom CTA — safe area aware */}
        <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-2 bg-white border-t border-stone-200 p-3 md:hidden shadow-[0_-8px_24px_rgba(0,0,0,0.08)] safe-pb">
          <a href="tel:+919593069126" className="flex-1 flex items-center justify-center gap-2 bg-[#0e2e1f] text-white rounded-full py-3.5 font-semibold text-[15px] tracking-wide min-h-[48px]">
            <span className="text-lg">📞</span> Call
          </a>
          <a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20would%20like%20to%20know%20more%20about%20your%20agricultural%20services." target="_blank" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-full py-3.5 font-semibold text-[15px] min-h-[48px]">
            <span className="text-lg">💬</span> WhatsApp
          </a>
        </div>
      </body>
    </html>
  );
}
