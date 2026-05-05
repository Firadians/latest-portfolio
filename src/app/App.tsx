import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { BuilderSection } from "./components/builder-section";
import { CaseStudiesSection } from "./components/case-studies-section";
import { ProjectsSection } from "./components/projects-section";
import { WorkProcessSection } from "./components/work-process-section";
import { WorkflowSection } from "./components/workflow-section";
import { TechStack } from "./components/tech-stack";
import { TimelineSection } from "./components/timeline-section";
import { CtaSection } from "./components/cta-section";
import { ContactSection } from "./components/contact-section";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="skills">
        <BuilderSection />
      </div>
      <div id="case-studies">
        <CaseStudiesSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="process">
        <WorkProcessSection />
      </div>
      <div id="workflow">
        <WorkflowSection />
      </div>
      <div id="tech-stack">
        <TechStack />
      </div>
      <div id="timeline">
        <TimelineSection />
      </div>
      <CtaSection />
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}