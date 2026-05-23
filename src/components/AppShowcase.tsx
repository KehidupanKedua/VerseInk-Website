import Image from "next/image";

/* ============================================
   APP SHOWCASE — MARQUEE
   Two-row infinite scrolling marquee of app
   screenshots. Top row scrolls left, bottom
   row scrolls right. Each row duplicates its
   images for a seamless infinite loop.
   ============================================ */

const topRow = [
  "/images/Marquee_1.png",
  "/images/Marquee_2.png",
  "/images/Marquee_3.png",
  "/images/Marquee_4.png",
];

const bottomRow = [
  "/images/Marquee_5.png",
  "/images/Marquee_6.png",
  "/images/Marquee_7.png",
  "/images/Marquee_8.png",
];

function MarqueeRow({
  images,
  direction,
}: {
  images: string[];
  direction: "left" | "right";
}) {
  // Duplicate images 3x for seamless loop
  const repeated = [...images, ...images, ...images];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-4 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ width: "max-content" }}
      >
        {repeated.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px]">
            <Image
              src={src}
              alt={`VerseInk app screenshot ${(i % images.length) + 1}`}
              width={550}
              height={1172}
              className="w-full h-auto rounded-2xl"
              quality={85}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AppShowcase() {
  return (
    <section id="showcase" className="py-16 sm:py-24 overflow-hidden">
      {/* Section Headline */}
      <h2 className="showcase-heading text-[1.5rem] font-normal text-center mb-14 tracking-tight px-6">
        Take a{" "}
        <em
          className="not-italic"
          style={{ fontFamily: "'New York', Georgia, serif", fontStyle: "italic" }}
        >
          peek
        </em>{" "}
        to our app
      </h2>

      {/* Marquee Rows */}
      <div className="flex flex-col gap-4">
        <MarqueeRow images={topRow} direction="left" />
        <MarqueeRow images={bottomRow} direction="right" />
      </div>
    </section>
  );
}
