import { contact } from "@/lib/data";

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

        <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
          <p className="border border-dashed border-cream/40 text-cream/60 px-4 py-3 text-sm">
            [team email — add real address]
          </p>
          <p className="border border-dashed border-cream/40 text-cream/60 px-4 py-3 text-sm">
            [social handles — Instagram / LinkedIn]
          </p>
        </div>

        <div className="mt-10 font-label uppercase tracking-[0.16em] text-sm text-accent">
          {contact.location}
        </div>
        <p className="mt-2 text-cream/60 text-sm">{contact.eventLine}</p>
      </div>
    </section>
  );
}
