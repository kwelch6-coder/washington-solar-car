import type { Metadata } from "next";
import Home from "@/app/page";

export const metadata: Metadata = { title: "Lab" };

export default function LabHome() {
  return <Home />;
}
