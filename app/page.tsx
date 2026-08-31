import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import TeaserCard from "@/components/TeaserCard";
import Reveal from "@/components/ScrollReveal";
import ContactBlock from "@/components/ContactBlock";
import { heroSlides, statStrip, milestone } from "@/lib/data";
import { photos } from "@/lib/photos";

export default function Home() {
  return (
    <>
      <Hero slides={heroSlides} />

      <StatStrip items={statStrip} />

      <Reveal as="section" className="bg-cream">
        <p className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20 text-center text-xl sm:text-2xl text-ink/90">
          {milestone}
        </p>
      </Reveal>

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
