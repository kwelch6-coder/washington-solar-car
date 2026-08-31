import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/ScrollReveal";
import { TEAM_NAME, external, links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apply",
  description: `Apply to join ${TEAM_NAME}. Separate applications for the Mechanical and Electrical subteams. No experience required.`,
};

type Path = {
  name: string;
  blurb: string;
  href?: string;
};

/**
 * One entry per subteam, in the same order as the Team page. Business has no
 * form yet; it keeps its slot so all three subteams are represented and the
 * card is ready to go live the moment a URL exists. No invented link, no
 * mailto stand-in.
 */
const PATHS: Path[] = [
  {
    name: "Mechanical",
    blurb: "Aeroshell, chassis, suspension, composites, and the tooling around the car.",
    href: links.applyMechanical,
  },
  {
    name: "Electrical",
    blurb: "Boards, firmware, the solar array, and the systems that move the car.",
    href: links.applyElectrical,
  },
  {
    name: "Business",
    blurb: "Sponsorship, outreach, and everything that keeps the team funded.",
  },
];

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join Us"
        title="Apply"
        subtitle="Pick the subteam you want to build with. No experience required."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-3 gap-4">
            {PATHS.map((path, i) => (
              <Reveal key={path.name} direction="up" delay={i * 0.08}>
                {path.href ? (
                  <a
                    href={path.href}
                    {...external}
                    className="group flex h-full flex-col border-2 border-ink p-6 hover:bg-ink hover:text-cream transition-colors"
                  >
                    <h2 className="font-display text-2xl uppercase text-accent">
                      {path.name}
                    </h2>
                    <p className="mt-2 text-ink/80 group-hover:text-cream/80">
                      {path.blurb}
                    </p>
                    <span className="mt-6 font-label uppercase tracking-[0.14em] text-xs text-accent">
                      Apply &rarr;
                    </span>
                  </a>
                ) : (
                  /* No form yet. Rendered as a non-interactive div rather than
                     a disabled link so there is nothing to click, nothing to
                     focus, and nothing announced as actionable. */
                  <div className="flex h-full flex-col border-2 border-dashed border-ink/30 p-6 text-ink/45">
                    <h2 className="font-display text-2xl uppercase text-accent/50">
                      {path.name}
                    </h2>
                    <p className="mt-2">{path.blurb}</p>
                    <span className="mt-6 font-label uppercase tracking-[0.14em] text-xs">
                      Coming soon
                    </span>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
