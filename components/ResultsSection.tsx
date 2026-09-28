import Image from "next/image";
import gripperCube from "@/public/images/gripper-cube.png";

export default function ResultsSection() {
  return (
    <section id="results" className="relative dot-grid">
      <div className="section-glow" />
      <div className="relative mx-auto max-w-[1200px] px-8">
        <h2 className="reveal max-w-[820px]">
          Built to get projects <span className="text-mut">over the line.</span>
        </h2>

        <div className="bento">
          <div className="card reveal tile-top bento-3 bento-row-2 relative [&>*]:max-w-[56%]">
            <h3>From stalled to shipped</h3>
            <p>
              Half-built projects are our specialty. We audit, split the work and put specialists
              on the parts that are stuck.
            </p>
            <div className="text-inset-soft mt-7 text-[clamp(3rem,6vw,5rem)] font-semibold leading-none tracking-[-0.05em] text-ink">
              1,900+
            </div>
            <p>half-built projects finished</p>
            <Image
              src={gripperCube}
              alt="Glass robotic gripper holding an amber cube"
              className="bento-image right-[-16%] bottom-[-8%] w-[64%] max-w-none"
            />
          </div>

          <div className="card reveal tile-between bento-3">
            <div className="text-inset-soft text-[clamp(3rem,6vw,5rem)] font-semibold leading-none tracking-[-0.05em] text-ink">
              48 hrs
            </div>
            <p>Typical time from posting a brief to a scoped plan.</p>
          </div>

          <div className="card reveal tile-between bento-3">
            <div className="text-inset-soft text-[clamp(3rem,6vw,5rem)] font-semibold leading-none tracking-[-0.05em] text-ink">
              1 quote
            </div>
            <p>Every project gets its own quote, broken down by milestone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
