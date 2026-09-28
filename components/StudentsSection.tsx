const TAGS = [
  "Capstone projects",
  "Robotics contests",
  "Hackathons",
  "Science fairs",
  "Design challenges",
  "Research papers",
];

const POINTS = [
  "Mentor sessions with working engineers",
  "Team formation across campuses",
  "Deadline tracking built for competitions",
  "Portfolio-ready project pages",
];

export default function StudentsSection() {
  return (
    <section>
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="reveal rounded-6xl border border-line bg-[#EEF2FB] p-20">
          <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <h2>
                Students: ship the project, <span className="text-mut">win the competition.</span>
              </h2>
              <p>
                Real briefs, experienced mentors and teammates from other universities, for the
                work that goes on your portfolio.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {TAGS.map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ul className="grid list-none gap-5 p-0 text-ink">
              {POINTS.map((pt) => (
                <li key={pt} className="flex items-center">
                  <span className="mr-3 inline-block h-2.5 w-2.5 flex-none rounded-[3px] bg-accent" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
