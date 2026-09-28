import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import TeaserCard from "@/components/TeaserCard";
import Reveal from "@/components/ScrollReveal";
import ContactBlock from "@/components/ContactBlock";
import ScrollFillText from "@/components/ScrollFillText";
import { heroSlides, statStrip, milestone } from "@/lib/data";
import { photos } from "@/lib/photos";

export default function Home() {
  return (
    <>
      <Hero slides={heroSlides} />

      <StatStrip items={statStrip} />

      {/* A deliberate pause between the number band and the cards. The band
          directly above stays exactly as tight as it was — the contrast
          between that skinny strip and this open stretch is the point, so do
          not add padding to StatStrip to "balance" them. */}
      <section className="bg-cream py-20 sm:py-32 lg:py-44">
        {/* The measure cap lives on the paragraph, not here: `ch` resolves
            against the element's own font-size, and on this wrapper that is the
            inherited 16px rather than the quote's 30px — which silently capped
            it at 444px instead of the intended measure. */}
        <div className="mx-auto max-w-5xl px-6 sm:px-8 text-center">
          {/* The fill is the entrance here, so there is no Reveal wrapper —
              a block fade plus a word fill would be two animations doing the
              same job, and the block fade would hide the start of the fill.

              Colour rather than opacity: the dim state is far deeper than the
              About page's, and colour holds a more even weight down there than
              a low opacity does. `text-ink/90` stays on the element so the
              no-JS state is the finished colour — the script only ever dims
              from that, never toward it. dimColor is that same ink mixed to
              ~16% against the cream; fillColor is what text-ink/90 already
              resolves to, so script and stylesheet agree at the end. */}
          <ScrollFillText
            className="mx-auto max-w-[34ch] text-xl sm:text-2xl lg:text-3xl leading-[1.6] text-ink/90"
            dimColor="rgb(208, 204, 192)"
            fillColor="rgb(45, 42, 36)"
            start="top bottom"
            end="top 38%"
          >
            {milestone}
          </ScrollFillText>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl uppercase text-center mb-10">
              Where To Next
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            <Reveal direction="up" delay={0}>
              <TeaserCard
                href="/about"
                title="About"
                description="Who we are, what we're building, and why."
                photo={photos.onCampusGrass}
              />
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <TeaserCard
                href="/team"
                title="Team"
                description="Roughly fifty students, three subteams, one car."
                photo={photos.teammatesGoofing}
              />
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <TeaserCard
                href="/sponsors"
                title="Sponsors"
                description="Put your name on the car."
                photo={photos.pitSponsorTent}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <ContactBlock />
    </>
  );
}
