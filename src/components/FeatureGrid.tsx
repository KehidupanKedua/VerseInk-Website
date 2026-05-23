import Image from "next/image";

/* ============================================
   FEATURE GRID
   6 feature cards in a 3×2 grid.
   Top row: Embed verse inline, Write with purpose, Built-in Bibles
   Bottom row: Make it yours, Stay organised, Dark mode
   The Dark mode card has a black background.
   ============================================ */

const features = [
  {
    title: "Embed verse inline.",
    description:
      "Verses sit between your paragraphs. Search any passage, pick your translation, and drop a beautifully styled verse card right into your note.",
    visual: "/images/card-embed-visual.png",
    dark: false,
  },
  {
    title: "Write with purpose.",
    description:
      "A clean, distraction-free editor with the formatting you actually use: bold, italic, headings, bullet lists, numbered lists, and checklists.",
    visual: "/images/card-editor-visual.png",
    dark: false,
  },
  {
    title: "Built-in Bibles.",
    description:
      "A full-screen Bible reader is built in. Swipe between chapters, switch translations, adjust the font, and select any verse to send it straight into a new or existing note.",
    visual: "/images/card-bible-visual.png",
    dark: false,
  },
  {
    title: "Make it yours.",
    description:
      "Choose from six verse card colour themes. Neon lime, soft lavender, pale sky, warm peach, mint, or plain. Each one looks great in light mode and dark mode.",
    visual: "/images/card-colors-visual.png",
    dark: false,
  },
  {
    title: "Stay organised.",
    description:
      "Group your notes by category — sermon notes, personal notes, or whatever works for you. Search across everything and find notes grouped by month.",
    visual: "/images/card-categories-visual.png",
    dark: false,
  },
  {
    title: "Dark mode.",
    description:
      "Every screen, every card, every colour adapts. VerseInk looks as good at midnight as it does at midday.",
    visual: "/images/card-darkmode-visual.png",
    dark: true,
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 sm:py-24 px-6">
      <div className="mx-auto max-w-[1100px]">
        {/* Section Headline */}
        <h2 className="features-heading text-[1.5rem] font-normal text-center mb-14 tracking-tight">
          Everything you need, and{" "}
          <em
            className="not-italic"
            style={{ fontFamily: "'New York', Georgia, serif", fontStyle: "italic" }}
          >
            personalised.
          </em>
        </h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card rounded-[24px] overflow-hidden ${
                feature.dark
                  ? "bg-card-dark text-white"
                  : "bg-card text-text-primary"
              }`}
            >
              {/* Text Content — 32px padding, center-aligned */}
              <div className="p-8 text-center">
                <h3 className="text-xl font-medium tracking-tighter mb-8">{feature.title}</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    feature.dark ? "text-gray-400" : "text-text-secondary"
                  }`}
                >
                  {feature.description}
                </p>
              </div>

              {/* Visual Content */}
              <div className={`px-8 ${feature.dark ? "flex items-center justify-center py-8" : "mt-8"}`}>
                <Image
                  src={feature.visual}
                  alt={feature.title}
                  width={600}
                  height={700}
                  className={`h-auto ${feature.dark ? "w-28" : "w-full rounded-t-2xl"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
