import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";
import { TEAM_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Why ${TEAM_NAME} exists, how the car gets built, and what happened at the 2026 American Solar Challenge.`,
};

/** Lab branch: the scroll-fill experiment is on. Production renders it off. */
export default function AboutPage() {
  return <AboutContent scrollFill />;
}
