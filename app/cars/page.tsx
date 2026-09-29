import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/ScrollReveal";
import CarShowcase from "@/components/CarShowcase";
import SpecCallouts from "@/components/SpecCallout";
import SpecTable from "@/components/SpecTable";
import { build, cars, carSpecs, sakuraSpecs } from "@/lib/data";
import { photos, sockeyeHero } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Cars",
  description:
    "Sakura, #86: a three-wheeled solar car with 386 cells and a 5.25 kWh pack, 4th in the SOV class at the 2026 American Solar Challenge.",
};

/** In house, outsourced, purchased — published together so the split is plain. */
const SOURCING = [
  { title: "Built in house", items: build.inHouse },
  { title: "Outsourced", items: build.outsourced },
  { title: "Purchased", items: build.purchased },
];

export default function CarsPage() {
  return (
    <>
      <PageHeader eyebrow="The Cars" title="Cars" />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            {/* Sakura only — never a Sockeye shot, which would mislabel the car. */}
            <CarShowcase
              photo={photos.headOnCockpit}
              name={cars.sakura.name}
              number={cars.sakura.number}
              tagline={cars.sakura.result}
              priority
            />
          </Reveal>
          <Reveal>
            <p className="mt-8 text-lg text-ink/85 max-w-3xl mx-auto">
              {cars.sakura.description}
            </p>
          </Reveal>
        </div>
      </section>

      <Reveal as="section">
        <SpecCallouts specs={carSpecs} />
      </Reveal>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl uppercase text-ink mb-10">
              Full Specification
            </h2>
          </Reveal>
          <Reveal>
            <SpecTable groups={sakuraSpecs} />
          </Reveal>
        </div>
      </section>

      {/* ── How it gets made ──────────────────────────────────────────────── */}
      <section className="bg-ink text-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl uppercase text-accent-light mb-4">
              How It Gets Built
            </h2>
            <p className="text-xl sm:text-2xl max-w-3xl">{build.headline}</p>
          </Reveal>

          <Reveal>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-cream/15">
              <div className="bg-ink px-5 py-6">
                <div className="font-display text-3xl sm:text-4xl tabular-nums leading-none">
                  {build.hours}
                </div>
                <div className="mt-2 font-label font-light text-xs uppercase tracking-widest text-cream/60">
                  Build hours
                </div>
              </div>
              <div className="bg-ink px-5 py-6">
                <div className="font-display text-3xl sm:text-4xl tabular-nums leading-none">
                  {build.cost}
                </div>
                <div className="mt-2 font-label font-light text-xs uppercase tracking-widest text-cream/60">
                  To build the car
                </div>
              </div>
              <div className="bg-ink px-5 py-6">
                <div className="font-display text-3xl sm:text-4xl tabular-nums leading-none">
                  ~1
                </div>
                <div className="mt-2 font-label font-light text-xs uppercase tracking-widest text-cream/60">
                  Month to final assembly
                </div>
              </div>
            </div>
            <p className="mt-4 text-cream/70">{build.timeline}</p>
            <p className="mt-2 text-cream/70 text-sm">{build.costNote}</p>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-3 gap-10">
            {SOURCING.map((column, i) => (
              <Reveal key={column.title} direction="up" delay={i * 0.08}>
                <h3 className="font-label uppercase tracking-[0.2em] text-xs text-accent-light mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-2 text-cream/85">
                  {column.items.map((item) => (
                    <li key={item} className="border-l-2 border-cream/25 pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-12 max-w-3xl text-cream/85">{build.boards}</p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 font-label font-light text-sm text-cream/60">
              <span>
                <span className="uppercase tracking-widest text-xs text-accent-light mr-2">
                  Software
                </span>
                {build.software.join(", ")}
              </span>
              <span>
                <span className="uppercase tracking-widest text-xs text-accent-light mr-2">
                  Facilities
                </span>
                {build.facilities.join(", ")}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── The previous car ──────────────────────────────────────────────── */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="font-label font-light text-xs uppercase tracking-[0.3em] text-accent mb-3">
              The 2025 car
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Reveal direction="left">
              {/* No number badge: #86 belongs to Sakura, and Sockeye's own
                  number has not been confirmed. */}
              <CarShowcase
                photo={sockeyeHero}
                name={cars.sockeye.name}
                tagline={cars.sockeye.result}
              />
            </Reveal>
            <Reveal direction="right">
              <p className="text-lg text-ink/85">{cars.sockeye.description}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-accent text-cream py-16 sm:py-24 text-center">
        <Reveal className="mx-auto max-w-2xl px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl uppercase mb-4">
            Help Us Build The Next One
          </h2>
          <p className="text-lg mb-8">
            The chassis needs repairing and the electrical system is being
            rebuilt from the ground up. That takes hands on the shop floor and
            partners behind the budget.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-ink text-cream font-label uppercase tracking-[0.14em] text-sm px-7 py-3 hover:bg-cream hover:text-ink transition-colors"
          >
            Get Involved
          </Link>
        </Reveal>
      </section>
    </>
  );
}
