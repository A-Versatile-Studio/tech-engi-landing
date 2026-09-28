"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { FileText, ChartLineUp, UsersThree, Stack, CheckCircle } from "@phosphor-icons/react";
import { gsap, ScrollTrigger } from "@/components/gsapClient";

type Row = { label: string; value: string } | { bar: true };

const STEPS: {
  icon: typeof FileText;
  title: string;
  body: string;
  tint: string;
  rows: Row[];
}[] = [
  {
    icon: FileText,
    title: "Post your brief",
    body: "Describe the project or upload what you already have. Start from scratch or from a half-built one.",
    tint: "rgba(110,168,255,.42)",
    rows: [
      { label: "Project", value: "Robotic arm" },
      { label: "Stage", value: "Half built" },
      { label: "Files", value: "3 uploaded" },
    ],
  },
  {
    icon: ChartLineUp,
    title: "Get scoped and quoted",
    body: "We break the work into milestones and send a custom quote based on scope and skills.",
    tint: "rgba(150,140,250,.4)",
    rows: [
      { label: "Milestone 1", value: "Requirements" },
      { label: "Milestone 2", value: "Prototype" },
      { label: "Quote", value: "Ready" },
    ],
  },
  {
    icon: UsersThree,
    title: "Meet your engineers",
    body: "Matches are picked by skill and past work. You approve the team before anything starts.",
    tint: "rgba(210,140,240,.38)",
    rows: [
      { label: "Match score", value: "96%" },
      { label: "Mechanical", value: "Verified" },
      { label: "Embedded", value: "Verified" },
    ],
  },
  {
    icon: Stack,
    title: "Build in one workspace",
    body: "Files, chat and tasks stay together while progress updates live for everyone.",
    tint: "rgba(245,150,170,.36)",
    rows: [
      { label: "Tasks", value: "12 of 18 done" },
      { bar: true },
      { label: "Latest", value: "CAD v3 uploaded" },
    ],
  },
  {
    icon: CheckCircle,
    title: "Review and ship",
    body: "Approve each milestone. Payment is released and the finished files are yours.",
    tint: "rgba(245,175,110,.42)",
    rows: [
      { label: "Milestone 3", value: "Approved" },
      { label: "Payment", value: "Released" },
      { label: "Delivery", value: "Complete" },
    ],
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const bar = progressRef.current;
    if (!section || !track || !bar) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", () => {
      const distance = () => track.scrollWidth - window.innerWidth + window.innerWidth * 0.06;

      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + distance(),
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + distance(),
            scrub: true,
          },
        }
      );

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="how" ref={sectionRef} className="overflow-hidden pt-[72px] pb-12">
      <div className="mx-auto max-w-[1200px] px-8">
        <h2 className="text-[clamp(2rem,3.4vw,2.8rem)]">
          From brief to shipped, <span className="text-mut">step by step.</span>
        </h2>
        <p>Scroll to follow a project through all five stages.</p>
      </div>

      <div className="mt-9 overflow-x-auto pb-3 [scroll-snap-type:x_mandatory] md:overflow-hidden">
        <div ref={trackRef} className="process-track">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="process-card [scroll-snap-align:center]"
                style={{ "--tint": step.tint } as CSSProperties}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="icon-tile mb-0 h-12 w-12">
                    <Icon size={22} weight="regular" color="#4F6BEA" />
                  </span>
                  <span className="text-sm text-mut">Step {i + 1} of 5</span>
                </div>
                <div className="text-inset text-[3.8rem] font-semibold leading-none tracking-[-0.05em] text-[#AEBCEB]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-[1.6rem]">{step.title}</h3>
                <p>{step.body}</p>
                <div className="mock-panel mt-[22px] bg-white/72 backdrop-blur-md">
                  {step.rows.map((row, ri) =>
                    "bar" in row ? (
                      <div key={ri} className="progress-bar">
                        <b style={{ width: "66%" }} />
                      </div>
                    ) : (
                      <div key={row.label} className="mock-row">
                        <span>{row.label}</span>
                        <b className="pill-value">{row.value}</b>
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1200px] px-8 md:block">
        <div className="mt-9 h-[3px] overflow-hidden rounded-[3px] bg-line">
          <b ref={progressRef} className="block h-full origin-left bg-accent" />
        </div>
      </div>
    </section>
  );
}
