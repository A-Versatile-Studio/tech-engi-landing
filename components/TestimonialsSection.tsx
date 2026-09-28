const TESTIMONIALS = [
  {
    quote:
      "Our prototype sat untouched for five months. Two engineers finished the firmware in three weeks.",
    initial: "N",
    name: "Nadia R.",
    role: "Hardware startup founder",
  },
  {
    quote: "I posted the part of my drone build I couldn't solve and had a collaborator by the weekend.",
    initial: "I",
    name: "Imran S.",
    role: "Mechatronics engineer",
  },
  {
    quote: "Our capstone team got a mentor and a competition brief. We placed second.",
    initial: "P",
    name: "Priya M.",
    role: "Final-year student",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="tst" className="relative dot-grid">
      <div className="section-glow" />
      <div className="relative mx-auto max-w-[1200px] px-8">
        <h2 className="reveal max-w-[820px]">
          People who finished <span className="text-mut">what they started.</span>
        </h2>

        <div className="mt-[60px] grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="card reveal flex flex-col">
              <p className="mb-5 flex-1 text-[1.15rem] leading-[1.55] text-ink">{t.quote}</p>
              <div className="flex items-center gap-3.5">
                <i className="grid h-11 w-11 flex-none place-items-center rounded-full bg-accent font-semibold not-italic text-white">
                  {t.initial}
                </i>
                <div>
                  <b className="text-ink">{t.name}</b>
                  <p className="text-[0.9rem] leading-[1.3]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
