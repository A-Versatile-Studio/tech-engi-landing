import Image from "next/image";
import gyroscope from "@/public/images/gyroscope.png";

export default function CtaSection() {
  return (
    <section className="pt-10">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="reveal relative overflow-hidden rounded-6xl border border-line bg-white/50 p-20 backdrop-blur-lg">
          <div className="relative z-[2] max-w-[560px]">
            <h2>
              Your next project <span className="text-mut">starts here.</span>
            </h2>
            <p>Post a brief, pick up a half-built project or find your competition team.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#top" className="btn">
                Start a project
              </a>
              <a href="#who" className="btn-outline">
                Explore the platform
              </a>
            </div>
          </div>
          <Image
            src={gyroscope}
            alt=""
            width={400}
            height={400}
            className="pointer-events-none absolute right-[-20px] top-1/2 hidden w-[min(42%,400px)] -translate-y-1/2 md:block"
          />
        </div>
      </div>
    </section>
  );
}
