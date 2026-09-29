import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/ScrollReveal";
import Timeline from "@/components/Timeline";
import StatBand from "@/components/StatBand";
import ScrollFillText from "@/components/ScrollFillText";
import {
  about,
  bigNumbers,
  race,
  raceStory,
  season2026,
  timeline,
} from "@/lib/data";
import { photos } from "@/lib/photos";
import { APPLY_PATH } from "@/lib/site";

/**
 * A long prose passage. A plain <p> unless the experiment is switched on.
 *
 * Declared at module scope, not inside AboutContent: a component created
 * during render is a new type every render, so React would remount it and the
 * scroll-fill effect would tear down and rebuild its ScrollTrigger each time.
 */
function Prose({
  fill,
  className,
  children,
}: {
  fill: boolean;
  className?: string;
  children: string;
}) {
  return fill ? (
    <ScrollFillText className={className}>{children}</ScrollFillText>
  ) : (
    <p className={className}>{children}</p>
  );
}

/**
 * The About page body, shared by the production route and the lab route so the
 * two cannot drift. Production renders it with no props.
 */
export default function AboutContent({
  /** Experimental scroll-fill effect. Lab only — production leaves this off. */
  scrollFill = false,
}: {
  scrollFill?: boolean;
}) {
  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title="About"
        subtitle="A student engineering collective built around one car and one deadline."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal direction="left">
            <div className="relative aspect-[3/2]">
              <Image
                src={photos.onCampusGrass.src}
                alt={photos.onCampusGrass.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: photos.onCampusGrass.position }}
              />
            </div>
          </Reveal>
          <Reveal direction="right">
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-accent mb-4">
              Our Mission
            </h2>
            <Prose fill={scrollFill} className="text-lg text-ink/85">{about.mission}</Prose>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-cream py-16 sm:py-24">
        <Reveal className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-accent-light mb-4">
            Why Solar
          </h2>
          {about.whySolar.map((paragraph, i) => (
            <Prose
              key={i}
              fill={scrollFill}
              className={`text-xl sm:text-2xl${i > 0 ? " mt-6" : ""}`}
            >
              {paragraph}
            </Prose>
          ))}
        </Reveal>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <Reveal className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-accent mb-4">
            What Makes Us Different
          </h2>
          <Prose fill={scrollFill} className="text-lg text-ink/85">{about.whatMakesUsDifferent}</Prose>
        </Reveal>
      </section>

      {/* ── 2026 season ───────────────────────────────────────────────────── */}
      <section className="bg-accent text-cream py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <p className="font-label font-light text-xs uppercase tracking-[0.3em] text-cream/70 mb-3">
              {season2026.event}
            </p>
            {/* Two distinct elements, not one block. The display line keeps
                its tight tracking; the supporting line returns to normal
                tracking, body face and a 65ch measure so it wraps rather than
                running the container's full width — 54ch measures ~68 characters
                here, since `ch` is the width of "0" and Inter's is narrow. The
                mb-6/mb-8 gap is the
                real fix — the old mb-4 read as one crowded unit. */}
            <h2 className="font-display text-4xl sm:text-6xl uppercase leading-[1.05] tracking-tight mb-6 sm:mb-8">
              {season2026.resultLine}
            </h2>
            <p className="max-w-[54ch] text-base sm:text-lg font-normal tracking-normal leading-[1.55] text-cream/90">
              {season2026.resultDetail}
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-cream/25">
              {season2026.official.map((stat) => (
                <div key={stat.label} className="bg-accent px-5 py-6 text-center">
                  <div className="font-display text-3xl sm:text-4xl tabular-nums leading-none">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-label font-light text-xs uppercase tracking-widest text-cream/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-cream/70 text-sm">{season2026.milesNote}</p>
            {/* Displaced from the headline block when it became a
                two-part treatment. Still verified content, so it
                keeps a home rather than being dropped. */}
            <p className="mt-2 max-w-[70ch] text-cream/70 text-sm leading-[1.55]">
              {season2026.route}. {season2026.field}
            </p>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <Reveal direction="left">
              <h3 className="font-label uppercase tracking-[0.2em] text-xs text-cream/70 mb-4">
                Stage by stage
              </h3>
              <ul className="border-t border-cream/25">
                {season2026.stages.map((s) => (
                  <li
                    key={s.stage}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-cream/25 py-3"
                  >
                    <span className="font-display text-lg uppercase">
                      {s.stage}
                      {s.place && (
                        <span className="ml-3 font-label text-sm tracking-widest text-cream/70">
                          {s.place}
                        </span>
                      )}
                    </span>
                    <span className="text-cream/90 tabular-nums">
                      {s.miles}
                      {/* /70, not /60: cream at 60% over the purple measures
                          4.32:1, under the 4.5:1 this 16px text needs. It
                          cleared when the accent was red. 70% gives 5.30:1 and
                          matches the stage place beside it. */}
                      {s.note && (
                        <span className="text-cream/70"> · {s.note}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal direction="right">
              <h3 className="font-label uppercase tracking-[0.2em] text-xs text-cream/70 mb-4">
                Ahead of us
              </h3>
              <ul className="border-t border-cream/25 mb-8">
                {season2026.ahead.map((team) => (
                  <li key={team} className="border-b border-cream/25 py-3">
                    {team}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-medium">{season2026.onlyAmerican}</p>
              <p className="mt-4 text-cream/80 text-sm">
                {season2026.qualifier}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── The race story ────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl uppercase text-accent mb-10">
              How It Actually Went
            </h2>
          </Reveal>

          <Reveal>
            <h3 className="font-display text-2xl sm:text-3xl uppercase mb-4">
              {raceStory.crisis.title}
            </h3>
            {raceStory.crisis.body.split("\n\n").map((para) => (
              <Prose key={para.slice(0, 24)} fill={scrollFill} className="text-lg text-ink/85 mb-4">
                {para}
              </Prose>
            ))}
          </Reveal>

          <Reveal>
            <h3 className="font-display text-2xl sm:text-3xl uppercase mt-12 mb-4">
              {raceStory.reliability.title}
            </h3>
            <Prose fill={scrollFill} className="text-lg text-ink/85">{raceStory.reliability.body}</Prose>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 gap-10">
            <Reveal direction="left">
              <h3 className="font-label uppercase tracking-[0.2em] text-xs text-accent mb-4">
                Better than last year
              </h3>
              <ul className="space-y-3 text-ink/85">
                {raceStory.improvements.map((line) => (
                  <li key={line} className="border-l-2 border-ink/20 pl-4">
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal direction="right">
              <h3 className="font-label uppercase tracking-[0.2em] text-xs text-accent mb-4">
                Being fixed for next season
              </h3>
              <ul className="space-y-3 text-ink/85">
                {raceStory.nextSeason.map((line) => (
                  <li key={line} className="border-l-2 border-ink/20 pl-4">
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── The numbers ───────────────────────────────────────────────────── */}
      <section className="bg-ink py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl uppercase text-cream mb-12">
              By The Numbers
            </h2>
          </Reveal>
          <Reveal>
            <StatBand groups={bigNumbers} />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-accent text-center mb-12">
              Our Legacy
            </h2>
          </Reveal>
          <Reveal>
            <Timeline entries={timeline} />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-cream py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid sm:grid-cols-2 gap-10">
          <Reveal direction="left">
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-accent-light mb-4">
              The Race
            </h2>
            <p className="text-cream/85">{race.americanSolarChallenge}</p>
          </Reveal>
          <Reveal direction="right">
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-accent-light mb-4">
              The Qualifier
            </h2>
            <p className="text-cream/85">{race.formulaSunGrandPrix}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-accent text-cream py-16 sm:py-24">
        <Reveal className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl uppercase mb-4">
            Where We&apos;re Headed
          </h2>
          <Prose fill={scrollFill} className="text-lg">{about.whereWeAreHeaded}</Prose>
          <Link
            href={APPLY_PATH}
            className="mt-8 inline-block bg-ink text-cream font-label uppercase tracking-[0.14em] text-sm px-7 py-3 hover:bg-cream hover:text-ink transition-colors"
          >
            Join the Team
          </Link>
        </Reveal>
      </section>
    </>
  );
}
