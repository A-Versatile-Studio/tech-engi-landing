const STATS = [
  { value: 12000, suffix: "+", label: "Engineers on the platform" },
  { value: 3400, suffix: "+", label: "Projects delivered" },
  { value: 1900, suffix: "+", label: "Half-built projects finished" },
  { value: 240, suffix: "+", label: "Student competition teams" },
];

export default function StatsBar() {
  return (
    <div className="mx-auto max-w-[1200px] px-8">
      <div className="mt-[72px] grid grid-cols-2 gap-7 rounded-4xl border border-line bg-white p-11 px-4 shadow-panel md:grid-cols-4 md:gap-0">
        {STATS.map((s, i) => (
          <div key={s.label} className={`px-8 ${i > 0 ? "md:border-l md:border-line" : ""}`}>
            <b
              data-count={s.value}
              data-suffix={s.suffix}
              className="text-inset-soft block text-[clamp(2.2rem,4vw,3.3rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-ink"
            >
              0
            </b>
            {s.label}
          </div>
        ))}
      </div>
    </div>
  );
}
