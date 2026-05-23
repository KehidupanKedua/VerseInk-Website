import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — VerseInk",
  description: "How VerseInk handles your data. Your notes stay on your device.",
};

/* ============================================
   PRIVACY POLICY PAGE
   Plain text legal page with consistent styling.
   ============================================ */
export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen px-6 py-20">
      <article className="mx-auto max-w-[640px]">
        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors mb-10"
        >
          <span>&#8249;</span> Back to home
        </a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-text-muted mb-12">
          Last updated: 23 May 2026
        </p>

        <div className="space-y-8 text-[15px] leading-relaxed text-text-secondary">
          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Overview
            </h2>
            <p>
              VerseInk is built with privacy at its core. We believe your notes
              are personal, and we have no interest in reading, collecting, or
              selling them. This policy explains what data we handle and what we
              don&apos;t.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Data that stays on your device
            </h2>
            <p className="mb-3">
              All of the following data is stored locally on your iPhone and
              never leaves your device:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Your notes and their content</li>
              <li>Embedded Bible verses and selected translations</li>
              <li>Categories and organisational structure</li>
              <li>App preferences (appearance, default translation, verse card colour)</li>
              <li>Downloaded Bible translation databases</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Data we collect
            </h2>
            <p>
              VerseInk does not collect personal information. We do not require
              account creation, sign-in, or any identifying information to use
              the app. We do not use analytics, tracking pixels, or advertising
              SDKs.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Internet usage
            </h2>
            <p>
              VerseInk requires an internet connection only to download Bible
              translation databases when you first add a translation. After
              download, all Bible data is stored locally and the app works fully
              offline.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Third-party services
            </h2>
            <p>
              VerseInk does not integrate with any third-party analytics,
              advertising, or data-processing services. We do not share your
              data with anyone.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Apple App Store
            </h2>
            <p>
              VerseInk is distributed through the Apple App Store. Apple may
              collect certain data as described in their own privacy policy.
              This is outside of our control and governed by Apple&apos;s terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Data deletion
            </h2>
            <p>
              Since all data is stored locally on your device, you can delete
              everything by removing the app. Uninstalling VerseInk permanently
              deletes all notes, preferences, and downloaded Bible data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Children&apos;s privacy
            </h2>
            <p>
              VerseInk does not knowingly collect personal information from
              children. The app does not require any personal data to function.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date. Continued
              use of the app after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:dtclients@digitaltreasury.com.au"
                className="text-cta-blue hover:underline"
              >
                dtclients@digitaltreasury.com.au
              </a>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
