import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

/* ============================================
   FONTS
   Inter = all UI text (body, buttons, nav, captions)
   Newsreader = italic accent text ("Word", "Scriptures")
   ============================================ */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

/* ============================================
   SEO METADATA
   ============================================ */
export const metadata: Metadata = {
  title: "VerseInk — Note-taking with Bible Verses for iPhone",
  description:
    "VerseInk is a free iPhone app for writing notes with inline Bible verses. Clean editor, built-in Bible reader, beautiful verse cards. Coming soon.",
  keywords: [
    "Bible notes",
    "verse cards",
    "note taking app",
    "Bible study",
    "iPhone app",
    "sermon notes",
    "Scripture",
  ],
  openGraph: {
    title: "VerseInk — Your notes. His Word. One beautiful app.",
    description:
      "A note-taking app for iPhone that lets you embed Bible verses right where they belong — inline with your thoughts.",
    type: "website",
    siteName: "VerseInk",
  },
};

/* ============================================
   ROOT LAYOUT
   This wraps every page (landing, support, etc.)
   ============================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
