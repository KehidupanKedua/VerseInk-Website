import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — VerseInk",
  description:
    "Get help with VerseInk. Find answers to common questions or contact us directly.",
};

/* ============================================
   SUPPORT PAGE
   Help centre with common topics + contact info.
   ============================================ */

const topics = [
  {
    title: "Getting started",
    items: [
      {
        q: "How do I create a note?",
        a: "Tap the + button on the home screen. Choose a category (or leave the default), give your note a title, and start writing.",
      },
      {
        q: "How do I embed a Bible verse?",
        a: "While editing a note, tap the + button in the toolbar and select \"Insert Verse\". Search for a passage, pick your translation, and the verse card will be placed right where your cursor is.",
      },
      {
        q: "How do I change the verse card colour?",
        a: "Tap the three-dot menu (…) on any verse card inside your note, then select a colour theme. There are six options: neon lime, soft lavender, pale sky, warm peach, mint, and plain.",
      },
    ],
  },
  {
    title: "Bible translations",
    items: [
      {
        q: "How do I download a Bible translation?",
        a: "Go to Settings > Bible Versions. Browse the available translations and tap Download. Once downloaded, the translation is stored on your device and works offline.",
      },
      {
        q: "How do I change my default translation?",
        a: "Go to Settings > Default Bible Version and select your preferred translation. New verse insertions will use this translation by default.",
      },
      {
        q: "Can I use multiple translations in one note?",
        a: "Yes. Each verse card is independent — you can choose a different translation for each verse you embed.",
      },
    ],
  },
  {
    title: "Notes and organisation",
    items: [
      {
        q: "How do I organise my notes into categories?",
        a: "When creating or editing a note, tap the category pill at the top to assign it. You can create custom categories like \"Sermon Notes\", \"Personal Reflections\", or whatever works for you.",
      },
      {
        q: "Is there a limit to how many notes I can create?",
        a: "No. You can create as many notes as you like. The only limit is your device’s storage.",
      },
      {
        q: "Can I search my notes?",
        a: "Yes. Use the search bar on the home screen to find notes by title or content. Notes are also grouped by month for easy browsing.",
      },
    ],
  },
  {
    title: "Privacy and data",
    items: [
      {
        q: "Where is my data stored?",
        a: "Everything is stored locally on your iPhone. Your notes, preferences, and downloaded Bible translations never leave your device.",
      },
      {
        q: "How do I delete all my data?",
        a: "Uninstalling VerseInk will permanently remove all notes, settings, and downloaded Bibles from your device.",
      },
      {
        q: "Do you collect any personal information?",
        a: "No. VerseInk does not require sign-in, does not use analytics, and does not collect any personal data. See our Privacy Policy for full details.",
      },
    ],
  },
];

export default function Support() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-[720px]">
        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors mb-10"
        >
          <span>&#8249;</span> Back to home
        </a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Support
        </h1>
        <p className="text-text-secondary text-[15px] leading-relaxed mb-14">
          Find answers to common questions below. If you need further help,
          reach out to us directly.
        </p>

        {/* Help topics */}
        <div className="space-y-12">
          {topics.map((topic, ti) => (
            <section key={ti}>
              <h2 className="text-xl font-semibold text-text-primary mb-5 tracking-tight">
                {topic.title}
              </h2>
              <div className="space-y-4">
                {topic.items.map((item, qi) => (
                  <div
                    key={qi}
                    className="bg-card rounded-2xl p-6"
                  >
                    <h3 className="text-[15px] font-semibold text-text-primary mb-2">
                      {item.q}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact section */}
        <section className="mt-16 bg-card rounded-2xl p-8 text-center">
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            Still need help?
          </h2>
          <p className="text-sm text-text-secondary mb-5 leading-relaxed">
            We&apos;re happy to help with any questions, feedback, or issues.
          </p>
          <a
            href="mailto:joychristian281@gmail.com"
            className="inline-flex items-center gap-1.5 bg-cta-blue text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Contact us
            <span className="text-base">&#8250;</span>
          </a>
          <p className="text-xs text-text-muted mt-4">
            joychristian281@gmail.com
          </p>
        </section>

        {/* Footer links */}
        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-text-muted">
          <a href="/privacy" className="hover:text-text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-text-primary transition-colors">
            Terms of Use
          </a>
        </div>
      </div>
    </main>
  );
}
