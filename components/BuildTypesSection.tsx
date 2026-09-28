import Image from "next/image";
import { Robot, Code, Trophy } from "@phosphor-icons/react/dist/ssr";
import constellation from "@/public/images/constellation.png";
import modules from "@/public/images/modules.png";
import gyroscope from "@/public/images/gyroscope.png";

const SMALL_CELLS = [
  {
    icon: Robot,
    title: "Robotics and automation",
    body: "Arms, grippers and control loops.",
  },
  {
    icon: Code,
    title: "Software and AI",
    body: "Vision, data pipelines and tooling.",
  },
  {
    icon: Trophy,
    title: "Competitions",
    body: "Team briefs for robotics contests and hackathons.",
  },
];

export default function BuildTypesSection() {
  return (
    <section id="build" className="relative dot-grid">
      <div className="section-glow" />
      <div className="relative mx-auto max-w-[1200px] px-8">
        <h2 className="reveal max-w-[820px]">
          Every kind of engineering project, <span className="text-mut">in one place.</span>
        </h2>
        <p className="reveal">
          From a first circuit to a working robot, post it here and find people who have built it
          before.
        </p>

        <div className="bento">
          <div className="card reveal tile-top bento-3 bento-row-2 relative">
            <h3 className="text-[1.7rem]">Electronics and hardware</h3>
            <p className="text-[1.1rem]">
              PCB design, power systems, sensors and prototypes, reviewed by engineers who ship
              hardware.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {["PCB design", "Power", "Sensors", "Prototypes"].map((t) => (
                <span key={t} className="tag-chip">
                  {t}
                </span>
              ))}
            </div>
            <Image
              src={constellation}
              alt="Exploded view of a chip, wafer, amber core and turbine"
              className="bento-image left-[12%] bottom-[-6%] w-3/4"
            />
          </div>

          <div className="card reveal tile-top bento-3 relative [&>*]:max-w-[46%]">
            <h3 className="text-[1.7rem]">Embedded and IoT</h3>
            <p className="text-[1.1rem]">Firmware, connectivity and edge devices, from one board to a fleet.</p>
            <Image
              src={modules}
              alt="Glass hardware modules"
              className="bento-image right-[-3%] bottom-[-16%] w-[54%] max-w-none"
            />
          </div>

          <div className="card reveal tile-top bento-3 relative [&>*]:max-w-[46%]">
            <h3 className="text-[1.7rem]">Mechanical design</h3>
            <p className="text-[1.1rem]">CAD, tolerances and motion systems for parts that have to move.</p>
            <Image
              src={gyroscope}
              alt="Glass gyroscope"
              className="bento-image right-[2%] bottom-[-18%] w-[44%] max-w-none"
            />
          </div>

          {SMALL_CELLS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card reveal bento-2">
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
