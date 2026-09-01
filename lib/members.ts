export type Member = {
  /** Empty renders the placeholder label. */
  name: string;
  role: string;
  subteam: string;
  /** Path under public/. Empty renders the silhouette block. */
  image: string;
};

/**
 * Placeholder roster. Twenty empty slots so the Team page can show the shape of
 * the section before any real people are in it.
 *
 * To fill it in, replace an entry with real values — the component needs no
 * changes and falls back to placeholder styling for whatever is still blank:
 *
 *   { name: "Ada Lovelace", role: "Battery Lead", subteam: "Electrical",
 *     image: "/members/ada-lovelace.jpg" },
 *
 * No invented names, and no stock or generated faces. An obviously empty slot
 * is honest; a fake person is not.
 */
const EMPTY: Member = { name: "", role: "", subteam: "", image: "" };

export const members: Member[] = Array.from({ length: 20 }, () => ({ ...EMPTY }));
