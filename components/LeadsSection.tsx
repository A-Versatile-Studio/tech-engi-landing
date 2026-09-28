import { Briefcase, Key } from "@phosphor-icons/react/dist/ssr";

const LEADS = [
  { title: "Autonomous rover chassis", meta: "Mechanical · From scratch", locked: false },
  { title: "Firmware for a BLE sensor hub", meta: "Embedded · Half built", locked: false },
  { title: "Robotic arm for a capstone team", meta: "Student project · Competition", locked: false },
  { title: "PCB redesign for a motor driver", meta: "Electronics · Half built", locked: true },
  { title: "Vision system for a sorting line", meta: "Software · From scratch", locked: true },
];

export default function LeadsSection() {
  return (
    <section id="leads" className="relative dot-grid">
      <div className="section-glow" />
      <div className="relative mx-auto max-w-[1200px] px-8">
        <h2 className="reveal max-w-[820px]">
          Subscribed engineers <span className="text-mut">get the full leads panel.</span>
        </h2>
        <p className="reveal">
          Every client project is different, so each one is quoted on its own. Engineers on a
          subscription see every open lead and can respond to the ones that fit.
        </p>

        <div className="bento">
          <div className="card reveal relative bento-4 bento-row-2 !justify-start overflow-hidden !p-0">
            <div className="flex items-center justify-between border-b border-line px-7 py-5 text-ink">
              <b>Leads panel</b>
              <span className="text-sm text-mut">All · New · Saved</span>
            </div>
            {LEADS.map((lead) => (
              <div
                key={lead.title}
                className={`flex items-center justify-between gap-4 border-b border-line px-7 py-5 last:border-0 ${
                  lead.locked ? "select-none opacity-55 blur-[4px]" : ""
                }`}
              >
                <div>
                  <b className="block font-medium text-ink">{lead.title}</b>
                  <small className="text-mut">{lead.meta}</small>
                </div>
                <em className="rounded-full bg-[#6EA8FF]/18 px-3 py-1 text-[0.8rem] not-italic text-accent-2">
                  Open
                </em>
              </div>
            ))}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-nav px-[22px] py-3 font-medium text-white shadow-btn">
              Full panel with a subscription
            </div>
          </div>

          <div className="card reveal bento-2">
            <span className="icon-tile">
              <Briefcase size={26} weight="regular" color="#4F6BEA" />
            </span>
            <h3>Clients get a custom quote</h3>
            <p>Post your brief and get a quote based on scope, skills and timeline.</p>
            <a href="#top" className="btn-outline mt-6 inline-flex">
              Request a quote
            </a>
          </div>

          <div className="card reveal bento-2">
            <span className="icon-tile">
              <Key size={26} weight="regular" color="#4F6BEA" />
            </span>
            <h3>Engineers subscribe for full access</h3>
            <p>Unlock every lead, filter by skill and respond before the project is filled.</p>
            <a href="#top" className="btn mt-6 inline-flex">
              Subscribe for leads
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
