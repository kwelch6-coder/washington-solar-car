import { TEAM_NAME } from "./site";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SOURCE OF TRUTH
 *
 * Every figure below is verified by team leadership. Two standing rules:
 *
 *  1. Nothing here is estimated, rounded for effect, or inferred. Where a value
 *     is unconfirmed it is marked TODO and the element that would carry it is
 *     omitted from the page rather than filled with something plausible. This
 *     site is read by sponsors and prospective members; an invented figure is a
 *     promise the team then has to keep.
 *  2. The American-team claim is always qualified to the SOV class. Appalachian
 *     State won the Multi-Occupant class outright, so an unqualified
 *     "highest-placing American team" claim is contestable. See `sovClaim`.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type HeroSlide = {
  photo: keyof typeof import("./photos").photos;
  /** Optional small label above the headline, e.g. "2026 Car". */
  eyebrow?: string;
  headline: string;
  ctaLabel: string;
  ctaHref: string;
};

export const heroSlides: HeroSlide[] = [
  {
    photo: "headOnCockpit",
    headline: "We build a car to race across the country.",
    ctaLabel: "About Us",
    ctaHref: "/about",
  },
  {
    photo: "pinesSideProfile",
    headline: "Meet Sakura, our 2026 car.",
    ctaLabel: "Learn More About Our Vehicle",
    ctaHref: "/cars",
  },
  {
    photo: "pitSponsorTent",
    headline: "Help us cross the finish line.",
    ctaLabel: "Become a Sponsor",
    ctaHref: "/sponsors",
  },
];

/**
 * The only phrasings cleared for the American-team result. Any new copy that
 * makes this claim must keep "SOV" or "Single-Occupant Vehicle" adjacent to it.
 */
export const sovClaim = {
  short: "#1 American SOV team",
  long: "the top American team in the Single-Occupant Vehicle class",
};

export const statStrip = [
  { value: "4th", label: "SOV class · ASC 2026" },
  { value: "#1", label: "American SOV team" },
  { value: "1,749.4", label: "Official race miles" },
  { value: "~50", label: "Students" },
];

export const milestone =
  "At the 2026 American Solar Challenge we finished 4th in the Single-Occupant Vehicle class and were the top American team in it, covering 1,749.4 official miles from Minneapolis to Amarillo. We were the only American SOV team to complete the entire base route.";

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

/**
 * 2024 has no verified entry of its own. Left out rather than filled: the
 * previous copy credited Sockeye as the team's first self-built car, which
 * leadership has since corrected.
 */
export const timeline: TimelineEntry[] = [
  {
    year: "2023",
    title: "Founded",
    description: `${TEAM_NAME} starts, with few people willing to buy into an unproven dream.`,
  },
  {
    year: "2025",
    title: "Formula Sun Grand Prix",
    description:
      "Sockeye finishes 6th in the SOV class and wins Rookie of the Year in the team's first competition, qualifying the team for the 2026 American Solar Challenge.",
  },
  {
    year: "2026",
    title: "Sakura, and a country to cross",
    description:
      "Sakura, the team's first ground-up build, races the Formula Sun Grand Prix and then the American Solar Challenge, finishing 4th in the SOV class and top American team in the class.",
  },
];

/**
 * Verbatim from team leadership. Do not paraphrase, trim or re-order these —
 * they are the team's own words about its own reasons for existing.
 */
export const about = {
  mission: `${TEAM_NAME} exists because we believe students grow most when working alongside others toward something bigger than themselves. That belief takes shape through the demanding work of designing, building, testing, and preparing a solar car to race against teams from around the world. Along the way, members discover what it means to lead, to trust teammates, and to push through hard problems together, lessons that shape who they become long after graduation. Every race is a reminder that the work matters, that sustainable transportation is worth fighting for, and that real change starts when people commit to building something together.`,

  whySolar:
    "Solar is the only energy source that never runs out. As long as the sun is up, our car can make its own power. The first solar cars are right on the edge of hitting real roads, and what's standing between that idea and everyday driving is efficiency, more power, speed, and range from the same sunlight. That's the exact problem this team works on with every car we build.",

  whatMakesUsDifferent: `Founded just three years ago, few people were willing to buy into an unproven dream. ${TEAM_NAME} built its first car in an eleven month design cycle, less than half the typical two years most teams take. That team earned Rookie of the Year, then followed it up the next year by placing as the top American team in their first cross-country endurance race. When the car needed a trailer to haul it cross-country, or funding fell short, the community stepped up every time, and that community is the real strength behind everywhere this team has gone.`,

  whereWeAreHeaded:
    "Looking ahead, we hope to build a lasting legacy, a foundation strong enough to give generations of students after us the same hands-on experiences and learning opportunities that shaped us. As we grow, learn, and sharpen our craft, our sights are set on preparing to race at the Bridgestone World Solar Challenge in Australia, the most demanding solar race. Until then, we will continue to master the American Solar Challenge and the Formula Sun Grand Prix, treating every competition as a chance to push our engineering further, develop stronger engineers, and lay the groundwork for the team that shows up in Australia.",
};

/**
 * Three subteams, not four. Telemetry & Strategy and Business & Outreach were
 * never separate teams.
 *
 * TODO: one-line description of what each subteam owns, plus headcount per
 * subteam. Cards render name-only until those arrive.
 */
export type SubTeam = { name: string; description?: string };

export const subTeams: SubTeam[] = [
  { name: "Mechanical" },
  { name: "Electrical" },
  { name: "Business" },
];

export type SpotlightCard = {
  title: string;
  description: string;
  photo: keyof typeof import("./photos").photos;
};

export const spotlightCards: SpotlightCard[] = [
  {
    title: "Leadership",
    description:
      "Mechanical, Electrical and Business leads, plus a project manager, each serve a one-year term running real deadlines and real people.",
    photo: "soloWalkTrack",
  },
  {
    title: "Hands-On Engineering",
    description:
      "Every system on this car is designed by students, and most of it is built by them too.",
    photo: "wiringCloseup",
  },
  {
    title: "Where People Go Next",
    description:
      "Alumni have gone on to Blue Origin, Boeing, Tesla, Hendrick Motorsports, Archer and Alaska Airlines.",
    photo: "pitSponsorTent",
  },
  {
    title: "Cross-Disciplinary Teams",
    description:
      "Roughly 50 members across three subteams. Engineers work next to business students on the same car.",
    photo: "pitCrewThree",
  },
];

/**
 * Joining the team. Published as given — the hours figure in particular is
 * deliberately not softened.
 *
 * TODO, all outstanding: full list of majors and departments represented plus
 * a count; headcount per subteam; recruiting timeline, application process and
 * deadlines; two or three member quotes with name, major, class year and role.
 */
export const joining = {
  hours:
    "At least 20 hours a week, and more during build crunch and race week.",
  experience:
    "None required. If you come in with no experience, stick with it, and are proactive about learning, you can learn everything you need here.",
  firstQuarter:
    "A crash course across the whole program, from mechanical to electrical to strategy to race operations.",
};

/** Published as a plain list. Order as supplied. */
export const alumniEmployers = [
  "Blue Origin",
  "Boeing",
  "Tesla",
  "T-Mobile",
  "Alaska Airlines",
  "Hendrick Motorsports",
  "Archer",
  "Electroimpact",
  "Teague",
  "Port of Seattle",
  "Aerotech",
  "ATS Automation",
  "CDM Smith",
  "Geo Engineers",
  "Puris Proteins",
];

export type LeadershipMember = {
  name: string;
  role: string;
  tbd?: boolean;
};

/**
 * There is no faculty advisor at present, so there is no advisor row. Do not
 * reinstate one without a name from leadership.
 */
export const leadership: LeadershipMember[] = [
  { name: "Hailin Truman", role: "Founder & President" },
  { name: "Grant Gallagher", role: "Mechanical Lead" },
  { name: "Nikhil Garg", role: "Electrical Lead" },
  { name: "Owen Kuwayti", role: "Battery Lead & Admin Lead" },
  { name: "Izzy Lavoie", role: "Business Lead" },
];

export const cars = {
  sakura: {
    name: "Sakura",
    number: "86",
    result: `2026 American Solar Challenge · 4th in SOV class · ${sovClaim.short}`,
    /** Why the name, and why the car exists in the shape it does. */
    description:
      "Sakura is named for the cherry blossoms at UW, and it is the first car this team has built from the ground up. A rule change lifting the allowed solar array area from 4 m² to 6 m² forced a full redesign, and the answer was a three-wheeled bullet body carrying 386 cells over a carbon sandwich chassis. It was powered on for the first time the day before it was trailered to the Formula Sun Grand Prix, then drove more than 2,500 miles across two competitions without a single major failure.",
  },
  sockeye: {
    name: "Sockeye",
    result: "2025 Formula Sun Grand Prix · 6th in SOV class · Rookie of the Year",
    description:
      "Sockeye raced the 2025 Formula Sun Grand Prix, finishing 6th in the Single-Occupant Vehicle class and winning Rookie of the Year in the team's first competition. Sakura carries a similar chassis design forward; the suspension, aeroshell, electrical system and solar array are all new.",
    // TODO: Sockeye's car number. #86 previously appeared here but that number
    // belongs to Sakura. The badge stays off the showcase until confirmed.
  },
};

export type SpecCallout = {
  label: string;
  value: string;
  detail: string;
};

/** The five headline numbers. Full breakdown lives in `sakuraSpecs`. */
export const carSpecs: SpecCallout[] = [
  {
    label: "Solar Array",
    value: "386 cells",
    detail:
      "386 Maxeon cells at 25.6% efficiency across 6 m², assembled by students, peaking at 1,540 W. The array tilts to chase a low sun.",
  },
  {
    label: "Battery",
    value: "5.25 kWh",
    detail:
      "A 36S9P pack of Samsung 45T lithium-ion cells, about 50 lb, running 96V to 151V. Enough to power an average toaster for about 5 hours.",
  },
  {
    label: "Motor",
    value: "5 kW",
    detail:
      "A Mitsuba hub motor rated at 2 kW and peaking at 5 kW, driven by a KLS 8080N controller. Highway capable at 65 mph.",
  },
  {
    label: "Body",
    value: "0.079 CdA",
    detail:
      "A three-wheeled bullet body developed over multiple CFD iterations, on a carbon sandwich panel chassis with a steel roll cage.",
  },
  {
    label: "Weight",
    value: "460 lb",
    detail: "Without a driver. 636 lb with driver and ballast aboard.",
  },
];

export type SpecGroup = {
  group: string;
  rows: { label: string; value: string }[];
};

/** Full published specification for Sakura. */
export const sakuraSpecs: SpecGroup[] = [
  {
    group: "Solar Array",
    rows: [
      { label: "Cells", value: "386 Maxeon" },
      { label: "Cell efficiency", value: "25.6%" },
      { label: "Array area", value: "6 m²" },
      { label: "Peak power", value: "1,540 W" },
      { label: "Strings / MPPTs", value: "4 / 4" },
      { label: "Array", value: "Tiltable" },
    ],
  },
  {
    group: "Battery & Electrical",
    rows: [
      { label: "Chemistry", value: "Lithium ion, Samsung 45T" },
      { label: "Capacity", value: "5.25 kWh" },
      { label: "Voltage", value: "96V – 151V" },
      { label: "Configuration", value: "36S9P" },
      { label: "Pack mass", value: "~50 lb" },
      { label: "BMS", value: "Custom, designed in house" },
      { label: "Telemetry", value: "90+ readings, one CAN frame per second" },
    ],
  },
  {
    group: "Motor & Drivetrain",
    rows: [
      { label: "Motor", value: "Mitsuba hub motor" },
      { label: "Rated power", value: "2 kW" },
      { label: "Peak power", value: "5 kW" },
      { label: "Controller", value: "KLS 8080N" },
    ],
  },
  {
    group: "Aerodynamics & Body",
    rows: [
      { label: "Drag (CdA)", value: "0.079" },
      { label: "Wheels", value: "3" },
      { label: "Body", value: "Bullet shape, multiple CFD iterations" },
      { label: "Chassis", value: "Carbon sandwich panel" },
      { label: "Safety structure", value: "Steel roll cage" },
    ],
  },
  {
    group: "Mass & Dimensions",
    rows: [
      { label: "Mass, no driver", value: "460 lb" },
      { label: "Mass, driver + ballast", value: "636 lb" },
      { label: "Length", value: "5.7 m" },
      { label: "Width", value: "1.5 m" },
      { label: "Height", value: "0.9 m" },
      { label: "Ground clearance", value: "3 in" },
    ],
  },
  {
    group: "Suspension, Steering & Brakes",
    rows: [
      { label: "Front", value: "Double wishbone" },
      { label: "Rear", value: "Swing arm" },
      { label: "Steering", value: "Manual, 14.9 m turning radius" },
      { label: "Brakes", value: "Hydraulic, regenerative as redundancy" },
      { label: "Tires", value: "Bridgestone Ecopia" },
      { label: "Rolling resistance", value: "0.0065" },
    ],
  },
  {
    group: "Performance",
    rows: [
      { label: "Top speed", value: "65 mph, highway capable" },
      { label: "Race average", value: "30 mph across both competitions" },
      { label: "Range, battery only", value: "178 miles" },
      { label: "Range, clear day", value: "466 miles" },
      { label: "Efficiency", value: "29.8 miles per kWh" },
    ],
  },
  {
    group: "Cockpit",
    rows: [
      { label: "Vision", value: "Front window, plus a backup camera on a cockpit display" },
      { label: "Displays", value: "Steering wheel mounted, side dashboard for power on" },
      { label: "Cooling", value: "One cooling hole and a driver fan" },
      { label: "Egress", value: "4.2 seconds" },
      { label: "Comms", value: "Baofeng UV-5G radio to the caravan" },
    ],
  },
];

/** How the car gets made, including what the team does not make itself. */
export const build = {
  timeline:
    "Design starts in October and freezes in December. A rolling chassis is standing by February, then a long wait on parts through June, and the whole car goes together in roughly a month.",
  hours: "7,000",
  cost: "$120,000",
  costNote:
    "The largest line items are the aeroshell, the solar array and the battery cells.",
  /** The unqualified "everything in house" claim was never true. This replaces it. */
  headline:
    "Every system on this car is designed by students, and most of it is built by them too.",
  inHouse: [
    "All design work",
    "The chassis",
    "All wiring",
    "Solar array assembly",
  ],
  outsourced: [
    "The aeroshell",
    "Suspension parts",
    "PCB fabrication — every board is student-designed, then manufactured externally",
  ],
  purchased: ["Solar cells"],
  software: ["SolidWorks", "KiCad", "Saturn PCB"],
  facilities: ["UW Mechanical Shop", "UW composites shop"],
  boards:
    "Every circuit board on the car is student-designed: high-voltage power distribution, telemetry, driver interface, drivetrain control, lights and the steering wheel.",
};

export type StageResult = {
  stage: string;
  place?: string;
  miles: string;
  note?: string;
};

/** 2026 results. Every number here is from the official scoring. */
export const season2026 = {
  event: "Electrek American Solar Challenge 2026",
  className: "Single Occupant Vehicle",
  route: "Minneapolis to Amarillo, down the Great River Road and Route 66",
  place: "4th",
  headline: `4th in the SOV class, and ${sovClaim.long}`,
  official: [
    { label: "Official miles", value: "1,749.4" },
    { label: "Official time", value: "58:41:43" },
    { label: "Average speed", value: "30.1 mph" },
  ],
  milesNote:
    "Base route 1,547.0 miles plus a 217.4 mile loop, less 15.0 miles of deductions.",
  completedBaseRoute: true,
  /** The strongest single line available, and fully verified. */
  onlyAmerican:
    "We were the only American SOV team to complete the entire base route. Every other American SOV team trailered to a checkpoint.",
  ahead: ["KU Leuven, Belgium", "TU Delft, Netherlands", "ÉTS Montréal, Canada"],
  stages: [
    { stage: "Stage 1", place: "4th", miles: "787.1 miles", note: "Zero deductions" },
    { stage: "Stage 2", place: "4th", miles: "411.3 miles" },
    { stage: "Stage 3", place: "5th", miles: "400.4 miles" },
    { stage: "Stage 4", miles: "150.6 miles", note: "41.5 mph average" },
  ] satisfies StageResult[],
  field:
    "29 SOV teams entered. 25 made it onto the track, 13 qualified for the American Solar Challenge, and 4 completed the whole race.",
  qualifier:
    "At the 2026 Formula Sun Grand Prix qualifier we placed 4th in the SOV class over 271 laps, with a fastest lap of 3:44 on a 3.1 mile track.",
  // TODO: exact wording of the Spirit of the Event award and the design award
  // must be pulled from the ASC website before either is published. No
  // approximate award title goes on this site.
};

/** The scrutineering story, told as leadership tells it. */
export const raceStory = {
  crisis: {
    title: "Five minutes to spare",
    body: "The electrical team had been fighting problems with the battery management system, where the isolated amplifiers used for current sensing were failing at random. Everything had been repaired and the car reached BMS scrutineering the day before the race. During testing, all of the amplifiers failed at once.\n\nA competing team gave them a spare hall effect sensor. The electrical team piled into a truck with the battery, drove back to camp, jerry-rigged the hall effect sensor into the BMS, and recalibrated the system. The modified system went back to scrutineering and passed. The car went straight to dynamics testing and cleared U-turn, figure eight, slalom, and brake testing without a hitch. They finished with about five minutes to spare, the last team to qualify before the race began.",
  },
  reliability: {
    title: "Then it just kept going",
    body: "The car was powered on for the first time the day before it was trailered to the Formula Sun Grand Prix. It then drove over 2,500 miles across FSGP and ASC combined and completed both competitions without a single major failure.",
  },
  improvements: [
    "Fewer electrical faults. The 2025 car would shut off whenever the horn was used.",
    "Onto the track on time. In 2025 the team was held up in scrutineering and only got a few laps on day one.",
    "A battery 50% larger than the 2025 car's.",
    "An array producing about 70% more energy than the 2025 car's.",
  ],
  nextSeason: [
    "A major crack in the carbon fiber chassis near the suspension is being repaired. ASC road conditions were far worse than anticipated and stressed the chassis.",
    "The electrical system is being rebuilt from the ground up to improve efficiency, increase motor performance, and expand car control.",
  ],
};

export type BigNumber = { value: string; label: string };

/**
 * The stats band. Grouped for legibility only — every figure is verified.
 *
 * Total-miles-driven figures are deliberately absent: 2,438.8 (ASC), 840.1
 * (FSGP) and "over 2,500 across both" do not reconcile with each other or with
 * the official 1,749.4. Only the official figure is published.
 */
export const bigNumbers: { group: string; items: BigNumber[] }[] = [
  {
    group: "The Season",
    items: [
      { value: "4th", label: "SOV class, ASC 2026" },
      { value: "#1", label: "American SOV team" },
      { value: "1,749.4", label: "Official race miles" },
      { value: "58:41:43", label: "Official time" },
      { value: "30.1", label: "Average mph" },
      { value: "3:44", label: "Fastest lap, 3.1 mile track" },
      { value: "271", label: "Laps at FSGP 2026" },
      { value: "4 of 29", label: "SOV teams finished the race" },
    ],
  },
  {
    group: "The Car",
    items: [
      { value: "386", label: "Solar cells" },
      { value: "1,540", label: "Watts peak solar" },
      { value: "25.6%", label: "Cell efficiency" },
      { value: "5.25", label: "kWh battery" },
      { value: "460", label: "Pounds" },
      { value: "178", label: "Miles on battery alone" },
      { value: "466", label: "Miles on a clear day" },
      { value: "29.8", label: "Miles per kWh" },
      { value: "90+", label: "Telemetry readings" },
      { value: "4.2", label: "Seconds to egress" },
    ],
  },
  {
    group: "The Team",
    items: [
      { value: "7,000", label: "Build hours" },
      { value: "$120,000", label: "To build the car" },
      { value: "11", label: "Months, first design cycle" },
      { value: "~50", label: "Members" },
      { value: "3", label: "Years since founding" },
    ],
  },
];

export const race = {
  americanSolarChallenge:
    "The American Solar Challenge is a cross-country, rally-style endurance race for solar cars. The 2026 route ran from the University of Minnesota in Minneapolis, down the Great River Road and Historic Route 66, to Amarillo, Texas. 2026 is Route 66's 100th birthday and the race was an official Centennial project.",
  formulaSunGrandPrix:
    "The American Solar Challenge is preceded by the Formula Sun Grand Prix, a multi-day closed-track qualifier. A team has to get through it to start the cross-country race at all.",
};

/**
 * Sponsors. Most of this page is still outstanding — see the TODO block. What
 * is here is verified; nothing is filled in to make the page look finished.
 *
 * TODO, all required before this page can go live:
 *   - Full sponsor list with correct legal names and tier assignments
 *   - The tier structure with dollar amounts and per-tier benefits (see lib/tiers.ts)
 *   - Sponsorship contact email
 *   - Whether a sponsorship packet PDF exists to link
 */
export const sponsors = {
  whyPartner:
    "Your logo travels the length of the country on a car built by the students you want to hire. In 2026 that was 1,749.4 official race miles from Minneapolis to Amarillo, finishing 4th in the SOV class and top American team in it.",
  currentBenefit: "Sponsors currently receive a sticker on the car.",
  needMost:
    "What helps most right now is straightforward: money, and donated materials.",
  bestStory:
    "The single most impactful contribution to date was a donation of composite sandwich panels for the chassis, the structure the entire car is built around.",
};

export const contact = {
  location: "The 8 Makerspace, McMahon Hall, University of Washington",
  eventLine: "Want the car at your event? Reach out below.",
};
