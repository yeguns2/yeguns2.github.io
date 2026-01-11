import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Footer from "./components/Footer.jsx";
import { projects } from "./data/projects.js";

const skills = [
  "SystemVerilog",
  "AXI4-Lite",
  "AXI4-Full",
  "MicroBlaze SoC",
  "DDR + BRAM buffering",
  "C/C++ (bare-metal)",
  "FPGA acceleration",
  "CNN inference",
  "Vivado",
  "HW/SW co-design",
];

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />

      <main className="main">
        <Section
          id="projects"
          title="Featured Projects"
          subtitle="Individual work—focused on real hardware, measurable performance, and clean system integration."
        >
          <div className="projectGrid">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="A quick snapshot of the domains and tools I’ve been building with.">
          <div className="skillGrid" role="list">
            {skills.map((s) => (
              <span key={s} className="skillPill" role="listitem">
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section id="team" title="Team Projects" subtitle="Coming soon—collaborative projects with clearly scoped personal contributions.">
          <div className="emptyCard">
            <div className="emptyTitle">Coming soon</div>
            <p className="emptyText">
              I’ll add team-based work here (e.g., student org projects), with a clear breakdown of what I personally designed and shipped.
            </p>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
