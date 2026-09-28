"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/components/gsapClient";
import HeroTiles from "@/components/HeroTiles";

type View = {
  line1: string;
  line2: string;
  sub: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

const VIEWS: Record<"client" | "engineer", View> = {
  client: {
    line1: "Get projects built.",
    line2: "Get projects finished.",
    sub: "Tech Engi brings clients, engineers and students into one workspace. Start a project from zero, or hand over one that stalled halfway.",
    primary: { label: "Start a project", href: "#leads" },
    secondary: { label: "Find engineering work", href: "#who" },
  },
  engineer: {
    line1: "Get work that fits.",
    line2: "Finish what you started.",
    sub: "Find leads that match your skills, join a team, or bring in a partner to finish your own unfinished build.",
    primary: { label: "Browse leads", href: "#leads" },
    secondary: { label: "See how it works", href: "#how" },
  },
};

export default function Hero() {
  // Engineer view is the default per product decision.
  const [view, setView] = useState<"client" | "engineer">("engineer");
  const rootRef = useRef<HTMLDivElement>(null);
  const introRan = useRef(false);
  const v = VIEWS[view];

  // One-time entrance animation for the headline, toggle and CTAs.
  useEffect(() => {
    if (introRan.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    introRan.current = true;
    const root = rootRef.current;
    if (!root) return;

    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from(root.querySelectorAll(".line-mask span"), {
        yPercent: 110,
        duration: 0.9,
        stagger: 0.12,
      })
      .from(
        root.querySelectorAll(".view-switch"),
        { scale: 0, rotate: -25, duration: 0.6, ease: "back.out(2)" },
        "<0.4"
      )
      .from(
        root.querySelectorAll(".hero-sub, .hero-cta"),
        { y: 20, opacity: 0, stagger: 0.1, duration: 0.7 },
        "<0.2"
      );
  }, []);

  // Fade/swap animation whenever the client/engineer view changes.
  const toggle = () => {
    const root = rootRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const next = view === "client" ? "engineer" : "client";

    if (!root || reduced) {
      setView(next);
      return;
    }

    const targets = root.querySelectorAll(".line-text, .hero-sub, .hero-cta");
    gsap
      .timeline()
      .to(targets, { y: -14, opacity: 0, duration: 0.2, stagger: 0.03 })
      .add(() => setView(next))
      .fromTo(
        targets,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power3.out" }
      );
  };

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[max(820px,calc(100svh-76px))] flex-col justify-between overflow-hidden pt-[88px]"
    >
      {/* Gradient glow: kept bold and reaching down to the middle of the hero, per design direction */}
      <div
        className="pointer-events-none absolute inset-x-[-8%] top-[-10%] h-[55%] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(38% 65% at 14% 22%, rgba(110,168,255,.5), transparent 72%), radial-gradient(34% 60% at 58% 6%, rgba(185,140,246,.44), transparent 72%), radial-gradient(30% 60% at 96% 26%, rgba(245,162,107,.42), transparent 72%)",
        }}
      />
      {/* Faint vertical rule pattern, echoes the reference's grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 calc(8.333% - 1px), rgba(15,27,61,.05) calc(8.333% - 1px) 8.333%)",
          WebkitMaskImage: "linear-gradient(#000, transparent 65%)",
          maskImage: "linear-gradient(#000, transparent 65%)",
        }}
      />

      <div className="relative z-[2] mx-auto w-full max-w-none px-5 sm:px-8" style={{ paddingInline: "clamp(20px,5vw,80px)" }}>
        <div className="max-w-[920px]">
          <h1 className="text-[clamp(2.5rem,5.4vw,4.5rem)]">
            <b className="line-mask block overflow-hidden pb-[0.08em]">
              <span className="line-text inline-block">
                <em className="text-inset not-italic text-ink">{v.line1}</em>
                <button
                  type="button"
                  role="switch"
                  aria-checked={view === "engineer"}
                  aria-label="Switch between client and engineer view"
                  onClick={toggle}
                  className="view-switch ml-2 align-middle"
                >
                  <span>Client</span>
                  <span>Engineer</span>
                  <i className="knob" />
                </button>
              </span>
            </b>
            <b className="line-mask block overflow-hidden pb-[0.08em]">
              <span className="line-text text-inset inline-block text-mut">{v.line2}</span>
            </b>
          </h1>

          <p className="hero-sub mt-7 max-w-[520px] text-[1.15rem]">{v.sub}</p>

          <div className="hero-cta mt-8 flex flex-wrap gap-3">
            <a href={v.primary.href} className="btn">
              {v.primary.label}
            </a>
            <a href={v.secondary.href} className="btn-outline">
              {v.secondary.label}
            </a>
          </div>
        </div>
      </div>

      <HeroTiles />
    </section>
  );
}
