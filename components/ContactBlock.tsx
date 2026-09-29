import { contact } from "@/lib/data";
import { external, links } from "@/lib/site";

export default function ContactBlock() {
  return (
    <section id="contact" className="bg-ink text-cream scroll-mt-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-28 text-center">
        <h2 className="font-display text-5xl sm:text-7xl uppercase leading-none">
          Get Involved
        </h2>
        <p className="mt-4 text-cream/70 max-w-xl mx-auto">
          Want to join the team or put your company&apos;s name on the car?
          Start here.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {/* The address is the link text, so it survives being read aloud or
              copied by anyone without a mail client wired up. */}
          <a
            href={`mailto:${links.email}`}
            className="border border-cream/40 px-4 py-3 text-sm hover:bg-cream hover:text-ink transition-colors"
          >
            {links.email}
          </a>
          <a
            href={links.instagram}
            {...external}
            className="border border-cream/40 px-4 py-3 text-sm hover:bg-cream hover:text-ink transition-colors"
          >
            Instagram
          </a>
          <a
            href={links.linkedin}
            {...external}
            className="border border-cream/40 px-4 py-3 text-sm hover:bg-cream hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-10 font-label uppercase tracking-[0.16em] text-sm text-accent-light">
          {contact.location}
        </div>
        <p className="mt-2 text-cream/60 text-sm">{contact.eventLine}</p>
      </div>
    </section>
  );
}
