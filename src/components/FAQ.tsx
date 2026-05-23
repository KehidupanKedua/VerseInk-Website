/* ============================================
   FAQ SECTION
   6 FAQ cards in a 2-column grid.
   White cards on the light gray page background.
   ============================================ */

const faqs = [
  {
    question: "Is VerseInk free?",
    answer: "Yes. VerseInk is free to download and use.",
  },
  {
    question: "What Bible translations are available?",
    answer:
      "VerseInk supports multiple translations that you can download within the app. Choose a default or switch per verse.",
  },
  {
    question: "Do I need an internet connection?",
    answer:
      "Only to download Bible translations the first time. After that, your notes and verses are stored locally on your device and work fully offline.",
  },
  {
    question: "Is my data private?",
    answer:
      "Your notes stay on your device. We don't collect, read, or share your content.",
  },
  {
    question: "What devices are supported?",
    answer: "VerseInk is designed for iPhone, running iOS 17 or later.",
  },
  {
    question: "Will there be an iPad or Android version?",
    answer:
      "Yes! We're planning to take VerseInk to all devices. We're developing Android version after this. After that we'll develop the iPad version with added features. We'll also make a MacOS version, for more in-depth study.",
  },
];

export default function FAQ() {
  return (
    <section id="faqs" className="py-16 sm:py-24 px-6">
      <div className="mx-auto max-w-[1000px]">
        {/* Section Headline */}
        <h2 className="faq-heading text-3xl sm:text-4xl md:text-[40px] font-bold text-center mb-14 tracking-tight">
          Frequently Asked Questions
        </h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-card bg-card rounded-[24px] p-8"
            >
              <h3 className="text-lg font-bold mb-3 text-text-primary">
                {faq.question}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
