import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = { title: "Lab · About" };

/**
 * The one lab page that differs from production: same component, with the
 * experimental scroll-fill switched on via a prop.
 */
export default function LabAbout() {
  return <AboutContent scrollFill />;
}
