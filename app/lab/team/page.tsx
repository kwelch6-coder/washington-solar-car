import type { Metadata } from "next";
import TeamPage from "@/app/team/page";

export const metadata: Metadata = { title: "Lab · Team" };

export default function LabTeamPage() {
  return <TeamPage />;
}
