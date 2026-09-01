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
 * ⚠ PLACEHOLDER DATA. There is no agreed tier structure.
 *
 * These names, amounts and benefit lines are scaffolding so the grid has
 * something to drive it in the lab. They are deliberately generic: the earlier
 * draft's tier names and dollar figures were never confirmed by the team, and
 * reusing them here would let unconfirmed numbers start looking official.
 *
 * Nothing here is a commitment. When the real structure arrives, replace this
 * array wholesale and delete the placeholder notice on the lab Sponsors page.
 *
 * Ids are positional (t1…t6) rather than named after a colour or rank — the
 * grid's per-lane colours key off them in racing-grid.css, and a positional id
 * carries no implied hierarchy.
 */
export const tiers: Tier[] = [
  {
    id: "t1",
    name: "Tier One",
    amount: "$00,000",
    note: "placeholder",
    color: "var(--tier-1)",
    benefits: ["Placeholder benefit line", "Placeholder benefit line"],
  },
  {
    id: "t2",
    name: "Tier Two",
    amount: "$00,000",
    note: "placeholder",
    color: "var(--tier-2)",
    benefits: ["Placeholder benefit line", "Placeholder benefit line"],
  },
  {
    id: "t3",
    name: "Tier Three",
    amount: "$00,000",
    note: "placeholder",
    color: "var(--tier-3)",
    benefits: ["Placeholder benefit line", "Placeholder benefit line"],
  },
  {
    id: "t4",
    name: "Tier Four",
    amount: "$00,000",
    note: "placeholder",
    color: "var(--tier-4)",
    benefits: ["Placeholder benefit line", "Placeholder benefit line"],
  },
  {
    id: "t5",
    name: "Tier Five",
    amount: "$00,000",
    note: "placeholder",
    color: "var(--tier-5)",
    benefits: ["Placeholder benefit line", "Placeholder benefit line"],
  },
  {
    id: "t6",
    name: "Tier Six",
    amount: "$00,000",
    note: "placeholder",
    color: "var(--tier-6)",
    benefits: ["Placeholder benefit line", "Placeholder benefit line"],
  },
];

/** "Tier One, $00,000 placeholder" — derived so it can never drift from the render. */
export const tierLabel = (t: Tier) => `${t.name}, ${t.amount} ${t.note}`;
