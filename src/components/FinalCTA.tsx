/* ============================================
   FINAL CTA
   Bottom call-to-action section.
   - "VerseInk" brand mark
   - Large headline with serif italic + highlight
   - Waitlist button
   - "No spam" reassurance text
   ============================================ */
export default function FinalCTA() {
  return (
    <section id="waitlist" className="py-24 sm:py-32 px-6 text-center">
      <div className="mx-auto max-w-[800px]">
        {/* Brand mark */}
        <p className="cta-brand text-xl font-bold tracking-tight mb-8 text-text-primary">
          VerseInk
        </p>

        {/* Headline */}
        <h2 className="cta-heading text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.08] tracking-tight mb-12">
          Ready to write with
          <br />
          <em className="text-serif-italic not-italic font-normal italic">
            Scriptures
          </em>{" "}
          at your
          <br />
          <span className="highlight-accent">fingertips?</span>
        </h2>

        {/* CTA Button */}
        <a
          href="#waitlist"
          className="cta-button inline-flex items-center gap-1.5 bg-cta-blue text-white text-base font-semibold px-8 py-4 rounded-full hover:bg-blue-600 transition-colors mb-5"
        >
          Join the waitlist
          <span className="text-lg">&#8250;</span>
        </a>

        {/* Reassurance text */}
        <p className="text-sm text-text-muted">
          No spam. Just a launch-day notification.
        </p>
      </div>
    </section>
  );
}
