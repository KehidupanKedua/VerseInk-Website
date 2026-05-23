/* ============================================
   FOOTER
   Simple centered footer with nav links and copyright.
   ============================================ */
export default function Footer() {
  return (
    <footer className="pb-12 pt-4 px-6 text-center">
      {/* Nav Links */}
      <div className="flex items-center justify-center gap-8 mb-6">
        <a
          href="/support"
          className="text-sm font-medium text-text-primary hover:text-text-secondary transition-colors"
        >
          Support
        </a>
        <a
          href="/privacy"
          className="text-sm font-medium text-text-primary hover:text-text-secondary transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          className="text-sm font-medium text-text-primary hover:text-text-secondary transition-colors"
        >
          Terms of Use
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-text-muted">
        &copy; 2026 VerseInk. All rights reserved.
      </p>
    </footer>
  );
}
