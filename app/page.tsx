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
            inherited 16px rather than the quote's own — which silently capped
            it at 444px instead of the intended measure. Because it is in `ch`
            it tracks the type down: a smaller quote gets a physically narrower
            block at the same characters per line, which is the point. */}
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
          {/* Small, light and tightly led, inside the same large field of
              space. The scale of this moment comes from the padding on the
              section, not from the type — a modest quote in a lot of empty
              cream reads as more considered than a large one filling it.
              Leading is well under the 1.6 a passage of body copy would want,
              so the lines bind into one shape rather than reading as separate
              rows. */}
          <ScrollFillText
            className="mx-auto max-w-[34ch] font-light text-lg sm:text-xl lg:text-2xl leading-[1.25] text-ink/90"
            dimColor="rgb(208, 204, 192)"
            fillColor="rgb(45, 42, 36)"
            start="top 78%"
            end="top 26%"
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
