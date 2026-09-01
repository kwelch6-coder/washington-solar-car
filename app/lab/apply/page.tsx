import type { Metadata } from "next";
import ApplyPage from "@/app/apply/page";

export const metadata: Metadata = { title: "Lab · Apply" };

export default function LabApplyPage() {
  return <ApplyPage />;
}
