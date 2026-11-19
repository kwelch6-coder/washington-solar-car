/**
 * The team roster, as it appears on the Team page.
 *
 * One array drives the whole grid: order here is render order, and the grid
 * component reads nothing else. Adding, removing or renaming someone is an
 * edit to this file alone.
 *
 * ORDER. The 47 people whose photo filename carried their name come first,
 * alphabetically by display name — which is first-name order, matching how the
 * photos were handed over. The 12 whose filename did not carry a name follow,
 * in numeric order.
 *
 * NAMES. Taken verbatim from the photo filenames, with one deliberate change:
 * four filenames carried a parenthetical nickname and the name outside the
 * parentheses is used.
 *
 *   Albert (Yi) Lu          -> Albert Lu
 *   Elizabeth (Liza) Astor  -> Elizabeth Astor
 *   Nicholas (Nick) Graham  -> Nicholas Graham
 *   Nicholas (Nick) Wilson  -> Nicholas Wilson
 *
 * If any of the four would rather appear under the other name, change the
 * `name` here — the filename and photo path can stay as they are.
 *
 * NO GUESSING. The last 12 entries have an empty `name` because their source
 * filename had none. Empty is the honest state and the grid is built for it:
 * the caption line is still laid out, just blank, so the rows stay aligned.
 * They are not labelled "Member" or anything else invented, and nobody is
 * matched to a face on a hunch. When the names arrive, filling them in is a
 * one-line edit each.
 *
 * `role` and `subteam` are carried empty on purpose. The grid shows neither
 * today — it is a roster, name under photo and nothing more — but having the
 * fields here means adding them later is a change to this data and the markup
 * that renders it, not a reshaping of the array every page reads from.
 *
 * Photos resolve to public/members/, written by scripts/optimize-headshots.mjs
 * from the originals in headshots/. Every one is 600x600.
 */
export type Member = {
  /** Display name. Empty renders a blank, space-reserving caption. */
  name: string;
  /** Path under public/. */
  photo: string;
  /** Not shown yet. */
  role: string;
  /** Not shown yet. */
  subteam: string;
};

export const members: Member[] = [
  { name: "Aiden Sigurdson",          photo: "/members/aiden-sigurdson.jpg", role: "", subteam: "" },
  { name: "Albert Lu",                photo: "/members/albert-lu.jpg", role: "", subteam: "" },
  { name: "Amanuel Asrat",            photo: "/members/amanuel-asrat.jpg", role: "", subteam: "" },
  { name: "Andrew Cieslak",           photo: "/members/andrew-cieslak.jpg", role: "", subteam: "" },
  { name: "Anya Shah",                photo: "/members/anya-shah.jpg", role: "", subteam: "" },
  { name: "Arnav Mittal",             photo: "/members/arnav-mittal.jpg", role: "", subteam: "" },
  { name: "Benjamin Christensen",     photo: "/members/benjamin-christensen.jpg", role: "", subteam: "" },
  { name: "Brendan Kelly",            photo: "/members/brendan-kelly.jpg", role: "", subteam: "" },
  { name: "Brydon Wotherspoon",       photo: "/members/brydon-wotherspoon.jpg", role: "", subteam: "" },
  { name: "Caoilin Krathaus",         photo: "/members/caoilin-krathaus.jpg", role: "", subteam: "" },
  { name: "Celina Rovini",            photo: "/members/celina-rovini.jpg", role: "", subteam: "" },
  { name: "Connor Nickisch",          photo: "/members/connor-nickisch.jpg", role: "", subteam: "" },
  { name: "Dhreeti Taneja",           photo: "/members/dhreeti-taneja.jpg", role: "", subteam: "" },
  { name: "Elijah Yan",               photo: "/members/elijah-yan.jpg", role: "", subteam: "" },
  { name: "Elizabeth Astor",          photo: "/members/elizabeth-astor.jpg", role: "", subteam: "" },
  { name: "Ella Ryter",               photo: "/members/ella-ryter.jpg", role: "", subteam: "" },
  { name: "Ethan Liu",                photo: "/members/ethan-liu.jpg", role: "", subteam: "" },
  { name: "Eve Trapnel",              photo: "/members/eve-trapnel.jpg", role: "", subteam: "" },
  { name: "Faiz Moazzam",             photo: "/members/faiz-moazzam.jpg", role: "", subteam: "" },
  { name: "Harrison Ochieng",         photo: "/members/harrison-ochieng.jpg", role: "", subteam: "" },
  { name: "Henry Pierce",             photo: "/members/henry-pierce.jpg", role: "", subteam: "" },
  { name: "Jack Swafford",            photo: "/members/jack-swafford.jpg", role: "", subteam: "" },
  { name: "Janey Ryu",                photo: "/members/janey-ryu.jpg", role: "", subteam: "" },
  { name: "Jayesh Kankanala",         photo: "/members/jayesh-kankanala.jpg", role: "", subteam: "" },
  { name: "Jeremy Wilson",            photo: "/members/jeremy-wilson.jpg", role: "", subteam: "" },
  { name: "John Bee",                 photo: "/members/john-bee.jpg", role: "", subteam: "" },
  { name: "Katharina Stromberg",      photo: "/members/katharina-stromberg.jpg", role: "", subteam: "" },
  { name: "Logan Torset",             photo: "/members/logan-torset.jpg", role: "", subteam: "" },
  { name: "Luca Rhys-Jones",          photo: "/members/luca-rhys-jones.jpg", role: "", subteam: "" },
  { name: "Makoto Sasaki",            photo: "/members/makoto-sasaki.jpg", role: "", subteam: "" },
  { name: "Marian Hu",                photo: "/members/marian-hu.jpg", role: "", subteam: "" },
  { name: "Nicholas Graham",          photo: "/members/nicholas-graham.jpg", role: "", subteam: "" },
  { name: "Nicholas Wilson",          photo: "/members/nicholas-wilson.jpg", role: "", subteam: "" },
  { name: "Nikhil Garg",              photo: "/members/nikhil-garg.jpg", role: "", subteam: "" },
  { name: "Nikhil George",            photo: "/members/nikhil-george.jpg", role: "", subteam: "" },
  { name: "Niobe Guilanians",         photo: "/members/niobe-guilanians.jpg", role: "", subteam: "" },
  { name: "Oliver Nairn",             photo: "/members/oliver-nairn.jpg", role: "", subteam: "" },
  { name: "Richie Nadolny",           photo: "/members/richie-nadolny.jpg", role: "", subteam: "" },
  { name: "Riley Stratton",           photo: "/members/riley-stratton.jpg", role: "", subteam: "" },
  { name: "Rithvik Rathinasabapathy", photo: "/members/rithvik-rathinasabapathy.jpg", role: "", subteam: "" },
  { name: "Rudy Heredia-Jantz",       photo: "/members/rudy-heredia-jantz.jpg", role: "", subteam: "" },
  { name: "Ryan Daly",                photo: "/members/ryan-daly.jpg", role: "", subteam: "" },
  { name: "Sinclair Jones",           photo: "/members/sinclair-jones.jpg", role: "", subteam: "" },
  { name: "Srithan Reddy Nalla",      photo: "/members/srithan-reddy-nalla.jpg", role: "", subteam: "" },
  { name: "Sukhman Khongura",         photo: "/members/sukhman-khongura.jpg", role: "", subteam: "" },
  { name: "Tracy Le",                 photo: "/members/tracy-le.jpg", role: "", subteam: "" },
  { name: "Varun Sarda",              photo: "/members/varun-sarda.jpg", role: "", subteam: "" },

  // No name in the source filename, so none is shown. The empty `name` is
  // what reserves the blank caption line in the grid. Filling these in is a
  // one-line edit each — nothing in the component needs to change.
  { name: "",                         photo: "/members/headshot-9.jpg", role: "", subteam: "" },
  { name: "",                         photo: "/members/headshot-10.jpg", role: "", subteam: "" },
  { name: "",                         photo: "/members/headshot-15.jpg", role: "", subteam: "" },
  { name: "",                         photo: "/members/headshot-18.jpg", role: "", subteam: "" },
  { name: "",                         photo: "/members/headshot-38.jpg", role: "", subteam: "" },
  { name: "",                         photo: "/members/headshot-47.jpg", role: "", subteam: "" },
  { name: "",                         photo: "/members/headshot-51.jpg", role: "", subteam: "" },
  { name: "",                         photo: "/members/headshot-58.jpg", role: "", subteam: "" },
  { name: "",                         photo: "/members/headshot-59.jpg", role: "", subteam: "" },
  { name: "",                         photo: "/members/headshot-63.jpg", role: "", subteam: "" },
  { name: "",                         photo: "/members/headshot-65.jpg", role: "", subteam: "" },
  { name: "",                         photo: "/members/headshot-79.jpg", role: "", subteam: "" },];
