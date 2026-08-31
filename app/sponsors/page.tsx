import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/ScrollReveal";
import RacingGrid from "@/components/RacingGrid/RacingGrid";
import { sponsors } from "@/lib/data";
import { photos } from "@/lib/photos";
import { TEAM_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sponsors",
  description: `Partner with ${TEAM_NAME}. Your logo travels the length of the country on a car built by the students you want to hire.`,
};

export default function SponsorsPage() {
  return (
    <>
      {/* No tax-deductibility line here or anywhere else on the page: the
          exact wording is unconfirmed, and a donation-tax claim is not
          something to approximate. See the TODO block in lib/data.ts. */}
      <PageHeader
        eyebrow="Partner With Us"
        title="Sponsors"
        subtitle="Put your name on a car that finished 4th in its class at the American Solar Challenge."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal direction="left">
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-accent mb-4">
              Why Partner With Us
            </h2>
            <p className="text-lg text-ink/85">{sponsors.whyPartner}</p>
            <p className="mt-4 text-ink/70">{sponsors.currentBenefit}</p>
          </Reveal>
          <Reveal direction="right">
            <div className="relative aspect-[3/2]">
              <Image
                src={photos.pitSponsorTent.src}
                alt={photos.pitSponsorTent.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: photos.pitSponsorTent.position }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Full-bleed signature moment. A plain fade only — the grid animates its
          own cars on open, and a slide-in would fight that. */}
      <Reveal direction="none">
        <RacingGrid />
      </Reveal>

      <section className="bg-ink text-cream py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-accent mb-4">
              Where We Are
            </h2>
            <p className="text-xl">{sponsors.needMost}</p>
            <p className="mt-6 text-lg text-cream/85">{sponsors.bestStory}</p>
          </Reveal>
          <Reveal>
            {/* Donation currently routes through several live paths and the
                team intends to consolidate to one. No link ships until that
                single confirmed URL and its tax language arrive. */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
              <p className="border border-dashed border-cream/40 text-cream/60 px-4 py-3 text-sm">
                [donation link — add the single confirmed URL]
              </p>
              <p className="border border-dashed border-cream/40 text-cream/60 px-4 py-3 text-sm">
                [tax-deductibility language — add once confirmed]
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-accent text-cream py-16 sm:py-24 text-center">
        <Reveal className="mx-auto max-w-2xl px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl uppercase mb-4">
            Put Your Name On The Car
          </h2>
          <p className="text-lg mb-8">
            Reach out and we&apos;ll walk you through tiers, timelines, and
            what it looks like on the livery.
          </p>
          <p className="mx-auto mb-8 max-w-sm border border-dashed border-cream/50 text-cream/80 px-4 py-3 text-sm">
            [sponsorship contact email — add real address]
          </p>
          <Link
            href="/contact"
            className="inline-block bg-ink text-cream font-label uppercase tracking-[0.14em] text-sm px-7 py-3 hover:bg-cream hover:text-ink transition-colors"
          >
            Become a Sponsor
          </Link>
        </Reveal>
      </section>
    </>
  );
}
