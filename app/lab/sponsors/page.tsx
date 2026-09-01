import type { Metadata } from "next";
import SponsorsPage from "@/app/sponsors/page";

export const metadata: Metadata = { title: "Lab · Sponsors" };

export default function LabSponsorsPage() {
  return <SponsorsPage />;
}
