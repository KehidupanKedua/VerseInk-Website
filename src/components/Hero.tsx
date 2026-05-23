import Image from "next/image";

/* ============================================
   HERO SECTION
   - Large headline with mixed typography
   - "Join the waitlist" CTA
   - "Coming soon to App Store" sub-text
   - iPhone mockup showing the app
   ============================================ */
export default function Hero() {
  return (
    <section className="pt-32 pb-0 text-center overflow-hidden">
      <div className="mx-auto max-w-[900px] px-6">
        {/* Headline */}
        <h1
          className="hero-heading text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tight mb-10"
        >
          Taking{" "}
          <span className="text-underline-custom">notes</span>{" "}
          on
          <br />
          the{" "}
          <em className="text-serif-italic not-italic font-normal italic">Word</em>{" "}
          made{" "}
          <span className="highlight-accent">easier</span>
        </h1>

        {/* CTA Button */}
        <div className="hero-cta mb-5">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-1.5 bg-cta-blue text-white text-base font-semibold px-7 py-3.5 rounded-full hover:bg-blue-600 transition-colors"
          >
            Join the waitlist
            <span className="text-lg">&#8250;</span>
          </a>
        </div>

        {/* Sub-text */}
        <p className="hero-subtext text-sm text-text-muted mb-12">
          Coming soon to the{" "}
          <span className="inline-flex items-center gap-1 text-text-secondary">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store.
          </span>{" "}
          Free to download.
        </p>
      </div>

      {/* iPhone Mockup — image already includes the phone frame */}
      <div className="hero-phone mx-auto max-w-[340px] sm:max-w-[380px] relative">
        <Image
          src="/images/phone-hero.png"
          alt="VerseInk app showing Pinned Notes and All Notes screens"
          width={1200}
          height={2850}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>
    </section>
  );
}
