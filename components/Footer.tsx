import Image from "next/image";
import Link from "next/link";
import { TEAM_NAME, UNIVERSITY } from "@/lib/site";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/cars", label: "Cars" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <Image
            src="/Main-logo-white.png"
            alt={`${TEAM_NAME} logo`}
            width={180}
            height={50}
            className="h-9 w-auto mb-4"
          />
          <p className="text-cream/70 max-w-xs">
            We design, build, and race cars powered only by the sun.
          </p>
        </div>

        <div>
          <h2 className="font-label uppercase tracking-[0.2em] text-xs text-accent mb-3">
            Site
          </h2>
          <ul className="space-y-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div id="contact-footer">
          <h2 className="font-label uppercase tracking-[0.2em] text-xs text-accent mb-3">
            Reach Us
          </h2>
          <p className="border border-dashed border-cream/40 text-cream/60 px-3 py-2 mb-2 text-sm">
            [team email — add real address]
          </p>
          <p className="border border-dashed border-cream/40 text-cream/60 px-3 py-2 mb-2 text-sm">
            [social handles — add Instagram / LinkedIn]
          </p>
          <p className="text-cream/70 text-sm">
            The 8 Makerspace, McMahon Hall
            <br />
            {UNIVERSITY}, Seattle
          </p>
        </div>
      </div>

      <div className="border-t border-cream/20 text-cream/50 text-xs px-5 sm:px-8 py-4 flex flex-col sm:flex-row justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} {TEAM_NAME}. All rights reserved.</p>
        <p>A student organization at the {UNIVERSITY}.</p>
      </div>
    </footer>
  );
}
