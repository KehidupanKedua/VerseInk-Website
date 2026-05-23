"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ============================================
   INTRO STATEMENT
   150vh tall section with sticky centered text.
   As the user scrolls through the section, the
   text stays pinned at the center of the viewport
   and each character fades in from 0 → 1 opacity.

   "embed Bible verses" gets a lime (#D4F520) bg.
   ============================================ */

const segments = [
  { text: "VerseInk", highlight: false, serif: true },
  { text: " is a note-taking app for iPhone that lets you write and ", highlight: false, serif: false },
  { text: "embed Bible verses", highlight: true, serif: false },
  { text: " on the same note.", highlight: false, serif: false },
];

const charData: { char: string; highlight: boolean; serif: boolean }[] = [];
segments.forEach((seg) => {
  for (const c of seg.text) {
    charData.push({ char: c, highlight: seg.highlight, serif: seg.serif });
  }
});

export default function IntroStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const spanEls = charsRef.current;
    if (!spanEls.length) return;

    gsap.set(spanEls, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.to(spanEls, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.02,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "150vh", marginBottom: "40vh" }}>
      {/* Sticky wrapper — stays pinned at vertical center */}
      <div
        className="sticky flex items-center justify-center px-6"
        style={{ top: "45vh", height: "10vh" }}
      >
        <div className="mx-auto max-w-[40rem]">
          <p className="intro-text text-center text-3xl sm:text-4xl md:text-[44px] leading-snug font-medium text-text-primary tracking-tighter">
            {charData.map((c, i) => (
              <span
                key={i}
                ref={(el) => {
                  if (el) charsRef.current[i] = el;
                }}
                style={{
                  backgroundColor: c.highlight ? "#D4F520" : undefined,
                  borderRadius: c.highlight ? "2px" : undefined,
                  fontFamily: c.serif ? "'New York', Georgia, serif" : undefined,
                  fontStyle: c.serif ? "italic" : undefined,
                }}
              >
                {c.char}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
