"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { tiers, tierLabel } from "@/lib/tiers";
import CarTop from "./CarTop";
import "./racing-grid.css";

/** The hydration snapshot never changes, so there is nothing to subscribe to. */
const subscribeNoop = () => () => {};

export default function RacingGrid() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [visited, setVisited] = useState<string[]>([]);
  /** True while a switch is in flight, so the incoming lane waits 120ms. */
  const [switching, setSwitching] = useState(false);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  /** Enhancement gate. False on the server and through hydration, true after —
   *  so the section stays readable with JS disabled and before hydration. */
  const ready = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );

  useEffect(() => {
    document.documentElement.classList.add("rg-js");
  }, []);

  const select = useCallback(
    (id: string) => {
      const isOpen = openId === id;
      // Opening while another lane is out: sequence the two moves.
      setSwitching(!isOpen && openId !== null);
      setOpenId(isOpen ? null : id);
      if (!isOpen) {
        setVisited((v) => (v.includes(id) ? v : [...v, id]));
      }
    },
    [openId]
  );

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const last = tiers.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = i === last ? 0 : i + 1;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    btnRefs.current[next]?.focus();
  };

  return (
    <section className="rg-root" aria-labelledby="rg-heading">
      <div className="rg-head">
        <h2 id="rg-heading" className="rg-heading text-4xl sm:text-5xl lg:text-6xl">
          Pick your grid position
        </h2>
      </div>

      <ul className="rg-grid">
        <div className="rg-startline" aria-hidden="true" />

        {tiers.map((tier, i) => {
          const panelId = `rg-panel-${tier.id}`;
          const isOpen = openId === tier.id;
          return (
            <li
              key={tier.id}
              className="rg-lane"
              data-tier={tier.id}
              /* Odd lanes flush to the line, even lanes forward — grid, not list. */
              data-stagger={i % 2 === 1 ? "true" : "false"}
              data-open={isOpen ? "true" : "false"}
              data-visited={visited.includes(tier.id) ? "true" : "false"}
              style={
                {
                  "--open-delay": isOpen && switching ? "120ms" : "0ms",
                } as React.CSSProperties
              }
            >
              <div className="rg-track">
                <div className="rg-trail" aria-hidden="true" />
                <div className="rg-skids" aria-hidden="true" />

                <button
                  ref={(el) => {
                    btnRefs.current[i] = el;
                  }}
                  type="button"
                  className="rg-btn"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  aria-label={tierLabel(tier)}
                  style={{ color: tier.color }}
                  onClick={() => select(tier.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                >
                  <CarTop className="rg-car" />
                </button>

                <div className="rg-startseg" aria-hidden="true" />
              </div>

              <div className="rg-panelwrap">
                <div
                  className="rg-panel"
                  id={panelId}
                  role="region"
                  aria-label={`${tier.name} tier details`}
                  /* Only hide from the a11y tree once enhanced; the fallback
                     must stay reachable when JS is off. */
                  aria-hidden={ready && !isOpen ? true : undefined}
                  inert={ready && !isOpen ? true : undefined}
                >
                  <div className="rg-reveal" style={{ "--i": 0 } as React.CSSProperties}>
                    <div className="rg-name">{tier.name}</div>
                    <div className="rg-amount">{tier.amount}</div>
                    <div className="rg-util" style={{ opacity: 0.7 }}>
                      {tier.note}
                    </div>
                  </div>

                  <ul className="rg-benefits">
                    {tier.benefits.map((b, bi) => (
                      <li
                        key={b}
                        className="rg-reveal"
                        style={{ "--i": bi + 1 } as React.CSSProperties}
                      >
                        · {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* The tax-deductibility line that used to sit here is gone: the exact
          wording is unconfirmed. What replaces it is a staging notice, because
          the tier names, amounts and benefits above are placeholders too and
          this page is read by companies deciding whether to fund the team. */}
      <p className="rg-foot rg-util rg-draft">
        [placeholder tier structure &mdash; amounts and benefits are not final]
      </p>
    </section>
  );
}
