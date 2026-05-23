"use client";


/* ============================================
   NAVBAR
   Sticky navigation bar with scroll-based blur effect.
   - "VerseInk" wordmark on the left
   - Features / Showcase / FAQs links in a pill container
   - "Join waitlist" blue CTA button
   ============================================ */
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1200px] px-6 py-2 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="text-xl font-bold tracking-tight text-text-primary">
          VerseInk
        </a>

        {/* Glass pill — nav links + CTA */}
        <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full border border-white/30 bg-white/40 backdrop-blur-xl shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
          <a
            href="#features"
            className="px-4 py-2 text-sm font-medium text-text-primary hover:text-text-secondary transition-colors rounded-full"
          >
            Features
          </a>
          <a
            href="#showcase"
            className="px-4 py-2 text-sm font-medium text-text-primary hover:text-text-secondary transition-colors rounded-full"
          >
            Showcase
          </a>
          <a
            href="#faqs"
            className="px-4 py-2 text-sm font-medium text-text-primary hover:text-text-secondary transition-colors rounded-full"
          >
            FAQs
          </a>

          {/* CTA Button */}
          <a
            href="#waitlist"
            className="bg-cta-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-600 transition-colors flex items-center gap-1 ml-1"
          >
            Join waitlist
            <span className="text-base">&#8250;</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
