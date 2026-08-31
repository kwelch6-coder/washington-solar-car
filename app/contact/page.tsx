import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactBlock from "@/components/ContactBlock";
import Reveal from "@/components/ScrollReveal";
import { TEAM_NAME, external, links } from "@/lib/site";

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

      {/* Sits below ContactBlock on purpose: anyone hunting for the email or
          the shop address finds those first. */}
      <section className="bg-cream py-16 sm:py-24 text-center">
        <Reveal className="mx-auto max-w-2xl px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-accent mb-4">
            Want To Build The Car?
          </h2>
          <p className="text-lg text-ink/85 mb-8">
            No experience required. Applications run through one form, and it
            takes a few minutes.
          </p>
          <a
            href={links.apply}
            {...external}
            className="inline-block bg-ink text-cream font-label uppercase tracking-[0.14em] text-sm px-7 py-3 hover:bg-accent transition-colors"
          >
            Apply Now
          </a>
        </Reveal>
      </section>
    </>
  );
}
