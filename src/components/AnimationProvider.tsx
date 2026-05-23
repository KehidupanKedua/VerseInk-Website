"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ============================================
   ANIMATION PROVIDER
   Handles ALL GSAP ScrollTrigger animations
   from a single place. Wraps the page content.

   This is a "use client" component so it can
   use useEffect. All other section components
   stay as server components for better SEO.
   ============================================ */

gsap.registerPlugin(ScrollTrigger);

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Wait for images to load before calculating scroll positions
    const ctx = gsap.context(() => {
      /* ----------------------------------------
         HERO SECTION ANIMATIONS
         ---------------------------------------- */
      // Headline fades up
      gsap.from(".hero-heading", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.1,
      });

      // CTA button fades up after headline
      gsap.from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.5,
      });

      // Sub-text fades up
      gsap.from(".hero-subtext", {
        y: 15,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.65,
      });

      // Phone mockup slides up from below
      gsap.from(".hero-phone", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      });

      // Phone parallax on scroll — moves slower than page
      gsap.to(".hero-phone", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-phone",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* INTRO STATEMENT — handled by IntroStatement.tsx itself (scroll-based char reveal) */

      /* ----------------------------------------
         FEATURES SECTION
         ---------------------------------------- */
      // Section heading
      gsap.from(".features-heading", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".features-heading",
          start: "top 85%",
        },
      });

      // Feature cards stagger in
      gsap.from(".feature-card", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".feature-card",
          start: "top 85%",
        },
      });

      /* ----------------------------------------
         APP SHOWCASE
         ---------------------------------------- */
      gsap.from(".showcase-heading", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".showcase-heading",
          start: "top 85%",
        },
      });

      // Phones slide in with subtle horizontal movement
      gsap.from(".showcase-phones", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".showcase-phones",
          start: "top 85%",
        },
      });

      /* ----------------------------------------
         FAQ SECTION
         ---------------------------------------- */
      gsap.from(".faq-heading", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-heading",
          start: "top 85%",
        },
      });

      // FAQ cards stagger in
      gsap.from(".faq-card", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-card",
          start: "top 85%",
        },
      });

      /* ----------------------------------------
         FINAL CTA
         ---------------------------------------- */
      gsap.from(".cta-brand", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cta-brand",
          start: "top 85%",
        },
      });

      gsap.from(".cta-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cta-heading",
          start: "top 85%",
        },
      });

      gsap.from(".cta-button", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cta-button",
          start: "top 90%",
        },
      });
    });

    // Cleanup on unmount
    return () => ctx.revert();
  }, []);

  return <>{children}</>;
}
