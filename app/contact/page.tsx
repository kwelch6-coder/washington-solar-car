import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactBlock from "@/components/ContactBlock";
import { TEAM_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${TEAM_NAME} to join, sponsor, or request the car at your event.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reach Us"
        title="Contact"
        subtitle="Questions about joining, sponsoring, or bringing the car to your event start here."
      />
      <ContactBlock />
    </>
  );
}
