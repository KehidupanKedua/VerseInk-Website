import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — VerseInk",
  description: "Terms and conditions for using the VerseInk app.",
};

/* ============================================
   TERMS OF USE PAGE
   Plain text legal page with consistent styling.
   ============================================ */
export default function TermsOfUse() {
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
          Terms of Use
        </h1>
        <p className="text-sm text-text-muted mb-12">
          Last updated: 23 May 2026
        </p>

        <div className="space-y-8 text-[15px] leading-relaxed text-text-secondary">
          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Acceptance of terms
            </h2>
            <p>
              By downloading, installing, or using VerseInk, you agree to be
              bound by these Terms of Use. If you do not agree, please do not
              use the app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Description of service
            </h2>
            <p>
              VerseInk is a free note-taking application for iPhone that allows
              users to write notes and embed Bible verses inline. The app
              includes a built-in Bible reader, multiple translation support,
              customisable verse card themes, and note organisation by category.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              User content
            </h2>
            <p>
              You retain full ownership of all notes and content you create in
              VerseInk. Your content is stored locally on your device and is not
              uploaded to any server. We do not access, read, or claim any
              rights over your content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Bible content
            </h2>
            <p>
              Bible translations available within VerseInk are provided under
              their respective licences. VerseInk facilitates access to these
              translations for personal, non-commercial use. Redistribution of
              Bible text outside the app may be subject to the terms of the
              individual translation&apos;s copyright holder.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Acceptable use
            </h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Reverse-engineer, decompile, or disassemble the app</li>
              <li>Attempt to extract or redistribute the Bible database files</li>
              <li>Use the app for any unlawful purpose</li>
              <li>Redistribute or resell the app or any part of it</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Availability and updates
            </h2>
            <p>
              We may update, modify, or discontinue VerseInk at any time
              without prior notice. We do not guarantee uninterrupted
              availability. Updates may be delivered through the Apple App Store
              and may include bug fixes, new features, or changes to existing
              functionality.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Data loss
            </h2>
            <p>
              Since all data is stored locally on your device, you are
              responsible for backing up your device. We are not liable for any
              loss of notes or data resulting from device failure, app removal,
              or iOS updates.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Limitation of liability
            </h2>
            <p>
              VerseInk is provided &ldquo;as is&rdquo; without warranties of
              any kind, either express or implied. To the fullest extent
              permitted by law, we disclaim all liability for damages arising
              from the use or inability to use the app, including but not
              limited to data loss, device issues, or service interruption.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Intellectual property
            </h2>
            <p>
              The VerseInk name, logo, design, and codebase are the
              intellectual property of their respective owners. All rights not
              expressly granted in these Terms are reserved.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Changes to these terms
            </h2>
            <p>
              We reserve the right to update these Terms of Use at any time.
              Changes will be reflected on this page with an updated revision
              date. Continued use of the app after changes constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Contact
            </h2>
            <p>
              If you have questions about these Terms, contact us at{" "}
              <a
                href="mailto:joychristian281@gmail.com"
                className="text-cta-blue hover:underline"
              >
                joychristian281@gmail.com
              </a>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
