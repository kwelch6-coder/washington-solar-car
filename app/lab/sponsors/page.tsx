import type { Metadata } from "next";
import SponsorsContent from "@/components/SponsorsContent";

export const metadata: Metadata = { title: "Lab · Sponsors" };

/** Same component as production, with the racing grid switched on. */
export default function LabSponsors() {
  return <SponsorsContent racingGrid />;
}
