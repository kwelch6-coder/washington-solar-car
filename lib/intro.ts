import { useEffect, useLayoutEffect } from "react";

// Module state survives client-side route changes but resets on a full page
// load, which is exactly the lifetime the load-in animation should have.
let introFinished = false;

/**
 * True only while the first render after a full page load is happening.
 * Call from a `useState` initialiser so every participating component captures
 * the same answer during render, before any effect can end the intro.
 */
export function claimIntro() {
  return !introFinished;
}

/** Marks the intro as spent so it never replays on in-site navigation. */
export function endIntro() {
  introFinished = true;
}

/**
 * Layout effect on the client, plain effect on the server render pass — lets
 * the intro set its "hidden" starting state before paint without tripping
 * React's useLayoutEffect-during-SSR warning.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
