export type Tier = {
  id: string;
  name: string;
  /** One-time amount. There is deliberately no `period` field. */
  amount: string;
  note: string;
  color: string;
  benefits: string[];
};

/**
 * ⚠ PLACEHOLDER TIERS. The real structure has not arrived.
 *
 * Team leadership lists "the tier structure with dollar amounts and per-tier
 * benefits" as outstanding, along with the full sponsor list. Everything below
 * is scaffolding so the grid has something to render and so the swap is a
 * one-file edit when the real numbers land. None of these names, amounts or
 * benefits should be treated as agreed. The section carries a visible draft
 * notice for as long as this comment is here; delete both together.
 *
 * Array order is render order, top lane first: most expensive leads the grid.
 *
 * Benefit copy is only what the team has actually confirmed. Real companies
 * read this page to decide whether to fund the team, so a benefit invented to
 * balance the columns is a promise someone then has to keep. Where a TODO sits
 * below, the tier renders with fewer lines rather than filler.
 */
export const tiers: Tier[] = [
  {
    id: "title",
    name: "Title",
    amount: "$50,000",
    note: "one-time",
    color: "var(--tier-title)",
    benefits: [
      "Name the team",
      "Design the car's full livery",
      "Largest logo placement on the car",
      "Logo on this site",
      // TODO: confirm any additional Title-only benefits
    ],
  },
  {
    id: "purple",
    name: "Purple",
    amount: "$20,000",
    note: "one-time",
    color: "var(--tier-purple)",
    benefits: [
      "Large logo placement on the car",
      "Logo on this site",
      // TODO: confirm tier-specific benefits
    ],
  },
  {
    id: "gold",
    name: "Gold",
    amount: "$10,000",
    note: "one-time",
    color: "var(--tier-gold)",
    benefits: [
      "Logo placement on the car",
      "Logo on this site",
      // TODO: confirm tier-specific benefits
    ],
  },
  {
    id: "white",
    name: "White",
    amount: "$5,000",
    note: "one-time",
    color: "var(--tier-white)",
    benefits: [
      "Logo placement on the car",
      "Logo on this site",
      // TODO: confirm tier-specific benefits
    ],
  },
  {
    id: "black",
    name: "Black",
    amount: "$2,000",
    note: "one-time",
    color: "var(--tier-black)",
    benefits: [
      "Logo placement on the car",
      "Logo on this site",
      // TODO: confirm tier-specific benefits
    ],
  },
  {
    id: "bronze",
    name: "Bronze",
    amount: "$1,000",
    note: "one-time",
    color: "var(--tier-bronze)",
    benefits: [
      "Logo placement on the car",
      "Logo on this site",
      // TODO: confirm tier-specific benefits
    ],
  },
];

/** "Title tier, $50,000 one-time" — derived so it can never drift from the render. */
export const tierLabel = (t: Tier) => `${t.name} tier, ${t.amount} ${t.note}`;
