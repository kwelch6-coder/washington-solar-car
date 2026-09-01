import type { Metadata } from "next";
import CarsPage from "@/app/cars/page";

export const metadata: Metadata = { title: "Lab · Cars" };

export default function LabCarsPage() {
  return <CarsPage />;
}
