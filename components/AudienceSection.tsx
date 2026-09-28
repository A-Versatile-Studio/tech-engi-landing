import { SquaresFour, Briefcase, GraduationCap } from "@phosphor-icons/react/dist/ssr";

const AUDIENCE = [
  {
    icon: SquaresFour,
    title: "Engineers",
    body: "Find projects that match your skills. Take paid work, join a team, or finish your own build with a partner.",
  },
  {
    icon: Briefcase,
    title: "Clients",
    body: "Bring an idea or a half-built prototype. Tech Engi scopes it, matches engineers and tracks every milestone.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    body: "Get mentors, teammates and real briefs for coursework, capstones and competitions.",
  },
];

export default function AudienceSection() {
  return (
    <section id="who" className="relative dot-grid pt-[104px]">
      <div className="section-glow" />
      <div className="relative mx-auto max-w-[1200px] px-8">
        <h2 className="reveal max-w-[820px]">
          Whether you build, hire or learn, <span className="text-mut">there&apos;s a project waiting.</span>
        </h2>

        <div className="mt-[60px] grid gap-6 md:grid-cols-3">
          {AUDIENCE.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card reveal">
              <span className="icon-tile">
                <Icon size={26} weight="regular" color="#4F6BEA" />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
