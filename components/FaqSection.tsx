const FAQS = [
  {
    q: "Can I bring a project that's already half built?",
    a: "Yes. Upload your files and notes, and engineers will audit the work and list what's left before anyone is hired.",
  },
  {
    q: "How are engineers vetted?",
    a: "Every engineer submits a portfolio and completes a skill review before they can accept paid work.",
  },
  {
    q: "How do payments work?",
    a: "You fund each milestone up front. The money is held and released to the engineer when you approve the delivery.",
  },
  {
    q: "Who owns the finished work?",
    a: "You do, unless a collaboration agreement says otherwise. IP and NDA templates are built into every project.",
  },
  {
    q: "Is Tech Engi free for students?",
    a: "Yes. Students can post projects, find teammates and join competitions at no cost.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="relative dot-grid">
      <div className="section-glow" />
      <div className="relative mx-auto max-w-[820px] px-8">
        <h2 className="reveal">Questions, answered.</h2>
        <div className="reveal">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group border-b border-line py-[26px] [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none justify-between gap-5 text-[1.15rem] font-medium text-ink after:content-['+'] after:text-mut group-open:after:content-['–'] hover:text-accent">
                {item.q}
              </summary>
              <p className="mt-3 max-w-[640px]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
