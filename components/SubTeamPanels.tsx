"use client";

import { useCallback, useState } from "react";
import type { SubTeam } from "@/lib/data";

/**
 * The subteam cards. Each expands in place to reveal its project list — the
 * content runs to several hundred words per subteam, far past what a hover
 * tooltip can carry, so this is a click/tap disclosure rather than a hover
 * reveal.
 *
 * State lives here rather than in each card so only one panel is open at a
 * time: opening one closes whatever was open.
 *
 * A subteam with no `projects` (currently Business) renders as a plain,
 * inert card — no button, no chevron, nothing to press.
 */
export default function SubTeamPanels({ teams }: { teams: SubTeam[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback(
    (name: string) => setOpenId((cur) => (cur === name ? null : name)),
    []
  );

  return (
    <div className="space-y-4">
      {teams.map((team) => {
        const expandable = !!team.projects?.length;
        const isOpen = openId === team.name;
        const panelId = `subteam-panel-${team.name.toLowerCase()}`;

        if (!expandable) {
          return (
            <div
              key={team.name}
              className="border-2 border-ink/30 p-6 text-ink/50"
            >
              <h3 className="font-display text-2xl uppercase text-accent/60">
                {team.name}
              </h3>
              {team.description && <p className="mt-2">{team.description}</p>}
            </div>
          );
        }

        return (
          <div key={team.name} className="border-2 border-ink">
            <h3>
              <button
                type="button"
                onClick={() => toggle(team.name)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={`flex w-full items-center justify-between gap-4 p-6 text-left transition-colors ${
                  isOpen ? "bg-ink text-cream" : "hover:bg-ink hover:text-cream"
                }`}
              >
                <span className="font-display text-2xl uppercase text-accent">
                  {team.name}
                </span>
                {/* Rotates rather than swapping glyphs, so the control reads as
                    one object changing state. */}
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-2xl leading-none transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>

            {/* grid-template-rows 0fr -> 1fr animates to the content's natural
                height without hardcoding one, which matters when the panels
                differ by hundreds of words. The inner child needs min-height:0
                so the closed state can actually collapse.

                Set inline rather than through a utility class only because the
                value is derived from state; the `grid-rows-[1fr]` utility
                resolves identically. */}
            <div
              id={panelId}
              role="region"
              aria-label={`${team.name} projects`}
              className="grid transition-[grid-template-rows] duration-[400ms] ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="border-t-2 border-ink px-6 py-6 space-y-5">
                  {team.projects?.map((project) => (
                    <div key={project.name}>
                      <h4 className="font-label font-bold text-sm uppercase tracking-wide text-ink">
                        {project.name}
                      </h4>
                      <p className="mt-1 text-ink/80 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  ))}

                  {team.closing && (
                    <p className="border-t border-ink/20 pt-5 text-ink/85 italic">
                      {team.closing}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
