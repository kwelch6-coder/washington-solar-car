import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/ScrollReveal";
import SubTeamPanels from "@/components/SubTeamPanels";
import PhotoGallery from "@/components/PhotoGallery";
import SpotlightCard from "@/components/SpotlightCard";
import {
  alumniEmployers,
  joining,
  leadership,
  spotlightCards,
  subTeams,
} from "@/lib/data";
import { galleryPhotos } from "@/lib/gallery";
import { photos } from "@/lib/photos";
import { APPLY_PATH, TEAM_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description: `Roughly 50 students across three subteams design, build, and race ${TEAM_NAME}'s solar car. No experience required.`,
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="~50 Students · 3 Subteams"
        title="Team"
        subtitle="Organized into subteams so every member owns real work."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-accent text-center mb-10">
              Sub-Teams
            </h2>
          </Reveal>
          {/* Three, not four. Stacked rather than in a 3-up grid: each panel
              opens to several hundred words, which a narrow column can't carry
              without turning into a ribbon of text. */}
          <Reveal className="max-w-4xl mx-auto">
            <SubTeamPanels teams={subTeams} />
          </Reveal>
          {/* Click on pointer devices, tap on touch — same (hover: hover)
              switch used under the What You Get cards, and for the same
              reason: input method, not screen width. */}
          <p className="text-center font-label font-light text-ink/60 text-sm mt-4">
            <span className="[@media(hover:hover)]:hidden">
              Tap a card for more information
            </span>
            <span className="hidden [@media(hover:hover)]:inline">
              Click a card for more information
            </span>
          </p>
        </div>
      </section>

      <section className="bg-ink py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-cream text-center mb-10">
              What You Get
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {spotlightCards.map((card, i) => (
              <Reveal key={card.title} direction="up" delay={i * 0.08}>
                <SpotlightCard
                  title={card.title}
                  description={card.description}
                  photo={photos[card.photo]}
                />
              </Reveal>
            ))}
          </div>
          {/* Keyed to (hover: hover) rather than a width breakpoint, so a
              touch laptop is told to tap and a narrow desktop window is still
              told to hover. Each phrase is written out in full so only one
              ever reaches the accessibility tree — the other is display:none.
              Tap is the default, covering (hover: none) and anything the
              browser can't answer for. */}
          <p className="text-center font-label font-light text-cream/50 text-sm mt-4">
            <span className="[@media(hover:hover)]:hidden">
              Tap a card for more information
            </span>
            <span className="hidden [@media(hover:hover)]:inline">
              Hover a card for more information
            </span>
          </p>
        </div>
      </section>

      {/* ── What joining actually costs you ───────────────────────────────── */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-accent text-center mb-10">
              What Joining Looks Like
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal direction="up" delay={0}>
              <h3 className="font-label uppercase tracking-[0.2em] text-xs text-accent mb-3">
                Time commitment
              </h3>
              <p className="text-lg text-ink/85">{joining.hours}</p>
            </Reveal>
            <Reveal direction="up" delay={0.08}>
              <h3 className="font-label uppercase tracking-[0.2em] text-xs text-accent mb-3">
                Experience required
              </h3>
              <p className="text-lg text-ink/85">{joining.experience}</p>
            </Reveal>
            <Reveal direction="up" delay={0.16}>
              <h3 className="font-label uppercase tracking-[0.2em] text-xs text-accent mb-3">
                Your first quarter
              </h3>
              <p className="text-lg text-ink/85">{joining.firstQuarter}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-accent text-center mb-10">
              Leadership
            </h2>
          </Reveal>
          <Reveal>
            <ul className="divide-y-2 divide-ink border-y-2 border-ink">
              {leadership.map((person) => (
                <li
                  key={person.role}
                  className="flex flex-wrap items-baseline justify-between gap-2 py-4"
                >
                  <span
                    className={`font-display text-xl sm:text-2xl uppercase ${
                      person.tbd ? "text-ink/40" : "text-ink"
                    }`}
                  >
                    {person.tbd ? (
                      <span className="border border-dashed border-ink/40 px-2 py-0.5">
                        TBD
                      </span>
                    ) : (
                      person.name
                    )}
                  </span>
                  <span className="text-ink/70">{person.role}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-ink/60 text-sm text-center">
              Leads serve one-year terms.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-accent text-center mb-4">
              A Season In Photos
            </h2>
            <p className="text-center text-ink/60 mb-12">
              From the shop floor to the finish line.
            </p>
          </Reveal>
          <Reveal>
            <PhotoGallery photos={galleryPhotos} />
          </Reveal>
        </div>
      </section>

      {/* ── Where people go next ──────────────────────────────────────────── */}
      <section className="bg-ink text-cream py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-accent-light mb-4">
              Where Our Alumni Go
            </h2>
          </Reveal>
          <Reveal>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-3 gap-y-3">
              {alumniEmployers.map((employer) => (
                <li
                  key={employer}
                  className="border border-cream/30 px-4 py-2 font-label font-light text-sm"
                >
                  {employer}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-accent text-cream py-16 sm:py-24 text-center">
        <Reveal className="mx-auto max-w-2xl px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl uppercase mb-4">
            No Experience Required
          </h2>
          <p className="text-lg mb-8">
            Engineers, designers, writers, photographers and business students,
            roughly fifty of them, one car.
          </p>
          <Link
            href={APPLY_PATH}
            className="inline-block bg-ink text-cream font-label uppercase tracking-[0.14em] text-sm px-7 py-3 hover:bg-cream hover:text-ink transition-colors"
          >
            Join the Team
          </Link>
        </Reveal>
      </section>
    </>
  );
}
