import type { Metadata, Viewport } from "next";
import { Anton, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { TEAM_NAME, UNIVERSITY } from "@/lib/site";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Rounded geometric sans for labels and supporting text — lighter and softer
// than Anton, which stays reserved for display-scale headlines.
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${TEAM_NAME} — ${UNIVERSITY}`,
    template: `%s — ${TEAM_NAME}`,
  },
  description: `${TEAM_NAME} is a student team at the ${UNIVERSITY} that designs, builds, and races a solar car. In 2026 we finished 4th in the SOV class at the American Solar Challenge, the top American team in the class.`,
  icons: {
    icon: "/main-logo-black.png",
  },
  // DRAFT STATE. Final copy is awaiting sign-off from team leadership, and
  // several figures on the Sponsors and Team pages are still marked TODO.
  // Delete this `robots` block to publish — that is the only switch.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#f3efe2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${anton.variable} ${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      {/* `relative` anchors Nav's top-of-page backdrop strip. No `bg-cream`
          here on purpose: an in-flow block background paints above negative
          z-index descendants, which would hide that strip. The cream canvas
          comes from `html` in globals.css instead. */}
      <body className="relative min-h-full flex flex-col text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
