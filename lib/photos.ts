import { TEAM_NAME } from "./site";

/** Which car a photo shows. Drives where it may be used. */
export type Car = "sakura" | "sockeye";

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  car: Car;
  /**
   * `object-position` for any cropped render of this photo, set per-image so the
   * subject survives tall/narrow crops instead of being center-cropped away.
   * Omit to fall back to the CSS default of `50% 50%`.
   */
  position?: string;
};

// See scripts/optimize-photos.mjs. Sakura's set is uniformly 2400x1600 (3:2);
// Sockeye's are mostly 1600x900 (16:9), so a size override is available.
const photo =
  (car: Car, defaultWidth: number, defaultHeight: number) =>
  (
    file: string,
    alt: string,
    position?: string,
    size?: { width: number; height: number }
  ): Photo => ({
    src: `/images/${car}/${file}`,
    alt,
    width: size?.width ?? defaultWidth,
    height: size?.height ?? defaultHeight,
    car,
    position,
  });

/** Sakura, the 2026 car — everything in the root of edited_photos/. */
const sakura = photo("sakura", 2400, 1600);
/** Sockeye, the 2025 car — everything in edited_photos/sockeye/. */
const sockeye = photo("sockeye", 1600, 900);

// Curated placements. edited_photos/ has no individual headshots — every
// "team" image below is a candid action/pit shot, not a posed portrait.
// Focal points below were set by eyeballing where the subject actually sits in
// each frame, so narrow crops stay on the car/people rather than empty asphalt.
// Every entry here is Sakura — use these for general/site-wide imagery.
export const photos = {
  heroAerial: sakura(
    "scgp_event-3.jpg",
    `Sakura, ${TEAM_NAME}'s 2026 solar car, cornering on track`,
    // Car sits low and well left of centre; the rest of the frame is track.
    "33% 48%"
  ),
  heroSideProfile: sakura(
    "scgp_event-1.jpg",
    "Sakura at speed, low side profile, panned motion blur",
    "40% 57%"
  ),
  onCampusGrass: sakura(
    "scgp-01.jpg",
    "Sakura parked on the grass in front of a campus building",
    // Keeps the car body above the deep foreground grass.
    "45% 62%"
  ),
  pinesSideProfile: sakura(
    "scgp_event-6.jpg",
    "Sakura's side profile against a treeline",
    // Biased right toward the cockpit so the nose isn't the first thing cropped.
    "42% 52%"
  ),
  pitCrewThree: sakura(
    "scgp-20.jpg",
    "Three team members pushing Sakura through the pit lane",
    // The three students are clustered in the left third.
    "28% 55%"
  ),
  soloWalkTrack: sakura(
    "scgp-05.jpg",
    "A team member in a team vest walking down an empty drag strip",
    "50% 45%"
  ),
  wiringCloseup: sakura(
    "scgp-25.jpg",
    "A team member working on the car's wiring and electronics under the raised shell",
    // Student is on the right-hand side of the frame.
    "60% 40%"
  ),
  pitSponsorTent: sakura(
    "scgp_event-2.jpg",
    "The team and car in the pit lane with event sponsor tents in the background",
    "48% 56%"
  ),
  teammatesGoofing: sakura(
    "scgp-15.jpg",
    "Two team members laughing at the track, one lifting the other",
    // Holds both faces, which sit high in the frame.
    "49% 35%"
  ),
  driverPortrait: sakura(
    "scgp-30.jpg",
    "A team member smiling at the track wearing an event lanyard",
    "50% 40%"
  ),
  frontOn: sakura(
    "scgp-10.jpg",
    "Sakura's front nose profile, cockpit and solar array visible",
    "50% 55%"
  ),
  headOnCockpit: sakura(
    "scgp_event-5.jpg",
    "Sakura head-on on the track, the driver visible under the canopy and cherry-blossom livery across the nose",
    // Car sits just right of centre (x 27-80%) and fills y 22-76%; biased
    // slightly high so wide crops keep the canopy and drop foreground asphalt,
    // while narrow crops stay centred on the car rather than the verge.
    "54% 47%"
  ),
  aerialCorner: sakura(
    "scgp_event-2.jpg",
    "Aerial view of Sakura taking a corner on the track",
    "48% 56%"
  ),
} satisfies Record<string, Photo>;

/**
 * Sockeye, the 2025 car — the car raced at the 2025 Formula Sun Grand
 * Prix. Only for content that is actually about Sockeye (the car spotlight,
 * history/archive references), never general site imagery, which is Sakura's.
 */
export const sockeyePhotos = {
  trackSideProfile: sockeye(
    "dsc_1364.jpg",
    "Sockeye, the team's 2025 solar car, running on track in full side profile with its salmon livery",
    "50% 55%",
    { width: 2021, height: 1347 }
  ),
  frontOnTrack: sockeye(
    "54633780088_ba7bb40278_h.jpg",
    "Sockeye head-on at speed on the race circuit, flags and marshals lining the track",
    "45% 58%"
  ),
  pitCrewInspection: sockeye(
    "54623002318_3667b57a57_h.jpg",
    "Team members leaning over Sockeye's raised shell to inspect its wiring in the pit garage",
    // The three students sit in the left half, faces high in the frame.
    "35% 35%"
  ),
  teamBehindCar: sockeye(
    "54632837273_e4f8ff3cc8_h.jpg",
    "Eight team members in high-visibility vests standing behind Sockeye on pit lane",
    "50% 45%"
  ),
  arrayRaised: sockeye(
    "54633787758_aa61a23cae_h.jpg",
    "The team seated in front of Sockeye with its solar array tilted upright behind them"
  ),
  celebration: sockeye(
    "54635754614_ef9693f13a_h.jpg",
    "The team cheering behind Sockeye with a team banner and event flags",
    "50% 55%"
  ),
  groupWithFamilies: sockeye(
    "54635754539_55bca78b0a_h.jpg",
    "Students, families and supporters gathered behind Sockeye holding a team banner"
  ),
  fieldAerial: sockeye(
    "54630938718_66c76f0c1c_h.jpg",
    "Aerial view of every team and car lined up on the tarmac at the 2025 Formula Sun Grand Prix"
  ),
} satisfies Record<string, Photo>;

/** Lead image for the Sockeye spotlight — clean 3:2 side profile in motion. */
export const sockeyeHero: Photo = sockeyePhotos.trackSideProfile;

// Remaining photos, used for the loose gallery strips — generic captions
// since these weren't individually reviewed for specific placement.
const galleryFiles = [
  "scgp-02.jpg",
  "scgp-03.jpg",
  "scgp-04.jpg",
  "scgp-06.jpg",
  "scgp-07.jpg",
  "scgp-08.jpg",
  "scgp-09.jpg",
  "scgp-11.jpg",
  "scgp-12.jpg",
  "scgp-13.jpg",
  "scgp-14.jpg",
  "scgp-16.jpg",
  "scgp-17.jpg",
  "scgp-18.jpg",
  "scgp-19.jpg",
  "scgp-21.jpg",
  "scgp-22.jpg",
  "scgp-23.jpg",
  "scgp-24.jpg",
  "scgp-26.jpg",
  "scgp-27.jpg",
  "scgp-28.jpg",
  "scgp-29.jpg",
  "scgp-31.jpg",
  "scgp-32.jpg",
  "scgp-33.jpg",
  "scgp_event-4.jpg",
  "scgp_event-7.jpg",
];

export const gallery: Photo[] = galleryFiles.map((file) =>
  sakura(file, `${TEAM_NAME} on track with Sakura`)
);
