import type { Metadata } from "next";
import SponsorsContent from "@/components/SponsorsContent";
import { TEAM_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sponsors",
  description: `Partner with ${TEAM_NAME}. Your logo travels the length of the country on a car built by the students you want to hire.`,
};

export default function SponsorsPage() {
  return <SponsorsContent />;
}
