import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/ScrollReveal";
import { TEAM_NAME, external, links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apply",
  description: `Apply to join ${TEAM_NAME}. Separate applications for the Mechanical, Electrical and Business subteams. No experience required.`,
};

type Path = {
  name: string;
  blurb: string;
  href: string;
};

/**
 * One entry per subteam, in the same order as the Team page. All three are
 * open, so `href` is required and there is no second, de-emphasised card
 * state — every card renders through the same branch and is styled
 * identically. If a subteam ever closes again, bring back a variant here
 * rather than dimming one card in place.
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
    href: links.applyBusiness,
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
                <a
                  href={path.href}
                  {...external}
                  className="group flex h-full flex-col border-2 border-ink p-6 hover:bg-ink hover:text-cream transition-colors"
                >
                  <h2 className="font-display text-2xl uppercase text-accent group-hover:text-accent-light">
                    {path.name}
                  </h2>
                  <p className="mt-2 text-ink/80 group-hover:text-cream/80">
                    {path.blurb}
                  </p>
                  <span className="mt-6 font-label uppercase tracking-[0.14em] text-xs text-accent group-hover:text-accent-light">
                    Apply &rarr;
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
