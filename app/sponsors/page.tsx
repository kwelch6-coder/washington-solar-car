import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/ScrollReveal";
import SponsorWall from "@/components/SponsorWall";
import { sponsors } from "@/lib/data";
import { photos } from "@/lib/photos";
import { TEAM_NAME, external, links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sponsors",
  description: `Partner with ${TEAM_NAME}. Your logo travels the length of the country on a car built by the students you want to hire.`,
};

export default function SponsorsPage() {
  return (
    <>
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
            {/* A list, not prose: sponsors scan this section rather than read
                it, and the prose above already makes the argument. No dollar
                figures and no tier labels — the tier structure is not settled,
                so these are what partnering includes generally. */}
            <ul className="mt-6 space-y-2">
              {sponsors.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-3 border-l-2 border-accent pl-4 text-ink/85"
                >
                  {benefit}
                </li>
              ))}
            </ul>
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

      <section className="bg-accent text-cream py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl uppercase mb-4">
              Where We Are
            </h2>
            <p className="text-xl">{sponsors.needMost}</p>
            <p className="mt-6 text-lg">{sponsors.bestStory}</p>
          </Reveal>
          <Reveal>
            {/* The single donation destination. Nothing else on the site links
                anywhere else to give. */}
            <a
              href={links.donate}
              {...external}
              className="mt-10 inline-block bg-ink text-cream font-label uppercase tracking-[0.14em] text-sm px-7 py-3 hover:bg-cream hover:text-ink transition-colors"
            >
              Donate
            </a>
          </Reveal>
        </div>
      </section>

      {/* Red / black / red: the colour change alone separates this band from
          its neighbours, so it needs no rules on its edges. The extra vertical
          padding stays — it is what makes the band read as a pause rather than
          just another section. */}
      <section className="bg-ink text-cream py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-center mb-12 sm:mb-16">
              Our Partners
            </h2>
          </Reveal>
          <Reveal>
            <SponsorWall />
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
          <p className="mb-8">
            <a
              href={`mailto:${links.email}`}
              className="underline underline-offset-4 hover:text-white transition-colors"
            >
              {links.email}
            </a>
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
