import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/ScrollReveal";
import TeamCard from "@/components/TeamCard";
import SpotlightCard from "@/components/SpotlightCard";
import {
  alumniEmployers,
  joining,
  leadership,
  spotlightCards,
  subTeams,
} from "@/lib/data";
import { photos } from "@/lib/photos";
import { TEAM_NAME } from "@/lib/site";

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
          {/* Three, not four. Cards carry names only until leadership supplies
              what each subteam owns — see the TODO in lib/data.ts. */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {subTeams.map((team, i) => (
              <Reveal key={team.name} direction="up" delay={i * 0.08}>
                <TeamCard name={team.name} description={team.description} />
              </Reveal>
            ))}
          </div>
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
          <p className="text-center font-label font-light text-cream/50 text-sm mt-4">
            Tap or hover a card for more.
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
          <Reveal>
            {/* Recruiting timeline, application process and deadlines are
                undecided. Placeholder rather than an invented date. */}
            <p className="mt-10 border border-dashed border-ink/40 text-ink/60 px-4 py-3 text-sm max-w-xl mx-auto text-center">
              [recruiting timeline &amp; application process — add once decided]
            </p>
          </Reveal>
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

      {/* ── Where people go next ──────────────────────────────────────────── */}
      <section className="bg-ink text-cream py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-accent mb-4">
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
            href="/contact"
            className="inline-block bg-ink text-cream font-label uppercase tracking-[0.14em] text-sm px-7 py-3 hover:bg-cream hover:text-ink transition-colors"
          >
            Join the Team
          </Link>
        </Reveal>
      </section>
    </>
  );
}
