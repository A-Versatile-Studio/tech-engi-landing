import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import AudienceSection from "@/components/AudienceSection";
import SplitFeature from "@/components/SplitFeature";
import StudentsSection from "@/components/StudentsSection";
import BuildTypesSection from "@/components/BuildTypesSection";
import ProcessSection from "@/components/ProcessSection";
import FeaturesTabs from "@/components/FeaturesTabs";
import WorkspaceSection from "@/components/WorkspaceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResultsSection from "@/components/ResultsSection";
import LeadsSection from "@/components/LeadsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

import gyroscope from "@/public/images/gyroscope.png";
import constellation from "@/public/images/constellation.png";
import modules from "@/public/images/modules.png";

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        <Hero />
        <StatsBar />
        <AudienceSection />

        <SplitFeature
          image={gyroscope}
          alt="Glass gyroscope holding an amber core"
          heading="Starting from nothing?"
          highlight="Hand us the brief."
          body="Describe what you need in plain language. We turn it into a scoped plan and put the right engineers on it, from first sketch to final delivery."
          points={[
            "A written plan with milestones and a fixed price",
            "Engineers matched by discipline, not keywords",
            "Pay per milestone, released when you approve the work",
          ]}
        />

        <SplitFeature
          image={constellation}
          alt="Exploded view of a device: chip, wafer, amber core and turbine"
          heading="Stalled halfway?"
          highlight="We reassemble it."
          body="Upload what you have: CAD files, code, schematics, notes. Engineers audit it, list what's left and split the remaining work into clear pieces."
          points={[
            "An audit of what's done, what's broken and what's missing",
            "Specialists join only for the parts you need",
            "One shared workspace, so nothing is lost in the handover",
          ]}
          reverse
          rotateOnScroll
        />

        <SplitFeature
          image={modules}
          alt="Three glass hardware modules: a circuit cube, a turbine and a stacked server"
          heading="Building your own thing?"
          highlight="Bring in a second pair of hands."
          body="Post the unfinished project, name the parts you're stuck on and invite collaborators. Credit and pay are agreed before anyone starts."
          points={[
            "Post the gap, not the whole project",
            "Split ownership and revenue in writing",
            "Review each other's work without leaving the app",
          ]}
        />

        <StudentsSection />
        <BuildTypesSection />
        <ProcessSection />
        <FeaturesTabs />
        <WorkspaceSection />
        <TestimonialsSection />
        <ResultsSection />
        <LeadsSection />
        <FaqSection />
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
