import type { Metadata } from "next";
import ContactPage from "@/app/contact/page";

export const metadata: Metadata = { title: "Lab · Contact" };

export default function LabContactPage() {
  return <ContactPage />;
}
